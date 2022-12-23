export const capitalizeFirstLetter = (text) => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};

export const getInitialValue = (list, defaultArr) => {
  const initialValue = localStorage.getItem("funds");
  return initialValue ? JSON.parse(initialValue) : defaultArr;
};
