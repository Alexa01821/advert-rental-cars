const formatMileage = value => {
  const cleanedValue = value.toString().replace(/,/g, '');
  const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedValue;
};

export default formatMileage;
