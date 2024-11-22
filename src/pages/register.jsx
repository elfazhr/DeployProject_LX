import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts judul="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
