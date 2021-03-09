import logo from "./logo.svg";
import "./App.css";
import React, { useRef, forwardRef } from "react";
import CalendarList from "./CalendarList";

const Article = forwardRef(({ onBackClick }, ref) => {
  // multiple of these
  // const titleRef = useRef();

  // function handleBackClick() {
  //   // Scroll back to the title element.
  //   titleRef.current.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <article>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <h1 ref={ref}>A React article for Latin Readers</h1>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <button onClick={onBackClick}>Back to top</button>
    </article>
  );
});

const AnotherComponent = () => {
  // one of these
  const articleRef = useRef();

  function handleBackClick() {
    articleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return <Article ref={articleRef} onBackClick={handleBackClick} />;
};

function App() {
  return (
    <div className="App">
      <header>
        Header area <button>other back to top</button>
      </header>
      <div
        style={{
          marginTop: "60px",
          maxHeight: 477,
          overflow: "auto",
          background: "hotpink",
        }}
      >
        <AnotherComponent />
      </div>
      {/* <CalendarList /> */}
    </div>
  );
}

export default App;
