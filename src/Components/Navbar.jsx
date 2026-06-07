
import { CgProfile } from "react-icons/cg";
function Navbar({ searchMovie }) {
  return (
    <nav className='navbar'>
        <h1 className='logo'>MovieHub</h1>
        <div className='nav-center'>
        <input type="text" className='search-input' placeholder="Enter Movie" onChange={(e)=> searchMovie(e.target.value)}/>
        
        <select className='language-select'>
            <option>Telugu</option>
            <option>Hindi</option>
             <option>English</option>
              <option>Tamil</option>
               <option>Kannada</option>
        </select>
        </div>
        <CgProfile className='profile'></CgProfile>
    </nav>
  )
}

export default Navbar