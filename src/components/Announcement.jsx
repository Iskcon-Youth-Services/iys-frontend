import Announce_1 from '../images/Announce_1.png'
import Announce_2 from '../images/Announce_2.png'
import { SVGGraphic } from './Svg_';
function Announcement(){
    return (<>
    <div className="relative p-[1px] rounded-lg bg-primary-gradient mb-8 w-60 h-30 mr-2 ">
          {/* SVG at the top */}
          <div className="absolute -top-2 left-0 right-0">
            <SVGGraphic/>
          </div>

          <div className="bg-[#FFFAF1]  rounded-xl shadow-md pt-2 px-2">
            
            <img src={Announce_2} alt=""  className='rounded-2xl w-full h-15' />
            <div className='flex flex-col text-[#89714C]'>
                <p>Date: 13 Sep</p>
                <p>Time: 5:30 PM</p>
                <p>Venue: Krishna Balram Hall</p>
            </div>
          </div>

          {/* SVG at the bottom */}
          <div className="absolute -bottom-2 left-0 right-0">
            <SVGGraphic/>
          </div>
        </div>
    </>)

}
export default Announcement;