# 🌟 Yoon Hyuna's Portfolio

Next.js 14 기반으로 구축된 모던 포트폴리오 웹사이트입니다.

## 🚀 Live Demo

[포트폴리오 사이트 바로가기](https://hyonna-portfolio.vercel.app)

## ✨ 주요 기능

- **Next.js 14 App Router** 기반 모던 웹사이트 구축
- **Framer Motion**을 활용한 부드러운 애니메이션 구현
- **반응형 디자인**으로 모든 디바이스에서 최적화된 사용자 경험
- **TypeScript**로 타입 안정성 확보
- **Tailwind CSS**로 효율적인 스타일링
- **포트폴리오 필터링 기능** (전체/회사/Toy Project)
- **Vercel**을 통한 자동 배포 및 성능 최적화
- **다크 테마**와 핑크 그라데이션 디자인 시스템

## 🛠️ 기술 스택

### Frontend

- **Next.js 14** - App Router, SSR
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션
- **Lucide React** - 아이콘

### State Management & Forms

- **Zustand** - 상태 관리
- **React Hook Form** - 폼 관리

### Deployment

- **Vercel** - 자동 배포 및 호스팅

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # 전역 스타일
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/             # React 컴포넌트
│   ├── about/              # About 섹션
│   ├── career/             # Career 섹션
│   ├── education/          # Education 섹션
│   ├── hero/               # Hero 섹션
│   ├── layout/             # 레이아웃 컴포넌트
│   ├── portfolio/          # Portfolio 섹션
│   └── ui/                 # 공통 UI 컴포넌트
├── data/                   # 정적 데이터
│   ├── about.ts            # About 데이터
│   ├── career.ts           # Career 데이터
│   ├── education.ts        # Education 데이터
│   └── works.ts            # Portfolio 데이터
├── hooks/                  # 커스텀 훅
├── lib/                    # 유틸리티 및 설정
└── types/                  # TypeScript 타입 정의
```

## 🚀 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/your-username/hyonna-portfolio.git
cd hyonna_portfolio
```

### 2. 의존성 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 📱 반응형 디자인

- **모바일**: 360px ~ 768px
- **태블릿**: 768px ~ 1024px
- **데스크톱**: 1024px 이상

## 🎨 디자인 시스템

- **색상**: 다크 테마 기반, 핑크 그라데이션 포인트 컬러
- **타이포그래피**: 시스템 폰트 스택 사용
- **애니메이션**: Framer Motion을 활용한 부드러운 전환 효과
- **레이아웃**: CSS Grid와 Flexbox 활용

## 🔧 주요 컴포넌트

### PortfolioGrid

- 포트폴리오 프로젝트 필터링 기능
- 카테고리별 프로젝트 그룹화
- 반응형 그리드 레이아웃

### PortfolioModal

- 프로젝트 상세 정보 모달
- 이미지 확대 보기 기능
- 트러블슈팅 섹션

### AnimatedCard

- 호버 애니메이션 효과
- 카드 높이 통일
- 반응형 디자인

## 📦 배포

### Vercel 배포

1. Vercel 계정에 GitHub 저장소 연결
2. 자동 배포 설정 완료
3. 도메인 설정 (선택사항)

```bash
# Vercel CLI를 통한 배포
vercel --prod
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 📞 연락처

- **이메일**: yha0118@gmail.com
- **GitHub**: [@hyonna](https://github.com/hyonna)
- **포트폴리오**: [https://hyonna-portfolio.vercel.app](https://hyonna-portfolio.vercel.app)

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
