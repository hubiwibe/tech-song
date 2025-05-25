import { mockPlaylists } from '~/mocks/data';
import type { Playlist } from '~/common/types/playlist';

export const getPlaylist = async (playlistId: string): Promise<Playlist | null> => {
  return mockPlaylists.find(playlist => playlist.id === playlistId) ?? null;
};

export const getPlaylistByTrackId = async (trackId: string): Promise<Playlist | null> => {
  return mockPlaylists.find(playlist => playlist.playlistTracks.find(track => track.id === trackId)) ?? null;
};
