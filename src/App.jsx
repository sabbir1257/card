import BusinessCardTemplate from './component/BusinessCardTemplate';
import BusinessCardTemplate2 from './component/BusinessCardTemplate2';
import BusinessCardTemplate3 from './component/BusinessCardTemplate3';

function App() {
  return (
    <div className="container mx-auto ">
      {/* New Template Component */}
      <div>
        {/* <BusinessCardTemplate data={userData} /> */}
        {/* <BusinessCardTemplate2 /> */}
        <BusinessCardTemplate3/>
      </div>
    </div>
  )
}

export default App
