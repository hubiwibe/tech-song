export interface Playlist {
  id: number;
  userId: number;
  title: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PlaylistItem {
  id: number;
  playlistId: number;
  trackId: number;
  position?: number | null;
  createdAt: string;
  updatedAt: string;
}
