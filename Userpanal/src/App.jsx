import { Route, Routes } from "react-router"
import Home from "./Components/Home/Home"
import Electronics from "./Components/ProductViews/Electronics/Electronics"
import Fashion from "./Components/ProductViews/Fashion/Fashion"
import Homefurniture from "./Components/ProductViews/home&furniture/Homefurniture"
import Accessories from "./Components/ProductViews/Accessories/Accessories"
import Grocery from "./Components/ProductViews/Grocery/Grocery"
import BuyerForm from "./Components/buyerForm/BuyerForm"
import ProDetails from "./Components/ProductsDetails/ProDetails"
import OrderSummary from "./Components/OrderSummary/OrderSummary"


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
      <Route path='/ordersuc' element={<OrderSummary />}/>
     </Routes>
    </>
  )
}

export default App
