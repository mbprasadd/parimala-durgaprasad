import React from 'react'
// import { Favorite } from '@material-ui/icons'
import { Favorite } from '@mui/icons-material';


import styles from './styles.module.css'

const HeaderSeparator = () => {
  return (
    <div className={styles.separatorContainer}>
      <div className={styles.separatorLine} />
      <Favorite className={styles.separatorIcon} />
      <div className={styles.separatorLine} />
    </div>
  )
}

export default HeaderSeparator
