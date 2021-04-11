import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
 
import HomePage from './views/homePage'
import MakeTeam from './views/makeTeam'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/"> <HomePage/> </Route>
            <Route exact path="/team"> <MakeTeam/> </Route>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
