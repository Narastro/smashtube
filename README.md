# 🎬 Smashtube 
동영상을 업로드하고 댓글을 달면서 소통할 수 있는 동영상 플랫폼

> ⬇직접 확인해보세요!
> 
> [[구경하기](https://smashtube.herokuapp.com)]

## 목차(바로가기)
- [개발 과정](#개발-과정)
- [주요 기능](#주요-기능)
- [배운점](#배운점)

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


## 주요 기능
## 배운점

한 두 문단으로 프로젝트 소개 글을 작성합니다.


## 사용 예제

스크린 샷과 코드 예제를 통해 사용 방법을 자세히 설명합니다.

_더 많은 예제와 사용법은 [Wiki][wiki]를 참고하세요._

## 개발 환경 설정

모든 개발 의존성 설치 방법과 자동 테스트 슈트 실행 방법을 운영체제 별로 작성합니다.

```sh
make install
npm test
```

## 업데이트 내역

* 0.2.1
    * 수정: 문서 업데이트 (모듈 코드 동일)
* 0.2.0
    * 수정: `setDefaultXYZ()` 메서드 제거
    * 추가: `init()` 메서드 추가
* 0.1.1
    * 버그 수정: `baz()` 메서드 호출 시 부팅되지 않는 현상 (@컨트리뷰터 감사합니다!)
* 0.1.0
    * 첫 출시
    * 수정: `foo()` 메서드 네이밍을 `bar()`로 수정
* 0.0.1
    * 작업 진행 중
<!-- 
## 정보

이름 – [@트위터 주소](https://twitter.com/dbader_org) – 이메일주소@example.com

XYZ 라이센스를 준수하며 ``LICENSE``에서 자세한 정보를 확인할 수 있습니다.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## 기여 방법

1. (<https://github.com/yourname/yourproject/fork>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki -->
