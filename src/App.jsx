import BusinessCardTemplate from './component/BusinessCardTemplate';
import BusinessCardTemplate2 from './component/BusinessCardTemplate2';
import BusinessCardTemplate3 from './component/BusinessCardTemplate3';
import BusinessCardTemplate4 from './component/BusinessCardTemplate4';
import BusinessCardTemplate5 from './component/BusinessCardTemplate5';

function App() {
  return (
    <div className="container mx-auto ">
      {/* New Template Component */}
      <div>
        {/* <BusinessCardTemplate data={userData} /> */}
        {/* <BusinessCardTemplate2 /> */}
        {/* <BusinessCardTemplate3/> */}
        {/* <BusinessCardTemplate4/> */}
        <BusinessCardTemplate5/>
      </div>
    </div>
  )
}

export default App
