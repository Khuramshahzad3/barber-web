import React, { useState } from 'react';

function NewsLetter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
     alert('Thank you for subscribing!');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className='newsletter flex flex-col items-center justify-center w-4/5 h-[40vh] mx-auto mb-[150px] bg-gradient-to-b from-[#ec52f7]
     to-[#e1ffea22] gap-8    sm:gap-5 sm:mb-[120px] sm:p-[0_80px] md:gap-5 md:mb-[60px] md:p-[0_80px] lg:gap-5 lg:mb-[70px] lg:p-0 lg:h-[35vh] lg:mb-[70px] xl:gap-5 xl:mb-[150px] xl:p-[0_140px] '>
      <h1 className="text-gray-700 -mt-[20px] sm:-mt-[100px] lg:mt-2 lg:text-3xl sm:text-2xl text-5xl font-semibold -pt-13 sm:text-4xl sm:pt-24 md:text-3xl md:pt-20  lg:pt-10 xl:text-5xl xl:pt-28 text-lg ">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-gray-700 -mt-6 text-lg text-sm sm:text-base md:text-sm md:mt-1 lg:text-xl  xl:text-lg">
        Subscribe to our newsletter and stay updated
      </p>
      <form onSubmit={handleSubscribe} className="flex items-center justify-between bg-white w-[300px] h-[40px] rounded-full border  border-gray-300 sm:w-[500px] sm:h-[50px] md:w-[500px] md:h-[50px] lg:w-[400px] lg:h-[40px] xl:w-[630px] xl:h-[70px]">
        <input 
          className="w-[100px] ml-7 border-none outline-none text-gray-600 font-poppins text-base sm:w-[300px] md:w-[300px] lg:w-[300px] lg:text-sm xl:w-[500px] xl:text-base" 
          type='email' 
          placeholder='Your Email id' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button 
          type="submit" 
          className="w-[80px] h-[40px] text-sm rounded-full bg-black text-white text-base cursor-pointer sm:w-[160px] sm:h-[60px] md:w-[120px] md:h-[50px] lg:w-[100px] lg:h-[40px] xl:w-[210px] xl:h-[70px]">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
