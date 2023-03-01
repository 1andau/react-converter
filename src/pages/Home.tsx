import React from 'react';
import Header from '../components/Header';
import './home.scss'; 
import Select from 'react-select';
import moment from 'moment'


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];



const Home = () =>  {

  const [selectedOption, setSelectedOption] = React.useState(null);




  return (
    <div>
      <Header />
<div className='mainPage'>

<div className="containerHome">
  <h1>Currency Converter</h1>

  <h2 className="moment">{'Today ' + moment().format('Y-M-DD HH:mm')}</h2>

<div className="selectersContainer">
<div className="leftBlock">
<Select
className="select"
        defaultValue={selectedOption}
        options={options}
      />



<input placeholder='...'  type="text"/>
</div>


    <button className="btn" id="swap" title="Swap Country">
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor" />
      <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor" />
    </svg>
  </button>


<div className="rightBlock">
<Select
        defaultValue={selectedOption}
        options={options}
      />


<input placeholder='...' type="text"/>
</div>
</div>






    
  </div>
  {/* <button className="btn" id="btn">Converter</button>
  <small id="errorMSG"></small>
  <small id="info"></small> */}

</div>

</div>


      
  );
};

export default Home;
