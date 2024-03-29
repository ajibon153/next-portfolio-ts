import type { NextPage } from 'next';

import Header from '../components/Head/Header';
import Home from '../components/Hero/Home';
import Features from '../components/Features/Features';
import Portfolio from '../components/Portfolio/Portfolio';
import Resume from '../components/Resume/Resume';
import Testimonial from '../components/Testimonial/Testimonial';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer';

const App: NextPage = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
