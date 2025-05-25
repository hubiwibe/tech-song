import FullPlayer from '~/common/components/full-player';
import { usePlayerStore } from '~/common/store/player-store';
import type { Route } from './+types/watch-page';
import { getPlaylistByTrackId } from '~/api/playlist';
import { useEffect } from 'react';

export const meta: Route.MetaFunction = ({ data }) => {
  return [{ title: `Playlist - ${data.playlist?.title ?? 'Not Found'}` }];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  if (!params.trackId) {
    return { playlist: null, track: null };
  }
  const playlist = await getPlaylistByTrackId(params.trackId);
  if (!playlist) {
    return { playlist: null, track: null };
  }
  const track = playlist.playlistTracks.find(track => track.id === params.trackId);
  if (!track) {
    return { playlist: null, track: null };
  }
  return { playlist, track };
};

export default function WatchPage({ loaderData }: Route.ComponentProps) {
  const { setCurrentTrack, setPlaylist, setIsFullPlayerOpen } = usePlayerStore();
  const { playlist, track } = loaderData;

  useEffect(() => {
    if (track && playlist) {
      setCurrentTrack(track);
      setPlaylist(playlist);
    }
  }, []);

  useEffect(() => {
    setIsFullPlayerOpen(true);

    return () => {
      setIsFullPlayerOpen(false);
    };
  }, []);

  return <FullPlayer />;
}
