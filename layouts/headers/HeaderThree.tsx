"use client"
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import Link from 'next/link';
import UseSticky from '@/hooks/UseSticky';
import Search from '@/common/Search';
import OffCanvas from '@/common/OffCanvas';
import Image from 'next/image';

const HeaderThree = () => {
  const { sticky } = UseSticky()
  const [open, setOpen] = useState(false)
  const [openCanvas, setOpenCanvas] = useState(false)

  return (
    <>
      <header className="header-section-3">
        <div id="header-sticky" className={`header-3 ${sticky ? "sticky" : ""}`}>
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">

                {/* Logo 1 */}
                <Link href="/" className="header-logo">
                  <Image
                    src="/assets/img/logo/white-logo-3.svg"
                    alt="logo-img"
                    width={160}
                    height={50}
                    priority
                  />
                </Link>

                {/* Logo 2 */}
                <Link href="/" className="header-logo-2">
                  <Image
                    src="/assets/img/logo/black-logo-3.svg"
                    alt="logo-img"
                    width={160}
                    height={50}
                    priority
                  />
                </Link>

                <div className="header-left">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="header__hamburger d-xl-none my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => setOpenCanvas(!openCanvas)}
                    >
                      <i className="fas fa-bars"></i>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      <Search open={open} setOpen={setOpen} />
      <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
    </>
  );
};

export default HeaderThree;
