import { fetchMovieDetails } from '@api/requests';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { DetailsScreenProps } from 'types/component.types';
import { VideoItem } from 'types/tmdb.types';
import { normalizeMovieDetailsData } from 'utils/helpers';

import TrailerPlayer from 'components/TrailerPlayer';

const TrailerButton = ({ trailerUrl, idx }: { trailerUrl: string; idx: number }) => {
    const [open, setOpen] = React.useState(false);
    const handleToggleOpen = () => setOpen(!open);

    return (
        <View className="flex flex-row w-full p-6">
            <Pressable className="flex flex-row w-full items-center" onPress={handleToggleOpen}>
                <Ionicons name="ios-play-circle-outline" size={24} color="black" />
                <Text className="font-semibold ml-3 text-base">Trailer {idx}</Text>
                <TrailerPlayer trailerUrl={trailerUrl} isOpen={open} close={() => setOpen(false)} />
            </Pressable>
        </View>
    );
};

const renderTrailerList = (videos: VideoItem[]) => {
    const trailerUrls: string[] = [];

    if (videos.length === 1) {
        trailerUrls.push(videos[0].key);
    }

    if (videos.length > 1) {
        videos.slice(0, 2).forEach((video) => {
            trailerUrls.push(video.key);
        });
    }

    return trailerUrls.map((trailerUrl, idx) => (
        <TrailerButton key={trailerUrl} trailerUrl={trailerUrl} idx={idx + 1} />
    ));
};

export default function MovieDetailsScreen({ route }: DetailsScreenProps) {
    const { params } = route;
    const [details, setDetails] = React.useState<any | null>(null);

    React.useEffect(() => {
        (async () => {
            const response = await fetchMovieDetails(params.movieId);
            const results = normalizeMovieDetailsData(response);
            console.log('results: ', results);
            setDetails(results);
        })();
    }, []);

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            {details && (
                <>
                    <View className="flex justify-center w-full h-16 pl-3 bg-stone-500">
                        <Text className="text-lg font-bold text-white">{details.title}</Text>
                    </View>
                    <View className="flex flex-row w-full h-64 p-6">
                        <Image
                            className="w-36 h-52"
                            source={{
                                uri: details.posterUri,
                            }}
                        />
                        <View className="flex-grow justify-between ml-3">
                            <View>
                                <Text className="text-2xl">{details.release}</Text>
                                <Text className="text-base italic">{details.runtime} minutes</Text>
                            </View>
                            <View>
                                <Text className="text-base font-bold mb-4">
                                    {details.rating}/10
                                </Text>
                                <Pressable className="h-16 justify-center items-center bg-stone-500">
                                    <Text className="text-lg text-white font-bold">
                                        Add To Favorite
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View className="flex flex-col w-full px-6">
                        <Text>{details.overview}</Text>
                    </View>
                    <View className="flex flex-col w-full p-6">
                        <Text className="text-lg uppercase">Trailers </Text>
                        <View className="h-[1px] bg-black w-full" />
                        {details.videos.length > 0 && renderTrailerList(details.videos)}
                    </View>
                </>
            )}
        </ScrollView>
    );
}
