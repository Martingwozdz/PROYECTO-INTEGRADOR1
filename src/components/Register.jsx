import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "../styles/styles.css";



const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState( "" );
  const [password, setPassword] = useState ( "" )
  const [email, setEmail] = useState ("")
 
 const registerHandler = (event) => {
     event.preventDefault()
    axios
      .post('http://localhost:3001/api/users/register', {
        name: name,
        email: email,
        password: password
      })
      .then((res) => res.data)
      .then(() => {
        navigate('/login');
        alert('Congratulations successful registration!');
      })
      .catch(() => alert('Wrong registration, please try again'));
  }
  
   const handleName = (event) => {
       setName(event.target.value)
        };

   const handlePassword = (event) => {
        setPassword(event.target.value)
        };

   const handleEmail = (event) => {
        setEmail(event.target.value)
         };
   
  return (
    
<div className="registerContainer">
<div className="houseofdev">
</div>
  <div className="inputContainer" >
  <form onSubmit={registerHandler}>
  <label></label> 
   <input className="input" onChange={handleName} type="text" placeholder="Name"/> 
   <label></label> 
   <input className="input2" onChange={handleEmail} type="text" placeholder="Email"/> 
   <label></label>
    <input className="input3" onChange={handlePassword} type="password" placeholder="Password"/> 
    <button className="boton"> Register </button>
  </form>
  </div>
</div>

  );
};

export default Register;
