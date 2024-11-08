import { useContext } from "react";
import { Context } from "../App";

const Button = () => {
  const [signedIn, setSignedIn] = useContext(Context);

  return (
    <button
      onClick={() => setSignedIn(!signedIn)}
      type="button"
      className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {signedIn ? "Sign out" : "Sign in"}
    </button>
  );
};
export default Button;
