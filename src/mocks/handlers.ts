import { HttpResponse, http } from 'msw';
import { getLibraryHistoriesMockReseponse } from './services';

export const handlers = [
  http.get('/core/library-histories', () => {
    return HttpResponse.json(getLibraryHistoriesMockReseponse);
  }),
];
