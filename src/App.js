import { Provider } from 'react-redux';
import './App.css';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Header from './components/Header';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Blogs />
      <Footer />
    </Provider>
  );
}

export default App;
