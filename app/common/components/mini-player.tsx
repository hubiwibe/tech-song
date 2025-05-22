import { Pause, Play, StepBack, StepForward } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { usePlayerStore } from '~/common/store/player-store';
import type { Track } from '~/common/types/track';
import useSpeechSynthesisPlayer from '~/hooks/useSpeachSynthesisPlayer';

export default function MiniPlayer() {
  const navigate = useNavigate();
  const { isPlaying, setIsPlaying, playNext, playPrev, currentTrack } = usePlayerStore();
  const { play, pause, stop } = useSpeechSynthesisPlayer({ setIsPlaying, currentTrack });

  useEffect(() => {
    if (currentTrack?.id) {
      play();
    }
  }, [currentTrack?.id]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleStepBack = () => {
    stop();
    playPrev();
  };

  const handleStepForward = () => {
    stop();
    playNext();
  };

  const handleOpenFullPlayer = () => {
    if (currentTrack?.id) navigate(`/watch/${currentTrack.id}`);
  };

  return (
    <section className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between max-w-xl mx-auto px-4 py-2">
        {/* 트랙 정보 */}
        <div className="flex-1 min-w-0 cursor-pointer text-sm font-semibold" onClick={handleOpenFullPlayer}>
          {currentTrack?.title || 'No Track'}
        </div>
        {/* 이전 버튼 */}
        <button
          className="ml-3 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
          onClick={handleStepBack}
          aria-label="이전 곡"
        >
          <StepBack size={24} />
        </button>
        {/* 재생/일시정지 버튼 */}
        <button
          className="ml-3 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
          onClick={handleTogglePlay}
          aria-label={isPlaying ? '일시정지' : '재생'}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        {/* 다음 버튼 */}
        <button
          className="ml-3 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
          onClick={handleStepForward}
          aria-label="다음 곡"
        >
          <StepForward size={24} />
        </button>
      </div>
    </section>
  );
}
