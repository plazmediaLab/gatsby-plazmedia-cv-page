import React from 'react';
// Images 
import imgHeader from '../img/img-header.svg';
// Components
import ContactForm from './contactForm';

const Header = () => {
  return (
    <header className="bg-gray-300">
      <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-5xl font-bold text-teal-500">Hi!... I'm Adrian</h1>
            <p className="font-light text-xl text-gray-800">Graphic designer and frontend programmer with React, Gatsby and GraphQL.</p>
          </div>
          <img src={ imgHeader } alt="Frontend development" style={{height: "300px"}}/>
        </div>
        <ContactForm />
      </div>
    </header>
  );
};

export default Header;