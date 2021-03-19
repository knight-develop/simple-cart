import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductContextProvider from './component/Context';
import Header from './component/Header';
import Section from './Section';
import './index.css'
import Login from './component/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <ProductContextProvider>
      <Router>
        <Header />
        <Section />
        <Route path="/login" component={Login} />
      </Router>
    </ProductContextProvider>
  );
}

export default App;
