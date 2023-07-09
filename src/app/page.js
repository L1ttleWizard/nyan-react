import Image from 'next/image'
import styles from './page.css'
import { Carousel } from './Components/Carousel'
import { Authors } from './Components/Authors'
import { CatAPI } from './utils/data'
import { CarouselItems } from './Components/CarouselItems'

export default function Home() {
  async function catApi() {
    let apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';
    const response = await fetch(apiUrl);
    const data = await response.json();
    const urls = data.map(image => image.url);

  }



  return (
    <>
      <h1>Random Cat Image Carousel</h1>
      <button>toggle death mode</button>
      <Carousel/>
    </>

  )
}
``