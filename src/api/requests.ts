import axios from 'axios';
import { MovieListType, MoviesResultItem } from 'types/tmdb.types';

import { TMDB } from './constants';

export async function fetchMovies(list: MovieListType, page?: number) {
    const response = await axios.get(
        `${TMDB.BASE_URL}/${list}?api_key=${process.env.REACT_APP_TMDB_API_KEY}${
            page ? '&page=' + page : ''
        }`,
    );

    const { data } = response;

    return {
        page: data.page,
        results: data.results as MoviesResultItem[],
    };
}

export async function fetchMovieDetails(movieId: string) {
    const response = await axios.get(
        `${TMDB.BASE_URL}/${movieId}?append_to_response=videos&language=en-US'&api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    );

    return response.data;
}
