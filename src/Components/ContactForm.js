import React, { useState } from "react";

const contactForm = document.querySelector('form');
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
      event.preventDefault()
      contactForm.reset()
    setTimeout(() => {
    setSubmitted(true);
    }, 100);
  };

  return (
    <div className=" extend form-container py-6" id="contact">
    <h3 className="headers">Contact Us</h3>
    <form
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    { submitted && 
    <>
        <div className="text-2xl">Thank you for contacting us!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>}
    </div>
  );
};

export default ContactForm;