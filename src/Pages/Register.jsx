import { useState } from "react"
import { useNavigate } from "react-router"
import toast,{Toaster} from "react-hot-toast"
import bgImage from "./assests/moviehub-bg-img.png"
import './Login.css'
function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {

    if (
      username.trim() === "" ||
      password.trim() === ""
    ) {
      toast.error(
        "Please fill all fields"
      );
      return;
    }

    localStorage.setItem(
      "username",
      username
    );

    localStorage.setItem(
      "password",
      password
    );

    toast.success(
      "Registration Successful"
    );

    setTimeout(() => {
      navigate("/");
    }, 1500);

  };

  return (
    <>
      <Toaster position="top-right" />

      <div
        className="login-page"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url(${bgImage})`,
        }}
      >
        <div className="login-card">

          <h1 className="login-title">
            Register
          </h1>

          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="login-btn"
            onClick={handleRegister}
          >
            Register
          </button>

          <p>
            Already have an account?{" "}
            <span
              style={{
                color: "red",
                cursor: "pointer",
              }}
              onClick={() =>
                navigate("/")
              }
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </>
  );
}
export default Register