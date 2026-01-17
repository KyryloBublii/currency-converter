import React, { useState } from 'react';
import { convertCurrency } from '../services/currencyService';
import './CurrencyConverter.css';

const CurrencyConverter: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConvert = async () => {
    if (!fromCurrency || !toCurrency) {
      setError('Please enter both currencies');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const conversionResult = await convertCurrency(
        fromCurrency,
        toCurrency,
        amount
      );
      setResult(conversionResult);
    } catch (err) {
      setError('Failed to convert currency. Please try again.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="form_header">
          <h1>Currency Converter:</h1>
        </div>
        <div className="container">
          <div className="container_component">
            <div>From:</div>
            <input
              type="text"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              placeholder="USD"
            />
          </div>

          <div className="container_component">
            <div>To:</div>
            <input
              type="text"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              placeholder="EUR"
            />
          </div>

          <div className="container_component">
            <div>Amount:</div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <button
          className="calc_btn"
          onClick={handleConvert}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Calculate'}
        </button>

        {error && <div className="error">{error}</div>}
        {result !== null && !error && (
          <div className="result">Result: {result}</div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
