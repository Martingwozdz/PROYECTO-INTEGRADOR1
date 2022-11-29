import "../styles/login/style.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/users/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => console.log(res.data))
      .then(() => navigate("/register"))
      .catch((error) => console.log(error));
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

return (

<div className="loginContainer">
  

  <div className="houseofdev">
  </div>
  <div className="inputContainer" >
  <form onSubmit={handleSubmit}>
   <label></label> 
   <input className="input" onChange={handleChangeEmail} type="text" placeholder="Email"/> 
   <label></label> 
   <br></br>
   <input className="input2" onChange={handleChangePassword} type="password" placeholder="Contraseña"/> 
   <br></br>
   <button className="bottonLogin"> Login </button>
  </form>
  </div>
  
</div>
);
};
  
export default Login;