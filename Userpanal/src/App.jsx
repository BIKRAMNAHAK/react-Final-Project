import { Route, Routes } from "react-router"
import Home from "./Components/Home/Home"
import Electronics from "./Components/Electronics/Electronics"
import Fashion from "./Components/Fashion/Fashion"
import Homefurniture from "./Components/home&furniture/Homefurniture"
import Accessories from "./Components/Accessories/Accessories"
import Grocery from "./Components/Grocery/Grocery"
import BuyerForm from "./Components/buyerForm/BuyerForm"
import ProDetails from "./Components/ProductsDetails/ProDetails"


function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/electronic" element={<Electronics />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/homefurniture" element={<Homefurniture/>} />
      <Route path="/Accessories" element={<Accessories />} />
      <Route path="/Grocery" element={<Grocery />} />
      <Route path="/order" element={<BuyerForm />} />
      <Route path="/prodetail" element={<ProDetails/>} />
     </Routes>
    </>
  )
}

export default App
