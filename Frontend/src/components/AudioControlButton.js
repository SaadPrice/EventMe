import React, { useContext } from 'react';
import { AudioContext } from '../context/AudioContext';

const AudioControlButton = () => {
  const { isPlaying, togglePlayPause } = useContext(AudioContext);

  return (
    <button onClick={togglePlayPause}>
      {isPlaying ? 'Pause Music' : 'Play Music'}
    </button>
  );
};

export default AudioControlButton;
