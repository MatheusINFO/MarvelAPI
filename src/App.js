import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes/routes';
import Header from './components/Header';

function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
  );
}

export default App;

/*

 const timeStamp = "1594473400";
  const apiKey= "5928891eba74d982ed9e461081bfc945";
  const md5 = "abe90367c9dce62775df2589f676f043";

  useEffect(() => {
    async function test(){
      const allCharacter = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=2&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`);
      const oneCharacter = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/1011334?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`);
      const comics = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/1011334/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`);
      const events = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/1011334/events?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`);
      const series = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/1011334/series?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`);
      const stories = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/1011334/stories?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`);


      
      console.log({Todos: allCharacter.data.data});
      console.log({Um:  oneCharacter.data.data});
      console.log({Comics:  comics.data.data});
      console.log({Eventos:  events.data.data});
      console.log({Series: series.data.data});
      console.log({Historias:  stories.data.data});
      
    } 
    
    test();
  }, []);

*/