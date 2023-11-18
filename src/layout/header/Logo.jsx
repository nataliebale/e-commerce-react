import { Link } from "react-router-dom";

function Logo() {

  return (
    <div className='font-bold py-4 text-4xl w-[50%]'>
      <Link to={'/'} className='text-secondary'>E-Store</Link>
    </div>
  )
}

export default Logo;
