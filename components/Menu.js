'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Menu = () => {
    let currentName = usePathname()
  return (
    <div>
        <Link replace className = {currentName === '/' ? 'active-link':'pending-link' } href={'/'}>Home</Link> <br />
        <Link replace className = {currentName === '/about' ? 'active-link':'pending-link' }
         href = {{pathname:'/about', query:{name:'book', price:'200Tk'}}}
         >About</Link> <br />
        <Link replace className = {currentName === '/profile' ? 'active-link':'pending-link' } href = {'/profile'}>Profile</Link> <br />
        <Link replace className = {currentName === '/product/brand/mobile/android' ? 'active-link':'pending-link' } href = {'/product/brand/mobile/android'}>Android</Link>
    </div>
  )
}

export default Menu