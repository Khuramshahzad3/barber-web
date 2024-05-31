import React from "react";
import Hero from "./Hero";
import aboutimg from "./Assets/4.jpg";
import ContactForm from "./ContackForm";
function Contact() {
  return (
    <div>
      <Hero heroImg={aboutimg} title="Contact Us" />
      <ContactForm />
    </div>
  );
}

export default Contact;
