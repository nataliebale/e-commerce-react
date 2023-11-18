import '../../assets/styles/home.css'
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import Search from "./Search.jsx";
import CartIcon from "../../components/icons/CartIcon.jsx";
import UserIcon from "../../components/icons/UserIcon.jsx";

function Header() {

  return (
    <header className='bg-grey-light border-b border-gray-200'>
      <div className='container m-auto flex justify-between'>
        <div className='w-[150px]'>
          <Logo></Logo>
        </div>
        <div className='w-[calc(100%-500px)]'>
          <Search></Search>
        </div>
        <div className='w-[150px] py-9 flex justify-between'>
          <Link to={'/login'} className='flex'>
            <UserIcon className='mr-2'></UserIcon>
            Login
          </Link>
          <Link to={'/cart'} className='flex'>
            <CartIcon className='mr-2'></CartIcon>
            Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
