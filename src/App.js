import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Resume from './components/Resume';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} ></Header>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* <NavTabs /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}
