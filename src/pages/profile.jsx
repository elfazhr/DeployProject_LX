import Button from "../components/Element/Button/Index";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const { username, handleLogout } = useLogin();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <img className="w-1/4" src="public/img/profile.png" />
      <p className="text-3xl font-bold mt-5">Helloo!</p>
      <p className="text-xl mt-5">
        Enjoy The Learn
        <b className="text-blue-500"> {username}</b>
      </p>
      <Button classname="bg-blue-800 my-5" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
export default ProfilePage;
