# 거꾸로캠퍼스 도서 관리 플랫폼

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Developed with:

`typescript`, `kakao api`, `recoil`, `Django`

### Todo:

- 네비게이터 부분
  - [Navigator.tsx] 스타일 수정. V
  - 로고 이미지 받기
- 메인 페이지 부분
  - 넷플릭스 슬라이드 효과 넣기 V
  - [GetBooksInMain.tsx] 에 키워드별로 필터링 하기. V
- 반납 부분
  - 대출 중인 도서 0권일 때 반납하기 버튼 아래로 내리기 V
- 내 서재 부분
  - "대출/반납 현황 조회" 눌렀을 때 서버에서 데이터 받기. V
  - 데이터 나열 V
- 신청 및 문의 부분
  - [InputKeywords.tsx] 에 키워드 추가하는 기능 만들기
- 검색 부분
  - 검색 버튼 누를 때 넷플릭스 검색처럼 -> 이렇게 나오는 효과 주기 V
  - 서버는 Book.objects.all().filter(Q(book_info**title**contains = query) | Q(book_info**author**contains=query)로 구현하기 V
- 찜한 도서 부분
  - 도서 찜하기 기능 추가 V
- naver api로 바꾸기
- Some new tech..?
