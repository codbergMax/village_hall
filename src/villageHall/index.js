import { useEffect, useState } from "react";
import "./villageHall.css";
import { useNavigate, useLocation } from "react-router-dom";

const VillageHall = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name, word, sentence, wordQ } = location.state || {};
  const [title, setTitle] = useState("");
  const handleWordClick = () => {
    navigate("/villageHall/word", {
      state: { id, name, word, sentence, wordQ },
    });
  };

  const handleSentenceClick = () => {
    navigate("/villageHall/sentence", {
      state: { id, name, word, sentence, wordQ },
    });
  };

  useEffect(() => {
    if (name === "스포츠") {
      setTitle("/img/스포츠교실 편.png");
      return;
    } else if (name === "요리") {
      setTitle("/img/요리교실 편.png");
      return;
    } else if (name === "인물") {
      setTitle("/img/인물사전 편.png");
      return;
    } else if (name === "장소") {
      setTitle("/img/우리동네 편.png");
      return;
    } else if (name === "일상생활1") {
      setTitle("/img/생활백서 1편.png");
      return;
    } else if (name === "일상생활2") {
      setTitle("/img/생활백서 2편.png");
      return;
    } else if (name === "직업") {
      setTitle("/img/직업사전 편.png");
      return;
    } else if (name === "취미") {
      setTitle("/img/취미교실 편.png");
      return;
    } else {
      setTitle("");
    }
  }, []);
  return (
    <>
      <div class="container">
        <img src={title} style={{ width: "100%", height: 400 }} />
        <button class="btn" onClick={handleWordClick}>
          단어
        </button>
        <button class="btn" onClick={handleSentenceClick}>
          문장
        </button>
        <button
          class="btn"
          onClick={() => {
            navigate("/");
          }}
        >
          다시 선택
        </button>
      </div>
    </>
  );
};

export default VillageHall;
