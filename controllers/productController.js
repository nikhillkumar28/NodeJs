const getProducts = (req, res) => {
  res.send("This is get request of product");
};

const addProduct = (req, res) => {
  res.send("This is post request of product router");
};

export { getProducts, addProduct };