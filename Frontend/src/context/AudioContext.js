import React, { createContext, useRef, useState, useEffect } from 'react';
import audioFile from '../assets/MuswayStudio__Royalty_Free_Music_-_Background_Music__-_Ambient_Hip-Hop_-_3.mp3';

const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio(audioFile));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.loop = true;
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlayPause }}>
      {children}
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </AudioContext.Provider>
  );
};

export { AudioProvider, AudioContext };



