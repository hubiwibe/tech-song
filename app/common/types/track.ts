export interface Track {
  id: number;
  categoryId?: number | null;
  title: string;
  content?: string | null;
  audioUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface TrackCategory {
  id: number;
  trackId: number;
  categoryId: number;
}

export interface TrackTag {
  id: number;
  trackId: number;
  tagId: number;
}
