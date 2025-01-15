import styles from "./page.module.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div className='page'>
      <Nav />
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.hero} width-full flex flex-justify-center`}>
          <div className={`${styles.heroText} width text-light`}>
            <div className={`${styles.heroTextLeft}`}>
              <h1 className='text-xl'>
                A vibrant city nestled <br /> against the <br />  Mountains
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

        <section className={`${styles.section} ${styles.about} width-full flex flex-justify-center`}>
          <div className={`${styles.aboutText} width text-light`}>
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
