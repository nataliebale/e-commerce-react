import { Link } from "react-router-dom";

function Logo() {

  return (
    <div className='font-bold pt-6 pb-4 text-4xl'>
      <Link to={'/'} className='text-secondary'>E-Store</Link>
    </div>
  )
}

export default Logo;
