'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "../lib/utils";

interface NavLinkProps {
    href:string,
    children: React.ReactNode
}

const NavLink = ({href, children} : Readonly<NavLinkProps>) => {
  const pathName = usePathname()
  const isActive = href === "/" ? pathName === "/" : pathName.startsWith(href)
    return (
   <li>
        <Link href={href} className={cn(isActive ? 'opacity-100 font-semibold' : 'opacity-50 hover:opacity-100')}>{children}</Link>
   </li>
  )
}

export default NavLink