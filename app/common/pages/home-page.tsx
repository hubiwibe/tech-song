import Playlist from '~/features/playlist/components/playlist';
import type { Route } from './+types/home';
import { usePlayerStore } from '~/common/store/player-store';
import { BookHeadphones } from 'lucide-react';
import { Card, CardContent } from '~/common/components/ui/card';
import { FaChrome, FaReact, FaSafari, FaJs } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Tech song' }, { name: 'description', content: 'Tech song' }];
}

function getPlatformInfo() {
  if (typeof navigator !== 'undefined') {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      return {
        icon: <FaChrome size={24} />,
        label: 'Browser',
      };
    }
    if (/iPad|iPhone|iPod/.test(ua)) {
      return {
        icon: <FaSafari size={24} />,
        label: 'Browser',
      };
    }
  }
  return {
    icon: <FaChrome size={24} />,
    label: 'Browser',
  };
}

// 카드 정보 배열
const cardList = [
  {
    key: 'browser',
    dynamic: true, // 플랫폼 감지 필요
  },
  {
    key: 'js',
    icon: <FaJs size={24} />,
    label: 'JavaScript',
  },
  {
    key: 'ts',
    icon: <BiLogoTypescript size={24} />,
    label: 'TypeScript',
  },
  {
    key: 'react',
    icon: <FaReact size={24} />,
    label: 'React',
  },
];

export default function HomePage() {
  return (
    <section className="flex flex-col gap-4 px-4">
      <div className="bg-white py-3 px-4 flex justify-center items-center gap-2">
        <BookHeadphones size={28} className="text-gray-500" />
        <h1 className="font-extrabold text-3xl tracking-tight select-none cursor-default font-sans">
          <span className="text-gray-400">tech</span>
          <span className="text-gray-500">song</span>
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {cardList.map(card => {
            if (card.dynamic) {
              const platform = getPlatformInfo();
              return (
                <Card key={card.key} className="cursor-pointer hover:bg-gray-50">
                  <CardContent className="flex items-center gap-2 text-lg font-semibold text-gray-500">
                    <div className="flex items-center justify-center">{platform.icon}</div>
                    <span>{platform.label}</span>
                  </CardContent>
                </Card>
              );
            }
            return (
              <Card key={card.key} className="cursor-pointer hover:bg-gray-50">
                <CardContent className="flex items-center gap-2 text-lg font-semibold text-gray-500">
                  <div className="flex items-center justify-center">{card.icon}</div>
                  <span>{card.label}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
