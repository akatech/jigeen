import React from "react";
import { Switch, Route } from "react-router-dom";

//layout
//import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLaout'

//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import "./default.scss";
function App() {
  return (
    <div className="App">

      <div className="main">
        <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage/>
            </HomepageLayout>
          )}/>
          <Route path="/registration" render={() => (
             <HomepageLayout>
             <Registration/>
           </HomepageLayout>
          )} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
