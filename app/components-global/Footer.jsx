import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import SocialsIcons from '../components-page/socialsIcons';

const Footer = () => {
  return (
    <footer className={`${styles.footer} flex flex-col bg-navy-light width-full text-light-100`}>
        <div className={`${styles.footertopContainer} flex flex-center`}>
            <div className={`${styles.footertop} flex flex-row width`}>
                <div className={styles.footertopleft}>
                    <Link href="/"><Image className='bg-navy' src="/imgs/Bukidnon.info logo-white.png" alt="Bukidnon.Info" width={200} height={200} /></Link>

                    <h5 className='text-center'>Bukidnon.Info</h5>
                    <p className='text-light-200'>Bukidnon.Info is a free online platform that provides information about Bukidnon, Philippines. Our aim is to connect people with the latest news, events, and resources in the region.</p>
                    {/* <div className={`${styles.footertopleftsearch} `}>
                        <input className='bg-navy-light border-light-200 width-100' type="text" placeholder="I am looking for..." />
                        <input className={`${styles.footertopleftsearchsubmit} bg-cta-hover-with-border text-light-100`} type="submit" value="Search" />
                    </div> */}
                </div>
                <div className={styles.footertopright}>
                    {/* <ul>
                        <li>
                            <h6>Living Here</h6>
                            <ul>
                                <li>
                                    <Link href="/">Government</Link>
                                </li>
                                <li>
                                    <Link href="/">Administration</Link>
                                </li>
                                <li>
                                    <Link href="/">Culture & Recreation</Link>
                                </li>
                                <li>
                                    <Link href="/">Business</Link>
                                </li>
                                <li>
                                    <Link href="/">Documents</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6>Useful Links</h6>
                            <ul>
                                <li>
                                    <Link href="/">Government</Link>
                                </li>
                                <li>
                                    <Link href="/">Administration</Link>
                                </li>
                                <li>
                                    <Link href="/">Culture & Recreation</Link>
                                </li>
                                <li>
                                    <Link href="/">Business</Link>
                                </li>
                                <li>
                                    <Link href="/">Documents</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6>Quick Links</h6>
                            <ul>
                                <li>
                                    <Link href="/">Government</Link>
                                </li>
                                <li>
                                    <Link href="/">Administration</Link>
                                </li>
                                <li>
                                    <Link href="/">Culture & Recreation</Link>
                                </li>
                                <li>
                                    <Link href="/">Business</Link>
                                </li>
                                <li>
                                    <Link href="/">Documents</Link>
                                </li>
                            </ul>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>

        <div className={`${styles.footerSocials} flex flex-center width-full`}>
            <div className={`${styles.footerSocialsContainer} flex flex-row width`}>
                <div className={`${styles.footerSocialsLeft} flex flex-row flex-justify-end bg-navy flex-mobile flex-center-mobile`}>
                    <SocialsIcons />
                </div>
                <div className={`${styles.footerSocialsRight} flex flex-row flex-justify-end bg-theme-color flex-mobile flex-center-mobile`}>
                    <span className='text-l bold-heavy'>
                        Live here. Play here. Thrive here.
                    </span>
                </div>
            </div>
        </div>

        <div className={`${styles.footerBottom} text-xs flex flex-center text-light-200 flex-mobile flex-center-mobile`}>
            <span>
                Copyright © 2018 - 2025 • Bukidnon.Info™ by <Link href="/">Bukidnon.Info</Link>
            </span>
        </div>
    </footer>
  );
};

export default Footer;