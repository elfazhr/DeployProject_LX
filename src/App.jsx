import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
function App() {
  return (
    <div className="flex justify-center min-h-screen items-center gap-x-20">
      <LoginPage/>
      <RegisterPage/>
    </div>
  );
}

export default App;
