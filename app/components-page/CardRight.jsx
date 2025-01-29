import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './CardRight.module.css'

function CardRight() {
  return (
    <Link className={`${styles.contentLinkscard}`} href='/'>
        <div className={`${styles.contentLinkscardImage}`}>
            <Image className={`${styles.cardImage}`} src='/imgs/cardImage.jpg' alt='About Bottom Right' width={120} height={120} />
        </div>
        <div className={`${styles.contentLinkscardPreview}`}>
            <h5>
            Proposed Downtown District Ordinance Proposed Downtown District Ordinance
            </h5>

            <div className={`contentLinkscardDate`}>
                <span>
                    John Doe
                </span>
                <span className={`${styles.contentLinkscardDateSeparator}`}>
                    |
                </span>
                
                
                <span>
                    <Link className={`contentLinkscardCategory`} href='/'>
                    Town News
                    </Link>
                </span>
                <span className={`${styles.contentLinkscardDateSeparator}`}>
                    |
                </span>
                <span>
                    January 1, 2025
                </span>
            </div>
            <p>
            The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their
            The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their
            The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their
            The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their
            The Annual Water Quality Report is designed to provide consumers with information on the quality of the water delivered by their
            </p>
        </div>
    </Link>
  )
}

export default CardRight