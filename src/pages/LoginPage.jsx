import React, {useState} from 'react'
import "../styles/Login.css"


const LoginPage = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const Login = (e) => {
        e.preventDefault();
        
        const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        //for(let pair of formdata.entries()){
          //  console.log(pair[0] + ": " + pair[1]);
        //}
    }
  return (
    <div className='LoginForm'>
        <h1>Welcome Back!</h1>
        <form>
            <input 
            type="text"
            id="email"
            className="email"
            placeholder="enter your email"
            onChange={(e) => setemail(e.target.value)}
            required />

            <input 
            type="text"
            id="password"
            className="password"
            placeholder="enter your password"
            onChange={(e) => setpassword(e.target.value)}
            required />

            <button type="submit" className="loginbtn" onClick={Login}>Login</button>

        </form>
    </div>
  )
}

export default LoginPage