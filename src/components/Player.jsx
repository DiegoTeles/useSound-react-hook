import useSound from './../hooks/useSound';
import Toktok from '../assets/sound/door.mp3';


function Player() {
  const { isPlaying, togglePlay, isRepeating, toggleRepeat, audioRef } = useSound(Toktok);
  console.log(isRepeating)
  return (
    <div>
      <audio ref={audioRef} />
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={toggleRepeat}>{isRepeating ? 'Repeat On' : 'Repeat Off'}</button>
    </div>
  );
};


export default Player;
