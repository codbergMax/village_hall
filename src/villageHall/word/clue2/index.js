import { useNavigate, useLocation } from "react-router-dom";
import "./clue2.css";

const Clue2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clue1, clue2, index, id, name, word, sentence, wordQ } =
    location.state;

  const handlePrevious = () => {
    navigate(-1, {
      state: { index, id, name, word, clue1, clue2, sentence, wordQ },
    });
  };

  //   const handleNext = () => {
  //     // 다음 페이지로 이동하는 로직을 여기에 추가
  //     console.log("다음 페이지로 이동");
  //   };

  return (
    <>
      {" "}
      <div className="details-container" style={{ width: "100%" }}>
        <div
          className="navigation-buttons"
          style={{ width: "100%", textAlign: "center" }}
        >
          <button className="arrow-left" onClick={handlePrevious}></button>
          <span>단서 2</span>
          {/* <button className="arrow-right" onClick={handleNext}></button> */}
        </div>
        <div className="content" style={{ width: "100%" }}>
          <p
            className="large-text"
            style={{ width: "100%", textAlign: "center", marginLeft: 40 }}
          >
            {clue2}
          </p>
        </div>
      </div>
    </>
  );
};

export default Clue2;
