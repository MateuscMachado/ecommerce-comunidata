import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produto from "./pages/Produto";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/produto' exact component={Produto} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
