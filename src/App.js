import { Route, Switch } from "react-router-dom";

// IMPORTING PAGES
import Home from "./pages/Home.jsx";

// IMPORTING COMPONENTSS
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
