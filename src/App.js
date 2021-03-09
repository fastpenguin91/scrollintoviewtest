import logo from "./logo.svg";
import "./App.css";
import React, { useRef, forwardRef } from "react";
import CalendarList from "./CalendarList";

const Article = forwardRef(({ onBackClick, language }, ref) => {
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
      <h1 ref={ref}>A React article for {language} Readers</h1>
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
    </article>
  );
});

const AnotherComponent = ({
  englishArticleRef,
  latinArticleRef,
  handleEnglishBackClick,
  handleLatinBackClick,
}) => {
  // one of these
  // const articleRef = useRef();

  // function handleBackClick() {
  //   articleRef.current.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <div>
      <Article
        ref={latinArticleRef}
        language={"Latin"}
        onBackClick={handleLatinBackClick}
      />
      <Article
        ref={englishArticleRef}
        language={"English"}
        onBackClick={handleEnglishBackClick}
      />
    </div>
  );
};

function App() {
  const englishArticleRef = useRef();
  const latinArticleRef = useRef();
  console.log("still works???");

  function handleEnglishBackClick() {
    console.log("selectedRef in handleBackClick: ");
    englishArticleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleLatinBackClick() {
    console.log("selectedRef in handleBackClick: ");
    latinArticleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <header>
        Header area{" "}
        <button onClick={handleLatinBackClick}>Latin Article</button>
        <button onClick={handleEnglishBackClick}>English Article</button>
      </header>
      <div
        style={{
          marginTop: "60px",
          maxHeight: 477,
          overflow: "auto",
          background: "hotpink",
        }}
      >
        <AnotherComponent
          englishArticleRef={englishArticleRef}
          latinArticleRef={latinArticleRef}
          handleEnglishBackClick={handleEnglishBackClick}
          handleLatinBackClick={handleLatinBackClick}
        />
      </div>
      {/* <CalendarList /> */}
    </div>
  );
}

export default App;
