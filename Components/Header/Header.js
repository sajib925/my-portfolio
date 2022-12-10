import React, { useRef, useState } from 'react'
import StyledHeader from './StyledHeader';
import Container from './../Container/Container';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../Images/header/sajib.svg"
import {FaFacebookF} from "react-icons/fa"
import {RiBehanceFill} from "react-icons/ri"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaInstagramSquare} from "react-icons/fa"

const Header = () => {
  const closeMenu = useRef();
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuClick = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
    closeMenu.current.classList.toggle("closeMobileMenu");
  };
  return (
    <StyledHeader>
      <Container>
        <div className="inner">
          <div className="logo">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <div className="details">
            <div className={mobileMenu ? "menu open__menu" : "menu close__menu" }>
              <ul className="anchor__nav">
                <li className="anchor__nav__item">
                  <Link href="/" className="anchor__nav__item__link">
                    Home
                  </Link>
                </li>
                <li className="anchor__nav__item">
                  <Link href="/" className="anchor__nav__item__link">
                    About
                  </Link>
                </li>
                <li className="anchor__nav__item">
                  <Link href="/" className="anchor__nav__item__link">
                    Service
                  </Link>
                </li>
                <li className="anchor__nav__item">
                  <Link href="/" className="anchor__nav__item__link">
                    Portfolio
                  </Link>
                </li>
                <li className="anchor__nav__item">
                  <Link href="/" className="anchor__nav__item__link">
                    Blog
                  </Link>
                </li>
                <li className="anchor__nav__item">
                  <Link href="/" className="anchor__nav__item__link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="social">
              <ul className="icons">
                <li className="icons__item">
                  <Link href="/" className="icons__item__link">
                    <FaFacebookF size={16} />
                  </Link>
                </li>
                <li className="icons__item">
                  <Link href="/" className="icons__item__link">
                    <AiOutlineTwitter size={20} />
                  </Link>
                </li>
                <li className="icons__item">
                  <Link href="/" className="icons__item__link">
                    <RiBehanceFill size={20} />
                  </Link>
                </li>
                <li className="icons__item">
                  <Link href="/" className="icons__item__link">
                    <FaInstagramSquare size={20} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="trigger" onClick={mobileMenuClick}>
            <div ref={closeMenu} className="toggle__menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
}

export default Header

;