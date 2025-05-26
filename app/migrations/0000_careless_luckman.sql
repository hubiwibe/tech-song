CREATE TABLE "playback_histories" (
	"playlist_id" uuid,
	"user_id" uuid,
	"track_id" uuid,
	"position" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "playlist_tracks" (
	"playlist_id" uuid,
	"track_id" uuid,
	"order" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "playlist_views" (
	"playlist_id" uuid,
	"user_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "playlists" (
	"playlist_id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"is_public" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"category_id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"tag_id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "tags_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "track_categories" (
	"track_id" uuid,
	"category_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "track_tags" (
	"track_id" uuid,
	"tag_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "tracks" (
	"track_id" uuid PRIMARY KEY NOT NULL,
	"category_id" uuid,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "playback_histories" ADD CONSTRAINT "playback_histories_playlist_id_playlists_playlist_id_fk" FOREIGN KEY ("playlist_id") REFERENCES "public"."playlists"("playlist_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playback_histories" ADD CONSTRAINT "playback_histories_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playback_histories" ADD CONSTRAINT "playback_histories_track_id_tracks_track_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("track_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playlist_tracks" ADD CONSTRAINT "playlist_tracks_playlist_id_playlists_playlist_id_fk" FOREIGN KEY ("playlist_id") REFERENCES "public"."playlists"("playlist_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playlist_tracks" ADD CONSTRAINT "playlist_tracks_track_id_tracks_track_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("track_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playlist_views" ADD CONSTRAINT "playlist_views_playlist_id_playlists_playlist_id_fk" FOREIGN KEY ("playlist_id") REFERENCES "public"."playlists"("playlist_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playlist_views" ADD CONSTRAINT "playlist_views_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "track_categories" ADD CONSTRAINT "track_categories_track_id_tracks_track_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("track_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "track_categories" ADD CONSTRAINT "track_categories_category_id_categories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("category_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "track_tags" ADD CONSTRAINT "track_tags_track_id_tracks_track_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("track_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "track_tags" ADD CONSTRAINT "track_tags_tag_id_tags_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("tag_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tracks" ADD CONSTRAINT "tracks_category_id_categories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("category_id") ON DELETE no action ON UPDATE no action;