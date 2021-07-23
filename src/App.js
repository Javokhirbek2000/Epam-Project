import './App.css';
import Home from "./componenets/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchResults from "./componenets/SearchResults/SearchResults";
import Movie from './componenets/Movie/Movie';
import Header from "./componenets/Header/Header";
import { Auth0Provider } from " @auth0/auth0-react";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:query" component={SearchResults} />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
