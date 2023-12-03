import '../../assets/styles/home.css'
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import Search from "./Search.jsx";
import CartIcon from "../../components/icons/CartIcon.jsx";
import UserIcon from "../../components/icons/UserIcon.jsx";
import CategoryNavigation from "./CategoryNavigation.jsx";

function Header() {

  return (
    <header className='border-b border-gray-200'>
      <div className='container m-auto flex justify-between'>
        <div className='w-[150px]'>
          <Logo></Logo>
        </div>
        <div className='w-[calc(100%-500px)]'>
          <Search></Search>
        </div>
        <div className='py-8 flex justify-between'>
          <Link to={'/login'} className='flex text-[13px] background-gradient rounded-[5px] text-white px-2 py-1 mr-2'>
            <span className='mr-2 mt-[4px]'>
              <UserIcon></UserIcon>
            </span>
            <span className='mt-[2px]'>
              Sign in
            </span>
          </Link>
          <Link to={'/cart'} className='flex bg-grey-light uppercase rounded-[5px] px-2 py-1'>
            <span  className='mt-[4px]'>
              <CartIcon></CartIcon>
            </span>
          </Link>
        </div>
      </div>
      <div className='container m-auto flex'>
        <CategoryNavigation></CategoryNavigation>
      </div>
    </header>
  )
}

export default Header;
