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
  getCharacterId: async (id) => {
    return await request( `characters/${id}` );
  },
  getCharacterStories: async (id) => {
    return await request( `characters/${id}/stories` );
  },
  getCharacterComics: async (id) => {
    return await request( `characters/${id}/comics` );
  },
  getComics: async (params) => {
    return await request( `comics`, params );
  },
  getComicId: async (id) => {
    return await request( `comics/${id}` );
  },
  getComicsCharacters: async (id) => {
    return await request( `comics/${id}/characters` );
  },
  getStories: async (params) => {
    return await request( `stories`, params );
  },
  getStoryId: async (id) => {
    return await request( `stories/${id}` );
  },
  getStoriesCharacters: async (id) => {
    return await request( `stories/${id}/characters` );
  },
};

export default MarvelApi