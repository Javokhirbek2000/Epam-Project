import './App.css';
import Header from "./componenets/Header/Header";
import Home from "./componenets/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchResults from "./componenets/SearchResults/SearchResults";
import Movie from './componenets/Movie/Movie';

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
