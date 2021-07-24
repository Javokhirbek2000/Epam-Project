import Home from "./componenets/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchResults from "./componenets/SearchResults/SearchResults";
import Movie from './componenets/Movie/Movie';
import { init } from "emailjs-com";
import { useEffect } from "react";
import Header from "./componenets/Header/Header";
import Favorites from "./componenets/Favorites/Favorites";


function App() {
  useEffect(() => {
    init("user_tCafrrcbBWpT7iwrzMDwP");
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:query" component={SearchResults} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
