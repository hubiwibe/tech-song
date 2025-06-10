import { useEffect, useRef } from 'react';
import { usePlayerStore } from '~/common/store/player-store';
import { useNavigate } from 'react-router';

export default function AudioPlayer() {
  const navigate = useNavigate();
  const { currentTrack, playlistTracks, isPlaying, play, pause } = usePlayerStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => pause();
    const onLoadedData = () => play();
    const onPause = () => pause();
    const onEnded = () => {
      pause();

      if (!playlistTracks || !currentTrack) {
        return;
      }

      const currentIdx = playlistTracks.findIndex(t => t.trackId === currentTrack?.trackId);
      if (currentIdx === -1) {
        return;
      }
      const nextIdx = (currentIdx + 1) % playlistTracks.length;
      const nextTrack = playlistTracks[nextIdx];
      navigate(`/watch/${nextTrack.trackId}`, { replace: true });
    };
    const onError = () => pause();

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('loadeddata', onLoadedData);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('loadeddata', onLoadedData);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current || !currentTrack?.audioUrl) {
      return;
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.src = currentTrack.audioUrl;
    audioRef.current.load();
  }, [audioRef.current, currentTrack]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play().catch(error => {
        pause();
        alert('▶️ 버튼을 눌러 들으실 수 있어요');
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return <audio ref={audioRef} preload="metadata" autoPlay={false} />;
}
