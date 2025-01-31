import styles from "./page.module.css";
import Nav from "./components-global/Nav";
import Footer from "./components-global/Footer";
import Link from "next/link";
import Image from "next/image";
import CardRight from "./components-page/CardRight";
import CardLeft from "./components-page/cardLeft";

export default function Home() {
  return (
    <div className='page'>
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.hero} width-full flex flex-justify-center p-x-1-m`}>
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
                <Image className={`${styles.aboutCardIcon}`} src='/icons/monument.png' alt='Departments & Facility Hours' width={500} height={500} />
                <Link href='/'><h5>Departments & Facility Hours</h5></Link>
                <p>
                Access City&apos;s service offerings and check hours for all facilities.
                </p>
              </div>
              <div className={`${styles.aboutCard} theme-gradient-3`}>
                <Image className={`${styles.aboutCardIcon}`} src='/icons/bus.png' alt='Departments & Facility Hours' width={500} height={500} />

                <Link href='/'><h5>Traffic, Transit & Parking</h5></Link>
                <p>
                Traffic and road closure news and local traffic conditions
                </p>
              </div>
              <div className={`${styles.aboutCard} theme-gradient-2`}>
                <Image className={`${styles.aboutCardIcon}`} src='/icons/exam.png' alt='Departments & Facility Hours' width={500} height={500} />

                <Link href='/'><h5>Employment & Job Listings</h5></Link>
                <p>
                The City employment opportunities & position descriptions are listed here.
                </p>
              </div>
              <div className={`${styles.aboutCard} theme-gradient-1`}>
                <Image className={`${styles.aboutCardIcon}`} src='/icons/bench.png' alt='Departments & Facility Hours' width={500} height={500} />

                <Link href='/'><h5>Parks, Fields & Recreation</h5></Link>
                <p>
                Information on the parks, their locations, and the amenities they offer.
                </p>
              </div>
            </div>

            <div className={`${styles.aboutBottom} width`}>
              <div className={`${styles.aboutBottomLeft} `}>
                <div className={`${styles.aboutBottomText} flex flex-col flex-justify-center gap-1`}>
                  <h2>
                  Experience the magic of Bukidnon as we celebrate our rich culture, traditions, and indigenous heritage.
                  </h2>
                  <p className='text-xxs'>
                  {/* Mayor <span className='text-theme'>John Doe</span> */}
                  <Link href='/'>Read More</Link>
                  </p>
                </div>
              </div>
              <div className={`${styles.aboutBottomRight} flex flex-justify-center flex-mobile flex-justify-center-mobile`}>
                <Image src='/imgs/pangagda.svg' alt='About Bottom Right' width={500} height={500} />
              </div>
            </div>

            
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionImageOnTheLeft} width-full`}>
         
          {/* <div className={`${styles.sectionImageOnTheLeftContainer}`}>
              
          </div>
          <div>
             
          </div> */}

          <div className={`${styles.sectionImageOnTheLeftcontentContainer} width`}>
            <div className={`${styles.sectionImageOnTheLeftContentContainerLeft} p-x-1-m`}>
                <h3>
                  A vibrant Province nestled against the Mountains.
                </h3>
            </div>
            <div className={`${styles.sectionImageOnTheLeftContentContainerRight} p-x-1-m`} >
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



        {/* <section className={`${styles.section} ${styles.eventsSectionImageOnTheRight} width-full`}>
          
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
        </section> */}

        {/* <section className={`${styles.section} ${styles.sectionBecomeAVolunteer} width-full flex flex-justify-center`}>
          <div className={`${styles.sectionBecomeAVolunteerContainer} width flex flex-row`}>
            <div className={`${styles.sectionBecomeAVolunteerLeft}`}>
              <div className={`${styles.sectionBecomeAVolunteerText}`}>
                <h3>
                  Become a Volunteer!
                </h3>
                <h4>
                  And make a difference!
                </h4>
                <p>
                  Volunteers are the heart of a community. Our volunteers are a valuable resource for our fast-growing, fast-paced city.
                </p>
                <p>
                  Our city relies on our volunteers for everything from staffing special event, such as Freedom Fest and Merry Main Street, to assisting departments with daily activities, such as shelving library books, filing records or using GIS equipment.
                </p>
                <Link href='/'>How to Apply</Link>
              </div>
            </div>
            <div className={`${styles.sectionBecomeAVolunteerRight}`}>

              <div className={`${styles.sectionBecomeAVolunteerRightImage}`}>
                <Image className={`${styles.sectionBecomeAVolunteerRightImagePolice}`} src='/imgs/place.jpg' alt='About Bottom Right' width={500} height={500} />
                
                <Image className={`${styles.sectionBecomeAVolunteerRightImagePolice}`} src='/imgs/police.jpg' alt='About Bottom Right' width={500} height={350} />
              </div>
            </div>
          </div>
        </section> */}



      </main>
    </div>
  );
}
