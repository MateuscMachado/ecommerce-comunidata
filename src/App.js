import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produto from "./pages/Produto";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from './styles/global';
import AreaCliente from './pages/AreaCliente'
import Login from "./pages/Login";
import Admin from './pages/Admin/';
import Cadastro from './pages/Cadastro';
import { FormProvider } from './contexts/FormContexts'

function App() {

  return (
    <BrowserRouter>
      <Header />
        <div className = "insideContainer">
          <Switch>
            <FormProvider>
              <Route path='/' exact component={Home} />
              <Route path='/produto' component={Produto} />
              <Route path='/clientes/:clientes+' component={AreaCliente} />
              <Route path='/produto/:produto+' component={Produto} />
              <Route path='/login' component={Login} />
              <Route path='/admin' component={Admin} />
              <Route path='/cadastro' component={Cadastro} />
            </FormProvider>
          </Switch>
        </div>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  )
}
export default App;
