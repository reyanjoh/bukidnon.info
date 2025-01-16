import styles from "./page.module.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
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

        <section className={`${styles.section} ${styles.highlights} width-full flex flex-justify-center bg-light`}>
          <div className={`${styles.highlightsText} width text-light flex flex-col gap-3`}>
            <div className={`${styles.highlightsBottom} width`}>
              <div className={`${styles.highlightsBottomLeft}  flex flex-col text-dark`}>
                <h2>
                Thank you for allowing me to serve as your mayor. Together, let&apos;s keep the momentum going.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
