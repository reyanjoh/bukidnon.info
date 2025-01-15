import { FaFacebookF , FaInstagram, FaFoursquare  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

const SocialsIcons = () => {
  return (
    <>
        <Link className='socials-icon' href="/"><FaFacebookF /></Link>
        <Link className='socials-icon' href="/about"><FaFoursquare /></Link>
        <Link className='socials-icon' href="/contact"><FaInstagram /></Link>
        <Link className='socials-icon' href="/contact"><FaXTwitter /></Link>
    </>
  )
}

export default SocialsIcons