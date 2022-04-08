import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className="col-md-12 row">
      <div className="col-md-1">
        <FontAwesomeIcon className='nav-logo' icon={faBars} />
      </div>
      <div className="col-md-10">
        <NavLink to="/"> <img src={logo} className="img-logo img-fluid" alt="Logo" /> </NavLink>
      </div>
      <hr></hr>
    </div>
  )
};

export default Header;