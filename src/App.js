import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Home/Landing'

import { HashRouter as Router , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import { Book } from './components/Home/Book';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/book/:id" component={Book}></Route>
          <Footer /> 
        </div>
      </Router>
    </Provider>
  );
}

export default App;
