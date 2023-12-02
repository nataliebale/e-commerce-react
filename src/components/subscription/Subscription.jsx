import './../../assets/styles/cardLarge.css'
import bannerImage from '../../assets/images/gradient-black-background-with-wavy-lines_23-2149138436.jpg';
import SearchIcon from "../icons/SearchIcon.jsx";

function Subscription() {

  return (
    <div className="relative w-full bg-grey-light py-[50px]">
      {/*<div className="absolute w-full bg-grey-light h-[150%] t-[200px] z-[-1]"></div>*/}
      <div
        className="container m-auto py-[80px] px-[80px] rounded-[5px] background-gradient"
      >
        <div className='bg-white h-[50px] flex rounded-[50px] my-6 border border-gray-200 overflow-hidden'>
          <input type="text" placeholder='Search...' className='rounded-[50px] px-6 w-[calc(100%-36px)] block'/>
          <div className='w-[40px] h-[40px] py-[12px]'>
            <SearchIcon></SearchIcon>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription;
