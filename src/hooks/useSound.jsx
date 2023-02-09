/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

const useAudioControl = (src) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [src, audioRef]);

  const handleEnded = () => {
    if (isRepeating) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
    if (isRepeating) {
      audioRef.current.loop = true;
    } else {
      audioRef.current.loop = false;
    }
  };

  return { isPlaying, togglePlay, isRepeating, toggleRepeat, audioRef };
};

export default useAudioControl;