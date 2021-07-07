import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import CMS from './pages/cms'
import Landing from './pages/landing'
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/admin" component={CMS}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
