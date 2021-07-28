import Home from "./componenets/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchResults from "./componenets/SearchResults/SearchResults";
import Movie from './componenets/Movie/Movie';
import { init } from "emailjs-com";
import { useEffect } from "react";
import Favorites from "./componenets/Favorites/Favorites";
import NotFound from "./componenets/helpers/NotFound";


function App() {
  useEffect(() => {
    init("user_tCafrrcbBWpT7iwrzMDwP");
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:query" component={SearchResults} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/favorites" component={Favorites} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
