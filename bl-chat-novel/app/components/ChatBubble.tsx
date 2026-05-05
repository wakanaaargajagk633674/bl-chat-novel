import type { Message } from '../lib/types';
import CharacterAvatar from './CharacterAvatar';

interface Props {
  message: Message;
}

export default function ChatBubble({ message }: Props) {
  if (message.speaker === 'narrator') {
    const lines = message.text.split('\n');

    return (
      <div className="text-center py-1 px-2">
        <p
          className="italic leading-relaxed inline-block"
          style={{ color: '#7b778a', fontSize: '13px' }}
        >
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    );
  }

  if (message.speaker === 'other') {
    const displayName = message.characterName ?? '木下 蒼';

    return (
      <div className="flex items-end gap-2">
        <div className="mb-1">
          <CharacterAvatar name={displayName} size={36} />
        </div>
        <div className="flex flex-col gap-0.5" style={{ maxWidth: 'calc(100% - 56px)' }}>
          <span style={{ color: '#6b85a8', fontSize: '11px', marginLeft: '4px' }}>
            {displayName}
          </span>
          <div
            className="rounded-2xl rounded-tl-sm px-4 py-3"
            style={{ backgroundColor: '#1a2a3d', border: '1px solid #2a3a5a' }}
          >
            <p
              className="leading-relaxed"
              style={{ color: '#dde8f0', fontSize: '14px', lineHeight: '1.75' }}
            >
              {message.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const isThought = message.text.startsWith('（');

  if (isThought) {
    return (
      <div className="flex justify-end">
        <p
          className="italic leading-relaxed text-right"
          style={{ color: '#7a8a78', fontSize: '13px', maxWidth: '78%' }}
        >
          {message.text}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <div
        className="rounded-2xl rounded-tr-sm px-4 py-3"
        style={{
          backgroundColor: '#1e3430',
          border: '1px solid #2e4e40',
          maxWidth: '75%',
        }}
      >
        <p
          className="leading-relaxed"
          style={{ color: '#c8e0c0', fontSize: '14px', lineHeight: '1.75' }}
        >
          {message.text}
        </p>
      </div>
    </div>
  );
}
