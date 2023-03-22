import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { NavBarComponent } from "../components";
import { Home, Ofertas, Products, ProductDetail } from "../pages";

export const MainRoutes = () => {

    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/ofertas" element={<Ofertas />}/>
                <Route exact path="/products" element={<Products />}/>
                <Route exact path="/products/:productId" element={<ProductDetail />}/>
            </Routes>
        </Router>
    )
};