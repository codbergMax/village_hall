import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./word.css";

const Word = () => {
  const history = useHistory();
  const location = useLocation();
  const { id, name, word, sentence, index = 0, wordQ } = location.state || {};
  //   console.log("img: ", word.img[0]);
  // 이미지 배열과 현재 이미지 인덱스 관리
  const [currentIndex, setCurrentIndex] = useState(index);
  const [isLast, setIsLast] = useState(false);

  const handlePrevious = () => {
    if (currentIndex === 0) {
      history.push("/villageHall/", {
        state: { id, name, word, sentence, wordQ },
      });
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1 + word.length) % word.length);
  };

  const handleNext = () => {
    if (currentIndex === word.length - 1) {
      setIsLast(true);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % word.length);
  };

  const clue1 = () => {
    history.push("/villageHall/word/clue1", {
      state: {
        clue1: word[currentIndex].clue1,
        clue2: word[currentIndex].clue2,
        index: currentIndex,
        wordQ,
        sentence,
        id,
        name,
        word,
      },
    });
  };

  const clue2 = () => {
    history.push("/villageHall/word/clue2", {
      state: {
        clue1: word[currentIndex].clue1,
        clue2: word[currentIndex].clue2,
        index: currentIndex,
        wordQ,
        sentence,
        id,
        name,
        word,
      },
    });
  };

  useEffect(() => {
    // 이미지를 새로 로드할 때마다 효과 발생
  }, [currentIndex]);

  // useEffect(() => {
  //   if (location.pathname === "/villageHall/word/clue1") {
  //     setCurrentIndex(index);
  //   }
  // }, []);

  return (
    <>
      <div className="details-container">
        {isLast ? (
          <>
            <div style={{ fontSize: 40 }}>수고하셨습니다</div>
            <div className="esc">
              <button
                style={{ marginRight: 10 }}
                onClick={() => {
                  history.push("/");
                }}
              >
                처음으로
              </button>
              <button
                onClick={() => {
                  history.push("/villageHall/", {
                    state: { id, name, word, index: 0, sentence, wordQ },
                  });
                }}
              >
                다시하기
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="navigation-buttons">
              <button className="arrow-left" onClick={handlePrevious}></button>
              <span style={{ fontSize: 50 }}>{wordQ}</span>

              <button className="arrow-right" onClick={handleNext}></button>
            </div>
            <div className="content">
              <img
                src={word[currentIndex].img}
                alt={`${name} ${currentIndex + 1}`}
                style={{ width: 400, height: 400 }}
                className="details-image"
              />
              <div className="clues">
                <button onClick={clue1}>단서 1</button>
                <button onClick={clue2}>단서 2</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Word;
