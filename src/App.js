import Navbar from "./Navbar";
import Home from "./Home";
// import Home2 from './Home2';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*"> 
              <NotFound />
            </Route>
          </Switch>
        </div>
        {/* <div className="trialContent">  */}
        {/* <Home2 /> */}
        {/* </div>  */}
      </div>
    </Router>
  );
}

export default App;
