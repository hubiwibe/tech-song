import type { Route } from './+types/home-page';
import { BookHeadphones, Mail } from 'lucide-react';
import { Card, CardContent } from '~/common/components/ui/card';
import { useNavigate } from 'react-router';
import { getPlaylists } from '~/features/playlist/queries';
import { ShineBorder } from '~/common/components/magicui/shine-border';
import { tailwind500Colors } from '~/lib/utils';
import ContactButton from '../components/contact-button';
export function meta({}: Route.MetaArgs) {
  return [{ title: 'Tech song' }, { name: 'description', content: 'Tech song' }];
}

export const loader = async () => {
  const playlists = await getPlaylists();
  return { playlists };
};

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const { playlists } = loaderData;

  if (playlists.length === 0) {
    return <div>No playlists</div>;
  }

  const handleClick = (key: number) => {
    navigate(`/playlist/${key}`);
  };

  const handleContactClick = () => {
    const email = 'info.techsong@gmail.com';
    const subject = encodeURIComponent('Tech Song 문의');
    const mailtoUrl = `mailto:${email}?subject=${subject}`;
    window.open(mailtoUrl, '_self');
  };

  return (
    <section className="flex flex-col gap-4 px-4">
      <div className="bg-white pt-4 pb-3 px-4 relative flex justify-center items-center">
        <div className="flex items-center gap-2">
          <BookHeadphones size={28} className="text-gray-500" />
          <h1 className="font-extrabold text-3xl tracking-tight select-none cursor-default font-sans">
            <span className="text-gray-400">tech</span>
            <span className="text-gray-500">song</span>
          </h1>
        </div>
        <ContactButton  onClick={handleContactClick} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {playlists.map((playlist, idx) => (
            <Card
              key={playlist.id}
              className="cursor-pointer hover:bg-gray-50 relative overflow-hidden"
              onClick={() => handleClick(playlist.id)}
            >
              <ShineBorder shineColor={tailwind500Colors[idx % tailwind500Colors.length]} />
              <CardContent className="flex items-center gap-2 text-lg font-semibold text-gray-500">
                <span>{playlist.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
