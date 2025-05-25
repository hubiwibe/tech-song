import type { Track } from '~/common/types/track';

export interface Playlist {
  id: string;
  title: string;
  description?: string | null;
  playlistTracks: PlaylistTrack[];
}

export interface PlaylistTrack extends Track {
  position: number;
}
