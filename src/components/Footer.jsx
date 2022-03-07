import React from 'react'
import {HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail  } from "react-icons/hi";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { ContainerFooter } from '../style/SeccionStyle';

const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <img className='imagen-header' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1646496203/Reto1-Sprint3/logo_yj2h4n.svg' alt='logo-fylo' />
        <p> <HiOutlineLocationMarker />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua
        </p>
      </div>

      <div>
        <p> <HiOutlinePhone /> +1-543-123-4567</p>
        <p> <HiOutlineMail /> example@fylo.com</p>
      </div>

      <div>
        <p>About Us</p>
        <p>Jobs</p>
        <p>Press</p>
        <p>Blog</p>
      </div>

      <div>
        <p>Contact Us</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>

      <div className='container-iconos'>
        <CgFacebook className='iconos-footer'/>
        <IoLogoTwitter className='iconos-footer' />
        <IoLogoInstagram className='iconos-footer' />
      </div>

    </ContainerFooter>
  )
}

export default Footer;