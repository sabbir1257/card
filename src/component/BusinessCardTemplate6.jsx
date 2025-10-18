import {
    FaPhone,
    FaGlobe,
    FaMapMarkerAlt,
    FaHome,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaWhatsapp,
    FaTiktok,
    FaLinkedinIn,
    FaUser
} from 'react-icons/fa';
import BlueAxisLogo from './BlueAxisLogo';

const BusinessCardTemplate6 = () => {
    return (
        <div className="flex w-[1100px] h-[400px] bg-white mt-20 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] font-['Arial']">
            {/* Left section - Profile picture with teal background */}
            <div className="w-[35%] h-full flex relative">
                {/* Left main image */}
                <img
                    src="/image.jpg"
                    alt="David John"
                    className=" h-full rounded-r-[40px] object-cover"
                />
            </div>

            {/* Right section - Contact information */}
            <div className="w-[65%] bg-white p-10 flex flex-col justify-between relative">

                {/* Contact details grid */}
                <div className="grid grid-cols-2 gap-2 my-auto">
                    <div className="flex flex-col gap-4">
                        {/* Name and title */}
                        <div className="flex items-center gap-1">
                            <FaUser className='bg-[#20B2AA] rounded-md mb-30 p-2 w-12 h-12 text-white' />
                            <div>
                                <h1 className="text-4xl font-bold text-gray-800 ">David John  </h1>
                                <p className="text-xl text-gray-800 font-normal">Managing Director</p>
                                <p className="text-xl text-gray-800 font-normal">InReality, Inc.</p>
                                <div className='border-b-4 border-[#20B2AA] pb-2 w-24'></div>
                                {/* Social media icons */}
                                <div className="flex gap-2 my-5">
                                    {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube,].map((Icon, index) => (
                                        <div key={index} className="relative w-8 h-8 overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA]">
                                            <div className="w-6 h-6 text-[#20B2AA] flex items-center justify-center">
                                                <a href={''}><Icon /></a>
                                            </div>
                                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-[#00aba1] border-l-transparent"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 border-l-4 border-dotted border-[#20B2AA] pl-6">
                        {/* Phone */}
                        <div className="flex items-center gap-3 text-gray-800 text-base">
                            <div className="w-10 h-10 bg-[#20B2AA] rounded-md flex items-center justify-center text-white">
                                <FaPhone size={20} />
                            </div>
                            <span>012 5487 663</span>
                        </div>

                        {/* Website */}
                        <div className="flex items-center gap-3 text-gray-800 text-base">
                            <div className="w-10 h-10 bg-[#20B2AA] rounded-md flex items-center justify-center text-white">
                                <FaGlobe size={20} />
                            </div>
                            <span>www.yoursiteurl.com</span>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-3 text-gray-800 text-base">
                            <div className="w-10 h-10 bg-[#20B2AA] rounded-md flex items-center justify-center text-white">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <span>123 Road State, Country</span>
                        </div>
                    </div>

                </div>
                {/* Save contact button */}
                <div className="absolute bottom-0 right-60 ">
                    <button className=" bg-gradient-to-r from-[#1a9b94] to-[#20B2AA] text-white border-none py-4 px-8 text-base font-bold cursor-pointer uppercase tracking-wider shadow-[0_5px_15px_rgba(32,178,170,0.3)] transition-all duration-300 min-w-[180px] rounded-t-[20px] hover:from-[#158a83] hover:to-[#1a9b94] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(32,178,170,0.4)]">
                        SAVE CONTACT
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-18 h-64 bg-[#20B2AA] rounded-l-full border-[13px] border-gray-300 border-r-0"></div>
            </div>



        </div>
    )
}

export default BusinessCardTemplate6;