import { useNavigate, useLocation } from "react-router-dom";
import "./clue1.css";

const Clue1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clue1, clue2, index, id, name, word, sentence, wordQ } =
    location.state;

  const handlePrevious = () => {
    // 이전 페이지로 이동하는 로직을 여기에 추가
    navigate("/villageHall/word", {
      state: { id, name, word, index: index, sentence, wordQ },
    });
  };

  const handleNext = () => {
    navigate("/villageHall/word/clue2", {
      state: { id, name, word, index: index, clue1, clue2, sentence, wordQ },
    });
  };

  return (
    <>
      {" "}
      <div className="details-container">
        <div className="navigation-buttons">
          <button className="arrow-left" onClick={handlePrevious}></button>
          <span>단서 1</span>
          <button className="arrow-right" onClick={handleNext}></button>
        </div>
        <div className="content">
          <p className="large-text">{clue1}</p>
        </div>
      </div>
    </>
  );
};

export default Clue1;
