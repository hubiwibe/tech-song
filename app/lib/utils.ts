import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const tailwind500Colors = [
  '#ef4444', // 빨강
  '#f97316', // 주황
  '#eab308', // 노랑
  '#22c55e', // 초록
  '#3b82f6', // 파랑
  '#6366f1', // 남색
  '#a855f7', // 보라
];

export function getRandomColors(count: number) {
  // 결과 배열
  const result = [];
  // 색상 배열 복사
  const availableColors = [...tailwind500Colors];

  // 입력한 개수만큼 랜덤하게 선택
  for (let i = 0; i < Math.min(count, availableColors.length); i++) {
    // 남은 색상 중 랜덤 인덱스 선택
    const randomIndex = Math.floor(Math.random() * availableColors.length);
    // 결과에 추가
    result.push(availableColors[randomIndex]);
    // 중복 방지 위해 선택한 색상 제거
    availableColors.splice(randomIndex, 1);
  }
  return result;
}
