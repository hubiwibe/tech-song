import FullPlayer from '~/common/components/full-player';
import { usePlayerStore } from '~/common/store/player-store';
import type { Route } from './+types/watch-page';
import { useEffect } from 'react';
import { getPlaylistByTrackId, getPlaylistTracksByPlaylistId } from '~/features/playlist/queries';
import { getTrackById } from '~/features/track/queries';

export const meta: Route.MetaFunction = ({ data }) => {
  return [{ title: `Playlist - ${data.playlist?.title ?? 'Not Found'}` }];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  if (!params.trackId) {
    return { track: null, playlist: null, playlistTracks: null };
  }

  const trackId = Number(params.trackId);
  const track = await getTrackById(trackId);
  if (!track) {
    return { track: null, playlist: null, playlistTracks: null };
  }

  const playlist = await getPlaylistByTrackId(track.trackId);
  if (!playlist) {
    return { track: null, playlist: null, playlistTracks: null };
  }

  const playlistTracks = await getPlaylistTracksByPlaylistId(playlist.playlistId);
  if (!playlistTracks) {
    return { track: null, playlist: null, playlistTracks: null };
  }

  return { track, playlist, playlistTracks };
};

export default function WatchPage({ loaderData }: Route.ComponentProps) {
  const { setCurrentTrack, setPlaylist, setPlaylistTracks, setIsFullPlayerOpen } = usePlayerStore();
  const { track, playlist, playlistTracks } = loaderData;

  useEffect(() => {
    if (playlistTracks) {
      setCurrentTrack(track);
      setPlaylist(playlist);
      setPlaylistTracks(playlistTracks);
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
