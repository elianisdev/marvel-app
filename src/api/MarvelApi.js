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

  let options = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  };
  let url = `${API_URL}/${path}`;
  if ( method === 'GET' ) {
    url += `?${new URLSearchParams( params )}`;
  } else {
    options.body = JSON.stringify( params );
  }

  return (await fetch(url, options)).json();
};

const MarvelApi = {
  getCharacters: async (params) => {
    return await request( 'characters', params );
  },
  getCharacter: async (id) => {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${Hash}`
    );
      return await response.json();
  },
  getComics: async (id) => {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${Hash}`
    );
      return await response.json();
  },
  getComic: async (id) => {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/comics/${id}?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${Hash}`
    );
      return await response.json();
  },
  getCreators: async () => {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/creators?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${Hash}`
    );
      return await response.json();
  },
  getCreator: async (id) => {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/creators/${id}?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${Hash}`
    );
      return await response.json();
  }
};


export default MarvelApi