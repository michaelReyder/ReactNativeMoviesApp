import { PosterSizes, TMDB } from '@api/constants';
import { GridItemType } from 'types/component.types';
import { MovieDetails, MoviesResultItem } from 'types/tmdb.types';

export const getPosterImageString = (path: string, size: string): string => {
    return `${TMDB.IMG_URL}${size}${path}`;
};

export const normalizeMovieListData = (data: MoviesResultItem[]): GridItemType[] => {
    return data.map((movie) => ({
        id: movie.id,
        posterUri: getPosterImageString(movie.poster_path, PosterSizes.MD),
        title: movie.title,
    }));
};

export const normalizeMovieDetailsData = (data: MovieDetails) => {
    return {
        id: data.id,
        overview: data.overview,
        posterUri: getPosterImageString(data.poster_path, PosterSizes.MD),
        rating: data.vote_average.toFixed(1),
        release: data.release_date.split('-')[0],
        runtime: data.runtime,
        title: data.title,
        videos: data.videos.results,
    };
};

