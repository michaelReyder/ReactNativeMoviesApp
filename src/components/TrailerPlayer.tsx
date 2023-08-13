import React, { useState, useCallback } from 'react';
import { Button, View, Alert, Modal } from 'react-native';
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

    const handleClose = () => {
        togglePlaying();
        close();
    };

    return (
        <Modal animationType="slide" visible={isOpen}>
            <View className="mt-48 bg-white">
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={trailerUrl}
                    onChangeState={onStateChange}
                />
                <View className="flex flex-row justify-center items-center">
                    <Button title={playing ? 'Pause' : 'Play'} onPress={togglePlaying} />
                    <Button title="Close" onPress={handleClose} />
                </View>
            </View>
        </Modal>
    );
}
