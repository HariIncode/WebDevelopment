import {BrowserRouter,Route,Routes} from "react-router-dom";

import Dashboard from "./components/Dashboard/index";
import Sidebar from "./components/Layouts/sidebar";
import Header from "./components/Layouts/header";
import Users from "./users/index";
import Vendors from "./Vendors/vendors";
import Products from "./Products/products";

function App() {
  return (
    <BrowserRouter>
      <div class="d-flex" id="wrapper">
        <Sidebar/>
        <div id="page-content-wrapper">
          <Header/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/vendors" element={<Vendors/>}/>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
