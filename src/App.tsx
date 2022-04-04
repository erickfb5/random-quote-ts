import "./App.scss";
import React, { useState } from "react";
import { QUOTES_ARRAY, randQuote, randAuthor } from "./quotesArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function App() {
  const hexColor = ():string => {
    const randHexColor: string = (Math.random() * 0xfffff * 1000000).toString(16);
    return `#${randHexColor.slice(0, 6)}`;
  };
  const [quote, setQuote] = useState<String>(randQuote);
  const [author, setAuthor] = useState<String>(randAuthor);
  const [mainColor, setMainColor] = useState<string>(hexColor());

  const getQuote = ():void => {
    const randIndex: number = Math.floor(QUOTES_ARRAY.length * Math.random());
    setMainColor(hexColor());
    setQuote(QUOTES_ARRAY[randIndex].quote);
    setAuthor(QUOTES_ARRAY[randIndex].author);
  };

  return (
    <div className="App">
      
      <header className="App-header"
      style={{ backgroundColor: mainColor, color: mainColor }}>
        
        <div className="quote-box">    
          <h3 id="quote">            
            {`"${quote}"`}
            <br />
          </h3>
          <p id="author"> {`—  ${author}`} </p>
          <div className="buttons">
            
            <a
              id="tweet-quote"
              href={encodeURI(
                `https://twitter.com/intent/tweet?text="${quote}" —  ${author}`
              )}
              style={{ color: "#1DA1F2" }}
              target="_blank"
              rel="noreferrer"
            >
              
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <button
              id="new-quote"
              onClick={getQuote}
              style={{ backgroundColor: mainColor }}
            >
              
              Get Random Quote
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;