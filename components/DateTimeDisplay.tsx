import React from 'react';


type Display = {
    value: number;
    type: any;
    isDanger: boolean;
}

const DateTimeDisplay = ({ value, type, isDanger }: Display) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
