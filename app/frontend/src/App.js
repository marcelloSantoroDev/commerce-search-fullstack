import Home from "./pages/Home";
import Searches from "./pages/Searches";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/searches" component={Searches} />
    </Switch>
  );
}

export default App;
