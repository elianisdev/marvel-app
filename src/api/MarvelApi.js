import md5 from "md5";

const PRIVATE_API_KEY = import.meta.env.VITE_PRIVATE_API_KEY;
const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const timeStamp = new Date().getTime();
const Hash = md5(`${timeStamp}${PRIVATE_API_KEY}${PUBLIC_API_KEY}`);

const request = async ( path, params = {}, method = 'GET' ) => {
  params = {
    apikey: PUBLIC_API_KEY,
    ts: timeStamp,
    hash: Hash,
    ...params
  };
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };
  let url = `${API_URL}/${path}`;
  method === 'GET' ? url += `?${new URLSearchParams(params)}` : options.body = JSON.stringify(params);
  return (await fetch(url, options)).json();
};

const MarvelApi = {
  getCharacters: async (params) => {
    return await request( 'characters', params );
  },
  getComics: async (params) => {
    return await request( `comics`, params );
  },
};

export default MarvelApi