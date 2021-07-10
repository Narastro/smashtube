# 🎬 Smashtube 
동영상을 업로드하고 댓글을 달면서 소통할 수 있는 동영상 플랫폼

---------------------


<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Pug-A86454?style=flat-square&logo=Pug&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=white"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
<img src="https://img.shields.io/badge/FFmpeg-007808?style=flat-square&logo=FFmpeg&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon-AWS-232F3E?style=flat-square&logo=Amazon-AWS&logoColor=white"/>
<img src="https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=Heroku&logoColor=white"/>
</div>



-----------------


> ⬇직접 확인해보세요!
> 
> [[구경하기](https://smashtube.herokuapp.com)]

## 목차(바로가기)
- [주요 기능](#주요-기능)
- [개발 과정](#개발-과정)
- [배운점](#배운점)

## 주요 기능
### 1. 동영상 CRUD
- 동영상 및 썸네일 업로드
- 동영상 보기
- 동영상 정보(제목, 설명, 해시태크) 수정하기
- 동영상 지우기 
### 2. 동영상 필터(검색)
- 제목을 기준으로 동영상 검색하기
### 3. 회원가입
- 회원가입
- 로그인
- 로그아웃
- 깃허브로 로그인하기 구현(깃허브 로그인시 비밀번호 수정불가능하게 구현)
### 4. 동영상 녹화 및 다운로드
- 5초짜리 짧은 동영상을 직접 녹화하고 다운로드하기
- 썸네일도 다운로드하기
### 5. 비디오 플레이어
- 재생, 일시정지, 무음
- 상태바, 볼륨바 구현
- F키로 전체화면, SpaceBar로 재생/일시정지 구현
- 영상 시청 후 조회수 +1
- 비디오 영상 길이 및 현재 시청 구간 보여주기
### 6. 댓글
- 실시간 댓글
- 댓글 작성 시간
- 댓글 지우기 

## 개발 과정
### 1. Set up (Babel, morgan, nodemon, Pug, Express...)
- Babel 설치 및 세팅
- morgan 설치 및 세팅
- nodemon 설치 및 세팅
- (템플릿 엔진) Pug 설치 및 세팅
- (백엔드) Express 설치 및 세팅
### 2. Server
- app.js (Export, import 활용)
- routers (root, video, user로 나누어 설계)
- controllers (video와 user로 나누어 설계)
- middlewares (Babel, morgan, nodemon, Pug 적용)
- views (Pug의 Mixin, Partials, block 활용)
### 3. Database (MongoDB)
- MongoDB 설치 및 세팅
- Model (Video 모델스키마)
- controller (async, await 활용)
- CRUD (Mongoose를 이용해 비디오 CRUD 기능 구현)
- Search (비디오 탐색 기능 구현)
### 4. User Session
- Model (User 모델스키마)
- routers
- controllers (Join, Login, Logout 기능 구현)
- Security (bycrypt 사용하여 비밀번호 보완 구현)
- Session (로그인 Session 담당하는 미들웨어 구현)
- .env
### 5. Social Login
- Github OAuth app (소셜 로그인 기능 구현)
- (추후 카카오톡 로그인 기능 구현 예정)
### 6. File Upload
- multer (템플릿, 미들웨어, 라우터, 컨트롤러, 모델에 각각 적용)
- Storage (일단 로컬 컴퓨터 uploads에 저장 후, 추후 배포시 AWS 이용 예정)
### 7. Model Connection
- Video's owner (mongoose의 ObjectId 및 populate함수 활용)
- User's videos
### 8. Webpack
- Webpac 설치 및 세팅
- Babel-loader 적용
- sass-loader, css-loader, MiniCssExtractPlugin-loader 적용
### 9. SCSS
- 폴더 나누어서 추상화 적용
### 10. Video Player
- 비디오 플레이어 컨트롤 창
- 마우스 움직임에 따른 컨트롤창 등장 유무
- 재생, 일시정지, Mute 버튼
- 구간 이동 구현
- 전체화면 버튼
- F:전체화면 실행/취소, Spacebar:재생/일시정지
### 11. Number of views
- API (상태코드를 통해 조회수를 백엔드에 기록)
- Data attribute (템플릿 data-set 활용)
### 12. FFmpeg & Webassembly
- Webassembly (FFmpeg.wasm 활용)
- 비디오 녹화 및 저장 기능 구현
- 썸네일 추출 기능 구현
### 13. Flash Message
- express-flash (로그인, 로그아웃, 업로드 등 적절한 상황에 메세지 출력)
### 14. Comment Section
- Model (Comment 모델 스키마)
- Model connection (Video, User 모델과 연결)
- fetch (프론트단에서 fetch를 활용해 댓글을 백엔드로 보냄)
- 실시간 댓글 구현 (댓글을 달면 바로 템플릿에 보여줌으로써 가짜 실시간 댓글 구현)
### 15. Deployment
- Build (babel-cli와 webpack을 통해 서버와 클라이언트 빌드 후 통합)
- Heroku (몽고DB Atlas와 연결 후 Heroku로 배포)
- Github (깃허브 연결)
### 16. Cloud
- AWS (동영상 및 이미지 파일 저장소, Bucket)



## 배운점

...

## 사용 예제

스크린 샷과 코드 예제를 통해 사용 방법을 자세히 설명합니다.


