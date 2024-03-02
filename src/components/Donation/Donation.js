import React from 'react';
import { FaPaypal } from 'react-icons/fa';

const DonationButton = () => {
  const paypalURL = 'https://www.paypal.com/donate/?business=3STX88DWCHJSG&no_recurring=0&currency_code=USD';

  return (
    <div>
      <p>If you found my work helpful, you can support me through a donation:</p>
      <a href={paypalURL} target="_blank" rel="noopener noreferrer">
        <button type="button" className="donate-button">
          <FaPaypal className="donate-icon" />
          Donate via PayPal
        </button>
      </a>
    </div>
  );
};

export default DonationButton;
