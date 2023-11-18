import SearchIcon from "../../components/icons/SearchIcon.jsx";

function Logo() {

  return (
    <div className='bg-white h-[40px] flex rounded-[10px] border border-gray-200 overflow-hidden'>
      <input type="text" className='rounded-[10px]'/>
      <SearchIcon></SearchIcon>
    </div>
  )
}

export default Logo;
