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
        <Logo></Logo>
        <Search></Search>
        <div>
          <Link to={'/login'}>
            <UserIcon></UserIcon>
            Login
          </Link>
          <Link to={'/cart'}>
            <CartIcon></CartIcon>
            Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
