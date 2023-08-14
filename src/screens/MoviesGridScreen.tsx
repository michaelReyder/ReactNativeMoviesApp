import { MovieLists } from '@api/constants';
import { fetchMovies } from '@api/requests';
import GridList from '@components/GridList';
import * as React from 'react';
import { View } from 'react-native';
import { GridItemType, PopMoviesScreenProps } from 'types/component.types';
import { normalizeMovieListData } from 'utils/helpers';

export default function MoviesGridScreen({ navigation }: PopMoviesScreenProps) {
    // const [page, setPage] = React.useState(0);
    const [movies, setMovies] = React.useReducer(
        (prev: GridItemType[], next: GridItemType[]): GridItemType[] => {
            return [...prev, ...next];
        },
        [] as GridItemType[],
    );

    React.useEffect(() => {
        // Avoid duplicate fetches whenever the component re-renders by checking if the movies array is empty
        if (movies.length === 0) {
            (async () => {
                const response = await fetchMovies(MovieLists.POPULAR);
                const results = normalizeMovieListData(response.results);
                setMovies(results);
                // setPage(response.page);
            })();
        }
    }, []);

    return (
        <View className="w-full h-full items-start justify-start bg-white">
            {movies.length > 0 && <GridList items={movies} navigation={navigation} />}
        </View>
    );
}
