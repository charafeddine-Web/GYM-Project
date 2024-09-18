import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';
import Services from './Services';
import Client from './Client';
import About from './About';
import Comment from './Comment';
import Packes from './Packes';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <NavBar />
      <main className="flex-grow">
        <section id="header">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="packs">
          <Packes />
        </section>
        <section id="client">
          <Client />
        </section>
        <section id="comment">
          <Comment />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
