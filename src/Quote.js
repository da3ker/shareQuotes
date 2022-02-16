const Quote = ({ author, quote, bg, show }) => {
  return (
    <div className="quoteContainer" style={{ visibility: show }}>
      <div id="quote-box" style={{ color: bg }}>
        <p id="quote">
          {author !== "" && <i className="fa-solid fa-quote-left"></i>}{" "}
          <strong>
            {quote} 
            <a
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: bg }}
              href={encodeURI(
                `https://twitter.com/intent/tweet?text=${quote}\n-${author}`
              )}
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </strong>
        </p>
        <p id="author">
          {author !== "" ? "-" : ""} {author}
        </p>
      </div>
    </div>
  );
};

export default Quote;
