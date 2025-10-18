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
    FaLinkedinIn
} from 'react-icons/fa';

const BusinessCardTemplate5 = () => {
    return (
        <div className="flex w-[1100px] h-[400px] bg-white mt-20 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] font-['Arial']">
            {/* Left section - Profile picture with teal background */}
            <div className="w-[40%] h-full flex relative overflow-hidden">
                {/* Left main image */}
                <img
                    src="/image.jpg"
                    alt="David John"
                    className=" w-[70%] h-full object-cover"
                />

                {/* Right side gradient or design image */}
                <img
                    src="/blue.png"
                    alt="Design Shape"
                    className="absolute w-64 left-56 top-30 h-36 object-cover"
                />
            </div>


            {/* Right section - Contact information */}
            <div className="w-[60%] bg-white p-10 flex flex-col justify-between relative">
                {/* Name and title */}
                <div className="border-l-4 border-[#20B2AA] pl-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">David John</h1>
                    <p className="text-xl text-gray-800 mb-1 font-normal">Managing Director</p>
                    <p className="text-xl text-gray-800 font-normal">InReality, Inc.</p>
                </div>


                {/* Contact details grid */}
                <div className="grid grid-cols-2 gap-5 mt-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-gray-800 text-base">
                            <div class="relative w-10 h-10  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                                <div className="w-8 h-8 text-[#20B2AA]  flex items-center justify-center">
                                    <FaPhone />
                                </div>
                                <div class="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-l-[15px] border-t-[#00aba1] border-l-transparent"></div>
                            </div>
                            <span>012 5487 663</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-800 text-base">
                            <div class="relative w-10 h-10  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                                <div className="w-8 h-8 text-[#20B2AA]  flex items-center justify-center">
                                    <FaGlobe />
                                </div>
                                <div class="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-l-[15px] border-t-[#00aba1] border-l-transparent"></div>
                            </div>
                            <span>www.yoursiteurl.com</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-gray-800 text-base">
                            <div class="relative w-10 h-10  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                                <div className="w-8 h-8 text-[#20B2AA]  flex items-center justify-center">
                                    <FaMapMarkerAlt />
                                </div>
                                <div class="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-l-[15px] border-t-[#00aba1] border-l-transparent"></div>
                            </div>
                            <span>123 Road State</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-800 text-base">
                            <div class="relative w-10 h-10  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                                <div className="w-8 h-8 text-[#20B2AA]  flex items-center justify-center">
                                    <FaHome />
                                </div>
                                <div class="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-l-[15px] border-t-[#00aba1] border-l-transparent"></div>
                            </div>
                            <span>456 Road State</span>
                        </div>
                    </div>
                </div>

                {/* Social media icons */}
                <div className="flex gap-2 my-5">
                    <div class="relative w-8 h-8  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                        <div className="w-6 h-6 text-[#20B2AA]  flex items-center justify-center">
                            <FaFacebookF />
                        </div>
                        <div class="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-[#00aba1] border-l-transparent"></div>
                    </div>
                    <div class="relative w-8 h-8  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                        <div className="w-6 h-6 text-[#20B2AA]  flex items-center justify-center">
                            <FaInstagram />
                        </div>
                        <div class="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-[#00aba1] border-l-transparent"></div>
                    </div>
                    <div class="relative w-8 h-8  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                        <div className="w-6 h-6 text-[#20B2AA]  flex items-center justify-center">
                            <FaTwitter />
                        </div>
                        <div class="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-[#00aba1] border-l-transparent"></div>
                    </div>
                    <div class="relative w-8 h-8  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                        <div className="w-6 h-6 text-[#20B2AA]  flex items-center justify-center">
                            <FaYoutube />
                        </div>
                        <div class="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-[#00aba1] border-l-transparent"></div>
                    </div>
                    <div class="relative w-8 h-8  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                        <div className="w-6 h-6 text-[#20B2AA]  flex items-center justify-center">
                            <FaWhatsapp />
                        </div>
                        <div class="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-[#00aba1] border-l-transparent"></div>
                    </div>
                    <div class="relative w-8 h-8  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                        <div className="w-6 h-6 text-[#20B2AA]  flex items-center justify-center">
                            <FaTiktok />
                        </div>
                        <div class="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-[#00aba1] border-l-transparent"></div>
                    </div>
                    <div class="relative w-8 h-8  overflow-hidden shadow-md flex items-center justify-center border-1 border-[#20B2AA] ">
                        <div className="w-6 h-6 text-[#20B2AA]  flex items-center justify-center">
                            <FaLinkedinIn />
                        </div>
                        <div class="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-[#00aba1] border-l-transparent"></div>
                    </div>
                </div>

                {/* Save contact button */}
                <div className="absolute bottom-0 right-0 z-[2]">
                    <button className="bg-gradient-to-r from-[#1a9b94] to-[#20B2AA] text-white border-none py-4 px-8 text-base font-bold cursor-pointer uppercase tracking-wider shadow-[0_5px_15px_rgba(32,178,170,0.3)] transition-all duration-300 min-w-[180px] rounded-tl-[20px] hover:from-[#158a83] hover:to-[#1a9b94] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(32,178,170,0.4)]">
                        SAVE CONTACT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BusinessCardTemplate5;
