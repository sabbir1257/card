import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaHome,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaCloudDownloadAlt
} from 'react-icons/fa';

const BusinessCardTemplate = () => {
  return (
    <div className="template-container flex justify-center p-6 bg-gray-50">
      <div className="template-card business-card rounded-2xl">
        {/* Header Section */}
        <div className="relative h-60">
          <img src="/bg-image.png" alt="" className="h-40 w-full object-cover" />

          {/* Small Logo in bottom right */}
          <div className="absolute bottom-24 right-4">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-md">
              <img src="/log.jpg" alt="" className="w-10 h-10 object-contain" />
            </div>
          </div>
          <div className="absolute bottom-8 left-6">
            <div className="w-24 h-24 rounded-lg overflow-hidden shadow-md">
              <img src="/image.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute right-20">
            <h2 className="text-2xl font-bold text-black leading-tight">David Harrison</h2>
            <p className=" text-sm font-medium">Creative Director</p>
            <p className=" text-sm">Signature Intro</p>
          </div>
        </div>
        {/* Profile Picture */}


        {/* Content Section */}
        <div className="p-6 mt-9 ">
          {/* About Me */}
          <div className="mb-6">
            <p className="text-gray-700 text-sm ">
              I'm David Harrison, a Creative Director driven by the power of ideas and the art of visual storytelling. With years of experience...
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 w-full mx-2">
            <ContactItem icon={<FaPhone />} text="012 5487 663"  className=""/>
            <ContactItem icon={<FaEnvelope />} text="info@yoursite.com" />
            <ContactItem icon={<FaGlobe />} text="www.yoursiteurl.com" />
            <ContactItem icon={<FaMapMarkerAlt />} text="123 Road State, Country" />
            <ContactItem icon={<FaHome />} text="567 Road State, Country" />
          </div>

          {/* Social Media */}
          <div className="space-y-3 mt-6 mx-2 w-full">
            <ContactItem icon={<FaFacebook />} text="Facebook" />
            <ContactItem icon={<FaInstagram />} text="Instagram" />
            <ContactItem icon={<FaLinkedin />} text="LinkedIn" />
          </div>

          {/* Save Contact Button */}
          <div className="mx-2 w-full">
            <button className="w-full bg-[#00aba1] text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center text-base hover:bg-[#009a91] transition">
              <FaCloudDownloadAlt className="mr-3 text-lg" />
              SAVE CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center w-full bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 transition px-4 py-3">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#00aba1] text-lg mr-3">
      {icon}
    </div>
    <span className="text-black text-sm font-medium break-words flex-1">{text}</span>
  </div>
);


export default BusinessCardTemplate;
