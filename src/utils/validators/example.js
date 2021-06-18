import React from 'react'

const phoneNumber = (value) => {
  if (!value) return '';
  const numberValue = value.replace(/[^\d]/g, ''); // only allows 0-9
  if (numberValue.length <= 3) return numberValue;
  if (numberValue.length <= 6) return `(${numberValue.slice(0, 3)}) ${numberValue.slice(3)}`;
  return `(${numberValue.slice(0, 3)}) ${numberValue.slice(3, 6)}-${numberValue.slice(6, 10)}`;

};

export default phoneNumber;