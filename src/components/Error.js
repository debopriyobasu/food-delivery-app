import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>This is the error element</h1>
      <p>
        {error.status}- {error.data}
      </p>
    </>
  );
};
export default Error;
