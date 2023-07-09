"use client"
import Image from 'next/image'
import styles from './page.css'
import { Carousel } from './Components/Carousel'
import { CarouselItems } from './Components/CarouselItems'
import { Button } from './Components/Button'
import {Authors} from './Components/Authors'
import { Badge } from './Components/Badge'
import { useEffect } from 'react'
import { getCookie } from './utils/cookieUtils'

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = getCookie('color');
  })
  return (
    <>
    <Badge/>
      <h1>Random Cat Image Carousel</h1>
      <Button />
      <Carousel />
      <Authors />

    </>

  )
}