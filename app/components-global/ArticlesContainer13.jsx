import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ArticlesContainer13.module.css'

function ArticlesContainer13() {
  return (
    <div className={styles.articlesContainer13}>
      <div className={styles.articleCardContainerLeft}>
        <Link className={styles.articleCardLink} href='/articles'>
          <div className={`${styles.articlesImageContainer} ${styles.articlesLeftImageContainer}`}>
            <Image src='/imgs/kaamulan-streetdancing.jpg' alt='Article 1' width={300} height={200} />
          </div>
          <div className={styles.articleLeftCardtext}>
            <span className={styles.articleCategory}>Article Category</span>
            <h3>Proposed Downtown District Ordinance</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. . .</p>
          </div>
        </Link>
      </div>
      <div className={styles.articleCardContainerRight}>
        <Link href='/articles'>
          <div className={styles.articleRightImageContainer}>
            <Image src='/imgs/kaamulan-streetdancing.jpg' alt='Article 1' width={300} height={200} />
          </div>
          <div className={styles.articleRightCardtext}>
            <span className={styles.articleCategory}>Article Category</span>
            <h3>Proposed Downtown District Ordinance</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. . .</p>
          </div>
        </Link>
        <Link href='/articles'>
          <div className={styles.articleRightImageContainer}>
            <Image src='/imgs/kaamulan-streetdancing.jpg' alt='Article 1' width={300} height={200} />
          </div>
          <div className={styles.articleRightCardtext}>
            <span className={styles.articleCategory}>Article Category</span>
            <h3>Proposed Downtown District Ordinance</h3>
            <p>Lorem ipsum dolor sit amet consectetur . .</p>
          </div>
        </Link>
        <Link href='/articles'>
          <div className={styles.articleRightImageContainer}>
            <Image src='/imgs/kaamulan-streetdancing.jpg' alt='Article 1' width={300} height={200} />
          </div>
          <div className={styles.articleRightCardtext}>
            <span className={styles.articleCategory}>Article Category</span>
            <h3>Proposed Downtown District Ordinance</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing. . .</p>
          </div>
        </Link>
        <Link href='/articles'>
          <div className={styles.articleRightImageContainer}>
            <Image src='/imgs/kaamulan-streetdancing.jpg' alt='Article 1' width={300} height={200} />
          </div>
          <div className={styles.articleRightCardtext}>
            <span className={styles.articleCategory}>Article Category</span>
            <h3>Proposed Downtown District Ordinance</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing. . .</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ArticlesContainer13