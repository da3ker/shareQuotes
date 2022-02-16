import './App.scss';
import './cube.scss'
import './blob.scss';
import './button.scss';
import Cube from './Cube';
import Blob from './Blob';
import {useState, useEffect} from 'react';
import COLORS_ARRAY from './colors';
import Quote from './Quote';

let quotesURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quotesArray, setQuotesArray] = useState([]);
  const [bg, setBg] = useState("#FFF68B");
  const [show, setShow] = useState("hidden")
  const [hide, setHide] = useState("visible")

  const fetchURL = async (url) => {
    try {
      const response = await fetch(url)
      const parsedResponse  = await response.json()
      setQuotesArray(parsedResponse.quotes) 
    }catch(err){
      console.error(err)
  }
  };

  useEffect(() => {
    fetchURL(quotesURL)
  }, [])

  
  const getTheQuoteAndAuthor = () => {
    let randomNumber = Math.floor(Math.random() * quotesArray.length)
    setQuote(quotesArray[randomNumber].quote)
    setAuthor(quotesArray[randomNumber].author)
    random()
  }

  const random = () => {
    let randomNumber = Math.floor(Math.random() * COLORS_ARRAY.length)
    setBg(COLORS_ARRAY[randomNumber])
    setShow("visible")
    setHide("hidden")
  }
  document.documentElement.style.setProperty('--cube-color', bg)
  document.documentElement.style.setProperty('--app-background', bg)
  return (
    <div className="App">
      <Blob 
        random={random} 
        hide={hide} 
        show={show}
        bg={bg} 
        getTheQuoteAndAuthor={getTheQuoteAndAuthor}
        />
      <Quote 
        quote={quote} 
        author={author} 
        bg={bg} 
        show={show} 
        />
      <Cube 
        bg={bg} 
        show={show} 
      />
    </div>
  );
}

export default App;
