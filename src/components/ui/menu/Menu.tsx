'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';


import ActiveLink from '../active-link/ActiveLink';
import { useStore } from '@/store/estado';

// const cerrarMenu = useStore( state => state.cerrarMenu)


const Menu = () => {

  

  const pathName = [
    {href: '/', label: 'Inicio'},
    {href: '/about', label: 'Dariana Ortiz'},
    { href: '/tratamientos', label: 'Tratamientos', submenu: [
      { href: '/tratamientos/corporales', label: 'Corporales' },
      { href: '/tratamientos/faciales', label: 'Faciales' },
    ]},
    {href: '/contacto', label: 'Contacto'},
    {href: '/pedircita', label: 'Citas'},
  ]

  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => {setMenuOpen(!menuOpen)};

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <header className="sticky top-0 mx-auto px-4 bg-fondo2">
      <nav className="flex">
        <div className="container mx-auto flex items-center justify-between p-1">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={'/'}>
              <Image
                src="/fotospng/logo.png"
                alt="Logo"
                width={140}
                height={90}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Menú de Navegación */}
          <div className="hidden md:flex space-x-4">
            {pathName.map((navItem) =>
              navItem.label === 'Tratamientos' ? (
                <div key={navItem.href} className="relative">
                  
                  <button

                    className="m-2 p-2 rounded-md transition-all hover:bg-hover"
                    onClick={toggleSubmenu}
                    >
                    {navItem.label}

                  </button>

                  
                  {submenuOpen && (

                    <div className="absolute top-full bg-white border border-gray-200 rounded-md shadow-lg" 
                    >
                      <ul className="">
                        <li className="m-2 p-2 rounded-md transition-all hover:bg-cyan-400">
                          <Link href="/tratamientos/corporales" className='m-2 p-2 rounded-md transition-all hover:bg-cyan-400'>Corporal</Link>
                        </li>
                        <li className="m-2 p-2 rounded-md transition-all hover:bg-cyan-400">
                          <Link href="/tratamientos/faciales" className='m-2 p-2 rounded-md transition-all hover:bg-cyan-400'>Facial</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <ActiveLink key={navItem.href} {...navItem} />
              )
            )}
          </div>


          {/* Botón de Menú para pantallas pequeñas */}
          <div className="md:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {menuOpen && (
          <div className="md:hidden flex justify-end pt-28">
            <div className="flex flex-col space-y-2 p-2 absolute bg-fondonav rounded-[12px] border-gray-800">
              {pathName.map((navItem) =>
                navItem.label === 'Tratamientos' ? (
                  <div key={navItem.href}>
                    <button
                      className="m-2 p-2 rounded-md transition-all hover:bg-hover"
                      onClick={toggleSubmenu}
                    >
                      {navItem.label}
                    </button>
                    {submenuOpen && (
                      <div className="pl-4">
                        <ul className="flex flex-col space-y-2">
                          <li>
                            <Link href="/tratamientos/corporales"
                            className='m-2 p-2 rounded-md transition-all hover:bg-cyan-400'>Corporal</Link>
                          </li>
                          <li>
                            <Link href="/tratamientos/faciales"
                            className='m-2 p-2 rounded-md transition-all hover:bg-cyan-400'>Facial</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <ActiveLink key={navItem.href} {...navItem} />
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Menu;





         {/* <Link href={'/'} className={`m-2 p-2 rounded-md transition-all hover:bg-cyan-400 ${({} )}` }>Home</Link>
            <Link href={'/about'} className=' m-2 p-2 rounded-md transition-all hover:bg-cyan-400'>Sobre mi</Link>
            <Link href={'/tratamientos'} className='m-2 p-2 rounded-md transition-all hover:bg-cyan-400' >Tratamientos</Link>
            <Link href={'/contacto'} className='m-2 p-2 rounded-md transition-all hover:bg-cyan-400' >Contacto</Link>
            <Link href={'/pedircita'} className='m-2 p-2 rounded-md transition-all hover:bg-cyan-400' >Pedir Citas</Link> */}