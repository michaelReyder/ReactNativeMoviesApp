import { PosterSizes } from '@api/constants';
import {
    getPosterImageString,
    normalizeMovieListData,
    normalizeMovieDetailsData,
} from '@utils/helpers';

import movieDetails from './movieDetails.json';
import { normalizedMovieList, normalizedMovieDetails } from './normalizedData';
import popularMovies from './popularMovies.json';

describe('Test helper function outputs', () => {
    it('should return a url path for a movie poster with the requested image size', () => {
        const posterPath = '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg';
        expect(getPosterImageString(posterPath, PosterSizes.MD)).toEqual(
            'https://image.tmdb.org/t/p/w185/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
        );
    });

    it('should return a normalized subset of the result data for popular movies', () => {
        expect(normalizeMovieListData(popularMovies.results)).toEqual(normalizedMovieList);
    });

    it('should return a normalized subset of the result data for movie details', () => {
        expect(normalizeMovieDetailsData(movieDetails)).toEqual(normalizedMovieDetails);
    });
});
