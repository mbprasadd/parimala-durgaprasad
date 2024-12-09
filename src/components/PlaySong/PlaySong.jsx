import React, { useState, useEffect, useRef } from 'react';
import { VolumeUp, VolumeOff } from '@material-ui/icons';

import audioSrc from '../../assets/backsound-invitation.mp3';
import styles from './styles.module.css';

const PlaySong = ({ isInvitationOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio only once
  useEffect(() => {
    // Assigning audio object only once
    if (!audioRef.current) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.volume = 0.5;
    }
    
    // If invitation is open, play the song
    if (isInvitationOpen) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }

    // Cleanup effect to pause song when component unmounts or changes
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio time when leaving
      }
    };
  }, [isInvitationOpen]);

  // Effect to play/pause the song when `isPlaying` changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <button
      className={styles.playSongButton}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? (
        <VolumeUp style={{ fontSize: 20 }} />
      ) : (
        <VolumeOff style={{ fontSize: 20 }} />
      )}
    </button>
  );
};

export default PlaySong;



// import React, { useState, useEffect, useRef } from 'react'
// import { VolumeUp, VolumeOff } from '@material-ui/icons'

// import audioSrc from '../../assets/backsound-invitation.mp3'
// import styles from './styles.module.css'

// const PlaySong = ({ isInvitationOpen }) => {
//   const [isPlaying, setIsPlaying] = useState(false)

//   const audioRef = useRef(new Audio(audioSrc))

//   useEffect(() => {
//     setIsPlaying(true)
//   }, [isInvitationOpen])

//   useEffect(() => {
//     console.log('inside 2nd:', isPlaying)
//     if (isPlaying) {
//       audioRef.current.volume = 0.5
//       audioRef.current.play()
//     } else {
//       audioRef.current.pause()
//     }
//   }, [isPlaying])

//   return (
//     <button
//       className={styles.playSongButton}
//       onClick={() => setIsPlaying(!isPlaying)}
//     >
//       {isPlaying ? (
//         <VolumeUp style={{ fontSize: 20 }} />
//       ) : (
//         <VolumeOff style={{ fontSize: 20 }} />
//       )}
//     </button>
//   )
// }

// export default PlaySong
