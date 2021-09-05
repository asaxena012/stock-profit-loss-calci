import { useState } from "react";
import "./styles.css";
import Footer from "./Footer";

export default function App() {
  const [initPrice, setInitPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [showOutput, setShowOutput] = useState(false);
  const [error, setError] = useState(false);

  const calculatePL = () => {
    const profitOrLoss = quantity * (currentPrice - initPrice);
    return profitOrLoss;
  };

  const submitHandler = () => {
    // Valdate input and show error
    if (!initPrice || !quantity || !currentPrice || quantity < 0) {
      if (showOutput) showOutput(false);
      setError(true);
      return;
    }
    // show output
    if (error) setError(false);
    setShowOutput(true);
  };

  const getOutput = () => {
    const pl = calculatePL();
    if (pl === 0) {
      return (
        <p>
          No profit, no loss, inflation is burning your money. Consider a better
          investment.
        </p>
      );
    }

    if (pl > 0) {
      return (
        <p>
          {`You are in a profit of ${pl} which is ${
            (pl / (initPrice * quantity)) * 100
          }% of your initial total investment`}
        </p>
      );
    }

    if (pl < 0) {
      return (
        <p>
          {`You are in a loss of ${pl * -1} which is ${
            ((-1 * pl) / (initPrice * quantity)) * 100
          }% of your initial total investment`}
        </p>
      );
    }

    return null;
  };

  return (
    <div className="App">
      <div className="main-container flex-column-center">
        <h1>Stock Profit & Loss Calculator</h1>
        <label>Initial price: </label>
        <input
          type="number"
          onChange={(e) => {
            setInitPrice(e.target.value);
            setShowOutput(false);
          }}
        />

        <label>Quantity of stocks: </label>
        <input
          type="number"
          onChange={(e) => {
            setQuantity(e.target.value);
            setShowOutput(false);
          }}
        />

        <label>Current price:</label>
        <input
          type="number"
          onChange={(e) => {
            setCurrentPrice(e.target.value);
            setShowOutput(false);
          }}
        />

        <button onClick={submitHandler}>Calculate</button>

        <p className="output">{showOutput && getOutput()}</p>
        {error && (
          <p className="error">
            Some error occured. Please check if all the values are entered
            correctly and the quantity is positive
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
