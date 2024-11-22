import InputForm from "../Element/Input/Index";
import Button from "../Element/Button/Index";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
const FormLogin = () => {
  const[loginFailed, setLoginFailed] = useState("");

  // const handleClick = (e) => {
  //   console.log("Button Clicked!");
  //   e.preventDefault();
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem('token', res)
        window.location.href = "/products"
      } else {
        setLoginFailed(res.response.data)
        console.log(res.response.data)
      }
    });
  }
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus()
  }, [])
    return (
        <form onSubmit={handleLogin}>
          <InputForm
            judulLabel="Username"
            tipeInput="text"
            placeholderInput="Please Enter Your Username"
            name="username"
            ref={usernameRef}
          />
          <InputForm
            judulLabel="Password"
            tipeInput="password"
            placeholderInput="****"
            name="password"
          />
          <Button classname="bg-blue-500 w-full" type="submit">Login</Button>

          {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
    )
}

export default FormLogin;