import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { NavBarComponent } from "../components";
import { Checkout, Ofertas, Products, ProductDetail, Cart, NewProduct } from "../pages";

export const MainRoutes = () => {

    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route path="/products" element={<Products />}/>
                <Route exact path="/products/:productId" element={<ProductDetail />}/>
                <Route exact path="/ofertas" element={<Ofertas />}/>
                <Route exact path="/cart" element={<Cart />}/>
                <Route exact path="/checkout" element={<Checkout />}/>
                <Route exact path="/new-product" element={<NewProduct />}/>

            </Routes>
        </Router>
    )
};