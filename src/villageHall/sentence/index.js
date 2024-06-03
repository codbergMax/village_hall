import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./sentence.css";

const Sentence = () => {
  const history = useHistory();
  const location = useLocation();
  const { id, name, sentence, word, wordQ } = location.state;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLast, setIsLast] = useState(false);

  const handlePrevious = () => {
    if (currentIndex === 0) {
      history.push("/villageHall/", {
        state: { id, name, sentence, word, wordQ },
      });
    }
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sentence.length) % sentence.length
    );
  };

  const handleNext = () => {
    if (currentIndex === sentence.length - 1) {
      setIsLast(true);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sentence.length);
  };

  //   const clue1 = () => {
  //     navigate("/villageHall/word/clue1", {
  //       state: { clue: word[currentIndex].clue1 },
  //     });
  //   };

  //   const clue2 = () => {
  //     navigate("/villageHall/word/clue2", {
  //       state: { clue: word[currentIndex].clue2 },
  //     });
  //   };

  useEffect(() => {
    // 이미지를 새로 로드할 때마다 효과 발생
  }, [currentIndex]);

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
              <span style={{ fontSize: 30 }}>
                아래의 사진에서 보이는 것을 모두 설명해주세요.
              </span>

              <button className="arrow-right" onClick={handleNext}></button>
            </div>
            <div className="content">
              <img
                src={sentence[currentIndex].img}
                alt={`${name} ${currentIndex + 1}`}
                style={{ width: 400, height: 266 }}
                className="details-image"
              />
              {/* <div className="clues">
                <button onClick={clue1}>단서 1</button>
                <button onClick={clue2}>단서 2</button>
              </div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sentence;
