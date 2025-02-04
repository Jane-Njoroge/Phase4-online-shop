import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StarterHeader from "./components/StarterHeader";
import LoginButton from "./components/LoginButton";
import RegisterButton from "./components/RegistertButton";
// import ToiletRack from "./pages/ToiletRack/ToiletRack";
import {
  Home,
  CategoryDetails,
  CheckoutForm,
  SolarLamp,
  ProductDetails,
  FoldableKitchenRack,
} from "./pages";
import DeliveryNote from "./pages/DeliveryNote";
import StormyManualCutter from "./pages/StormyManualCutter";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <StarterHeader />
      <Header />
      <Cards />
      <LoginButton/>
      <RegisterButton/>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/list/:id" element={<CategoryDetails />} />
        <Route path="/solarlamp" element={<SolarLamp />} />
        <Route path="/stormymanualcutter" element={<StormyManualCutter />} />
        <Route path="/foldablekitchenrack" element={<FoldableKitchenRack />} />
        {/* <Route path="/toiletrack" element={<ToiletRack />} /> */}
        <Route path="/deliverynote" element={<DeliveryNote />} />
        <Route path="/checkoutform" element={<CheckoutForm />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
