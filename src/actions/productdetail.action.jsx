const axios = require('axios');
const redis = require('redis');
const client = redis.createClient();

const getProductDetail = async (productId) => {
    const redisKey = `product:${productId}`;
    try {
        // Coba ambil data produk dari Redis
        const productDetail = await new Promise((resolve, reject) => {
            client.get(redisKey, (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });

        // Jika data produk ditemukan di Redis, kembalikan data tersebut
        if (productDetail !== null) {
            return JSON.parse(productDetail);
        }

        // Jika data produk tidak ditemukan di Redis, ambil data produk dari API
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        const data = response.data;

        // Simpan data produk ke Redis dengan waktu kadaluarsa 5 menit
        client.setex(redisKey, 300, JSON.stringify(data));

        // Kembalikan data produk
        return data;
    } catch (error) {
        console.error(error);
    }
};

// Panggil fungsi getProductDetail dengan ID produk yang diinginkan
getProductDetail(1)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

export default getProductDetail;
