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
    <div className="template-container flex justify-center gap-10 bg-gray-50">
      <div className="template-card business-card rounded-2xl">
        {/* Header Section */}
        <div className="relative h-60">
          <img src="/bg-image.png" alt="" className="h-40 w-full object-cover" />

          {/* Small Logo in bottom right */}
          <div className="absolute bottom-24 right-4">
            <div className="w-14 h-14 bg-white rounded flex items-center justify-center shadow-md">
              <img src="/log.jpg" alt="" className="w-14 h-14 object-contain" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md">
              <img src="/image.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute right-32">
            <h2 className="text-[18px] font-bold text-black leading-tight">David Harrison</h2>
            <p className=" text-sm font-medium">Creative Director</p>
            <p className=" text-sm">Signature Intro</p>
          </div>
        </div>
        {/* Profile Picture */}


        {/* Content Section */}
        <div>
          {/* About Me */}
          <p className="about_section">
            I'm David Harrison, a Creative Director driven by the power of ideas and the art of visual storytelling. With years of experience...
          </p>

          {/* Contact Information */}
          <div className="space-y-3">
            <ContactItem icon={<FaPhone />} text="012 5487 663" className="" />
            <ContactItem icon={<FaEnvelope />} text="info@yoursite.com" />
            <ContactItem icon={<FaGlobe />} text="www.yoursiteurl.com" />
            <ContactItem icon={<FaMapMarkerAlt />} text="123 Road State, Country" />
            <ContactItem icon={<FaHome />} text="567 Road State, Country" />
          </div>

          {/* Social Media */}
          <div className="space-y-3 mt-6">
            <ContactItem icon={<FaFacebook />} text="Facebook" />
            <ContactItem icon={<FaInstagram />} text="Instagram" />
            <ContactItem icon={<FaLinkedin />} text="LinkedIn" />
          </div>

          {/* Save Contact Button */}
          <div className="save_contact_div">
            <button  className='w-full save_contact_button'>
              <FaCloudDownloadAlt />
              SAVE CONTACT
            </button>
          </div>
        </div>
      </div>
      <div className="template-card business-card rounded-2xl">
        {/* Header Section */}
        <div className="relative h-60">
          <img src="/bg-image.png" alt="" className="h-40 w-full object-cover" />

          {/* Small Logo in bottom right */}
          <div className="absolute bottom-24 right-4">
            <div className="w-14 h-14 bg-white rounded flex items-center justify-center shadow-md">
              <img src="" alt="" className="w-14 bg-[#00aba1] h-14 object-contain" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md">
              <img src="" alt="" className="w-full bg-[#00aba1] h-full object-cover" />
            </div>
          </div>
          <div className="absolute right-32">
            <h2 className="text-[18px] font-bold text-black leading-tight">David Harrison</h2>
            <p className=" text-sm font-medium">Creative Director</p>
            <p className=" text-sm">Signature Intro</p>
          </div>
        </div>
        {/* Profile Picture */}


        {/* Content Section */}
        <div>
          {/* About Me */}
          <p className="about_section">
            I'm David Harrison, a Creative Director driven by the power of ideas and the art of visual storytelling. With years of experience...
          </p>

          {/* Contact Information */}
          <div className="space-y-3">
            <ContactItem icon={<FaPhone />} text="Phone" className="" />
            <ContactItem icon={<FaEnvelope />} text="E-mail" />
            <ContactItem icon={<FaGlobe />} text="Website" />
            <ContactItem icon={<FaMapMarkerAlt />} text="Office Address" />
            <ContactItem icon={<FaHome />} text="Home Address" />
          </div>

          {/* Social Media */}
          <div className="space-y-3 mt-6">
            <ContactItem icon={<FaFacebook />} text="Facebook" />
            <ContactItem icon={<FaInstagram />} text="Instagram" />
            <ContactItem icon={<FaLinkedin />} text="LinkedIn" />
          </div>

          {/* Save Contact Button */}
          <div className="save_contact_div">
            <button  className='w-full save_contact_button'>
              <FaCloudDownloadAlt />
              SAVE CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, text }) => (
  <div className="contact_item flex  items-center bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 transition px-4 py-3">
    <div className="icon flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#00aba1] text-lg mr-3">
      {icon}
    </div>
    <span className="text-black text-sm font-medium break-words flex-1">{text}</span>
  </div>
);


export default BusinessCardTemplate;
