import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md">
        <h1 className="text-6xl mb-4">⚠ Oops!</h1>
        <p className="text-gray-700 text-lg mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-red-600 font-bold text-xl mb-1">
          {err?.status || "Unknown Error"}
        </p>
        <p className="text-gray-600 mb-4">{err?.statusText || "Something went wrong"}</p>
        <Link
          to="/"
          className="inline-block bg-amber-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-amber-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
