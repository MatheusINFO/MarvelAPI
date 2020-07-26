const timeStamp = "1594473400";
const apiKey= "5928891eba74d982ed9e461081bfc945";
const md5 = "abe90367c9dce62775df2589f676f043";
const base_url =  `https://gateway.marvel.com:443/v1/public/characters?limit=8&offset=0&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`;

export {base_url};