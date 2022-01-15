import React from 'react';

import Header from '../components/Header';
import SectionAbout from '../components/SectionAbout';
import SectionProducts from '../components/SectionProducts';

function Home() {
  return (
    <>
      <Header />
      <SectionAbout />
      <SectionProducts />
    </>
  );
}

export default Home;