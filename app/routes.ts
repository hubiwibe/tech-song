import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes';

export default [
  index('common/pages/home-page.tsx'),
  ...prefix('watch', [route('/:trackId', 'features/watch/pages/watch-page.tsx')]),
  ...prefix('playlist', [route('/:playlistId', 'features/playlist/pages/playlist-page.tsx')]),
  ...prefix('cron-job', [route('/', 'common/pages/cron-job-page.tsx')]),
  route('/welcome', 'features/users/pages/welcome-page.tsx'),
] satisfies RouteConfig;
