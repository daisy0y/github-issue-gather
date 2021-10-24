import { lazy } from 'react';

export * from './search';
export const LazyHome = lazy(() => import('./Home'));
