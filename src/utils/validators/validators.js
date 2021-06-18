export const required = value => {
  if (value) return undefined;
  return "Обязательное заполните поле";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return "Max length is ${maxLength} symbols";
  return undefined;
};

export const phoneNumber = (value) => {
  if (!value) return '';
  const numberValue = value.replace(/[^\d]/g, ''); // only allows 0-9
  if (numberValue.length <= 3) return numberValue;
  if (numberValue.length <= 6) return `(${numberValue.slice(0, 3)}) ${numberValue.slice(3)}`;
  return `(${numberValue.slice(0, 3)}) ${numberValue.slice(3, 6)}-${numberValue.slice(6, 9)}`;
};

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "неправильно введен емэйл"
    : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

export const phoneNumber2 = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "неправильно введен номер"
    : undefined;
