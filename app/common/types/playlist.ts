export interface Playlist {
  playlistId: number;
  title: string;
  description?: string | null;
}

export interface PlaylistTrack {
  trackId: number;
  playlistId: number;
  title: string;
  content: string;
  audioUrl?: string;
}
