import React from 'react'
import {
  WelcomePage,
  BrideGroom,
  EventDetails,
  CountdownTimer,
  ClosingPage,
} from '../../composites'

const WeddingInvitation = () => {
  return (
    <div>
      <WelcomePage />
      <BrideGroom />
      <EventDetails />
      <CountdownTimer />
      <ClosingPage />
    </div>
  )
}

export default WeddingInvitation
