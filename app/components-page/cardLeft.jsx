import React from 'react'
import Link from 'next/link'
import styles from './cardLeft.module.css'
import Image from 'next/image'

function cardLeft() {
  return (
    <Link className={`${styles.cardLeft}`} href='/'>
       <div className={`${styles.cardLeftImage}`}>
          <Image className={`${styles.cardImage}`} src='/imgs/cardImage.jpg' alt='Card Left Image' width={120} height={120} />
       </div>
       <div className={`${styles.cardLeftContent}`}>
        <h5>
          Proposed Downtown District Ordinance
        </h5>
        <div className={`${styles.cardLeftDate} text-xs`}>
          <span className={`${styles.date}`}>
            12 August 2024
          </span>
          {/* <span>
            |
          </span> */}
          <span>
            4:30 pm - 5:30 pm at
          </span>
          <span>
            Town Hall
          </span>
        </div>
       </div>

    </Link>
  )
}

export default cardLeft