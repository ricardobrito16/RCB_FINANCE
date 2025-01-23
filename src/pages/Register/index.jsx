import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImgLogin from "../../assets/img/storyset.png";
import { useUserAuth } from "../../context/UserAuthContext";
import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  if (error) {
    console.log(error);
  }
  return (
    <div className="main">
      <div className="left-side">
        <img alt="login" src={ImgLogin} />
        <h3>
          Bem Vindo!
          <br /> Cadastre-se para usar o sistema
        </h3>
        <p>
          Se já tem um cadastro você pode fazer Login{" "}
          <Link to="/">clicando aqui!</Link>
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
              <p>Já tem cadastro? Entre aqui!</p>
            </a>
            <button type="submit" onClick={handleSubmit}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
