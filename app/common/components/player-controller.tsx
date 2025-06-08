import { Pause, Play, Repeat, Shuffle, StepBack, StepForward } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { usePlayerStore } from '~/common/store/player-store';

export default function PlayerController() {
  const navigate = useNavigate();
  const { isPlaying, play, pause, currentTrack, playlistTracks } = usePlayerStore();

  const handleTogglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleStepBack = () => {
    pause();

    const currentIdx = playlistTracks.findIndex(t => t.trackId === currentTrack?.trackId);
    if (currentIdx === -1) {
      return;
    }

    const prevIdx = (currentIdx - 1 + playlistTracks.length) % playlistTracks.length;
    const prevTrack = playlistTracks[prevIdx];
    navigate(`/watch/${prevTrack.trackId}`);
  };

  const handleStepForward = () => {
    pause();

    const currentIdx = playlistTracks.findIndex(t => t.trackId === currentTrack?.trackId);
    if (currentIdx === -1) {
      return;
    }

    const nextIdx = (currentIdx + 1) % playlistTracks.length;
    const nextTrack = playlistTracks[nextIdx];
    navigate(`/watch/${nextTrack.trackId}`);
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
        {/* <Button className="cursor-pointer" variant="ghost" size="lg" onClick={handleShuffle}>
          <Shuffle className="size-5" />
        </Button> */}
        <Button className="cursor-pointer" variant="ghost" size="lg" onClick={handleStepBack}>
          <StepBack className="size-5" />
        </Button>
        <Button className="cursor-pointer" size="lg" onClick={handleTogglePlay}>
          {isPlaying ? <Pause className="size-7" /> : <Play className="size-7" />}
        </Button>
        <Button className="cursor-pointer" variant="ghost" size="lg" onClick={handleStepForward}>
          <StepForward className="size-5" />
        </Button>
        {/* <Button className="cursor-pointer" variant="ghost" size="lg" onClick={handleRepeat}>
          <Repeat className="size-5" />
        </Button> */}
      </div>
    </div>
  );
}
