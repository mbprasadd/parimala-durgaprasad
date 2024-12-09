
import React, { useState } from 'react';
import  WeddingInvitation  from './../WeddingInvitation/WeddingInvitation.jsx';
import FrontPageInvitation from './../FrontPageInvitation/FrontPageInvitation.jsx';

// import { PlaySong } from '../../components';

const MainScreen = () => {
  const [isInvitationOpen, setInvitationOpen] = useState(false);

  return (
    <>
      {isInvitationOpen ? (
        <>
          {/* <PlaySong isInvitationOpen={isInvitationOpen} /> */}
          <WeddingInvitation />
        </>
      ) : (
        <FrontPageInvitation setInvitationOpen={setInvitationOpen} />
      )}
    </>
  );
};

export default MainScreen;

