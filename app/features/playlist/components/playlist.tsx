import { useNavigate } from 'react-router';
import { Card, CardContent } from '~/common/components/ui/card';
import type { Playlist, PlaylistTrack } from '~/common/types/playlist';

interface PlaylistProps {
  playlistTracks: PlaylistTrack[];
}

export default function Playlist({ playlistTracks }: PlaylistProps) {
  const navigate = useNavigate();

  const handleClick = (trackId: number) => {
    navigate(`/watch/${trackId}`);
  };

  return (
    <div className="flex flex-col gap-2.5">
      {playlistTracks.map(track => (
        <Card
          key={track.trackId}
          onClick={() => handleClick(track.trackId)}
          className="cursor-pointer hover:bg-gray-100 transition p-3"
        >
          <CardContent className="px-2">
            <p className="text-sm font-semibold">{track.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
