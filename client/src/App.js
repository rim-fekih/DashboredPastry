import React, { useContext } from "react";
import "./App.css";
import Sidebar from "./pastry_components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pastry_pages/Home";
import Notifications from "./pastry_pages/Notifications";
import Orders from "./pastry_pages/Orders";
import Pasteries from "./pastry_pages/Pastries";
import Posts from "./pastry_pages/Posts";
import Produits from "./pastry_pages/Produits";
import Form from "./pastry_components/Form/AddUserForm";

function App() {
  return (
    <>
      <Router>
        <Sidebar />

        <Switch>
          <Route path="/profil" component={Home} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/pastry/commande" component={Orders} />
          <Route path="/pastry/categorie" component={Pasteries} />
          <Route path="/pastry/posts" component={Posts} />
          <Route path="/pastry/produits" component={Produits} />
          <Route path="/form" component={Form} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
