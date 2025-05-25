export interface Track {
  id: string;
  categoryId?: number | null;
  title: string;
  content: string;
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
