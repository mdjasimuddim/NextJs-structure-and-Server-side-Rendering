'use client'
import React from 'react'
import Menu from '../../../../../../components/Menu'
import {useRouter} from 'next/navigation'

const page = () => {
    let router = useRouter();
    const goTo = () => {
        router.push('/profile')
    }
  return (
    <div>
        <Menu />
        <h1>This is our Android Page </h1>
        <button onClick={goTo}>Go to Profile Page</button>
    </div>
  )
}

export default page