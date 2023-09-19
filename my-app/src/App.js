import logo from './logo.svg';
import './App.css';
import {Header} from "./Header"
import Body from './Body';
import ChartSection from './ChartSection';
import Cards from './Cards';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <ChartSection/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
