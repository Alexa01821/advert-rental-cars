const priceList = [];

for (let i = 30; i <= 600; i += 10) {
  priceList.push({ value: i, label: `${i}` });
}

export default priceList;
