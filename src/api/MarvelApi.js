const API_KEY = import.meta.env.VITE_API_KEY;
const ts = new Date().getTime();

// crear el hash de la petición
const hash = md5(API_KEY + ts + API_KEY);
console.log(API_KEY);