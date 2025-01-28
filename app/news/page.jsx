import React from 'react'
import styles from './page.module.css'
import ArticleCard from './component/articleCard'
import Image from 'next/image'

export const metadata = {
  title: "Bukidnon.info | Get the latest news and updates about bukidnon.",
  description: "Bukidnon.info a platform for the people of Bukidnon to get the latest news and updates about the province.",
};

function Page() {
  return (
    <div className='page'>
      <section className={`${styles.section} ${styles.hero} width-full flex flex-align-end`}>
        <div className={`${styles.heroContentContainer} width`}>
          <h1>Street Grade Separated Intersection Project</h1>
        </div>
      </section>
      <section className={`${styles.articles} width-full flex flex-justify-center`}>
          <div className={`${styles.articlesContainer} width`}>
            <div className={`${styles.articlesContent}`}>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <div className={`${styles.paginateBtns}`}>
                <button className={`${styles.paginateBtn}`}>&lt;</button>
                <button className={`${styles.paginateBtn} highlighted`}>1</button>
                {/* <button className={`${styles.paginateBtn}`}>2</button> */}
                {/* <button className={`${styles.paginateBtn}`}>3</button> */}
                <button className={`${styles.paginateBtn}`}>&gt;</button>
              </div>
            </div>

            <div className={`${styles.articlesAds}`}>
              <div className={`${styles.articlesAdsContent}`}>
                <Image className={`${styles.articlesAdsImage}`} src='/imgs/ad sample.jpg' alt='article' width={400} height={400} />
              </div>
            </div>
          </div>
      </section>
    
    </div>
  )
}

export default Page