import GridList from '@components/GridList';
import { render } from '@testing-library/react-native';

import { normalizedMovieList } from './normalizedData';
import type { PopMoviesScreenProps } from '../src/types/component.types';
describe('App', () => {
    it('should mount without errors', () => {
        const navigation = jest.fn() as unknown as PopMoviesScreenProps;
        expect(() =>
            render(<GridList items={normalizedMovieList} navigation={navigation} />),
        ).not.toThrow();
    });

    it('should unmount without errors', () => {
        const navigation = jest.fn() as unknown as PopMoviesScreenProps;
        const { unmount } = render(
            <GridList items={normalizedMovieList} navigation={navigation} />,
        );
        expect(() => unmount()).not.toThrow();
    });
});
