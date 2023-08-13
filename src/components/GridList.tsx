import { FlatList, Image, Pressable, View } from 'react-native';
import { GridItemType } from 'types/component.types';

const GridItem = ({ item, onPress }: { item: GridItemType; onPress: (id: number) => void }) => (
    <View className="w-1/2 h-[35vh]">
        <Pressable onPress={() => onPress(item.id)}>
            <Image
                className="w-full h-full"
                source={{
                    uri: item.posterUri,
                }}
            />
        </Pressable>
    </View>
);

const GridList = ({ items, navigation }: { items: GridItemType[]; navigation: any }) => {
    const handlePress = (movieId: number) => {
        navigation.navigate('Movie Details', { movieId });
    };

    return (
        <FlatList
            data={items}
            renderItem={({ item }) => <GridItem item={item} onPress={handlePress} />}
            keyExtractor={(item: GridItemType, idx: number) =>
                `${item.id.toString()}-${idx.toString()}`
            }
            numColumns={2}
            contentInsetAdjustmentBehavior="automatic"
            className="flex w-full h-full"
        />
    );
};

export default GridList;
