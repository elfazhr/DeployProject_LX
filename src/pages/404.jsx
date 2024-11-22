import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col ">
      <img className="w-1/4" src="public/img/not_found.jpg" />
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occurred</p>
      <p className="text-lg border border-red-500 rounded p-2">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
