import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    'Pop Movies': undefined;
    'Movie Details': { movieId: string };
};

export type PopMoviesScreenProps = NativeStackScreenProps<RootStackParamList, 'Pop Movies'>;
export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Movie Details'>;

// Component Data Types
export type GridItemType = {
    id: number;
    posterUri: string;
    title: string;
};
