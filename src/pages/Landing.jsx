import Header from "../components/Header";
import Landing_ from "../images/Landing_.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import Announcement from "../components/Announcement";
import ContactUs from "../components/ContactUs";
import { SVGGraphic2 } from "../components/Svg_";
import krishna from "../images/Krishna.png";
import Footer from "../components/Footer";

function Landing() {
  return (
    <>
      <Header />
      <Carousel
        autoPlay // Automatically changes slides
        interval={2000} // 2000ms = 2 seconds
        infiniteLoop // Enables round-robin looping
        showThumbs={false} // Hides the thumbnail indicators
        showStatus={false} // Hides the status indicator
        stopOnHover={false} // Keeps auto-playing even on hover
        emulateTouch // Enables swipe gestures on touch devices
      >
        <div>
          <img src={Landing_} alt="First slide" className="h-80" />
        </div>
        <div>
          <img src={Landing_} alt="Second slide" className="h-80" />
        </div>
        <div>
          <img src={Landing_} alt="Third slide" className="h-80" />
        </div>
      </Carousel>
      <div className="bg-customColor h-auto px-2 py-2">
        <div className="flex items-center">
          <SVGGraphic2 />
          <span className="font-bold text-4xl ml-3">Announcements</span>
        </div>

        {/* Responsive grid for announcements */}
        <div className="grid grid-cols-1 grid-cols-custom-2 md:grid-cols-3 lg:grid-cols-4 gap-0 mt-6 pl-4">
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
        </div>
      </div>

      <div className="bg-customColor flex flex-col md:flex-row justify-start items-center py-2">
        {/* Only show image on md and lg screens */}
        <div className="hidden md:flex w-1/3 mr-60 ">
          {/* Adjust min-h as needed */}
          <img
            src={krishna}
            alt="Krishna"
            className="w-full h-full rounded-tr-3xl rounded-br-3xl"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <SVGGraphic2 />
            <span className="font-bold text-4xl ml-3">Contact Us</span>
          </div>
          <ContactUs />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Landing;
