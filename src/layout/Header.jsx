import './../assets/styles/home.css'
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className='container m-auto flex justify-center'>
      <ul className='flex'>
        <li className='p-5'>
          <Link to={'/'}>Home</Link>
        </li>
        <li className='p-5'>
          <Link to={'/products'}>Products</Link>
        </li>
        <li className='p-5'>
          <Link to={'/cart'}>Cart</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;
