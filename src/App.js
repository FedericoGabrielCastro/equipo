import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import HomePage from './views/homePage'

function App() {
  return (
    <Router>
      <Route>
        <Switch>
          <HomePage/>
        </Switch>
      </Route>
    </Router>
  );
}

export default App;
