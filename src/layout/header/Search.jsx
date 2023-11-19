import SearchIcon from "../../components/icons/SearchIcon.jsx";

function Logo() {

  return (
    <div className='bg-white h-[50px] flex rounded-[50px] my-6 border border-gray-200 overflow-hidden'>
      <input type="text" placeholder='Search...' className='rounded-[50px] px-6 w-[calc(100%-36px)] block'/>
      <div className='w-[40px] h-[40px] py-[12px]'>
        <SearchIcon></SearchIcon>
      </div>
    </div>
  )
}

export default Logo;
