import axios from "axios";

export const getCategories = () => {
  return axios.get('https://fakestoreapi.com/products/categories');
}

export const getCategoryById = (id) => {
  return axios.get(`https://fakestoreapi.com/products/categories/${id}`);
}