import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Categories from "./screens/Categories";
import SingleCategory from "./screens/SingleCategory";
import SinglePhoto from "./screens/SinglePhoto";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="siteContent">
          <Header />
          <div className="allScreen">
            <div className="mainApp">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/categories" exact component={Categories} />
                <Route path="/category" component={SingleCategory} />
                <Route path="/photo" component={SinglePhoto} />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
