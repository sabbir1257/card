import BusinessCardTemplate from './component/BusinessCardTemplate';
import BusinessCardTemplate2 from './component/BusinessCardTemplate2';


const userData = {
  name: "David Harrison",
  title: "Creative Director",
  intro: "Signature Intro",
  about:
    "I'm David Harrison, a Creative Director driven by the power of ideas and the art of visual storytelling. With years of experience crafting visual experiences that inspire and connect.",
  profileImage: "/image.jpg",
  logoImage: "/log.jpg",
  backgroundImage: "/bg-image.png",
  contact: {
    phone: "012 5487 663",
    email: "info@yoursite.com",
    website: "www.yoursiteurl.com",
    address: "123 Road State, Country",
    home: "567 Road State, Country",
  },
  social: {
    facebook: "facebook.com/david.harrison",
    instagram: "instagram.com/david.harrison",
    linkedin: "linkedin.com/in/davidharrison",
  },
};

function App() {
  return (
    <div className="container mx-auto ">
      {/* New Template Component */}
      <div>
        {/* <BusinessCardTemplate data={userData} /> */}
        <BusinessCardTemplate2 />
      </div>
    </div>
  )
}

export default App
