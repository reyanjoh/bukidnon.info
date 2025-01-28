import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <div>
        <div className={`${styles.section} ${styles.hero} width-full flex flex-align-end`}>
            <div className={`${styles.heroContentContainer} width`}>
            {/* <h1>Street Grade Separated Intersection Project</h1> */}
            </div>
        </div>
        <section className={`${styles.articles} width-full flex flex-justify-center`}>
            <div className={`${styles.articlesContainer} width`}>
                <main className={`${styles.articlesContent}`}>
                    <article className={`${styles.article}`}>
                        <h1>Street Grade Separated Intersection Project</h1>
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
                            The SR1/NE <b>Front Street Grade Separated Intersection Project </b> is scheduled to begin February 2018 with a planned completion of August 2019. DelDOT will maintain updates and maps on their website below.
                        </p>

                        <p>
                            Springing to my feet I urged the thoat to rise, and directed Sola to take Dejah Thoris with her upon him and make a mighty effort to reach the hills before the green warriors were upon us. I knew that in the ravines and gullies they might find a temporary hiding place, and even though they died there of hunger and thirst it would be better so than that they fell into the hands of the Tharks. Forcing my two revolvers upon them as a slight means of protection, and, as a last resort, as an escape for themselves from the horrid death which recapture would surely mean, I lifted Dejah Thoris in my arms and placed her upon the thoat behind Sola, who had already mounted at my command.
                        </p>

                        <p>
                            “Good-bye, my princess,” I whispered, “we may meet in Helium yet. I have escaped from worse plights than this,” and I tried to smile as I lied.
                        </p>

                        <p>
                            “What,” she cried, “are you not coming with us?”
                        </p>

                        <p>
                            “How may I, Dejah Thoris? Someone must hold these fellows off for a while, and I can better escape them alone than could the three of us together.”
                        </p>

                        <p>
                            She sprang quickly from the thoat and, throwing her dear arms about my neck, turned to Sola, saying with quiet dignity: “Fly, Sola! Dejah Thoris remains to die with the man she loves.”
                        </p>

                        <p>
                            Those words are engraved upon my heart. Ah, gladly would I give up my life a thousand times could I only hear them once again; but I could not then give even a second to the rapture of her sweet embrace, and pressing my lips to hers for the first time, I picked her up bodily and tossed her to her seat behind Sola again, commanding the latter in peremptory tones to hold her there by force, and then, slapping the thoat upon the flank, I saw them borne away; Dejah Thoris struggling to the last to free herself from Sola&apos;s grasp.
                        </p>

                        <p>
                            Turning, I beheld the green warriors mounting the ridge and looking for their chieftain. In a moment they saw him, and then me; but scarcely had they discovered me than I commenced firing, lying flat upon my belly in the moss. I had an even hundred rounds in the magazine of my rifle, and another hundred in the belt at my back, and I kept up a continuous stream of fire until I saw all of the warriors who had been first to return from behind the ridge either dead or scurrying to cover.
                        </p>





                        
                    </article>

                {/* <div className={`${styles.paginateBtns}`}>
                    <button className={`${styles.paginateBtn}`}>&lt;</button>
                    <button className={`${styles.paginateBtn} highlighted`}>1</button>
                    <button className={`${styles.paginateBtn}`}>2</button>
                    <button className={`${styles.paginateBtn}`}>3</button>
                    <button className={`${styles.paginateBtn}`}>&gt;</button>
                </div> */}
                </main>

                <div className={`${styles.articlesAds}`}>
                    <div className={`${styles.articlesAdsContent}`}>
                        <Image className={`${styles.articlesAdsImage}`} src='/imgs/ad sample.jpg' alt='article' width={400} height={400} />
                    </div>
                </div>
            </div>
        </section>
        <section className={`${styles.moreArticles} width-full flex flex-justify-center`}>
            {/* <div className={`${styles.moreArticlesContainer} width`}>
                <h2>More Articles</h2>
            </div> */}
        </section>
    </div>
  )
}

export default page