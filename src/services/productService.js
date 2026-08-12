const PROD_API_CATEGORY =
  'https://dummyjson.com/products/category/sports-accessories';

const PRODS_API = 'https://dummyjson.com/products';

export const getAllProducts = async () => {
  const response = await fetch(PROD_API_CATEGORY);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'not able to get data');
  }

  return data.products;
};

export const getProductById = async (id) => {
  const response = await fetch(PRODS_API + '/' + id);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'not able to get data');
  }

  return data;
};
