import React, { useState, useCallback } from 'react';
import { Button, View, Alert, Modal, Pressable, Text, Platform } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function TrailerPlayer({
    trailerUrl,
    isOpen,
    close,
}: {
    trailerUrl: string;
    isOpen: boolean;
    close: () => void;
}) {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state: string) => {
        if (state === 'ended') {
            setPlaying(false);
            Alert.alert('video has finished playing!');
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            {/* <YoutubePlayer
                height={300}
                play={playing}
                videoId={trailerUrl}
                onChangeState={onStateChange}
                webViewStyle={{ opacity: 0.99 }}
                webViewProps={{
                    renderToHardwareTextureAndroid: true,
                    androidLayerType:
                        Platform.OS === 'android' && Platform.Version <= 22 ? 'hardware' : 'none',
                }}
            /> */}
            <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
            <Pressable onPress={close}>
                <Text>Close</Text>
            </Pressable>
        </Modal>
    );
}
