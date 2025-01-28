'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './nav.module.css'
import SocialsIcons from '../components-page/socialsIcons';
import { useState } from 'react';




function Nav() {

const [showNavLinks, setShowNavLinks] = useState(false);

    const onToggle = () => {
        // console.log(showNavLinks);
        setShowNavLinks(!showNavLinks);
    }

  return (
    <header className={`${styles.navContainer} width-full flex flex-center`}>
      <nav className={`${styles.nav}  width uppercase bg-light`}>
        
        <div className={`${styles.navLogo} bg-navy`}>
            <Link href="/" onClick={onToggle}>
                <Image src='/imgs/Bukidnon.info logo-white.png' alt='Bukidnon.Info' width={60} height={60} />
                <div className={`${styles.navLogoText} flex flex-col flex-mobile flex-col-mobile`}>
                    <span className='text-s bold text-light'>Bukidnon</span>
                    {/* <br /> */}
                    <span className='text-xxxs text-light-200'>enjoy the province</span>
                </div>
            </Link>
        </div>
        <div className={`${styles.showOnMobile} ${styles.humburgerBtn} show-on-mobile flex flex-row flex-space-between-mobile`}>
            <button className={`${styles.button} bg-navy `} onClick={onToggle}><span className='btnSpan'>☰</span>     menu</button>
        </div>

        <div className={`${showNavLinks ? styles.navLinksShow : styles.navLinksHide} ${styles.navLinks} bold`}>
            <ul>
                <li>
                    <Link href="/news" onClick={onToggle}>
                    <span className='spana'>local news</span>
                    <span className='text-xxs bold-light-200'>Latest happenings</span>
                    </Link>
                </li>
                <li>
                    <Link href="/events" onClick={onToggle}>
                    events
                    <span className='text-xxs bold-light-200'>Join the fun</span>
                    </Link>
                </li>
                <li>
                    <Link href="/articles" onClick={onToggle}>
                    Articles
                    <span className='text-xxs bold-light-200'>get useful info</span>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/features">
                    subscribe
                    <span className='text-xxs bold-light-200'>to our newsletter</span>
                    </Link>
                </li> */}
                
                {/*
                <li>
                    <Link href="/features">
                    features
                    <span className='text-xxs bold-light-200'>find what you need</span>
                    </Link>
                </li> */}
            </ul>

            <Link href="/" className={`${styles.reportIssue} lh-2 bold flex flex-col flex-col-mobile bg-cta-hover text-light `}>
                {/* report an issue
                <span className='text-xxs bold-light-200'>or suggestion</span> */}
                suggest a topic
                <span className='text-xxs bold-light-200'>or share a story</span>
            </Link>
        </div>
        <div className={`${styles.quickLink} text-xxs bold text-light-300 flex flex-center uppercase`}>
            {/* <span>
                quick links: 
            </span> */}
        </div>
        <div className={`${styles.quickLinks} text-xxs bold text-light-300 bg-light-200 flex flex-space-between `}>
            <div className={`${styles.quickLinksLeft} flex flex-space-between`}>
                {/* <Link href="/">Request a service</Link>
                <Link href="/about">Administration</Link>
                <Link href="/contact">How Do I</Link>
                <Link href="/contact">Report an issue</Link>
                <Link href="/contact">faqs</Link> */}
            </div>
            <div className={`${styles.quickLinksRight} flex flex-space-between`}>
                {/* <SocialsIcons /> */}
            </div>
        </div>
        
      </nav>
    </header>
  )
}

export default Nav