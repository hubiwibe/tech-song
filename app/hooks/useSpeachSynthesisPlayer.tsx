import { useEffect, useRef } from 'react';
import type { Track } from '~/common/types/track';

export default function useSpeechSynthesisPlayer({
  setIsPlaying,
  setIsPaused,
  currentTrack,
  playNext,
}: {
  setIsPlaying: (v: boolean) => void;
  setIsPaused: (v: boolean) => void;
  currentTrack: Track | null;
  playNext: () => void;
}) {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.speechSynthesis.cancel();
      utteranceRef.current = null;
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const play = () => {
    if (!window.speechSynthesis) {
      alert('이 브라우저는 Speech Synthesis를 지원하지 않습니다.');
      return;
    }

    if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
      window.speechSynthesis.cancel();
      utteranceRef.current = null;
    }

    const utterance = new SpeechSynthesisUtterance(`${currentTrack?.title}\n${currentTrack?.content}` || '');
    utterance.lang = 'ko-KR';
    utterance.onstart = () => {
      setIsPlaying(true);
    };
    utterance.onend = () => {
      stop();
      playNext();
    };
    utterance.onerror = () => {
      stop();
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    setIsPaused(true);
    setIsPlaying(false);
    window.speechSynthesis.pause();
  };

  const resume = () => {
    setIsPlaying(true);
    setIsPaused(false);
    window.speechSynthesis.resume();
  };

  const stop = () => {
    setIsPlaying(false);
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
  };

  return { play, pause, resume, stop };
}
