CREATE TABLE "profiles" (
	"profile_id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "track_categories" DROP CONSTRAINT "track_categories_track_id_tracks_track_id_fk";
--> statement-breakpoint
ALTER TABLE "track_categories" DROP CONSTRAINT "track_categories_category_id_categories_category_id_fk";
--> statement-breakpoint
ALTER TABLE "track_tags" DROP CONSTRAINT "track_tags_tag_id_tags_tag_id_fk";
--> statement-breakpoint
ALTER TABLE "tracks" DROP CONSTRAINT "tracks_category_id_categories_category_id_fk";
--> statement-breakpoint
ALTER TABLE "track_categories" ADD CONSTRAINT "track_categories_track_id_category_id_pk" PRIMARY KEY("track_id","category_id");--> statement-breakpoint
ALTER TABLE "track_tags" ADD CONSTRAINT "track_tags_track_id_tag_id_pk" PRIMARY KEY("track_id","tag_id");--> statement-breakpoint
ALTER TABLE "playlists" ADD COLUMN "stats" jsonb DEFAULT '{"views":0,"likes":0}'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "playlists" ADD COLUMN "profile_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "tracks" ADD COLUMN "stats" jsonb DEFAULT '{"views":0,"likes":0}'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "tracks" ADD COLUMN "profile_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profile_id_users_id_fk" FOREIGN KEY ("profile_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playlists" ADD CONSTRAINT "playlists_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "track_categories" ADD CONSTRAINT "track_categories_track_id_tracks_track_id_fk" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("track_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "track_categories" ADD CONSTRAINT "track_categories_category_id_categories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("category_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "track_tags" ADD CONSTRAINT "track_tags_tag_id_tags_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("tag_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tracks" ADD CONSTRAINT "tracks_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "playback_histories" DROP COLUMN "deleted_at";--> statement-breakpoint
ALTER TABLE "playlist_tracks" DROP COLUMN "deleted_at";--> statement-breakpoint
ALTER TABLE "playlist_views" DROP COLUMN "deleted_at";--> statement-breakpoint
ALTER TABLE "playlists" DROP COLUMN "deleted_at";--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN "deleted_at";--> statement-breakpoint
ALTER TABLE "tags" DROP COLUMN "deleted_at";--> statement-breakpoint
ALTER TABLE "track_categories" DROP COLUMN "deleted_at";--> statement-breakpoint
ALTER TABLE "track_tags" DROP COLUMN "deleted_at";--> statement-breakpoint
ALTER TABLE "tracks" DROP COLUMN "category_id";--> statement-breakpoint
ALTER TABLE "tracks" DROP COLUMN "deleted_at";