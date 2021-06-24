import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produto from "./pages/Produto";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from './styles/global';
import AreaCliente from './pages/AreaCliente'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ background: "lightgray", height: "100vh", display: "flex", justifyContent: "center" }}>
        <div style={{ background: "gray", height: "100vh", width: "70%" }}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/produto'  component={Produto} />
            <Route path='/cliente'  component={AreaCliente} />
          </Switch>
        </div>
      </div>
      <GlobalStyle />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
