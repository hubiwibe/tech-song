import { useEffect, useRef } from 'react';
import { usePlayerStore } from '~/common/store/player-store';

export default function AudioPlayer() {
  const { currentTrack, isPlaying, setIsPlaying, playNext } = usePlayerStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      playNext();
    };
    const onError = () => {
      setIsPlaying(false);
    };
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, [setIsPlaying]);

  useEffect(() => {
    if (!audioRef.current || !currentTrack?.audioUrl) {
      return;
    }

    audioRef.current.src = currentTrack.audioUrl;
    audioRef.current.load();
    if (!isPlaying) {
      setIsPlaying(true);
    }
  }, [audioRef.current, currentTrack, setIsPlaying]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play().catch(error => {
        if (error.name === 'NotAllowedError') {
          console.warn('자동재생이 차단됐어요. 사용자 상호작용을 기다립니다.');
        } else {
          console.error('오디오 재생 중 에러:', error);
        }
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return <audio ref={audioRef} preload="metadata" />;
}
