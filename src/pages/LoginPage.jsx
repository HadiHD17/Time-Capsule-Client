import React, {useState} from 'react'
import "../styles/Login.css"
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const Login = (e) => {
        e.preventDefault();
        
        const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        //for(let pair of formdata.entries()){
          //  console.log(pair[0] + ": " + pair[1]);
        //}
       if(formdata){ 
          navigate("/Dashboard");
        }
    }
  return (
    <div className='LoginForm'>
        <h1>Welcome Back!</h1>
        <form onSubmit={Login}>
            <input 
            type="email"
            id="email"
            className="email"
            placeholder="enter your email"
            onChange={(e) => setemail(e.target.value)}
            required />

            <input 
            type="password"
            id="password"
            className="password"
            placeholder="enter your password"
            onChange={(e) => setpassword(e.target.value)}
            required />

            <button type="submit" className="loginbtn" >Login</button>

        </form>
    </div>
  )
}

export default LoginPage