import { useEffect, useRef } from 'react';
import type { Track } from '~/common/types/track';

export default function useSpeechSynthesisPlayer({
  setIsPlaying,
  currentTrack,
}: {
  setIsPlaying: (v: boolean) => void;
  currentTrack: Track | null;
}) {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.speechSynthesis.cancel();
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

    if (utteranceRef.current) {
      resume();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(`${currentTrack?.title}\n${currentTrack?.content}` || '');
    utterance.lang = 'ko-KR';
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      utteranceRef.current = null;
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      utteranceRef.current = null;
    };

    if (utteranceRef.current) {
      window.speechSynthesis.cancel();
    }

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const resume = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
    }
  };

  const stop = () => {
    if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
      window.speechSynthesis.cancel();
      utteranceRef.current = null;
    }
    setIsPlaying(false);
  };

  return { play, pause, resume, stop };
}
