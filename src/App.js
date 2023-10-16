import Site from "./components/Site";
import Cart from "./components/Cart";

import { Route, Routes } from "react-router-dom";
import { CakeContextProvider } from "./Contexts/CakeContext";

function App() {
  return (
    <CakeContextProvider>
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </CakeContextProvider>
  );
}

export default App;
