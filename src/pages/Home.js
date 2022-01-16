import React from 'react';

import Header from '../components/Header';
import SectionAbout from '../components/SectionAbout';
import SectionProducts from '../components/SectionProducts';
import SectionExperience from '../components/SectionExperience';

function Home() {
  return (
    <>
      <Header />
      <SectionAbout />
      <SectionProducts />
      <SectionExperience />
    </>
  );
}

export default Home;