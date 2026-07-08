import { useState } from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import bgImage from "./assests/moviehub-bg-img.png";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const savedUsername =
      localStorage.getItem("username");

    const savedPassword =
      localStorage.getItem("password");

    if (
      username === savedUsername &&
      password === savedPassword
    ) {

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      toast.success(
        "Login Successfully"
      );

      setTimeout(() => {
        navigate("/home");
      }, 1500);

    } else {

      toast.error(
        "Invalid Username or Password"
      );

    }

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
            MovieHub
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
            onClick={handleLogin}
          >
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <span className="register-link"
              style={{
                color: "red",
                cursor: "pointer",
              }}
              onClick={() =>
                navigate("/register")
              }
            >
              Register
            </span>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;