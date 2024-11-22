import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, judul, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center gap-x-20">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{judul}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome! Please Enter Your Details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center mt-5 text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-500">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center mt-5 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-500">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayouts;
