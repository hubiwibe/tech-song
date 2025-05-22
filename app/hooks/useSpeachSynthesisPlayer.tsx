import { useRef } from 'react';
import type { Track } from '~/common/types/track';

export default function useSpeechSynthesisPlayer({
  setIsPlaying,
  currentTrack,
}: {
  setIsPlaying: (v: boolean) => void;
  currentTrack: Track | null;
}) {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const play = () => {
    if (!window.speechSynthesis) {
      alert('이 브라우저는 Speech Synthesis를 지원하지 않습니다.');
      return;
    }

    // FIXME: 음성 재생 중 일시정지 버튼 누른 다음 이전 또는 다음 누를 시 음성 재생이 중단되는 버그 해결 필요
    // if (window.speechSynthesis.paused) {
    //   window.speechSynthesis.resume();
    //   setIsPlaying(true);
    //   return;
    // }

    const utterance = new SpeechSynthesisUtterance(currentTrack?.content || '');
    utterance.lang = 'ko-KR';
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

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

  const stop = () => {
    try {
      if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {
      console.error('SpeechSynthesis cancel error:', e);
    }
    setIsPlaying(false);
  };

  return { play, pause, stop };
}
