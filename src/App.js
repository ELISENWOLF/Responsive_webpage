import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home";
import Inbox from "./Components/Pages/Inbox/Inbox";
import Admin from "./Components/Pages/Admin/Admin";
import Product from "./Components/Pages/Products/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Dashboard} exact />
          <Route path="/inbox" component={Inbox} />
          <Route path="/product" component={Product}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
