import { useEffect, useRef, useState } from "react";
import song1 from './Manasilaayo.mp3';
import song2 from './Whistle Podu.mp3';
import './music.css'

function MusicPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setTrackProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    const handlePlayandPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    function handleSkipTrack(direction) {
        if (direction === 'forward') {
            setCurrentTrack((prev) => (prev + 1) % tracks.length); // Loop back to first track
        } else if (direction === 'backward') {
            setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length); // Loop back to last track
        }
        setTrackProgress(0); // Reset track progress when skipping
        setIsPlaying(false); // Pause when skipping tracks
    }

    const tracks = [
        {
            title: 'Track-1',
            Source: song1,
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Track-2',
            Source: song2,
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="music-player">
            <h1>Music Player</h1>
            <h2>{tracks[currentTrack].title}</h2>
            <img src={tracks[currentTrack].image} alt={tracks[currentTrack].title} />
            <audio ref={audioRef} src={tracks[currentTrack].Source}></audio>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${trackProgress}%`, background: isPlaying ? '#3498db' : '#a43636' }}>
                </div>
            </div>
            <div className="track-controls">
                <button onClick={() => handleSkipTrack('backward')}>Backward</button>
                <button onClick={handlePlayandPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={() => handleSkipTrack('forward')}>Forward</button>
            </div>
        </div>
    );
}

export default MusicPlayer;
