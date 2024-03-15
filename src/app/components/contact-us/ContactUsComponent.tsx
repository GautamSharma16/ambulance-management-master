// AboutUsComponent.tsx
import React from 'react';

const AboutUsComponent: React.FC = () => {
  return (
    <div className="bg-red-500 text-white min-h-screen">
      <div className="flex flex-col items-center justify-center">

        {/* Banner Section with Animation */}
        <div className="relative mb-8 w-full">
          <img
            src="/assets/icon/aboutbanner_ambulance.jpg" // Replace with your ambulance-themed image
            alt="About Ambulance Management"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className='bg-lightpink-600 p-4 rounded-2xl bg-opacity-70'>
              <h1 className="text-4xl font-bold mb-2">About Ambulance Management App</h1>
              <p>Your Trusted Partner in Emergency Medical Services</p>
            </div>
          </div>
        </div>

        {/* Card Sections with FadeIn Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-10">

          {/* Description Card */}
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
            <p className="text-white">
              At Ambulance Services, we are dedicated to providing rapid and reliable emergency medical services. With a focus on saving lives, we strive to redefine the emergency response experience.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-white">
              Our mission is to ensure timely and effective emergency medical response. We aim to connect healthcare providers, patients, and emergency personnel seamlessly, fostering a safer community.
            </p>
          </div>

          {/* Services Card */}
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
            <p className="text-white">
              - Rapid Ambulance Dispatch <br />
              - Emergency Medical Assistance <br />
              - Real-time Patient Monitoring <br />
              - Integrated Health Information Systems
            </p>
          </div>

        </div>

        {/* Buttons Section with FadeIn Animation */}
        <div className="flex my-10 gap-10">

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
            Request Emergency Assistance
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md">
            Explore Ambulance Services
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md">
            Learn About Emergency Protocols
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded shadow-md">
            Join our Medical Network
          </button>

        </div>

        {/* Testimonials Section with Animation */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">What People Say About Our Ambulance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">

            {/* Testimonial 1 */}
            <div className="bg-gray-800 p-6 rounded-md shadow-md">
              <p className="text-white">"Quick and efficient ambulance service! They saved my life during a critical situation."</p>
              <p className="font-bold">- John Doe</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-800 p-6 rounded-md shadow-md">
              <p className="text-white">"Highly professional team and state-of-the-art ambulances. Grateful for their prompt response."</p>
              <p className="font-bold">- Mary Smith</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-800 p-6 rounded-md shadow-md">
              <p className="text-white">"The ambulance app is a lifesaver! Easy to use and connects you with emergency services in no time."</p>
              <p className="font-bold">- Robert Johnson</p>
            </div>

          </div>
        </div>

        {/* Quotes Section with Animation */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Inspirational Quotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">

            {/* Quote 1 */}
            <div className="bg-gray-800 p-6 rounded-md shadow-md">
              <blockquote>"Saving one life is like saving the entire world."</blockquote>
              <p className="font-bold">- Anonymous</p>
            </div>

            {/* Quote 2 */}
            <div className="bg-gray-800 p-6 rounded-md shadow-md">
              <blockquote>"In emergencies, every second counts. We're here to make those seconds count for you."</blockquote>
              <p className="font-bold">- Ambulance Services Team</p>
            </div>

            {/* Quote 3 */}
            <div className="bg-gray-800 p-6 rounded-md shadow-md">
              <blockquote>"The best ambulance is the one that reaches you in time."</blockquote>
              <p className="font-bold">- Emergency Response Moto</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsComponent;