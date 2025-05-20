// features/player/MiniPlayer.tsx

import { Pause, Play } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function MiniPlayer() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenFullPlayer = () => {
    navigate(`/watch/123`);
  };

  return (
    <section className="fixed bottom-0 px-3 py-2 flex w-full max-w-xl">
      <div className="flex flex-col grow-1" onClick={handleOpenFullPlayer}>
        <span>title</span>
        <span>description</span>
      </div>
      <div className="flex items-center justify-center">{isPlaying ? <Pause /> : <Play />}</div>
    </section>
  );
}
