import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Routes';
import logo from "./nasa.png"
import { motion } from 'framer-motion';

function App() {

  console.log(logo)
  return (
    <div className='animatedBg'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="App">
          <div className='img'>
            <img src={logo} alt="" />
          </div>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
