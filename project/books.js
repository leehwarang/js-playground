var book1 = {
    title : '초격차',
    author : '권오현' 
};

var book2 = {
    title : '12가지 인생의 법칙',
    author : '조던 B. 피터슨' 
};

var book3 = {
    title : '82년생 김지영',
    author : '조남주' 
};

var book4 = {
    title : '트렌드 코리아 2019',
    author : '권정윤, 김난도 외 7명' 
};

var book5 = {
    title : '걷는 사람, 하정우',
    author : '하정우' 
};

var book6 = {
    title : '골든아워 1',
    author : '이국종' 
};

var book7 = {
    title : '라틴어 수업',
    author : '한동일' 
};

var book8 = {
    title : '최진기의 경제 상식 오늘부터 1일',
    author : '최진기' 
};

var book9 = {
    title : '은하영웅전설+외전 세트',
    author : '다나카 요시키' 
};

var book10 = {
    title : '별의 계승자',
    author : '제임스 P.호건' 
};

var book11 = {
    title : '경제 트렌드 2019',
    author : '김동환, 김일구 외 1명' 
};

var book12 = {
    title : '나는 오늘도 경제적 자유를 꿈꾼다.',
    author : '청울림' 
};

var book13 = {
    title : '채권쟁이 서준식의 다시 쓰는 주식투자 교과서',
    author : '서준식' 
};

var book14 = {
    title : '옥상에서 만나요',
    author : '정세랑' 
};

var book15 = {
    title : '공포',
    author : '밥 우드워드' 
};

var book16 = {
    title : '플루언트',
    author : '조승연' 
};

var book17 = {
    title : '한국, 남자',
    author : '최태섭' 
};

var book18 = {
    title : '능소화',
    author : '조두진' 
};

var book19 = {
    title : '고양이 1',
    author : '베르나르 베르베르' 
};

var book20 = {
    title : '[완결세트] 붓다',
    author : '테즈카 오사무' 
};

var book21 = {
    title : '딱 1년만, 나만 생각할게요',
    author : '마리안 파워' 
};

var book22 = {
    title : '종이 동물원',
    author : '켄 리우' 
};

var book23 = {
    title : '최고의 팀은 무엇이 다른가',
    author : '대니얼 코일' 
};

var book24 = {
    title : '온르처럼 내가 싫었던 날은 없다',
    author : '글배우' 
};

var book25 = {
    title : '사피엔스',
    author : '유발 하라리' 
};

var book26 = {
    title : '21세기를 위한 21가지 제언',
    author : '유발 하라리' 
};

var book27 = {
    title : '나미야 잡화점의 기적',
    author : '히가시노 게이고' 
};

var book28 = {
    title : '비커밍',
    author : '미셸 오바마' 
};

var book29 = {
    title : '[격주간] 이슈',
    author : '이슈 편집무' 
};

var book30 = {
    title : '당신이 옳다',
    author : '정혜신' 
};

var book31 = {
    title : '나는 돈에 미쳤다',
    author : '젠 신체로' 
};

var book32 = {
    title : '요시카와에이지 삼국지 세트 (10권)',
    author : '요시카와 에이지' 
};

var book33 = {
    title : '중세 3세트',
    author : '움베르토 에코' 
};

var book34 = {
    title : '야시',
    author : '쓰네카와 고타로' 
};

var book35 = {
    title : '더 클래식 세트',
    author : '문학수' 
};

var book36 = {
    title : '그리스로마신화 세트(6권)',
    author : '구스타프 슈바브' 
};

var book37 = {
    title : '중세 5세트',
    author : '움베르토 에코' 
};

var book38 = {
    title : '바오항하는 메아리',
    author : '최의택' 
};

var book39 = {
    title : '평균의 종말',
    author : '토드 로즈' 
};

var book40 = {
    title : '백래시',
    author : '수전 팔루디' 
};

var book41 = {
    title : '불렛저널',
    author : '라이더 캐롤' 
};

var book42 = {
    title : '내게 무해한 사람',
    author : '최은영' 
};

var book43 = {
    title : '문예춘추사 셜록 홈즈 전집 세트',
    author : '아서 코난 도일' 
};

var book44 = {
    title : '강성태 영단어 어원편 세트',
    author : '강성태' 
};

var book45 = {
    title : '미등록자(플래티나 데이터)',
    author : '히가시노 게이고' 
};

var book46 = {
    title : '세상에서 가장 재미있는 세계사 + 과학만화 세트',
    author : '래리 고닉' 
};

var book47 = {
    title : '나의 외국어 학습기',
    author : '김태완' 
};

var book48 = {
    title : '히가시노 게이고의 무한도전',
    author : '히가시노 게이고' 
};

var book49 = {
    title : '90년생이 온다 ',
    author : '임홍택' 
};

var book50 = {
    title : '나도 아직 나를 모른다 ',
    author : '허지원' 
};

var books = {};
books.choiced_title = document.getElementById('book-title'); 
books.choiced_author = document.getElementById('book-author'); 

books.bestseller = [
    book1, book2, book3, book4, book5, book6, book7, book8, book9, book10,
    book11, book12, book13, book14, book15, book16, book17, book18, book19, book20,
    book21, book22, book23, book24, book25, book26, book27, book28, book29, book30,
    book31, book32, book33, book34, book35, book36, book37, book38, book39, book40,
    book41, book42, book43, book44, book45, book46, book47, book48, book49, book50,    
];

books.choice = function(){
    var index = Math.floor(Math.random()*this.bestseller.length);
    console.log(this.bestseller[index])
    this.choiced_title.innerHTML = this.bestseller[index].title;
    this.choiced_author.innerHTML = this.bestseller[index].author;
} 

show = function(){
    books.choice();
};