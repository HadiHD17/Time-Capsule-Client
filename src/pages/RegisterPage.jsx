import React, {useState} from 'react'
import "../styles/Register.css"
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const navigate = useNavigate();

    const Register = (e) => {
        e.preventDefault();
        
        const formdata = new FormData();
        formdata.append("fullname", fullname);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("confirmpassword", confirmpassword);

        //for(let pair of formdata.entries()){
          //  console.log(pair[0] + ": " + pair[1]);
        //}
        if(formdata){
          navigate("/Dashboard");
        }
    }
  return (
    <div className="RegisterForm">
        <h1>CREATE ACCOUNT</h1>
        <form onSubmit={Register}>
            <input 
            type="text"
            id="fullname"
            className="fullname"
            placeholder="enter your full name"
            onChange={(e) => setfullname(e.target.value)}
            required />

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

            <input 
            type="password"
            id="confirmpassword"
            className="confirmpassword"
            placeholder="confirm your password"
            onChange={(e) => setconfirmpassword(e.target.value)}
            required />

            <button type="submit" className="registerbtn" >Sign Up</button>

        </form>
    </div>
  )
}

export default RegisterPage