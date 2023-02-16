import React, {useState, useEffect} from "react";
import "./register.css"
import ImgLogin from "../../assets/img/storyset.png"
import FacebookImg from "../../assets/img/facebook.png"
import GoogleImg from "../../assets/img/google.png"
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";
import { useUserAuth } from "../../context/UserAuthContext";


function Register() {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [users, setUsers] = useState([]);
    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    // function handleRegister(e){
    //     e.preventDefault();
    //     createUserWithEmailAndPassword(email, password);
    // }

    // if(loading){
    //     return <p> carregando...</p>
    // }
    
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp, displayName, setDisplayName } = useUserAuth();
    let navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();


      setError("");
      try {
        await signUp(email, password);
        // DISPLAY NAME E UPLOAD DE IMAGEM
        
        // FIM DISPLAY NAME


        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    };

    return (
        <div className="main">

            <div className="left-side">
                <img alt="login" src={ImgLogin} />
                <h3>
                    Bem Vindo!<br /> Cadastre-se para usar o sistema
                </h3>

                <p>
                    Se já tem um cadastro você pode fazer Login <Link to="/">clicando aqui!</Link>
                </p>

            </div>

            <div className="right-side">
                <div className="form-container">
                    <form>
                        
                        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu Email" />
                        <input type="Password" onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua Senha" />

                        <a href="http://localhost:3000/"><p>Já tem cadastro? Entre aqui!</p></a>
                        <button type="submit" onClick={handleSubmit} >Cadastrar</button>
                    </form>
                    

                    

                </div>

            </div>

        </div>
    );
}

export default Register;
