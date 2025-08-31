import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  
  return (
    <div className="error-page">
      <h1>⚠ Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p> {err.status} </p>
      <p> {err.statusText} </p>
    </div>
  );
};

export default Error;
