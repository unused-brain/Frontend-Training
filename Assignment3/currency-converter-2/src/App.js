import { useEffect, useState } from 'react';
import './App.css';

var dollar = 74.5;
var yen = 0.65;
var pound = 80;
var euro = 90;

const convertToRupee = (type, amount) => {
  if (type === "Dollar") {
      return amount * dollar;
  }
  else if (type === "Yen") {
      return amount * yen;
  }
  else if (type === "Pound") {
      return amount * pound;
  }
  else if (type === "Euro") {
      return amount * euro;
  }
  return amount;
}

// 74 rupee = 1 dollar
// 1 rupee = (1 / 74) dollar
// x rupee = (1 / 74) * x dollar = x / 74

const convertRupeeToCurrency = (type, amount) => {
  if (type === "Dollar") {
      return amount / dollar;
  }
  else if (type === "Yen") {
      return amount / yen;
  }
  else if (type === "Pound") {
      return amount / pound;
  }
  else if (type === "Euro") {
      return amount / euro;
  }

  return amount;
}

const App = () => {

  let styles = {
    marginRight: '20px',
    width: "100px"
  };

  const [from, setFrom] = useState("Rupee");
  const [to, setTo] = useState("Rupee");
  const [amount, setAmount] = useState(0);

  const [ans, setAns] = useState(0);

  useEffect(() => {
    let a = convertToRupee(from, amount);
    
    let b = convertRupeeToCurrency(to, a);

    setAns(b);
  }, [from, to, amount]);


  const handleOnChangeFrom = (event) =>{
    let f = event.target.value;
    setFrom(f);

    console.log("amount " + amount)
  }

  const handleOnChangeTo = (event) =>{
    let t = event.target.value;
    setTo(t);

    console.log("amount " + amount)
  }

  const handleOnChangeAmount = (event) =>{
    setAmount(event.target.value);

    console.log("amount " + amount)
  }

  return(
    <div className='App'>
      <select value={from} style={styles} onChange={handleOnChangeFrom}>
        <option value="Rupee">Rupee</option>
        <option value="Dollar">Dollar</option>
        <option value="Pound">Pound</option>
        <option value="Yen">Yen</option>
        <option value="Euro">Euro</option>
      </select>

      <select value={to} style={styles} onChange={handleOnChangeTo}>
        <option value="Rupee">Rupee</option>
        <option value="Dollar">Dollar</option>
        <option value="Pound">Pound</option>
        <option value="Yen">Yen</option>
        <option value="Euro">Euro</option>
      </select>

      <input type="number" placeholder='Enter Amount' onChange={handleOnChangeAmount}></input>

      <br></br>
      <br></br>
      <p>{amount} {from} = {ans} {to} </p>
    </div>
  );
};
//
export default App;
