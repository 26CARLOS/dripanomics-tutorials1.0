import React from 'react';
import Hero from "../components/hero";
import One from "../components/one";
import Faqs from './faqs';
import NewsLetter from "../components/newsLetter"
import Howto from "../components/howto";
import PromoBanner from '../components/promoBanner';

function Home () {
  return (
    <>
      <Hero />
      <PromoBanner/>
      <One />
      <Howto />
      <Faqs/>
      <NewsLetter />
    </>
  )
}

export default Home