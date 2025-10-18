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

const BusinessCardTemplate3 = () => {
    return (
        <div className="w-full max-w-[1200px] flex justify-center gap-10 ">
            <div className="w-1/2 min-w-[300px] max-w-[400px] shadow-xl rounded-2xl overflow-hidden min-h-[600px]">
                {/* Header Section */}
                <div className="relative h-60">
                    <img src="/bg-image.png" alt="" className="h-40 w-full bg-[#00aba1]  object-cover" />

                    {/* Small Logo in bottom right */}
                    <div className="absolute bottom-24 right-4">
                        <div class="relative w-14 h-14  rounded-lg overflow-hidden shadow-md">
                            <img src="/log.jpg" alt="" class="w-full h-full bg-white object-cover" />
                            <div class="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-[#00aba1] border-l-transparent"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6">
                        <div class="relative w-28 h-28 rounded-lg overflow-hidden shadow-md">
                            <img src="/image.jpg" alt="" class="w-full h-full bg-white object-cover" />
                            <div class="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#00aba1] border-l-transparent"></div>
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
                    <p className="!ml-5 text-gray-700 text-sm">
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
                    <div className="space-y-3 ">
                        <ContactItem icon={<FaFacebook />} text="Facebook" />
                        <ContactItem icon={<FaInstagram />} text="Instagram" />
                        <ContactItem icon={<FaLinkedin />} text="LinkedIn" />
                    </div>

                    {/* Save Contact Button */}
                    <div className="!p-2.5 !my-2.5 !mx-5 bg-[#00aba1] text-white font-bold rounded-xl">
                        <button className='w-full flex items-center justify-center gap-1.5'>
                            <FaCloudDownloadAlt />
                            SAVE CONTACT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ContactItem = ({ icon, text }) => (
    <div className="!my-1.5 !mx-5 !p-1.5 border-[#0d9488] flex  items-center bg-white border shadow-sm hover:bg-gray-50 transition px-4 py-3">
        <div class="relative !mr-2.5 w-8 h-8 overflow-hidden shadow-md">
            <div className="text-[#0d9488] flex-shrink-0 w-8 h-8 flex border items-center justify-center  text-lg">
                {icon}
            </div>
            <div class="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-l-[10px] border-t-[#00aba1] border-l-transparent"></div>
        </div>

        <span className="text-black text-sm font-medium break-words flex-1">{text}</span>
    </div>
);


export default BusinessCardTemplate3;
