import axios from "axios";
import { createContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const PRODUCT_CONTEXT = createContext()

function App() {

  const getProducts = async () => {
    const { data } = await axios.get('https://moon-tech-server-odfw.onrender.com/products')
    console.log(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
