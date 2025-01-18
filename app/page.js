import styles from "./page.module.css";
import Nav from "./page-components/Nav";
import Footer from "./page-components/Footer";
import Link from "next/link";
import Image from "next/image";
import CardRight from "./page-components/CardRight";
import CardLeft from "./page-components/cardLeft";

export default function Home() {
  return (
    <div className='page'>
      <Nav />
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.hero} width-full flex flex-justify-center`}>
          <div className={`${styles.heroText} width text-light`}>
            <div className={`${styles.heroTextLeft}`}>
              <h1 className='text-xl'>
                A vibrant Province nestled against the <br />  Mountains
              </h1>
              <p className='text-m'>
                Drawn by clean air and mythical light, visitors come to experience traditions, fine art, great cuisine and natural beauty of the landscape.
              </p>

             
            </div>
            <div className={`${styles.heroTextRight}`}>
              <span className={`${styles.heroPhotoCredits} text-xxs theme-color`}>
                <Link href='/'>
                  Photo by <span className='text-theme'>John Doe</span>
                </Link>
              </span>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.about} width-full flex flex-justify-center bg-dark`}>
          <div className={`${styles.aboutText} width text-light flex flex-col gap-3`}>

            
            <div className={`${styles.aboutTop} width`}>
              <div className={`${styles.aboutCard} theme-gradient-4`}>
                <Link href='/'><h5>Departments & Facility Hours</h5></Link>
                <p>
                Access City&apos;s service offerings and check hours for all facilities.
                </p>
              </div>
              <div className={`${styles.aboutCard} theme-gradient-3`}>
                <Link href='/'><h5>Traffic, Transit & Parking</h5></Link>
                <p>
                Traffic and road closure news and local traffic conditions
                </p>
              </div>
              <div className={`${styles.aboutCard} theme-gradient-2`}>
                <Link href='/'><h5>Employment & Job Listings</h5></Link>
                <p>
                The City employment opportunities & position descriptions are listed here.
                </p>
              </div>
              <div className={`${styles.aboutCard} theme-gradient-1`}>
                <Link href='/'><h5>Parks, Fields & Recreation</h5></Link>
                <p>
                Information on the parks, their locations, and the amenities they offer.
                </p>
              </div>
            </div>

            <div className={`${styles.aboutBottom} width`}>
              <div className={`${styles.aboutBottomLeft}`}>
                <div className={`${styles.aboutBottomText} flex flex-col flex-justify-center gap-1`}>
                  <h2>
                  Thank you for allowing me to serve as your mayor. Together, let&apos;s keep the momentum going.
                  </h2>
                  <p className='text-xxs'>
                  Mayor <span className='text-theme'>John Doe</span>
                  </p>
                </div>
              </div>
              <div className={`${styles.aboutBottomRight} flex flex-justify-center`}>
                <Image src='/imgs/pangagda.svg' alt='About Bottom Right' width={500} height={500} />
              </div>
            </div>

            
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionImageOnTheLeft} width-full`}>
         
          <div className={`${styles.sectionImageOnTheLeftContainer}`}>
              
          </div>
          <div>
             
          </div>

          <div className={`${styles.sectionImageOnTheLeftcontentContainer}`}>
            <div className={`${styles.sectionImageOnTheLeftContentContainerLeft}`}>
                <h3>
                  A vibrant Province nestled against the Mountains.
                </h3>
            </div>
            <div className={`${styles.sectionImageOnTheLeftContentContainerRight}`} >
                <h3>
                  Town Highlights
                </h3>
                <p>
                  Find out what&apos;s going on & stay up to date.
                </p>

                <div className={`${styles.contentLinkscardContainer}`}>
                  <CardRight />
                  <CardRight />
                  <CardRight />
                  
                </div>
            </div>
          </div>

        </section>



        <section className={`${styles.section} ${styles.eventsSectionImageOnTheRight} width-full`}>
          
          <div className={`${styles.eventsSectionImageOnTheLeftLeftContainer} bg-dark`}>
            
          </div>
          <div className={`${styles.eventsSectionImageOnTheLeftRightContainer}`}>
            
          </div>

          <div className={`${styles.eventsSectionImageOnTheLeftContentContainer} width`}>
            <div className={`${styles.lefttContainer7}`}>
                <h3>
                  Town Highlights
                </h3>
                <p>
                  Find out what&apos;s going on & stay up to date.
                </p>
                <div className={`${styles.cardLeftContainer}`}>
                  <CardLeft />
                  <CardLeft />
                  <CardLeft />
                </div>
            </div>

            <div className={`${styles.rightContainer3}`}>
                <h3>
                  A vibrant Province nestled against the Mountains.
                </h3>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionBecomeAVolunteer} width-full`}>
          <div className={`${styles.sectionBecomeAVolunteerContainer} width`}>
            
          </div>
        </section>



      </main>
      <Footer />
    </div>
  );
}
