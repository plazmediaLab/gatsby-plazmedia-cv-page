import React from 'react';

const ContactForm = () => {
  return (
    <form className="mt-16 text-center">
      <label htmlFor="text-area" className="block text-gray-800 text-sm font-bold mb-2">Tell me what project do you have in mind to develop.</label>
      <div className="flex shadow rounded bg-white border p-2">
        <textarea 
          rows="1"
          id="text-area" 
          className="flex-1 py-2 px-3 text-gray-800 focus:outline-none focus:shadow-outline">
        </textarea>
        <button className="btn ml-4">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;