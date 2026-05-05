'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getEpisode } from '../lib/episodes';
import { INITIAL_STATE, clearState, loadState, saveState } from '../lib/gameState';
import type { Choice, GameState, GameStats, Scene } from '../lib/types';
import ChatBubble from './ChatBubble';
import EpisodeCover from './EpisodeCover';
import StatsBar from './StatsBar';

function findScene(episodeId: string, sceneId: string): Scene | undefined {
  return getEpisode(episodeId)?.scenes.find((s) => s.id === sceneId);
}

export default function ChatNovel() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [msgIndex, setMsgIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = loadState();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- saved progress is restored after mount because localStorage is client-only.
    setState(saved);

    const scene =
      findScene(saved.episodeId, saved.currentSceneId) ??
      findScene(INITIAL_STATE.episodeId, INITIAL_STATE.currentSceneId);

    if (scene) {
      setCurrentScene(scene);
      setMsgIndex(0);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgIndex, currentScene]);

  const allMessagesShown = currentScene
    ? msgIndex >= currentScene.messages.length - 1
    : false;

  const handleNext = useCallback(() => {
    if (!currentScene) return;
    if (msgIndex < currentScene.messages.length - 1) {
      setMsgIndex((prev) => prev + 1);
    }
  }, [currentScene, msgIndex]);

  const goToScene = useCallback((sceneId: string, newState: GameState) => {
    const nextScene = findScene(newState.episodeId, sceneId);
    if (!nextScene) return;
    saveState(newState);
    setState(newState);
    setCurrentScene(nextScene);
    setMsgIndex(0);
  }, []);

  const handleChoice = useCallback(
    (choice: Choice) => {
      if (!currentScene) return;

      const newStats: GameStats = {
        affection: Math.min(100, state.stats.affection + (choice.effects.affection ?? 0)),
        trust: Math.min(100, state.stats.trust + (choice.effects.trust ?? 0)),
        disclosure: Math.min(100, state.stats.disclosure + (choice.effects.disclosure ?? 0)),
      };
      const newState: GameState = {
        ...state,
        currentSceneId: choice.nextSceneId,
        stats: newStats,
        madeChoices: { ...state.madeChoices, [currentScene.id]: choice.id },
      };
      goToScene(choice.nextSceneId, newState);
    },
    [currentScene, goToScene, state]
  );

  const handleContinue = useCallback(() => {
    if (!currentScene?.nextSceneId) return;
    const newState = { ...state, currentSceneId: currentScene.nextSceneId };
    goToScene(currentScene.nextSceneId, newState);
  }, [currentScene, goToScene, state]);

  const handleRestart = useCallback(() => {
    clearState();
    setState(INITIAL_STATE);
    const scene = findScene(INITIAL_STATE.episodeId, INITIAL_STATE.currentSceneId);
    if (scene) {
      setCurrentScene(scene);
      setMsgIndex(0);
    }
  }, []);

  useEffect(() => {
    if (currentScene?.isEnding && allMessagesShown && !state.completed) {
      const completedState = { ...state, completed: true };
      saveState(completedState);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- completion is persisted when the final message becomes visible.
      setState(completedState);
    }
  }, [allMessagesShown, currentScene, state]);

  if (!ready || !currentScene) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#0f0f1a' }}
      >
        <p style={{ color: '#7b778a' }}>読み込み中…</p>
      </div>
    );
  }

  const episode = getEpisode(state.episodeId);
  const visibleMessages = currentScene.messages.slice(0, msgIndex + 1);
  const isEndingVisible = currentScene.isEnding && allMessagesShown;
  const shouldShowCover = Boolean(episode?.coverImage && currentScene.id === episode.firstSceneId && msgIndex === 0);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#0f0f1a', maxWidth: '480px', margin: '0 auto' }}
    >
      <header
        className="fixed top-0 left-0 right-0 z-20"
        style={{ maxWidth: '480px', margin: '0 auto' }}
      >
        <div
          style={{
            backgroundColor: 'rgba(15,15,26,0.97)',
            borderBottom: '1px solid #1e1e35',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <Link
              href="/"
              style={{ color: '#6b6b9b', fontSize: '13px' }}
              className="hover:opacity-70 transition-opacity"
            >
              ← 戻る
            </Link>
            <span style={{ color: '#c8c4d8', fontSize: '13px' }}>
              {episode?.title ?? '第1話'}
            </span>
            <div style={{ width: '40px' }} />
          </div>
          <StatsBar stats={state.stats} />
        </div>
      </header>

      <main
        className="flex flex-col gap-4 px-4"
        style={{ paddingTop: '110px', paddingBottom: '120px' }}
      >
        {shouldShowCover && episode?.coverImage && (
          <EpisodeCover
            src={episode.coverImage}
            title={episode.title}
            subtitle={episode.subtitle}
          />
        )}

        {visibleMessages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}

        {isEndingVisible && (
          <EpisodeEndCard
            stats={state.stats}
            subtitle={episode?.subtitle ?? 'はじまりの花'}
            onRestart={handleRestart}
          />
        )}

        <div ref={messagesEndRef} />
      </main>

      {!isEndingVisible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-20"
          style={{ maxWidth: '480px', margin: '0 auto' }}
        >
          <div
            className="px-4 py-4"
            style={{
              backgroundColor: 'rgba(15,15,26,0.97)',
              borderTop: '1px solid #1e1e35',
              backdropFilter: 'blur(8px)',
            }}
          >
            {allMessagesShown ? (
              currentScene.choices ? (
                <div className="flex flex-col gap-2">
                  {currentScene.choices.map((choice) => (
                    <button
                      key={choice.id}
                      onClick={() => handleChoice(choice)}
                      className="w-full text-left px-4 py-3 rounded-xl transition-all active:scale-[0.98]"
                      style={{
                        backgroundColor: '#181830',
                        border: '1px solid #2e2e50',
                        color: '#d0cce8',
                        fontSize: '14px',
                        lineHeight: '1.6',
                      }}
                    >
                      {choice.text}
                    </button>
                  ))}
                </div>
              ) : currentScene.nextSceneId ? (
                <button
                  onClick={handleContinue}
                  className="w-full py-3 rounded-xl transition-all active:scale-[0.98]"
                  style={{
                    backgroundColor: '#1e1e38',
                    border: '1px solid #3a3a60',
                    color: '#b0a8d0',
                    fontSize: '14px',
                  }}
                >
                  続きを読む ▼
                </button>
              ) : null
            ) : (
              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl transition-all active:scale-[0.98]"
                style={{
                  backgroundColor: '#13132a',
                  border: '1px solid #2a2a45',
                  color: '#6b6b8b',
                  fontSize: '14px',
                }}
              >
                次へ ▼
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function EpisodeEndCard({
  stats,
  subtitle,
  onRestart,
}: {
  stats: GameStats;
  subtitle: string;
  onRestart: () => void;
}) {
  return (
    <div
      className="mt-6 p-6 rounded-2xl"
      style={{ backgroundColor: '#14142a', border: '1px solid #2a2a45' }}
    >
      <div
        className="text-center mb-1 tracking-widest"
        style={{ color: '#5a5a8a', fontSize: '11px' }}
      >
        ― 第1話 完 ―
      </div>
      <h2
        className="text-center mb-6"
        style={{ color: '#d8d4e8', fontSize: '17px', fontWeight: 400 }}
      >
        {subtitle}
      </h2>

      <div className="flex flex-col gap-4 mb-6">
        <StatResultRow label="親密度" value={stats.affection} color="#e8a0b0" bg="#3a2030" />
        <StatResultRow label="信頼度" value={stats.trust} color="#a0c8e8" bg="#1a2e40" />
        <StatResultRow label="自己開示度" value={stats.disclosure} color="#a0e8c0" bg="#1a3028" />
      </div>

      <div className="flex flex-col gap-2">
        <button
          disabled
          className="w-full py-3 rounded-xl"
          style={{
            backgroundColor: '#18182e',
            border: '1px solid #2a2a40',
            color: '#4a4a6a',
            fontSize: '14px',
            cursor: 'not-allowed',
          }}
        >
          第2話へ（近日公開）
        </button>
        <button
          onClick={onRestart}
          className="w-full py-2"
          style={{ color: '#6b6b9b', fontSize: '13px', textDecoration: 'underline' }}
        >
          最初からやり直す
        </button>
      </div>
    </div>
  );
}

function StatResultRow({
  label,
  value,
  color,
  bg,
}: {
  label: string;
  value: number;
  color: string;
  bg: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span style={{ color: '#8a87a0', fontSize: '13px' }}>{label}</span>
        <span style={{ color, fontSize: '13px' }}>{value}</span>
      </div>
      <div className="h-2 rounded-full" style={{ backgroundColor: bg }}>
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
