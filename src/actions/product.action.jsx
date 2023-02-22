const axios = require('axios');
const redis = require('redis');

const redisClient = redis.createClient();

async function fetchAndStoreProducts() {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const products = response.data;
      redisClient.set('products', JSON.stringify(products), 'EX', 60 * 60 * 24); // set expiry time to 24 hours
      return products;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getProductsFromRedis() {
    try {
      const products = await redisClient.getAsync('products');
      if (products === null) {
        return fetchAndStoreProducts(); // fetch data from API and store in Redis
      } else {
        return JSON.parse(products);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  getProductsFromRedis()
  .then(products => {
    console.log(products);
    // Do something with the products data
  })
  .catch(error => console.log(error));
