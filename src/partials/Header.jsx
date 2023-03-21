import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';
import Dropdown from '../utils/Dropdown';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
{/*
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
*/}
              <svg
                  className="w-16 h-16"
                  xmlns="http://www.w3.org/2000/svg"
                  // width="23"
                  // height="23"
                  fill="none"
                  viewBox="0 0 239 239"

              >
                <path fill="#78BD87" d="M0 0H239V239H0z"></path>
                <path
                    fill="#000"
                    d="M38.337 218.201a13.924 13.924 0 01-4.266 2.513 13.96 13.96 0 01-4.894.876c-1.295 0-2.545-.171-3.751-.514a14.35 14.35 0 01-3.37-1.409 14.67 14.67 0 01-2.857-2.228 14.651 14.651 0 01-2.228-2.856 14.963 14.963 0 01-1.428-3.371 14.15 14.15 0 01-.496-3.752c0-1.294.165-2.545.495-3.751.343-1.206.82-2.33 1.429-3.371a14.42 14.42 0 012.228-2.875c.863-.863 1.815-1.6 2.856-2.209a13.874 13.874 0 013.37-1.428 13.646 13.646 0 013.752-.514c1.689 0 3.32.292 4.894.876a13.424 13.424 0 014.266 2.513l-2.895 4.761a8.076 8.076 0 00-2.837-1.981 8.596 8.596 0 00-3.428-.704 8.426 8.426 0 00-3.39.685 8.84 8.84 0 00-2.76 1.867 8.541 8.541 0 00-1.867 2.761 8.377 8.377 0 00-.685 3.37c0 1.194.228 2.317.685 3.371a8.897 8.897 0 001.866 2.742 8.837 8.837 0 002.762 1.866 8.426 8.426 0 003.39.686 8.79 8.79 0 003.427-.686 8.283 8.283 0 002.837-1.999l2.895 4.761zM70.955 221H65.51v-19.5a2.51 2.51 0 00-.229-1.066 2.523 2.523 0 00-.59-.857 2.53 2.53 0 00-.857-.591 2.72 2.72 0 00-1.066-.209c-.381 0-.737.07-1.067.209a2.74 2.74 0 00-.876.591 2.705 2.705 0 00-.78 1.923V221h-5.466v-19.5c0-.381-.07-.736-.21-1.066a2.523 2.523 0 00-.59-.857 2.53 2.53 0 00-.856-.591 2.72 2.72 0 00-1.067-.209c-.38 0-.736.07-1.066.209a2.74 2.74 0 00-.876.591 2.705 2.705 0 00-.78 1.923V221h-5.466v-19.5c0-1.13.21-2.19.628-3.18a8.138 8.138 0 014.36-4.361 8 8 0 013.2-.647 7.97 7.97 0 012.933.552 7.82 7.82 0 012.533 1.561 7.871 7.871 0 012.513-1.561 7.97 7.97 0 012.933-.552c1.13 0 2.19.215 3.18.647a7.868 7.868 0 012.609 1.752 7.865 7.865 0 011.752 2.609c.431.99.647 2.05.647 3.18V221zm5.635-19.119c0-1.13.215-2.19.647-3.18a8.32 8.32 0 014.361-4.361 7.865 7.865 0 013.18-.648h12.53v5.466h-12.53c-.38 0-.736.07-1.066.209a2.74 2.74 0 00-.876.591 2.713 2.713 0 00-.78 1.923c-.001.381.069.743.209 1.085.14.33.33.622.57.876.255.241.547.432.877.572.33.139.685.209 1.066.209h5.465c1.13 0 2.19.216 3.18.648a7.85 7.85 0 012.61 1.751 7.874 7.874 0 011.751 2.609c.432.991.648 2.051.648 3.181a7.877 7.877 0 01-.648 3.18 8.138 8.138 0 01-4.36 4.361c-.99.431-2.05.647-3.18.647h-12.13v-5.465h12.13a2.703 2.703 0 002.723-2.723c0-.381-.07-.737-.21-1.067a2.523 2.523 0 00-.59-.857 2.527 2.527 0 00-.857-.59c-.33-.14-.686-.21-1.067-.21h-5.465c-1.13 0-2.19-.215-3.18-.647a8.58 8.58 0 01-2.609-1.752 8.574 8.574 0 01-1.752-2.609 8.006 8.006 0 01-.647-3.199zm57.124 8.207v-5.465c0-.749-.146-1.454-.438-2.114a5.328 5.328 0 00-1.162-1.752 5.341 5.341 0 00-1.752-1.161 5.163 5.163 0 00-2.113-.438c-.749 0-1.46.146-2.133.438a5.397 5.397 0 00-1.733 1.161 5.606 5.606 0 00-1.181 1.752 5.374 5.374 0 00-.419 2.114v5.465h10.931zM139.179 221h-5.465v-5.465h-10.931V221h-5.446v-16.377c0-1.511.286-2.926.857-4.247a11.166 11.166 0 012.323-3.484 11.067 11.067 0 013.466-2.343 10.72 10.72 0 014.266-.857c1.51 0 2.926.286 4.246.857a11.004 11.004 0 013.485 2.343c.99.99 1.771 2.151 2.342 3.484.572 1.321.857 2.736.857 4.247V221zm34.18 0h-5.446v-19.5c0-.381-.076-.736-.229-1.066a2.512 2.512 0 00-.59-.857 2.53 2.53 0 00-.857-.591 2.717 2.717 0 00-1.066-.209c-.381 0-.737.07-1.067.209-.33.14-.622.337-.876.591a2.7 2.7 0 00-.78 1.923V221h-5.466v-19.5c0-.381-.07-.736-.209-1.066a2.53 2.53 0 00-.591-.857 2.52 2.52 0 00-.857-.591 2.717 2.717 0 00-1.066-.209c-.381 0-.736.07-1.066.209-.33.14-.622.337-.876.591a2.66 2.66 0 00-.572.857c-.139.33-.209.685-.209 1.066V221h-5.465v-19.5c0-1.13.209-2.19.628-3.18a8.28 8.28 0 011.752-2.609 8.14 8.14 0 012.609-1.752 7.999 7.999 0 013.199-.647c1.016 0 1.993.184 2.933.552a7.82 7.82 0 012.532 1.561 7.87 7.87 0 012.514-1.561 7.973 7.973 0 012.933-.552c1.13 0 2.19.215 3.18.647a7.875 7.875 0 012.609 1.752 7.865 7.865 0 011.752 2.609c.431.99.647 2.05.647 3.18V221zm29.038-2.799a13.917 13.917 0 01-4.265 2.513 13.96 13.96 0 01-4.894.876 13.65 13.65 0 01-3.752-.514 14.34 14.34 0 01-3.37-1.409 14.695 14.695 0 01-2.857-2.228 14.659 14.659 0 01-2.228-2.856 14.99 14.99 0 01-1.428-3.371 14.154 14.154 0 01-.495-3.752c0-1.294.165-2.545.495-3.751.343-1.206.819-2.33 1.428-3.371a14.428 14.428 0 012.228-2.875c.864-.863 1.816-1.6 2.857-2.209a13.865 13.865 0 013.37-1.428 13.65 13.65 0 013.752-.514c1.688 0 3.32.292 4.894.876a13.418 13.418 0 014.265 2.513l-2.894 4.761a8.079 8.079 0 00-2.838-1.981 8.591 8.591 0 00-3.427-.704 8.429 8.429 0 00-3.39.685 8.834 8.834 0 00-2.761 1.867 8.542 8.542 0 00-1.866 2.761 8.379 8.379 0 00-.686 3.37 8.38 8.38 0 00.686 3.371 8.831 8.831 0 004.627 4.608 8.43 8.43 0 003.39.686 8.785 8.785 0 003.427-.686 8.285 8.285 0 002.838-1.999l2.894 4.761zM219.381 221h-5.446v-21.842h-8.207v-5.466h21.842v5.466h-8.189V221z"
                ></path>
                <g filter="url(#filter0_d_4_10)">
                  <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeWidth="10"
                      d="M78.5 175v-9c0-6.627-5.373-12-12-12h-40c-6.627 0-12-5.373-12-12V89.5c0-6.627 5.373-12 12-12h40c6.627 0 12-5.373 12-12V25c0-6.627 5.38-12 12.007-12h52.486C149.621 13 155 18.373 155 25v40.5c0 6.627 5.373 12 12 12h42c6.627 0 12 5.373 12 12V142c0 6.627-5.373 12-12 12h-42c-6.627 0-12 5.373-12 12v9"
                  ></path>
                </g>
                <path
                    fill="#000"
                    d="M115 178v3h6v-3h-6zm6-135a3 3 0 10-6 0h6zm0 135V43h-6v135h6z"
                ></path>
                <path
                    stroke="#000"
                    strokeWidth="6"
                    d="M131 63.5s-27.361 5.951-29 19.5c-1.876 15.508 32.81 8.4 32 24-.781 15.035-31.37 6.458-32 21.5-.648 15.491 34.116 8.14 32 23.5-1.833 13.308-29 18.5-29 18.5"
                ></path>
                <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth="3"
                    d="M79.5 235.5L155.5 235.5"
                ></path>
                <defs>
                  <filter
                      id="filter0_d_4_10"
                      width="224.5"
                      height="180"
                      x="5.5"
                      y="8"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4_10"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4_10"
                        result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
         {/*   <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About us</Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li>              
               1st level: hover
              <Dropdown title="Resources">
                 2nd level: hover
                <li>
                  <Link to="/documentation" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Documentation</Link>
                </li>
                <li>
                  <Link to="/support" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Support center</Link>
                </li>
                <li>
                  <Link to="/404" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">404</Link>
                </li>
              </Dropdown>
            </ul>*/}

            {/* Desktop sign in links */}
           {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul>*/}

          </nav>

          {/* Mobile menu */}
         {/* <div className="flex md:hidden">

             Hamburger button
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            Mobile navigation
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"              
              >
                <ul className="px-5 py-2">
                  <li>
                    <Link to="/pricing" className="flex text-gray-600 hover:text-gray-900 py-2">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/about" className="flex text-gray-600 hover:text-gray-900 py-2">About us</Link>
                  </li>
                  <li>
                    <Link to="/tutorials" className="flex text-gray-600 hover:text-gray-900 py-2">Tutorials</Link>
                  </li>  
                  <li>
                    <Link to="/blog" className="flex text-gray-600 hover:text-gray-900 py-2">Blog</Link>
                  </li>                                  
                  <li className="py-2 my-2 border-t border-b border-gray-200">
                    <span className="flex text-gray-600 hover:text-gray-900 py-2">Resources</span>
                    <ul className="pl-4">
                      <li>
                        <Link to="/documentation" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Documentation</Link>
                      </li>
                      <li>
                        <Link to="/support" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Support center</Link>
                      </li>
                      <li>
                        <Link to="/404" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/signin" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center">Sign in</Link>
                  </li>
                  <li>
                    <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2">
                      <span>Sign up</span>
                      <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fillRule="nonzero" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </Transition>
            </div>

          </div>*/}

        </div>
      </div>
    </header>
  );
}

export default Header;
