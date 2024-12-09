import React from 'react'
import { HeaderSeparator, Button } from '../../components'

import styles from './styles.module.css'

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.separatorContainer}>
        <HeaderSeparator />
        <p className={styles.textName}>Durga Prasad &amp; Parimala</p>
        <HeaderSeparator />
      </div>
      <p className={styles.invitationText}>
        We are getting Engaged, and we want you <br /> to be part of our special
        day
      </p>
      <p className={styles.invitationDate}>Wednesday, 11th December 2024</p>
      <div className={styles.buttonContainer}>
        <Button text="Save the Date!" />
      </div>
    </div>
  )
}

export default WelcomePage
