import React, { useState } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('https://soundcloud.com/soundhelix/soundhelix-song-3'));

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Best Podcast  Ever</h1>

        <button onClick={togglePlay} style={{ padding: '10px 20px', fontSize: '16px' }}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <br />
        <audio
          controls
          style={{ marginTop: '20px' }}
          src="https://soundcloud.com/soundhelix/soundhelix-song-3"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
