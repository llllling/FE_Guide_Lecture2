# 프론트엔드 실무 가이드2

패스트캠퍼스 - 조은의 프론트엔드 실무 가이드 : 요구사항 분석과 적정 기술

## 프론트엔드 개발자는 어디까지 알아야 하는가 ?

### BackEnd 관련 지식

1. 네트워크 => http
2. Restful API => API 설계구조
3. DB구조 => MockAPI를 만들기 위해
   - RDB
   - NoSql
4. JSON
5. GraphQL
6. SQL

### client 관련 지식

1. 브라우저, OS, Mobile, Descktop 별 특징
2. Content format

- 이미지 - png, jpg. webp
- 비디오 - mp4, mpeg, vp9, av1
  - 유튜브에서 8K 비디오를 지원하고 있는 데, 이를 지원하는 근간이 av1 코덱에서 나옴, 이러한 것들을 알고 있어야 내가 만드는 서비스에서 4K를 지원하려면 어떠한 포맷을 써야하는 지 이해를 해야함.
- 오디오
- 텍스트 - plan text

### UX(좀 더 욕심내면 여기까지..)

### 인프라

- 배포를 어떻게 할 건지
- AWS
- Serverless
- Docker
- CDN
- S3
- DevOps
- Monitor
- Log

#### 웹 전체를 아우를 수 있는 지식을 갖추는 것이 좋은 개발자

## 웹 전체를 아우르는 문제 정리하기

- 디테일한 부분 제외 웹을 굴리기 위해 기초적으로 신경써야하는 것 => 서버를 구축하고 모니터링하고 스케일링 가능한 구조로 만들고 트래픽을 버틸 수 있게 만드는 것

#### 그래서 이걸 어떻게 해야하는 가 ?

- 스케일링에 대한 이해를 가지려면 ? => 서버의 가용성을 알아야 함.
  - aws, vercel 사용하면 기본적으로 서버 가용성을 보여줌
  * 만약 가용성이 100%가 되면 서버를 늘릴 지 죽일 지 결정 => 서버에 대한 스케일링 정책은 PO와 상의

* **트래픽의 발생을 줄이는 게 중요**
  - 리소스의 크기
  * 캐싱
  - DB와 얼마나 자주 통신하는 가

## 브라우저 렌더링

- **레아아웃을 발생시키는 속성(ex : position)을 사용하면 60프레임을 유지하기가 어렵다.**
  - position 속성으로 애니메이션 변경 시 레이아웃 발생 시켜서 60프레임 유지 어려움
  - transform 사용해서 위치 이동 시 레이아웃 발생 안 시키고 페인트만 발생해서 기본적으로 60프레임 유지 가능
    - will-change를 써서 gpu를 극대화해서 사용하는 방법도 있음
      > - will-change css 속성은 요소의 변화를 미리 브라우저에게 알려주어 브라우저가 미리 최적화를 하게 할 수 있는 속성, 남발하면 안좋다고 함

## CSR

- csr은 왜 나왔는가 !?
  - 예전엔 pageA => pageB로 넘어가는 동작이 부자연스러움, 페이지 이동 시 하얀 화면, 새로고침을 해야지만 새로운 데이터를 받아올 수 있었음. => traditional Web

* js 번들의 크기가 커짐
* dom을 브라우저에서 만들어서 브라우저 컴퓨팅 파워를 많이 씀. => 렌더링 퍼포먼스 저하
* 한번 렌더링을 시키고 나면 그 다음에는 필요한 부분만 렌더링해서 성능상의 이점이 없지는 않음
* facebook, instagram, gmail, google docs와 같이 **실시간성이 보장되고 유지시켜주어야 하는 서비스**에 csr이 적합.
* 뉴스 기사를 보여주는 사이트와 같은 곳은 적합하지 않음
