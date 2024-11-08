import { useState, createContext } from "react";
import NavBar from "./components/NavBar";

export const Context = createContext();

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <NavBar />
      <h1 className="text-slate-500">
        {signedIn ? "Signed in" : "Signed out"}
      </h1>
    </Context.Provider>
  );
}

export default App;
