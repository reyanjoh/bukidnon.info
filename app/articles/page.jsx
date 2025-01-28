import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ArticlesContainer13 from '../components-global/ArticlesContainer13'

const Articles = () => {
  return (
    <div className='page'>
        <section className={`${styles.section} ${styles.hero} width-full flex flex-align-end`}>
            <div className={`${styles.heroContentContainer} width`}>
                <h1>Explore Bukidnon: Your guide to Culture, Attractions, and Festivals</h1>
                <p>Discover the rich culture, attractions, and festivals of Bukidnon. Explore our articles for insights on local traditions, must-visit destinations, and exciting events.</p>
            </div>
        </section>
        <section className={`${styles.articles} width-full flex flex-justify-center`}>
            <div className={`${styles.articlesContainer} width`}>
                <main className={`${styles.articlesContent}`}>
                    <ArticlesContainer13 />
                </main>
            </div>
        </section>

        <section className={`${styles.moreArticles} width-full flex flex-justify-center`}>
            <div className={`${styles.moreArticlesContainer} width`}>
                {/* <h2>More Articles</h2> */}
            </div>
        </section>
    </div>
  )
}

export default Articles