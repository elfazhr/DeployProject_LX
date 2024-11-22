import Button from "../Element/Button/Index";
import InputForm from "../Element/Input/Index";
const FormRegister = () => {
    return(
        <form>
           <InputForm
            judulLabel="Username"
            tipeInput="text"
            placeholderInput="Insert Your Name Here"
            name="username"
          /> 
          <InputForm
            judulLabel="Email"
            tipeInput="email"
            placeholderInput="example@gmail.com"
            name="email"
          />
          <InputForm
            judulLabel="Password"
            tipeInput="password"
            placeholderInput="****"
            name="password"
          />
          <InputForm
            judulLabel="ConfirmPassword"
            tipeInput="password"
            placeholderInput="****"
            name="ConfirmPassword"
          />
          <Button classname="bg-red-600 w-full">Register</Button>
        </form>
    )
}
export default FormRegister;