import React from 'react'
import Link from 'next/link'
import NavLink from './nav-link'

const links = [
    {href:'/', label: 'Home'},
    {href:'/about', label:'About'},
    {href:'/our-team', label: "Our Team"},
    {href:'/products', label: "Products"}
]

const Header = () => {
  return (
    <header className='bg-gray-200'>
        <nav className='container mx-auto flex justify-between items-center py-4'>
            <Link className='text-2xl font-semibold text-accent-orange' href="/">🛒 Stef's Shop</Link>
            <ul className='flex gap-4'>
                {links.map((link) => (
                    <NavLink key={link.href} href={link.href}>
                        {link.label}
                    </NavLink>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header