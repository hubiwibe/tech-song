import { Pause, Play, Repeat, Shuffle, StepBack, StepForward } from 'lucide-react';
import { Button } from '~/common/components/ui/button';
import { usePlayerStore } from '~/common/store/player-store';
import useSpeechSynthesisPlayer from '~/hooks/useSpeachSynthesisPlayer';

export default function PlayerController() {
  const { currentTrack, isPlaying, isPaused, setIsPlaying, setIsPaused, playPrev, playNext } = usePlayerStore();

  const { play, pause, resume, stop } = useSpeechSynthesisPlayer({ setIsPlaying, setIsPaused, currentTrack });

  const handleTogglePlay = () => {
    if (isPaused) {
      resume();
      return;
    }

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

  const handleShuffle = () => {
    alert('To be implemented');
  };

  const handleRepeat = () => {
    alert('To be implemented');
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-3 w-full">
        <Button className="cursor-pointer" variant="ghost" size="lg" onClick={handleShuffle}>
          <Shuffle className="size-5" />
        </Button>
        <Button className="cursor-pointer" variant="ghost" size="lg" onClick={handleStepBack}>
          <StepBack className="size-5" />
        </Button>
        <Button className="cursor-pointer" size="lg" onClick={handleTogglePlay}>
          {isPlaying ? <Pause className="size-7" /> : <Play className="size-7" />}
        </Button>
        <Button className="cursor-pointer" variant="ghost" size="lg" onClick={handleStepForward}>
          <StepForward className="size-5" />
        </Button>
        <Button className="cursor-pointer" variant="ghost" size="lg" onClick={handleRepeat}>
          <Repeat className="size-5" />
        </Button>
      </div>
    </div>
  );
}
