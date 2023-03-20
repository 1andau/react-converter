import React from 'react';
import Header from '../components/Header';
import './home.scss';
import moment from 'moment';
import Selecter from '../components/selecter/select';
import { convert, getCurrencies } from '../components/currency';


const Home = () => {
  const [baseCurrency, setBaseCurrency] = React.useState<string>('eur');
  const [targetCurrency, setTargetCurrency] = React.useState<string>('usd');
const options = getCurrencies(); 

const swap = () => {
  let template = baseCurrency;
  setBaseCurrency(targetCurrency); 
  setTargetCurrency(template)
}


  return (
    <div>
      <Header />
      <div className="mainPage">
        <div className="containerHome">
          <h1>Currency Converter</h1>

          <h2 className="moment">{'Today ' + moment().format('Y-M-DD HH:mm')}</h2>

          <div className="selectersContainer">
            <div className="leftBlock">
              <Selecter 
              options={options} 
              label="From" 
              value={baseCurrency}
              stateChanger = {setBaseCurrency}
              />

              <input className="tochki" placeholder="..." type="text" />
            </div>

            <button onClick={swap} className="btn" id="swap" title="Swap Country">
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor" />
                <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor" />
              </svg>
            </button>

            <div className="rightBlock">
              <Selecter
               options={options} 
               label="To" 
               value={targetCurrency}
               stateChanger = {setTargetCurrency}

               />

              <input className="tochki" placeholder="..." type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
