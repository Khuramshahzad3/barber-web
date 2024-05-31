import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Simple validation
    if (name && email && subject && message) {
      alert("Your message has been sent.");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center mb-9 ml-2 mr-2 mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center  sm:p-9 p-3 md:p-10 bg-purple-950 bg-opacity-90 shadow-2xl rounded-lg w-full max-w-lg"
      >
        <h1 className="font-bold text-xl md:text-2xl text-center mb-5 text-white">
          Send A Message To Us!
        </h1>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="h-12 w-[300px] sm:w-full p-4 mb-4 md:mb-8 rounded border border-gray-300"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="h-12 w-[300px] sm:w-full p-4 mb-4 md:mb-8 rounded border border-gray-300"
        />
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="h-12 w-[300px] sm:w-full p-4 mb-4 md:mb-5 rounded border border-gray-300"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
          className="h-24 w-[300px] sm:w-full p-4 mb-4 md:mb-5 rounded border border-gray-300"
        />

        <button
          type="submit"
          className="button w-[300px] sm:w-full bg-indigo-600 text-white py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
