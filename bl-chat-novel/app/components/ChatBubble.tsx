import type { Message } from '../lib/types';

interface Props {
  message: Message;
}

export default function ChatBubble({ message }: Props) {
  if (message.speaker === 'narrator') {
    return (
      <div className="text-center py-1">
        <p
          className="italic leading-relaxed inline-block"
          style={{ color: '#7b778a', fontSize: '13px' }}
        >
          {message.text.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < message.text.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    );
  }

  if (message.speaker === 'other') {
    return (
      <div className="flex items-end gap-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mb-1"
          style={{ backgroundColor: '#2a3a5a' }}
        >
          <span style={{ color: '#8ab0d8', fontSize: '13px', fontWeight: 600 }}>蒼</span>
        </div>
        <div className="flex flex-col gap-0.5 max-w-[75%]">
          <span style={{ color: '#6b85a8', fontSize: '11px', marginLeft: '4px' }}>
            {message.characterName ?? '木下 蒼'}
          </span>
          <div
            className="rounded-2xl rounded-tl-sm px-4 py-3"
            style={{ backgroundColor: '#1a2a3d', border: '1px solid #2a3a5a' }}
          >
            <p className="leading-relaxed" style={{ color: '#dde8f0', fontSize: '14px' }}>
              {message.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // player — inner thoughts use （）notation
  const isThought = message.text.startsWith('（');

  if (isThought) {
    return (
      <div className="flex justify-end">
        <p
          className="italic leading-relaxed text-right max-w-[78%]"
          style={{ color: '#7a8a78', fontSize: '13px' }}
        >
          {message.text}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <div
        className="rounded-2xl rounded-tr-sm px-4 py-3 max-w-[75%]"
        style={{ backgroundColor: '#1e3430', border: '1px solid #2e4e40' }}
      >
        <p className="leading-relaxed" style={{ color: '#c8e0c0', fontSize: '14px' }}>
          {message.text}
        </p>
      </div>
    </div>
  );
}
