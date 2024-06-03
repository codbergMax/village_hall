import "./select.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "스포츠",
    wordQ: "이것은 무슨 운동인가요?",
    word: [
      { img: "/img/6/word/게이트볼.jpg", clue1: "ㄱㅇㅌㅂ", clue2: "게OO볼" },
      { img: "/img/6/word/당구.jpg", clue1: "ㄷㄱ", clue2: "당O" },
      {
        img: "/img/6/word/댄스스포츠.jpg",
        clue1: "ㄷㅅㅅㅍㅊ",
        clue2: "댄OOO츠",
      },
      { img: "/img/6/word/마라톤.jpg", clue1: "ㅁㄹㅌ", clue2: "마O톤" },
      { img: "/img/6/word/배드민턴.jpg", clue1: "ㅂㄷㅁㅌ", clue2: "배OO턴" },
      { img: "/img/6/word/사이클.jpg", clue1: "ㅅㅇㅋ", clue2: "사O클" },
      { img: "/img/6/word/수영.jpg", clue1: "ㅅㅇ", clue2: "수O" },
      { img: "/img/6/word/야구.jpg", clue1: "ㅇㄱ", clue2: "야O" },
      { img: "/img/6/word/줄넘기.jpg", clue1: "ㅈㄴㄱ", clue2: "줄O기" },
      { img: "/img/6/word/줄다리기.jpg", clue1: "ㅈㄷㄹㄱ", clue2: "줄OO기" },
      { img: "/img/6/word/축구.jpg", clue1: "ㅊㄱ", clue2: "축O" },
      { img: "/img/6/word/탁구.jpg", clue1: "ㅌㄱ", clue2: "탁O" },
      { img: "/img/6/word/태권도.jpg", clue1: "ㅌㄱㄷ", clue2: "태O도" },
      { img: "/img/6/word/테니스.jpg", clue1: "ㅌㄴㅅ", clue2: "테O스" },
      { img: "/img/6/word/필라테스.jpg", clue1: "ㅍㄹㅌㅅ", clue2: "필OO스" },
    ],
    sentence: [
      { img: "/img/6/sentence/골프장.PNG" },
      { img: "/img/6/sentence/수영장.PNG" },
      { img: "/img/6/sentence/야구장.PNG" },
      { img: "/img/6/sentence/연습실.PNG" },
      { img: "/img/6/sentence/운동장.PNG" },
      { img: "/img/6/sentence/체육관.PNG" },
      { img: "/img/6/sentence/축구장.PNG" },
      { img: "/img/6/sentence/태권도장.PNG" },
      { img: "/img/6/sentence/테니스장.PNG" },
      { img: "/img/6/sentence/헬스장.PNG" },
    ],
  },
  {
    id: 2,
    name: "요리",
    wordQ: "이것은 무슨 음식인가요?",
    word: [
      { img: "/img/7/word/계란말이.jpg", clue1: "ㄱㄹㅁㅇ", clue2: "계OO이" },
      {
        img: "/img/7/word/고등어조림.jpg",
        clue1: "ㄱㄷㅇㅈㄹ",
        clue2: "고OOO림",
      },
      { img: "/img/7/word/김밥.jpg", clue1: "ㄱㅂ", clue2: "김O" },
      { img: "/img/7/word/김치.jpg", clue1: "ㄱㅊ", clue2: "김O" },
      {
        img: "/img/7/word/김치볶음밥.jpg",
        clue1: "ㄱㅊㅂㅇㅂ",
        clue2: "김OOO밥",
      },
      { img: "/img/7/word/닭볶음탕.jpg", clue1: "ㄷㅂㅇㅌ", clue2: "닭OO탕" },
      { img: "/img/7/word/떡국.jpg", clue1: "ㄸㄱ", clue2: "떡O" },
      { img: "/img/7/word/떡볶이.jpg", clue1: "ㄸㅂㅇ", clue2: "떡O이" },
      { img: "/img/7/word/미역국.jpg", clue1: "ㅁㅇㄱ", clue2: "미O국" },
      { img: "/img/7/word/비빔밥.jpg", clue1: "ㅂㅂㅂ", clue2: "비O밥" },
      { img: "/img/7/word/삼계탕.jpg", clue1: "ㅅㄱㅌ", clue2: "삼O탕" },
      {
        img: "/img/7/word/소고기뭇국.jpg",
        clue1: "ㅅㄱㄱㅁㄱ",
        clue2: "소OOO국",
      },
      { img: "/img/7/word/어묵볶음.jpg", clue1: "ㅇㅁㅂㅇ", clue2: "어OO음" },
      { img: "/img/7/word/잔치국수.jpg", clue1: "ㅈㅊㄱㅅ", clue2: "잔OO수" },
      { img: "/img/7/word/팥죽.jpg", clue1: "ㅍㅈ", clue2: "팥O" },
    ],
    sentence: [
      { img: "/img/7/sentence/김장(김치).PNG" },
      { img: "/img/7/sentence/다양한 상황.PNG" },
      { img: "/img/7/sentence/떡국.PNG" },
      { img: "/img/7/sentence/레시피.PNG" },
      { img: "/img/7/sentence/만두.PNG" },
      { img: "/img/7/sentence/분식(김밥, 떡볶이).PNG" },
      { img: "/img/7/sentence/설날.PNG" },
      { img: "/img/7/sentence/요리교실.PNG" },
      { img: "/img/7/sentence/제과제빵.PNG" },
      { img: "/img/7/sentence/추석.PNG" },
    ],
  },
  {
    id: 3,
    name: "인물",
    wordQ: "이 사람은 누구인가요?",
    word: [
      { img: "/img/8/word/강호동.jpg", clue1: "ㄱㅎㄷ", clue2: "강O동" },
      { img: "/img/8/word/김영옥.jpg", clue1: "ㄱㅇㅇ", clue2: "김O옥" },
      { img: "/img/8/word/나훈아.jpg", clue1: "ㄴㅎㅇ", clue2: "나O아" },
      { img: "/img/8/word/남진.jpg", clue1: "ㄴㅈ", clue2: "남O" },
      { img: "/img/8/word/세종대왕.jpg", clue1: "ㅅㅈㄷㅇ", clue2: "세OO왕" },
      { img: "/img/8/word/송해.jpg", clue1: "ㅅㅎ", clue2: "송O" },
      { img: "/img/8/word/신사임당.jpg", clue1: "ㅅㅅㅇㄷ", clue2: "신OO당" },
      { img: "/img/8/word/신성일.jpg", clue1: "ㅅㅅㅇ", clue2: "신O일" },
      { img: "/img/8/word/심형래.webp", clue1: "ㅅㅎㄹ", clue2: "심O래" },
      { img: "/img/8/word/유재석.jpg", clue1: "ㅇㅈㅅ", clue2: "유O석" },
      { img: "/img/8/word/율곡이이.jpg", clue1: "ㅇㄱㅇㅇ", clue2: "율OO이" },
      { img: "/img/8/word/이순신.jpg", clue1: "ㅇㅅㅅ", clue2: "이O신" },
      { img: "/img/8/word/이순재.jpg", clue1: "ㅇㅅㅈ", clue2: "이O재" },
      { img: "/img/8/word/장윤정.jpg", clue1: "ㅈㅇㅈ", clue2: "장O정" },
      { img: "/img/8/word/최불암.jpg", clue1: "ㅊㅂㅇ", clue2: "최O암" },
    ],
    sentence: [
      { img: "/img/8/sentence/강호동.jpg" },
      { img: "/img/8/sentence/나훈아.jpg" },
      { img: "/img/8/sentence/남진.jpg" },
      { img: "/img/8/sentence/세종대왕.png" },
      { img: "/img/8/sentence/송해.jpg" },
      { img: "/img/8/sentence/심형래.png" },
      { img: "/img/8/sentence/유재석.png" },
      { img: "/img/8/sentence/이순재.jpg" },
      { img: "/img/8/sentence/장윤정.jpg" },
      { img: "/img/8/sentence/최불암.jpg" },
    ],
  },
  {
    id: 4,
    name: "장소",
    wordQ: "이곳은 어디인가요?",
    word: [
      { img: "/img/1/word/병원.png", clue1: "ㅂㅇ", clue2: "병O" },
      { img: "/img/1/word/은행.png", clue1: "ㅇㅎ", clue2: "은O" },
      { img: "/img/1/word/공원.jpg", clue1: "ㄱㅇ", clue2: "공O" },
      { img: "/img/1/word/시장.jpg", clue1: "ㅅㅈ", clue2: "시O" },
      { img: "/img/1/word/카페.jpg", clue1: "ㅋㅍ", clue2: "카O" },
      { img: "/img/1/word/학교.jpg", clue1: "ㅎㄱ", clue2: "학O" },
      { img: "/img/1/word/요양원.jpg", clue1: "ㅇㅇㅇ", clue2: "요O원" },
      { img: "/img/1/word/미용실.jpg", clue1: "ㅁㅇㅅ", clue2: "미O실" },
      { img: "/img/1/word/우체국.png", clue1: "ㅇㅊㄱ", clue2: "우O국" },
      { img: "/img/1/word/노인정.jpg", clue1: "ㄴㅇㅈ", clue2: "노O정" },
      { img: "/img/1/word/백화점.jpg", clue1: "ㅂㅎㅈ", clue2: "백O점" },
      { img: "/img/1/word/세탁소.jpg", clue1: "ㅅㅌㅅ", clue2: "세O소" },
      { img: "/img/1/word/경찰서.png", clue1: "ㄱㅊㅅ", clue2: "경O서" },
      { img: "/img/1/word/주민센터.jpg", clue1: "ㅈㅁㅅㅌ", clue2: "주OO터" },
      { img: "/img/1/word/약국.jpg", clue1: "ㅇㄱ", clue2: "약O" },
    ],
    sentence: [
      { img: "/img/1/sentence/공원.png" },
      { img: "/img/1/sentence/노인정.png" },
      { img: "/img/1/sentence/미용실.png" },
      { img: "/img/1/sentence/백화점.png" },
      { img: "/img/1/sentence/병원.png" },
      { img: "/img/1/sentence/약국.png" },
      { img: "/img/1/sentence/우체국.png" },
      { img: "/img/1/sentence/은행.png" },
      { img: "/img/1/sentence/주민센터.png" },
      { img: "/img/1/sentence/학교.png" },
    ],
  },
  {
    id: 5,
    name: "일상생활1",
    wordQ: "이것은 무엇인가요?",
    word: [
      {
        img: "/img/4/word/가스레인지.jpg",
        clue1: "ㄱㅅㄹㅇㅈ",
        clue2: "가OOO지",
      },
      { img: "/img/4/word/건조대.jpg", clue1: "ㄱㅈㄷ", clue2: "건O대" },
      { img: "/img/4/word/국자.jpg", clue1: "ㄱㅈ", clue2: "국O" },
      { img: "/img/4/word/냄비.jpg", clue1: "ㄴㅂ", clue2: "냄O" },
      { img: "/img/4/word/변기.jpg", clue1: "ㅂㄱ", clue2: "변O" },
      { img: "/img/4/word/빨래집게.jpg", clue1: "ㅃㄹㅈㄱ", clue2: "빨OO게" },
      { img: "/img/4/word/세면대.jpg", clue1: "ㅅㅁㄷ", clue2: "세O대" },
      { img: "/img/4/word/세탁기.jpg", clue1: "ㅅㅌㄱ", clue2: "세O기" },
      { img: "/img/4/word/세탁세제.jpg", clue1: "ㅅㅌㅅㅈ", clue2: "세OO제" },
      {
        img: "/img/4/word/전자레인지.jpg",
        clue1: "ㅈㅈㄹㅇㅈ",
        clue2: "전OOO지",
      },
      { img: "/img/4/word/주방세제.jpg", clue1: "ㅈㅂㅅㅈ", clue2: "주OO제" },
      { img: "/img/4/word/책상.jpg", clue1: "ㅊㅅ", clue2: "책O" },
      { img: "/img/4/word/청소기.jpg", clue1: "ㅊㅅㄱ", clue2: "청O기" },
      { img: "/img/4/word/침대.jpg", clue1: "ㅊㄷ", clue2: "침O" },
      { img: "/img/4/word/후라이팬.jpg", clue1: "ㅎㄹㅇㅍ", clue2: "후OO팬" },
    ],
    sentence: [
      { img: "/img/4/sentence/거실.png" },
      { img: "/img/4/sentence/다용도실.PNG" },
      { img: "/img/4/sentence/마당.PNG" },
      { img: "/img/4/sentence/베란다.PNG" },
      { img: "/img/4/sentence/서재.PNG" },
      { img: "/img/4/sentence/세탁실.PNG" },
      { img: "/img/4/sentence/주방.png" },
      { img: "/img/4/sentence/침실.png" },
      { img: "/img/4/sentence/텃밭.PNG" },
      { img: "/img/4/sentence/화장실, 욕실.png" },
    ],
  },
  {
    id: 6,
    name: "일상생활2",
    wordQ: "이것은 무엇인가요?",
    word: [
      { img: "/img/5/word/가로등.jpg", clue1: "ㄱㄹㄷ", clue2: "가O등" },
      { img: "/img/5/word/버스.jpg", clue1: "ㅂㅅ", clue2: "버O" },
      { img: "/img/5/word/벤치.jpg", clue1: "ㅂㅊ", clue2: "벤O" },
      { img: "/img/5/word/신호등.jpg", clue1: "ㅅㅎㄷ", clue2: "신O등" },
      {
        img: "/img/5/word/에스컬레이터.jpg",
        clue1: "ㅇㅅㅋㄹㅇㅌ",
        clue2: "에OOOO터",
      },
      {
        img: "/img/5/word/엘리베이터.jpg",
        clue1: "ㅇㄹㅂㅇㅌ",
        clue2: "엘OOO터",
      },
      { img: "/img/5/word/오토바이.jpg", clue1: "ㅇㅌㅂㅇ", clue2: "오OO이" },
      { img: "/img/5/word/육교.jpg", clue1: "ㅇㄱ", clue2: "육O" },
      { img: "/img/5/word/자전거.jpg", clue1: "ㅈㅈㄱ", clue2: "자O거" },
      { img: "/img/5/word/전단지.jpg", clue1: "ㅈㄷㅈ", clue2: "전O지" },
      { img: "/img/5/word/정류장.jpg", clue1: "ㅈㄹㅈ", clue2: "정O장" },
      { img: "/img/5/word/택시.jpg", clue1: "ㅌㅅ", clue2: "택O" },
      { img: "/img/5/word/표지판.png", clue1: "ㅍㅈㅍ", clue2: "표O판" },
      { img: "/img/5/word/현수막.jpg", clue1: "ㅎㅅㅁ", clue2: "현O막" },
      { img: "/img/5/word/횡단보도.jpg", clue1: "ㅎㄷㅂㄷ", clue2: "횡OO도" },
    ],
    sentence: [
      { img: "/img/5/sentence/가로등.jpg" },
      { img: "/img/5/sentence/버스(정류장).jpg" },
      { img: "/img/5/sentence/신호등(횡단보도).jpg" },
      { img: "/img/5/sentence/에스컬레이터.png" },
      { img: "/img/5/sentence/엘리베이터.png" },
      { img: "/img/5/sentence/육교.png" },
      { img: "/img/5/sentence/자전거(벤치).jpg" },
      { img: "/img/5/sentence/전단지.png" },
      { img: "/img/5/sentence/현수막.jpg" },
      { img: "/img/5/sentence/횡단보도.png" },
    ],
  },
  {
    id: 7,
    name: "직업",
    wordQ: "이 사람에 직업은 무엇인가요?",
    word: [
      { img: "/img/2/word/간호사.jpg", clue1: "ㄱㅎㅅ", clue2: "간O사" },
      { img: "/img/2/word/경비원.jpg", clue1: "ㄱㅂㅇ", clue2: "경O원" },
      { img: "/img/2/word/경찰관.jpg", clue1: "ㄱㅊㄱ", clue2: "경O관" },
      { img: "/img/2/word/목사.jpeg", clue1: "ㅁㅅ", clue2: "목O" },
      {
        img: "/img/2/word/물리치료사.jpg",
        clue1: "ㅁㄹㅊㄹㅅ",
        clue2: "물OOO사",
      },
      { img: "/img/2/word/버스기사.webp", clue1: "ㅂㅅㄱㅅ", clue2: "버OO사" },
      {
        img: "/img/2/word/보험설계사.jpg",
        clue1: "ㅂㅎㅅㄱㅅ",
        clue2: "보OOO사",
      },
      { img: "/img/2/word/소방관.jpg", clue1: "ㅅㅂㄱ", clue2: "소O관" },
      { img: "/img/2/word/신부님.jpeg", clue1: "ㅅㅂㄴ", clue2: "신O님" },
      { img: "/img/2/word/은행원.jpeg", clue1: "ㅇㅎㅇ", clue2: "은O원" },
      { img: "/img/2/word/의사.jpg", clue1: "ㅇㅅ", clue2: "의O" },
      { img: "/img/2/word/택시기사.jpg", clue1: "ㅌㅅㄱㅅ", clue2: "택OO사" },
      { img: "/img/2/word/판매원.jpg", clue1: "ㅍㅁㅇ", clue2: "판O원" },
      { img: "/img/2/word/한의사.jpg", clue1: "ㅎㅇㅅ", clue2: "한O사" },
      {
        img: "/img/2/word/환경미화원.jpg",
        clue1: "ㅎㄱㅁㅎㅇ",
        clue2: "환OOO원",
      },
    ],
    sentence: [
      { img: "/img/2/sentence/간호사, 의사.png" },
      { img: "/img/2/sentence/경비원.png" },
      { img: "/img/2/sentence/경찰관.png" },
      { img: "/img/2/sentence/목사.png" },
      { img: "/img/2/sentence/물리치료사.png" },
      { img: "/img/2/sentence/버스기사.png" },
      { img: "/img/2/sentence/소방관.png" },
      { img: "/img/2/sentence/스님.png" },
      { img: "/img/2/sentence/의사, 간호사.png" },
      { img: "/img/2/sentence/환경미화원.png" },
    ],
  },
  {
    id: 8,
    name: "취미",
    wordQ: "이것은 무엇인가요?",
    word: [
      { img: "/img/3/word/그림.jpg", clue1: "ㄱㄹ", clue2: "그O" },
      { img: "/img/3/word/꽃꽂이.jpg", clue1: "ㄲㄲㅇ", clue2: "꽃O이" },
      { img: "/img/3/word/낚시.jpg", clue1: "ㄴㅅ", clue2: "낚O" },
      { img: "/img/3/word/노래.png", clue1: "ㄴㄹ", clue2: "노O" },
      { img: "/img/3/word/독서.jpg", clue1: "ㄷㅅ", clue2: "독O" },
      { img: "/img/3/word/등산.jpg", clue1: "ㄷㅅ", clue2: "등O" },
      { img: "/img/3/word/뜨개질.jpg", clue1: "ㄸㄱㅈ", clue2: "뜨O질" },
      { img: "/img/3/word/바둑.jpg", clue1: "ㅂㄷ", clue2: "바O" },
      { img: "/img/3/word/바리스타.jpg", clue1: "ㅂㄹㅅㅌ", clue2: "바OO타" },
      { img: "/img/3/word/사진.jpg", clue1: "ㅅㅈ", clue2: "사O" },
      { img: "/img/3/word/서예.jpg", clue1: "ㅅㅇ", clue2: "서O" },
      {
        img: "/img/3/word/아쿠아로빅.jpg",
        clue1: "ㅇㅋㅇㄹㅂ",
        clue2: "아OOO빅",
      },
      { img: "/img/3/word/악기연주.png", clue1: "ㅇㄱㅇㅈ", clue2: "악OO주" },
      { img: "/img/3/word/자수.jpg", clue1: "ㅈㅅ", clue2: "자O" },
      {
        img: "/img/3/word/캘리그라피.jpg",
        clue1: "ㅋㄹㄱㄹㅍ",
        clue2: "캘OOO피",
      },
    ],
    sentence: [
      { img: "/img/3/sentence/그림.jpg" },
      { img: "/img/3/sentence/꽃꽂이.jpg" },
      { img: "/img/3/sentence/낚시.jpg" },
      { img: "/img/3/sentence/노래.jpg" },
      { img: "/img/3/sentence/독서.jpg" },
      { img: "/img/3/sentence/등산.jpg" },
      { img: "/img/3/sentence/뜨개질.jpg" },
      { img: "/img/3/sentence/바둑.jpg" },
      { img: "/img/3/sentence/사진.jpg" },
      { img: "/img/3/sentence/악기.jpg" },
    ],
  },
];

const Select = () => {
  const navigate = useNavigate();

  const handleClick = (id, name, word, sentence, wordQ) => {
    navigate("/villageHall", { state: { id, name, word, sentence, wordQ } });
  };

  return (
    <>
      <div className="container" style={{ overflow: "hidden" }}>
        {data.map((button) => (
          <button
            key={button.id}
            className="btn"
            onClick={() =>
              handleClick(
                button.id,
                button.name,
                button.word,
                button.sentence,
                button.wordQ
              )
            }
          >
            {button.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Select;
