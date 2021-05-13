import {Link} from "react-router-dom";

export default function NavMenu (){
  return (
      <div>
          <Link to={'/'}>Home page</Link>
          <br/>
          <Link to={'/characters'}>Characters</Link>
          <br/>
          <Link to={'/inventory'}>Inventory</Link>
      </div>
  );
}