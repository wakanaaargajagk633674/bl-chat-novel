import ChatNovel from '../../components/ChatNovel';

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id !== '1') {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ backgroundColor: '#0f0f1a' }}
      >
        <p style={{ color: '#7b778a', fontSize: '15px' }}>
          このエピソードはまだ公開されていません
        </p>
        <a href="/" style={{ color: '#6b6b9b', fontSize: '13px', textDecoration: 'underline' }}>
          トップへ戻る
        </a>
      </div>
    );
  }

  return <ChatNovel />;
}
