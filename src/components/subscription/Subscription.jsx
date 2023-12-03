import './../../assets/styles/cardLarge.css'
import SearchIcon from "../icons/SearchIcon.jsx";

function Subscription() {

  return (
    <div className="relative w-full bg-grey-light py-[50px]">
      <div
        className="container m-auto py-[80px] px-[80px] rounded-[5px] background-gradient"
      >
        <div className='bg-white w-[60%] m-auto h-[50px] flex rounded-[50px] my-6 border border-gray-200 overflow-hidden'>
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
