import Link from 'next/link'
import styles from './articleCard.module.css'
import Image from 'next/image'

const ArticleCard = () => {
    return (
        <Link className={`${styles.articleCard}`} href='/news/sample-news'>
            <div className={`${styles.imageContainer}`}>
                <Image className={`${styles.image}`} src='/imgs/cardImage.jpg' alt='article' width={150} height={150} />
            </div>
            <div className={`${styles.textContainer}`}>
                <h2>Street Grade Separated Intersection Project </h2>
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

                <p className={`${styles.preview}`}>
                    The SR1/NE Front Street Grade Separated Intersection Project is scheduled to begin February 2018 with a
                </p>
                <Link href='/'>
                    Read More
                </Link>
            </div>
        </Link>
    )
}

export default ArticleCard