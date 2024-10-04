import { SVGFooter } from "./Svg_";
import { FaSquareFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import foote from '../images/Footer.png';

function Footer() {
  return (
    <>
      <div className="relative bg-footer-gradient flex item-top py-8 px-6">
        <div className="flex flex-col z-10">
          <SVGFooter />
          <div className="flex text-white mt-2 mr-5">
            <FaYoutube className="w-8 h-6" />
            <FaSquareFacebook className="w-8 h-6" />
            <FaInstagram className="w-8 h-6" />
            <FaXTwitter className="w-8 h-6" />
          </div>
        </div>

        <div className="flex flex-col text-white mr-5 ">
          <p className="mb-2">Contact Us</p>
          <p>email: info@iyf.com</p>
          <p>phone: +919199191</p>
          <p>
            Address: <br />
            1/101 Sapru Road <br />
            Jagatpura, Prayagraj, UP <br />
            343456
          </p>
        </div>

        <div className="flex flex-col text-white">
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">Terms & Conditions</p>
          <p className="mb-2">Copyright © Iskcon Youth Service</p>
        </div>

        {/* Hide the image on small screens, show on md and larger screens */}
        <div className="absolute bottom-0 right-0 h-auto z-0 overflow-hidden hidden md:block">
          <img src={foote} alt="Footer Image" className="w-auto h-auto" />
        </div>
      </div>
    </>
  );
}

export default Footer;
