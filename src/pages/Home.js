import React from 'react';

import Header from '../components/Header';
import SectionAbout from '../components/SectionAbout';
import SectionProducts from '../components/SectionProducts';
import SectionExperience from '../components/SectionExperience';
import SectionMaterials from '../components/SectionMaterials';
import SectionTestimonials from '../components/SectionTestimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <SectionAbout />
      <SectionProducts />
      <SectionExperience />
      <SectionMaterials />
      <SectionTestimonials />
      <Footer />
    </>
  );
}

export default Home;