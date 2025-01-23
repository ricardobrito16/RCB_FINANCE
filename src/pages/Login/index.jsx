import React, { useState } from "react";
import "./login.css";
import ImgLogin from "../../assets/img/storyset.png";
import FacebookImg from "../../assets/img/facebook.png";
import GoogleImg from "../../assets/img/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  if (error) {
    console.log(error);
  }
  return (
    <div className="main">
      <div className="left-side">
        <img alt="login" src={ImgLogin} />
        <h3>Entre para usar o Sistema</h3>
        <p>
          se não tiver um login você pode{" "}
          <Link to="/register"> se cadastrar aqui!</Link>
        </p>
      </div>
      <div className="right-side">
        <div className="form-container">
          <form>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu Email"
            />
            <input
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua Senha"
            />
            <a href="http://localhost:3000/">
              <p>Esqueceu sua Senha?</p>
            </a>
            <button type="submit" onClick={handleSubmit}>
              Entrar
            </button>
          </form>
          <div className="lines">
            <hr className="hr3"></hr>
            <p>Ou Continue com</p>
            <hr className="hr3"></hr>
          </div>
          <div className="social-login">
            <button onClick={handleGoogleSignIn}>
              <img alt="google" src={GoogleImg} />
            </button>
            <button>
              <img alt="facebook" src={FacebookImg} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
