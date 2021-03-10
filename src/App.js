import "./App.css";
import React, { useRef, forwardRef } from "react";
import CalendarList from "./CalendarList";
import CalendarList2 from "./CalendarList2";

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
  handleBackClick,
}) => {
  console.log("englishArticleRef in AnotherComponent: ", englishArticleRef);
  return (
    <div>
      <Article
        ref={latinArticleRef}
        language={"Latin"}
        // onBackClick={handleLatinBackClick}
      />
      <Article
        ref={englishArticleRef}
        language={"English"}
        // onBackClick={handleEnglishBackClick}
      />
    </div>
  );
};

function App() {
  const englishArticleRef = React.createRef();
  console.log("englishArticleRef created: ", englishArticleRef);
  const latinArticleRef = React.createRef();
  let refList = [englishArticleRef, latinArticleRef];
  // console.log("still works???");

  function handleBackClick(selectedRef) {
    console.log("selectedRef in handleBackClick: ");
    selectedRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // function addNewArticle() {

  // }

  // let elephant = "rhinos";
  // let `${elephantRef}` = "rhinoRef";

  return (
    <div className="App">
      {/* <header>
        Header area{" "}
        <button onClick={() => handleBackClick(refList[1])}>
          Latin Article index
        </button>
        <button onClick={() => handleBackClick(refList[0])}>
          English Article index
        </button>
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
          // handleEnglishBackClick={handleEnglishBackClick}
          // handleLatinBackClick={handleLatinBackClick}
        />
      </div> */}
      <CalendarList />
      {/* <CalendarList2 /> */}
    </div>
  );
}

export default App;
