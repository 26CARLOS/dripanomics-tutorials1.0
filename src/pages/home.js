import React from 'react';
import Hero from "../components/hero";
import One from "../components/one";
import Faqs from './faqs';
import NewsLetter from "../components/newsLetter"
import Howto from "../components/howto";

function Home () {
  return (
    <>
      <Hero />
      <One />
      <Howto />
      <Faqs/>
      <NewsLetter />
    </>
  )
}

export default Home