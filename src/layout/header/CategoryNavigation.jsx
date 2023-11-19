import {Link} from "react-router-dom";

function CategoryNavigation() {

  return (
    <nav>
      <ul className='flex'>
        <li className='pb-4 pr-3'>
          <Link to={'/category'} className='uppercase'>
            category
          </Link>
        </li>
        <li className='pb-4 pr-3'>
          <Link to={'/category'} className='uppercase'>
            category
          </Link>
        </li>
        <li className='pb-4 pr-3'>
          <Link to={'/category'} className='uppercase'>
            category
          </Link>
        </li>
        <li className='pb-4 pr-3'>
          <Link to={'/category'} className='uppercase'>
            category
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default CategoryNavigation;
