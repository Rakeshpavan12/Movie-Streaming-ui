import { CgProfile } from "react-icons/cg";

function Navbar({
  searchMovie,
  showProfile,
  setShowProfile,
  username,
  handleLogout
}) {
  return (
    <>
      <nav className="navbar">

        <h1 className="logo">MovieHub</h1>

        <div className="nav-center">

          <input
            type="text"
            className="search-input"
            placeholder="Search Movies..."
            onChange={(e) =>
              searchMovie(e.target.value)
            }
          />

          <select className="language-select">
            <option>Telugu</option>
            <option>Hindi</option>
            <option>English</option>
            <option>Tamil</option>
            <option>Kannada</option>
          </select>

        </div>

        <div
          onClick={() =>
            setShowProfile(!showProfile)
          }
        >
          <CgProfile className="profile" />
        </div>

      </nav>

      {
        showProfile && (

          <div className="profile-card">

            <h3>My Profile</h3>

            <p>
              <strong>Username:</strong>
               {username}
            </p>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        )
      }
    </>
  );
}

export default Navbar;