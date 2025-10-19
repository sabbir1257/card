import {
    FaPhone,
    FaGlobe,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaUser
} from 'react-icons/fa';

const BusinessCardTemplate6 = () => {
    return (
        <div className="flex w-[1100px] h-[400px] bg-white mt-20 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] font-['Arial']">
            {/* Left section - Profile picture with teal background */}
            <div className="w-full md:w-[35%] h-full flex relative">
                <div className="flex items-center justify-center">
                    {/* Main Card Container */}
                    <div className="relative w-[500px] h-[400px] flex items-center justify-center overflow-hidden rounded-2xl shadow-md bg-white">
                        {/* Left gradient background with INNER curved right edge */}
                        <div className="absolute left-0 top-0 h-full w-21/22 bg-gradient-to-r from-[#0a5c77] to-[#02b3a6] [mask-image:radial-gradient(circle_at_right,transparent_47%,transparent_30%,black_0%)]"></div>

                        {/* Hexagon Profile Image */}
                        <div className="relative z-10 flex items-center justify-center">
                            <div className="relative w-[210px] h-[210px]">
                                {/* Outer Border - only right side colored */}
                                <div className="absolute inset-0 [background:linear-gradient(to_right,transparent_50%,#049e94_50%)] [clip-path:polygon(25%_5.77%,75%_5.77%,100%_50%,75%_94.23%,25%_94.23%,0%_30%)]"></div>

                                {/* Inner white mask to create thin right border */}
                                <div className="absolute inset-0 [background:linear-gradient(to_left,transparent_50%,white_50%)] [clip-path:polygon(25%_5.77%,75%_5.77%,100%_50%,75%_94.23%,25%_94.23%,0%_50%)]"></div>

                                {/* Profile Image */}
                                <img
                                    src="/image.jpg"
                                    alt="Profile"
                                    className="absolute inset-[12px] w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover [clip-path:polygon(25%_5.77%,75%_5.77%,100%_50%,75%_94.23%,25%_94.23%,0%_50%)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right section - Contact information */}
            <div className="w-[65%] bg-white p-10 flex flex-col justify-between relative">

                {/* Contact details grid */}
                <div className="grid grid-cols-2 gap-2 my-auto">
                    <div className="flex flex-col gap-4">
                        {/* Name and title */}
                        <div className="flex items-center gap-1">
                            <FaUser className='bg-[#20B2AA] rounded-md mb-30 p-2 mr-2 w-12 h-12 text-white' />
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
                    <div className="relative pl-2">
                        {/* Custom Rounded Dotted Border */}
                        <div className="absolute left-3 top-0 h-full flex flex-col items-center justify-between py-2">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 h-2 bg-[#20B2AA] rounded-full mb-2"
                                ></div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="flex flex-col gap-4 pl-6">
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
