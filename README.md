# <span id="top">:seedling: 몬스테라</span>
[🔗 배포 URL](https://strawberry-market.vercel.app/)
## 개요
- 🦁 멋쟁이사자처럼 프론트엔드스쿨 4기 팀 프로젝트로 진행한 몬스테라 입니다.
- :seedling: 몬스테라 서비스는 전문가가 검수해주는 식물 거래 & 케어 플랫폼 입니다.
- 🙌 식물의 하자 및 퀄리티 등을 전문가가 검수하여 판매자와 구매자 간 중개업을 합니다.
- 📝 식물병원 게시판에서 식물진단 가이드 글을 참고하여, 식물 상태를 자가진단 할 수 있습니다.

## 팀원 구성
- 🙋‍♂️ 박일범 🔗[github/parkilbeom](https://github.com/parkilbeom)
- 🙋 김도현 🔗[github/kimzeze](https://github.com/kimzeze)
- 🙋🏼‍♀️ 이연주 🔗[github/joo1215](https://github.com/joo1215)
- 🙋🏻‍♀️ 김현진 🔗[github/hyundini](https://github.com/hyundini)
- 🙋🏻 정보화 🔗[github/bellaru2022](https://github.com/bellaru2022)


## 목차

1. [프로젝트 목표](#goal)
2. [개발 환경 및 배포 URL](#dev)
3. [프로젝트 구조](#tree)
4. [역할 분담](#role)
5. [개발 기간 및 이슈 관리](#task)
6. [UI](#ui)
7. [페이지 기능](#pages)
8. [개발하며 겪은 이슈](#issues)



***


## <span id="goal">1. 프로젝트 목표</span>

## 🎓 프로젝트 팀 목표

1. 프로젝트 목표 및 계획을 작성하고, 이를 README 파일에 자세하게 기록
2. Issue 기능을 활용하여 업무를 관리하고, 각 Issue에 대한 상세 설명, 우선순위, 담당자, 데드라인 등을 명확히 기록
3. Branch를 적극 활용하여 개발 작업을 병렬적으로 진행하고, 개발 완료 후 Pull Request를 통해 코드 리뷰 및 Merge를 진행
4. 코드 컨벤션을 정의하고, 모든 참여자가 동일한 스타일로 코드를 작성
5. Commit 메시지는 언제 어떤 변경 사항이 있었는지 쉽게 파악할 수 있도록 명확하고 간결하게 작성
6. 코드 리뷰를 통해 서로 코드를 검토하고, 피드백을 제공하며 코드 품질을 향상
7. 변경 사항을 정기적으로 체크하고, 필요한 경우 문제점을 해결하고 개선하는 것을 지속적으로 추진


## 🧙 프로젝트 개인 목표

### 박일범

- 팀원들과 협업스킬 향상
- React 작업 최대한 많이 해보기
- StoryBook, Recoil 익숙해지기

### 김현진

- 리액트 상태 관리에 대해서 정확히 이해하고, 상태관리 툴을 익숙하게 다루기
- 컴포넌트 재활용성을 극대화하기

### 정보화

- 페이지 전체적인 구성을 논리적으로 짜기
- 배운 내용 최대한 활용해보기

### 이연주

- 컴포넌트를 마크업 신경써서 만들기

### 김도현

- 논리적으로 구분되고 일관성 있게 커밋 기록 남기기



<p align="right"><a href="#top">(Top)</a></p>

## <span id="dev">2. 개발 환경 및 배포 URL</span>
### 개발 환경
- React
- Recoil
- CSS MODULES
- Storybook
- Firebase
- git
- React Router
- 버전 관리 및 이슈 : 🔗[GitHub](https://github.com/Lab20-Mosobamboo/Monstera), 🔗[GitHub Issues](https://github.com/Lab20-Mosobamboo/Monstera/issues), 🔗[GitHub Project](https://github.com/orgs/Lab20-Mosobamboo/projects/1)
- 서비스 배포 환경 : [🔗 Vercel](https://vercel.com/)
### 배포 URL
URL : 🔗 https://strawberry-market.vercel.app/

<p align="right"><a href="#top">(Top)</a></p>

## <span id="tree">3. 프로젝트 구조</span>
- assets/ : 이미지, 아이콘 등
- components/ : 기본 components 디렉토리
- containers/ : container를 모아둔 디렉토리
- pages/ : components와 containers에서 만든 것을 page로 합친 디렉토리

```bash
│  README.md
│  index.html
├── assets
├── css
│    ├── default.css
│    ├── font.css
│    ├── reset.css
│    ├── style.css
│    ├── style_HJ.css
│    ├── style_JA.css
│    ├── style_NR.css
│    └── style_YE.css
├── font
├── html
├── js
│    ├── accountedit.js
│    ├── chat.js
│    ├── chatroom.js
│    ├── edit.js
│    ├── followers.js
│    ├── followfeed.js
│    ├── followings.js
│    ├── index.js
│    ├── intro.js
│    ├── join.js
│    ├── login.js
│    ├── mypostedit.js
│    ├── myprofile.js
│    ├── post.js
│    ├── postdetail.js
│    ├── product.js
│    ├── profile.js
│    ├── script.js
│    ├── search.js
│    └── useredit.js
└── pages
     ├── accountedit.html
     ├── chat.html
     ├── chatroom.html
     ├── edit.html
     ├── followers.html
     ├── followfeed.html
     ├── followings.html
     ├── home.html
     ├── intro.html
     ├── join.html
     ├── login.html
     ├── mypostedit.html
     ├── myprofile.html
     ├── post.html
     ├── postdetail.html
     ├── product.html
     ├── profile.html
     └── search.html
```

<p align="right"><a href="#top">(Top)</a></p>


## <span id="role">4. 역할 분담</span>
**하단과 같이 각자 페이지를 나누어 진행하였습니다.**

### 🙋‍♂️ 박일범 (리더)
  - 🔗[github/parkilbeom](https://github.com/parkilbeom)
  - 홈페이지 전체 디자인, 헤더&푸터, 장바구니 페이지, 전체적인 프로젝트 관리 및 환경설정
### 🙋 김도현
  - 🔗[github/kimzeze](https://github.com/kimzeze)
  - 메인 페이지, 컴포넌트 & 스토리북 관리, 파이어베이스 관리
### 🙋🏼‍♀️ 이연주
  - 🔗[github/joo1215](https://github.com/joo1215)
  - 상품 상세 페이지, 백로그 및 팀 프로젝트 스케줄 관리
### 🙋🏻‍♀️ 김현진
  - 🔗[github/hyundini](https://github.com/hyundini)
  - 로그인, 회원가입 페이지, 파이어베이스 관리
### 🙋🏻 정보화
  - 🔗[github/bellaru2022](https://github.com/bellaru2022)
  - 식물 진단 페이지, wiki 및 스크럼 관리

<p align="right"><a href="#top">(Top)</a></p>


## <span id="task">5. 개발 기간 및 작업 관리</span>
- 전체 개발 기간 : 2023-03-09 ~ 2023-03-29
### 작업 관리
- 🔗[GitHub Projects](https://github.com/orgs/Lab20-Mosobamboo/projects/1)와 🔗[Issues](https://github.com/Lab20-Mosobamboo/Monstera/issues)를 사용하여 진행도와 상황을 꾸준히 공유하였습니다.
<img src="https://user-images.githubusercontent.com/108967196/227976589-13d213fd-5f3c-4808-a5a4-e2b76be0f7f7.png">


### 데일리 스크럼
데일리 스크럼 작성을 통해 그날 작업 방향 및 목표를 설정하였고 이를 GitHub Wiki를 사용하여 기록하였습니다.

- 🔗[230310 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.10-%EA%B8%88)
- 🔗[230313 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.13-%EC%9B%94)
- 🔗[230314 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.14-%ED%99%94)
- 🔗[230315 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.15-%EC%88%98)
- 🔗[230316 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.16-%EB%AA%A9)
- 🔗[230317 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.17-%EA%B8%88)
- 🔗[230320 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.20-%EC%9B%94)
- 🔗[230321 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.21-%ED%99%94)
- 🔗[230322 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.22-%EC%88%98)
- 🔗[230323 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.23-%EB%AA%A9)
- 🔗[230324 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.24-%EA%B8%88)
- 🔗[230327 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.27-%EC%9B%94)
- 🔗[230328 스크럼](https://github.com/Lab20-Mosobamboo/Monstera/wiki/2023.03.28-%ED%99%94)

<p align="right"><a href="#top">(Top)</a></p>

## <span id="ui">6. UI</span>
<img src="https://user-images.githubusercontent.com/108967196/227981933-4720b4b3-a090-41d5-bd77-32b767ffc247.png">

<p align="right"><a href="#top">(Top)</a></p>

## <span id="pages">7. 페이지 기능</span>

### 1) 메인 
|🔗[splash](https://github.com/nurimeansworld/strawberry_market/wiki/페이지-기능-상세-설명#-splash)|🔗[로그인 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/페이지-기능-상세-설명#-로그인-페이지)|🔗[회원가입 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/페이지-기능-상세-설명#-회원가입-페이지)|
|:-:|:-:|:-:|
|<img width="390px;" src="https://user-images.githubusercontent.com/86909942/153747664-ff315846-7e38-4079-8eae-429167206a54.gif"> |<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147004-5ca2bffd-9221-422c-beaf-9d6d96433e58.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147035-9b44eb92-f879-4601-8200-5fe0f153d0e3.gif">|
|🔗[홈 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%ED%99%88-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[검색 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%80%EC%83%89-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[채팅 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%80%EC%83%89-%ED%8E%98%EC%9D%B4%EC%A7%80)|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154808243-27f7d259-a6f8-4854-9988-42c8cf9e679c.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147058-8d375716-8163-49bf-b1a2-54e549a99581.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/86909942/153747299-3ad2f035-811c-4d6c-8729-44eec3a28af7.gif">|

## 2) 로그인
|🔗[게시글 작성 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%9E%91%EC%84%B1-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[게시물 상세 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EB%AC%BC-%EC%83%81%EC%84%B8-%ED%8E%98%EC%9D%B4%EC%A7%80)|
|:-:|:-:|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154149525-4f2279be-dc6e-4051-bcf8-1e4f44b5a2b7.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147122-b190781a-020e-48fa-b745-076958aaa0b8.gif">|
|🔗[게시글 수정 or 신고 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%88%98%EC%A0%95-or-%EC%8B%A0%EA%B3%A0-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%8C%93%EA%B8%80-%EC%88%98%EC%A0%95-or-%EC%8B%A0%EA%B3%A0-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[댓글 삭제 or 신고 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%88%98%EC%A0%95-or-%EC%8B%A0%EA%B3%A0-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%8C%93%EA%B8%80-%EC%88%98%EC%A0%95-or-%EC%8B%A0%EA%B3%A0-%ED%8E%98%EC%9D%B4%EC%A7%80)|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/155879884-90eb92dc-a53e-4f4b-98aa-de655f5e4b8e.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154809365-fd7feb77-780f-4009-81ed-2b8d1b011b5e.gif">|

## 3) 회원가입
|🔗[마이 프로필 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EB%A7%88%EC%9D%B4-%ED%94%84%EB%A1%9C%ED%95%84-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[유저 프로필 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%9C%A0%EC%A0%80-%ED%94%84%EB%A1%9C%ED%95%84-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[팔로워 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%ED%8C%94%EB%A1%9C%EC%9B%8C-%ED%8E%98%EC%9D%B4%EC%A7%80-%ED%8C%94%EB%A1%9C%EC%9E%89-%ED%8E%98%EC%9D%B4%EC%A7%80)
|:-:|:-:|:-:|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/155853160-889c8826-455a-43ce-90ad-6ffdb0c10a72.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/155852974-ee932d5d-d1f0-44d8-87f9-0263f1622685.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/155879188-637fb973-e9d7-405e-846c-1cca544eeba1.gif">
|🔗[팔로잉 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%ED%8C%94%EB%A1%9C%EC%9B%8C-%ED%8E%98%EC%9D%B4%EC%A7%80-%ED%8C%94%EB%A1%9C%EC%9E%89-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[로그아웃 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[프로필 수정 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%ED%94%84%EB%A1%9C%ED%95%84-%EC%88%98%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80)
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/155879191-6d45f339-75f3-4353-a3e4-7a864ca3341c.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154150447-2feca0af-dcf5-4101-8d6c-f4f0c81cc575.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147590-6343cb56-5a60-4a15-bf94-e6805d7e8bb3.gif">|

## 4) 상품 상세
|🔗[상품 등록 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[상품 수정 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%88%98%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80)|
|:-:|:-:|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147633-4842d449-544d-4268-b3ef-361a031bb964.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154154506-7f492ae0-31cd-4da3-bf11-43a3b1608306.gif">|
|🔗[상품 삭제 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C-%EC%9D%B4%EB%8F%99-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[상품 사이트로 이동 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C-%EC%9D%B4%EB%8F%99-%ED%8E%98%EC%9D%B4%EC%A7%80)|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154155295-5c75bcb8-82cd-4b9b-930d-fb380e5b8218.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/155849036-8466debe-7267-454b-8f4b-4f74b1eac7be.gif">|

## 5) 식물진단 가이드
|🔗[상품 등록 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[상품 수정 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%88%98%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80)|
|:-:|:-:|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147633-4842d449-544d-4268-b3ef-361a031bb964.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154154506-7f492ae0-31cd-4da3-bf11-43a3b1608306.gif">|
|🔗[상품 삭제 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C-%EC%9D%B4%EB%8F%99-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[상품 사이트로 이동 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C-%EC%9D%B4%EB%8F%99-%ED%8E%98%EC%9D%B4%EC%A7%80)|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154155295-5c75bcb8-82cd-4b9b-930d-fb380e5b8218.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/155849036-8466debe-7267-454b-8f4b-4f74b1eac7be.gif">|

## 6) 장바구니
|🔗[상품 등록 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[상품 수정 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%88%98%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80)|
|:-:|:-:|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147633-4842d449-544d-4268-b3ef-361a031bb964.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154154506-7f492ae0-31cd-4da3-bf11-43a3b1608306.gif">|
|🔗[상품 삭제 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C-%EC%9D%B4%EB%8F%99-%ED%8E%98%EC%9D%B4%EC%A7%80)|🔗[상품 사이트로 이동 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C-%EC%9D%B4%EB%8F%99-%ED%8E%98%EC%9D%B4%EC%A7%80)|
|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/154155295-5c75bcb8-82cd-4b9b-930d-fb380e5b8218.gif">|<img width="390px;" src="https://user-images.githubusercontent.com/89337955/155849036-8466debe-7267-454b-8f4b-4f74b1eac7be.gif">|

<p align="right"><a href="#top">(Top)</a></p>

## <span id="issues">8. 개발하며 겪은 이슈</span>
### 1) 코드 컨벤션, 커밋 컨벤션 정하기
#### 내용
- 협업에 앞서 가독성과 개발 방식 통합을 위해 컨벤션 통일의 필요성에 대해 모두 동의하였습니다.
- 첫 협업에 앞서 다양한 컨벤션 사례와 여러 자료를 서로 찾아보며 공유하였습니다.
- 기존 사례를 무조건 따라가기 보다는 저희에게 더 적합하고 효율적인 규칙에 대해서 고민하는 시간을 가졌습니다.
#### 결론
- 저희만의 코드 컨벤션, 커밋 컨벤션을 만들었습니다.



  ▶ 🔗[코드 컨벤션](https://github.com/Lab20-Mosobamboo/Monstera/wiki/%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98-(Code-Convention))


  ▶ 🔗[커밋 컨벤션](https://github.com/Lab20-Mosobamboo/Monstera/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-(Commit-Convention))
  
 



### 2) Storybook에서 Link컴포넌트 테스트 할 때 발생하는 에러 메시지
#### 내용
- button, input, 등 기본 컴포넌트를 만들고 storybook에서 연동했을시 정상작동하지만 Link 컴포넌트는 에러 경고창이 나왔습니다.

#### 결론
- Storybook에서 React Router의 Link 컴포넌트를 사용하려면 storybook-addon-react-router-v6 애드온 설치가 필요합니다.
- 애드온 설치를 하고 main.js에서 설치한 애드온을 구성하고 .storybook/preview.js 파일에 데코레이더를 구성하고 Link컴포넌트 파일 수정 및 Link 컴포넌트 스토리 파일 작성을 하니 정상작동하는 것을 확인하였습니다.

### 3)  firebase-tools 설치시 터미널 에러
#### 내용
- firebase를 사용하기위해 터미널에서 npm i firebase 이후 npm install -g firebase-tools 했으나 에러로 인해 설치되지않았습니다.
#### 결론
- root 권한이 필요한 것 같아서 mac 환경의 경우 sudo를 앞에 추가하여 입력했더니 정상적으로 설치된 것을 확인하였습니다. sudo npm install -g firebase-tools  입력후 mac 계정 password 입력 후 에러 해결 완료하였습니다.

### 4) 스토리북 작동 잘하다가 다시 작동하지 않는 경우
#### 내용
- 스토리북 잘 열렸다가 이런 저런 작업을 하다가 다음과 같은 에러메시지가 뜨면서 작동하지 않았습니다. Faild to resolve import "../../assets/monstera_icon.svg"
#### 결론
- VSCode 에디터에서 에셋 경로를 입력해보면 assets 폴더가 아니라, assets/images 폴더 안에 모든 이미지가 포함되어 있어서 에셋 경로만 바꿔주니 잘 작동하였습니다.



### 5)  App.jsx에서 export default 가 중복으로 선언된 경우
#### 내용
- GlobalStyles가 App.jsx에 import도 되어있고 동시에 내용에 GlobalStyles로 export하는 코드가 포함되어있습니다.
src/App.jsx:10:6: ERROR: The symbol "GlobalStyles" has already been declared
- export default를 통하여 GlobalStyles를 내보내주고 있어서 아래와 같은 오류가 나는 것 같습니다.
src/App.jsx:51:7: ERROR: Multiple exports with the same name "default"
#### 결론
- app.jsx에서 중복선언된 부분은 제거하니 에러메시지가 나오지 않았습니다.

<p align="right"><a href="#top">(Top)</a></p>
