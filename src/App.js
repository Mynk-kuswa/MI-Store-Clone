import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import ProductReview from "./components/ProductReview.js";
import HotAccessories from "./components/HotAccessories.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data/data.json";
import Heading from "./components/Heading.js";
import StartProduct from "./components/StartProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";

function App() {
  return (
    <div>
      <Router>
        <PreNavbar />
        <Navbar navbar={data}/>
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text={`START OFFERS`} />
        <StartProduct startProduct={data.starProduct} />
        <Heading text={`HOT ACCESSORIES`} />
        <HotAccessoriesMenu />
        <Routes>
          <Route exact path="/music" element={<HotAccessories
              home={data.hotAccessories.music}
              cover={data.hotAccessoriesCover.music}
            />}>     
          </Route>
          <Route exact path="/smartDevice" element={<HotAccessories
              home={data.hotAccessories.smartDevice}
              cover={data.hotAccessoriesCover.smartDevice}
            />}>     
          </Route>
          <Route exact path="/home" element={<HotAccessories
              home={data.hotAccessories.home}
              cover={data.hotAccessoriesCover.home}
            />}>     
          </Route>
            <Route exact path="/lifeStyle" element={<HotAccessories
                home={data.hotAccessories.lifeStyle}
                cover={data.hotAccessoriesCover.lifeStyle}
              />}>     
            </Route>
            <Route exact path="/mobileAccessories" element={<HotAccessories
                home={data.hotAccessories.mobileAccessories}
                cover={data.hotAccessoriesCover.mobileAccessories}
              />}>     
            </Route>
            <Route exact path="/music" element={<HotAccessories
                home={data.hotAccessories.music}
                cover={data.hotAccessoriesCover.music}
              />}>     
            </Route>
        </Routes>
      </Router>
      <Heading text={`PRODUCT REVIEWS`} />
      <ProductReview productReview={data.productReviews}/>
      <Heading text={`VIDEOS`} />
      <Videos videos={data.videos}/>
      <Heading text={`IN THE PRESS`} />
      <Banner banner={data.banner}/>
      <Footer footerData={data.footer}/>
      
    </div>
    
  );
}

export default App;
