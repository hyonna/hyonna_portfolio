import type { Work } from '@/types/work'

export const WORKS: Work[] = [
  {
    title: '또하나의가족 플랫폼 리뉴얼',
    desc: '요양정보 맞춤형 서비스 플랫폼',
    url: 'https://ddoga.co.kr',
    stack: ['Next.js 14', 'TypeScript', 'MUI', 'Storybook', 'Zustand', 'Jenkins', 'Firebase GA'],
    stackCategories: [
      {
        category: '프론트엔드',
        technologies: ['Next.js 14', 'TypeScript', 'MUI', 'Emotion', 'Styled-components']
      },
      {
        category: '상태관리',
        technologies: ['Zustand', 'Context API']
      },
      {
        category: 'API & 인증',
        technologies: ['Axios', 'Fetch', 'JWT']
      },
      {
        category: '개발도구',
        technologies: ['Storybook']
      },
      {
        category: 'CI/CD',
        technologies: ['Jenkins']
      },
      {
        category: '분석도구',
        technologies: ['Firebase GA']
      }
    ],
    tags: ['솔로', '웹', '요양정보'],
    status: '2024.07 - 2025.07 (2025.07.22 런칭)',
    teamInfo: '프론트엔드 개발 100%',
    company: '헥톤프로젝트',
    features: [
      'Atomic Design 시스템 설계 및 Storybook 도입으로 UI 재사용성 증가',
      'Next.js SSR 적용으로 초기 로딩 속도 개선, SEO 강화',
      'Zustand + Context API + JWT 기반 인증·상태 관리 구현',
      'Jenkins CI/CD 파이프라인 구축으로 배포 자동화 및 운영 병목 제거',
      'Firebase GA 이벤트 트래킹 및 Jira 기반 협업 프로세스 체계화'
    ],
    contribution: '디자인 시스템 구축부터 전체 개발 진행',
    troubleshooting: [
      {
        title: '요양 시설 매칭 알고리즘 설계의 복잡성',
        problem:
          '사용자의 요양 등급, 지역, 특수 요구사항 등 다양한 조건을 고려하여 최적의 요양 시설을 매칭하는 알고리즘 설계가 복잡했습니다. 특히 실시간으로 시설 정보를 업데이트하고 사용자에게 맞춤형 추천을 제공하는 것이 기술적 도전이었습니다.',
        solution:
          '사용자 프로필과 요양 시설 데이터를 체계적으로 분류하고, 가중치 기반 매칭 알고리즘을 구현했습니다. 또한 실시간 데이터 동기화를 위해 상태 관리 시스템을 구축하고, 사용자 피드백을 반영한 추천 시스템을 개발했습니다.',
        reflection:
          '복잡한 비즈니스 로직을 프론트엔드에서 효율적으로 처리하기 위해서는 데이터 구조 설계와 상태 관리가 핵심이라는 것을 깨달았습니다. 사용자 경험을 최우선으로 고려한 설계가 중요합니다.'
      },
      {
        title: '요양 정보 콘텐츠 관리 시스템 구축',
        problem:
          '요양 관련 정보가 매우 전문적이고 복잡하여, 일반 사용자들이 쉽게 이해할 수 있도록 콘텐츠를 구조화하고 관리하는 시스템이 필요했습니다. 또한 실시간으로 업데이트되는 요양 정책 정보를 효율적으로 관리해야 했습니다.',
        solution:
          'Atomic Design 시스템을 활용하여 재사용 가능한 컴포넌트를 설계하고, Storybook을 도입하여 디자인 시스템을 체계화했습니다. 또한 CMS 기능을 구현하여 콘텐츠 관리자들이 쉽게 정보를 업데이트할 수 있도록 했습니다.',
        reflection:
          '전문적인 도메인 지식을 일반 사용자에게 전달하기 위해서는 직관적인 UI/UX 설계가 필수적이라는 것을 배웠습니다. 디자인 시스템 구축의 중요성을 깊이 이해하게 되었습니다.'
      }
    ]
  },
  {
    title: 'ProBit Global - Buy Crypto UI/UX 개선',
    desc: '암호화폐 거래 플랫폼',
    url: 'https://www.probit.com/en-us/buy-crypto',
    stack: ['Angular', 'SCSS', 'NgRx', 'RxJS'],
    tags: ['팀', '웹', 'UX'],
    status: '2024.01 - 2024.02',
    teamInfo: '프론트엔드 개발 100%',
    company: 'ProBit Global',
    features: [
      '거래 플로우를 단일 페이지로 통합하여 사용자 편의성 향상',
      'GNB(Global Navigation Bar)에 Deposit 링크 추가로 입금 페이지 접근성 개선',
      'My Page 내 Deposit/Buy Crypto 배너 배치로 신규 사용자 유입 유도',
      '입금/구매 이력 발생 시 배너 자동 숨김 처리로 사용자 경험 최적화',
      '신규 사용자 온보딩 과정 간소화 및 거래 활성화 기여'
    ],
    contribution: 'Angular 기반 프론트엔드 개발 총괄',
    troubleshooting: [
      {
        title: '기존 거래 플로우의 복잡성 문제',
        problem:
          '기존에는 거래 과정이 여러 단계의 페이지로 분산되어 있어 사용자들이 번거로운 페이지 이동을 거쳐야 하는 불편함이 있었습니다. 특히 신규 사용자들이 거래 과정을 이해하기 어려워 이탈률이 높았습니다.',
        solution:
          '거래 플로우를 단일 페이지로 통합하여 사용자가 한 화면에서 거래 과정을 직관적으로 진행할 수 있도록 설계했습니다. 또한 GNB에 Deposit 링크를 추가하고 My Page에 배너를 배치하여 사용자 접근성을 크게 개선했습니다.',
        reflection:
          '사용자 경험 개선은 단순히 UI를 예쁘게 만드는 것이 아니라, 사용자의 실제 니즈와 행동 패턴을 분석하여 불필요한 단계를 제거하는 것이 핵심이라는 것을 깨달았습니다.'
      }
    ]
  },
  {
    title: 'ProBit Global - New Web KYC Basic Information',
    desc: 'KYC 인증 시스템',
    url: 'https://www.probit.com',
    stack: ['Angular', 'SCSS', 'NgRx', 'RxJS'],
    tags: ['팀', '웹', '인증'],
    status: '2023.11 - 2023.12',
    teamInfo: '프론트엔드 개발 100%',
    company: 'ProBit Global',
    features: [
      'KYC 프로세스 시작 단계에서 기본 정보 입력 페이지 신규 개발',
      '본인인증 절차에 필요한 개인정보 효율적 수집 프로세스 확립',
      '기본 검증 로직 적용으로 입력 데이터 형식 오류 및 누락 사전 차단',
      '인증 실패율 및 사용자 불편 최소화',
      'KYC 절차의 신뢰성과 안정성 강화'
    ],
    contribution: 'Angular 기반 프론트엔드 개발 전담',
    troubleshooting: [
      {
        title: 'KYC 프로세스 초기 단계 설계의 복잡성',
        problem:
          '기존 KYC 프로세스는 본인인증부터 시작되어 사용자들이 필요한 정보를 미리 파악하기 어려웠습니다. 또한 입력 데이터의 형식 오류나 누락으로 인한 인증 실패가 빈번하게 발생했습니다.',
        solution:
          'KYC 프로세스 시작 단계에서 사용자가 기본 정보를 미리 입력할 수 있는 페이지를 신규 개발했습니다. 기본 검증 로직을 적용하여 입력 데이터의 형식 오류나 누락을 사전에 차단하도록 설계했습니다.',
        reflection:
          '사용자 경험을 개선하려면 프로세스의 각 단계를 세분화하고, 사용자가 미리 준비할 수 있는 정보를 명확히 안내하는 것이 중요하다는 것을 배웠습니다.'
      }
    ]
  },
  {
    title: 'ProBit Global - Derivatives Web Front-End',
    desc: '파생상품 거래 플랫폼',
    url: 'https://www.probit.com',
    stack: ['React', 'TypeScript', 'Styled-components', 'Recoil', 'WebSocket'],
    tags: ['팀', '웹', '실시간'],
    status: '2023.09 - 2023.11',
    teamInfo: '프론트엔드 개발 20%',
    company: 'ProBit Global',
    features: [
      'WebSocket API를 활용한 상품 현황 실시간 제공',
      '오더북 실시간 업데이트 기능 구현',
      '사용자 실시간 시장 상황 확인 기능',
      '빠르고 정확한 거래 결정 지원',
      'React + TypeScript 기반 모듈 개발'
    ],
    contribution: 'React + TypeScript 기반 일부 모듈 개발',
    troubleshooting: [
      {
        title: 'WebSocket 연결 안정성 및 실시간 데이터 처리',
        problem:
          '파생상품 거래소에서 실시간 데이터 처리는 매우 중요하지만, WebSocket 연결이 불안정하거나 데이터가 지연될 경우 사용자에게 잘못된 정보를 제공할 수 있는 위험이 있었습니다. 또한 대량의 실시간 데이터를 효율적으로 처리하는 것이 기술적 도전이었습니다.',
        solution:
          'WebSocket 연결 상태를 모니터링하고 재연결 로직을 구현했습니다. 또한 실시간 데이터를 효율적으로 처리하기 위해 Recoil을 활용한 상태 관리와 메모이제이션을 적용하여 성능을 최적화했습니다.',
        reflection:
          '실시간 데이터 처리에서는 연결 안정성과 성능 최적화가 핵심이라는 것을 깨달았습니다. 사용자에게 정확한 정보를 제공하기 위해서는 기술적 안정성이 필수적입니다.'
      }
    ]
  },
  {
    title: 'ProBit Global - My Page UI 개선',
    desc: '마이페이지 UI 개선',
    url: 'https://www.probit.com',
    stack: ['Angular', 'SCSS', 'NgRx', 'RxJS'],
    tags: ['팀', '웹', 'UX'],
    status: '2023.08 - 2023.09',
    teamInfo: '프론트엔드 개발 100%',
    company: 'ProBit Global',
    features: [
      '기능별 탭(Tab) UI 구조로 개편하여 사용자 탐색성 향상',
      '사용자가 필요한 기능을 빠르게 찾을 수 있는 구조 설계',
      '기능별 모듈화된 구조로 유지보수 효율성 확보',
      '사용자 편의성 향상으로 이탈률 감소 및 만족도 향상',
      '개발자 관점에서의 효율적인 구조 제공'
    ],
    contribution: 'Angular 기반 프론트엔드 개발 담당',
    troubleshooting: [
      {
        title: '기존 My Page의 복잡한 구조와 사용자 혼란',
        problem:
          '기존 My Page는 여러 기능 섹션이 한 페이지에 혼합되어 있어 사용자가 원하는 기능을 찾기 어렵고 유지보수가 복잡한 구조였습니다. 사용자들이 필요한 기능을 찾기 위해 스크롤을 많이 해야 하고, 기능 간의 구분이 명확하지 않아 혼란을 겪었습니다.',
        solution:
          '기능별로 탭(Tab) UI 구조로 개편하여 사용자가 필요한 기능을 빠르게 탐색할 수 있도록 설계했습니다. 각 기능을 독립적인 모듈로 분리하여 유지보수성도 크게 개선했습니다.',
        reflection:
          '사용자 경험과 개발자 경험 모두를 고려한 설계가 중요하다는 것을 깨달았습니다. 단순히 기능을 나열하는 것이 아니라 사용자의 사용 패턴을 분석하여 직관적인 구조를 만드는 것이 핵심입니다.'
      }
    ]
  },
  {
    title: 'ProBit Global - Frontpage 개편',
    desc: '메인페이지 리뉴얼',
    url: 'https://www.probit.com/en-us/',
    stack: ['Angular', 'Angular Universal', 'SCSS', 'Chart.js', 'Swiper.js'],
    tags: ['팀', '웹', 'SSR'],
    status: '2023.04 - 2023.08',
    teamInfo: '프론트엔드 개발 100%',
    company: 'ProBit Global',
    features: [
      'SSR 개발을 통한 클라이언트 페이지 로딩 속도 개선',
      'Lazy loading 적용으로 이미지 용량 최적화',
      'Resolver 기능을 활용한 데이터 미리 가져오기로 component reflow 최소화',
      'Chart.js를 이용한 마켓별 상승률 차트 구현',
      'Swiper.js를 활용한 슬라이더 기능 구현'
    ],
    contribution: 'Angular 기반 프론트엔드 개발 담당',
    troubleshooting: [
      {
        title: 'SSR 구현과 성능 최적화의 균형점 찾기',
        problem:
          '메인 페이지는 사용자가 가장 먼저 보는 페이지이므로 로딩 속도가 매우 중요했습니다. 하지만 SSR을 구현하면서 초기 로딩 시간과 클라이언트 사이드 렌더링 성능 사이의 균형을 맞추는 것이 어려웠습니다. 또한 대량의 차트 데이터를 효율적으로 처리하는 것도 도전이었습니다.',
        solution:
          'Angular Universal을 활용한 SSR 구현과 함께 Lazy loading을 적용하여 이미지 용량을 최적화했습니다. 또한 resolver 기능을 활용하여 데이터를 미리 가져와 component reflow를 최소화하고, Chart.js를 이용하여 마켓별 상승률 차트를 효율적으로 구현했습니다.',
        reflection:
          '성능 최적화는 단순히 기술을 적용하는 것이 아니라 사용자 경험을 고려한 전략적 접근이 필요하다는 것을 배웠습니다. SSR과 CSR의 장단점을 이해하고 적절히 조합하는 것이 중요합니다.'
      }
    ]
  },
  {
    title: 'ENAD Manager 솔루션',
    desc: '의료진 솔루션',
    url: '',
    stack: ['React', 'Styled-components', 'Recoil'],
    tags: ['솔로', '의료', '실시간'],
    status: '2023.01 - 2023.02',
    teamInfo: '프론트엔드 개발 100%',
    company: '아이넥스코퍼레이션',
    features: [
      'React 기반 솔루션 UI 설계 및 개발',
      '의사와 환자 간 실시간 결과 공유 기능 구현',
      '의료기관 테스트 완료',
      'Recoil을 활용한 상태 관리',
      'Styled-components를 활용한 스타일링'
    ],
    contribution: '기획·디자인·프론트엔드 개발 전담',
    troubleshooting: [
      {
        title: '의료 데이터의 민감성과 실시간 공유의 기술적 도전',
        problem:
          '의료 데이터는 매우 민감한 정보이므로 보안과 실시간 공유 사이의 균형을 맞추는 것이 어려웠습니다. 또한 의료진과 환자 간의 실시간 데이터 공유를 구현하면서도 데이터 무결성을 보장해야 하는 기술적 도전이 있었습니다.',
        solution:
          'Recoil을 활용한 상태 관리로 데이터 흐름을 체계화하고, 실시간 공유 기능을 구현했습니다. 의료기관 테스트를 통해 보안성과 사용성을 모두 검증하여 안정적인 솔루션을 완성했습니다.',
        reflection:
          '의료 분야에서는 기술적 구현보다도 데이터 보안과 사용자 안전이 최우선이라는 것을 깨달았습니다. 실시간 기능을 구현하면서도 데이터 무결성을 보장하는 것이 핵심이었습니다.'
      }
    ]
  },
  {
    title: '해안종합건축사사무소 - 자재정보검색시스템',
    desc: '자재정보 검색 시스템',
    url: '',
    stack: ['Angular', 'ASP.NET', 'C#', 'MS-SQL', 'HTML', 'CSS'],
    tags: ['팀', '웹', '검색'],
    status: '2021.10 - 2022.02',
    teamInfo: '1차 프론트엔드 20% / 2차 풀스택 100% / 3차 풀스택 30%',
    company: 'BIMPeers',
    features: [
      'Angular + MS-SQL 기반 검색 시스템 구축으로 사내 업무 효율화',
      '사용자/관리자 웹사이트 구축 및 유지보수',
      'Angular / TypeScript / Stored Procedure 개발 프로세스 경험',
      '사내 업무 프로세스 디지털화',
      '데이터베이스 설계 및 최적화'
    ],
    contribution: 'PM / UI·UX 디자인 / 개발 / 유지보수',
    troubleshooting: [
      {
        title: '기존 수작업 프로세스의 디지털화와 사용자 적응',
        problem:
          '기존에는 자재 정보를 수작업으로 관리하고 검색하는 방식이었는데, 이를 디지털 시스템으로 전환하면서 사용자들의 적응과 데이터 마이그레이션 과정에서 어려움이 있었습니다. 또한 복잡한 자재 정보를 효율적으로 검색할 수 있는 시스템 설계가 필요했습니다.',
        solution:
          'Angular와 MS-SQL을 활용한 검색 시스템을 구축하고, Stored Procedure를 활용하여 복잡한 검색 로직을 최적화했습니다. 사용자 친화적인 UI/UX를 설계하여 기존 사용자들이 쉽게 적응할 수 있도록 했습니다.',
        reflection:
          '기존 프로세스를 디지털화할 때는 사용자의 기존 업무 패턴을 충분히 이해하고, 점진적인 변화를 통해 적응할 수 있도록 하는 것이 중요하다는 것을 배웠습니다.'
      }
    ]
  },
  {
    title: '빌딩스마트협회 - 웹사이트 리뉴얼',
    desc: '협회 웹사이트 리뉴얼',
    url: 'https://www.buildingsmart.or.kr/',
    stack: ['ASP.NET MVC', 'C#', 'MS-SQL', 'HTML', 'CSS', 'JavaScript'],
    tags: ['솔로', '웹', '결제'],
    status: '2020.01 - 2021.03',
    teamInfo: '개발 100%',
    company: 'BIMPeers',
    features: [
      '사용자·관리자 웹사이트 리뉴얼 및 DB 마이그레이션',
      '토스페이먼츠 결제 API 연동을 통한 온라인 결제 시스템 구축',
      '기존 시스템과의 호환성 유지',
      '사용자 경험 개선 및 관리자 기능 강화',
      '데이터 무결성 보장'
    ],
    contribution: 'PM / UI·UX 디자인 / DB 설계 및 마이그레이션 / 개발 / 유지보수',
    troubleshooting: [
      {
        title: '기존 시스템과의 호환성 유지와 DB 마이그레이션',
        problem:
          '기존 시스템을 완전히 새로 구축하면서도 기존 데이터와의 호환성을 유지해야 했습니다. 특히 DB 마이그레이션 과정에서 데이터 손실이나 무결성 문제가 발생할 수 있는 위험이 있었고, 토스페이먼츠 결제 API 연동 시 보안과 안정성 확보가 중요했습니다.',
        solution:
          '단계적인 마이그레이션 전략을 수립하고, 각 단계별로 데이터 무결성을 검증했습니다. 토스페이먼츠 결제 API 연동 시 보안 가이드라인을 철저히 준수하고, 테스트 환경에서 충분한 검증을 거쳤습니다.',
        reflection:
          '기존 시스템을 리뉴얼할 때는 단순히 새로운 기술을 적용하는 것이 아니라, 기존 사용자와 데이터의 연속성을 보장하는 것이 가장 중요하다는 것을 깨달았습니다.'
      }
    ]
  },
  {
    title: '빌딩스마트협회 - 행사 웹사이트 구축',
    desc: '행사 관리 시스템',
    url: 'https://event.buildingsmart.or.kr/Conference/2020',
    stack: ['ASP.NET MVC', 'C#', 'MS-SQL', 'HTML', 'CSS', 'JavaScript'],
    tags: ['솔로', '웹', '모듈화'],
    status: '2021.01 - 2021.12',
    teamInfo: '관리자 화면 디자인 100% / 개발 100%',
    company: 'BIMPeers',
    features: [
      'Forum / Conference / Awards 행사 웹사이트 구축 및 시스템 모듈화',
      '매년 행사 시 데이터만 교체하여 재사용 가능한 구조 설계',
      '토스페이먼츠 결제 API 연동',
      '관리자 화면 디자인 및 개발',
      '확장 가능한 시스템 아키텍처 구축'
    ],
    contribution: 'PM / UI·UX 디자인 / DB 설계 및 마이그레이션 / 개발 / 유지보수',
    troubleshooting: [
      {
        title: '매년 반복되는 행사의 효율적 관리와 시스템 모듈화',
        problem:
          '매년 동일한 형태의 행사를 개최하면서도 매번 새로운 웹사이트를 구축하는 것은 비효율적이었습니다. 또한 행사별로 다른 요구사항과 데이터 구조를 효율적으로 관리해야 하는 도전이 있었습니다.',
        solution:
          '시스템을 모듈화하여 매년 행사 시 데이터만 교체하여 재사용 가능한 구조를 설계했습니다. 공통 기능은 재사용하고, 행사별 특수 요구사항은 설정으로 처리할 수 있도록 했습니다.',
        reflection:
          '반복적인 작업을 자동화하고 모듈화하는 것이 개발 효율성을 크게 향상시킨다는 것을 깨달았습니다. 재사용 가능한 구조 설계의 중요성을 배웠습니다.'
      }
    ]
  },
  {
    title: '공간건축 - 국제학생건축상 페이지',
    desc: '공모전 관리 플랫폼',
    url: '',
    stack: ['ASP.NET', 'C#', 'MS-SQL', 'HTML', 'CSS', 'JavaScript'],
    tags: ['솔로', '웹', '공모'],
    status: '2019.12 - 2021.12',
    teamInfo: '프론트엔드 개발 100%, 디자인 100%',
    company: 'BIMPeers',
    features: [
      '국제학생건축상 공모·참가신청 웹페이지 구축',
      '매년 데이터만 교체 가능한 구조로 디자인/시스템 모듈화',
      '참가자 관리 시스템 구축',
      '심사 과정 자동화',
      '결과 발표 시스템'
    ],
    contribution: 'PM / UI·UX 디자인 / DB 설계 / 개발 / 유지보수',
    troubleshooting: [
      {
        title: '국제 행사의 다국어 지원과 참가자 관리 시스템',
        problem:
          '국제학생건축상은 다양한 국가의 참가자들이 참여하는 행사로, 다국어 지원과 각국 참가자들의 다양한 요구사항을 처리해야 했습니다. 또한 매년 반복되는 행사의 효율적 관리가 필요했습니다.',
        solution:
          '매년 데이터만 교체 가능한 모듈화된 구조를 설계하고, 다국어 지원 기능을 구현했습니다. 참가자 관리 시스템을 구축하여 효율적인 행사 운영이 가능하도록 했습니다.',
        reflection:
          '국제 행사를 운영할 때는 문화적 차이와 다양한 요구사항을 고려한 유연한 시스템 설계가 중요하다는 것을 배웠습니다.'
      }
    ]
  },
  {
    title: 'ProBit Global - Help Center 페이지 개선',
    desc: 'Help Center 페이지 개선',
    url: 'https://www.probit.com',
    stack: ['Angular', 'Angular Universal', 'SCSS', 'NgRx', 'RxJS'],
    stackCategories: [
      {
        category: '프론트엔드',
        technologies: ['Angular', 'Angular Universal', 'SCSS']
      },
      {
        category: '상태관리',
        technologies: ['NgRx', 'RxJS']
      }
    ],
    tags: ['팀', '웹', 'SSR'],
    status: '2023.02 - 2023.04',
    teamInfo: '프론트엔드 개발 100%',
    company: 'ProBit Global',
    features: [
      'React 기반 Help Center 페이지를 Angular 기반으로 재개발',
      'Angular Universal 기반 SSR로 SEO 문제 개선',
      '웹사이트 내 프로젝트들 간의 기술적 일관성 유지',
      '중복된 코드 수정 작업 최소화',
      '사용자 경험과 성능 개선'
    ],
    contribution: 'React → Angular 재개발 주도',
    troubleshooting: [
      {
        title: 'React에서 Angular로 기술 스택 마이그레이션',
        problem:
          '기존 React 기반 Help Center 페이지가 검색 엔진에 인덱싱되지 않는 SEO 문제가 있었습니다. 또한 웹사이트 내 다른 프로젝트들과 기술 스택이 달라 일관성 문제와 유지보수 어려움이 있었습니다.',
        solution:
          'Angular Universal을 활용한 SSR 구현으로 SEO 문제를 해결하고, Angular 기반으로 재구축하여 웹사이트 내 기술적 일관성을 확보했습니다. 기존 React 컴포넌트를 Angular 컴포넌트로 점진적으로 마이그레이션했습니다.',
        reflection:
          '기술 스택 마이그레이션은 단순히 코드 변환을 넘어서 전체 아키텍처와 일관성을 고려해야 한다는 것을 배웠습니다. SEO와 성능 개선을 동시에 달성할 수 있었습니다.'
      }
    ]
  },
  {
    title: 'KBIMS 콘텐츠 플랫폼',
    desc: 'BIM 콘텐츠 플랫폼',
    url: '',
    stack: ['ASP.NET', 'C#', 'MS-SQL', 'REST API', 'HTML', 'CSS'],
    tags: ['팀', '웹', 'API'],
    status: '2019.12 - 2021.12',
    teamInfo: '개발 100%, 디자인 100%',
    company: 'BIMPeers',
    features: [
      'BIM 라이브러리 데이터를 REST API와 연동한 검색 시스템 구축',
      '설계 실무에 활용 가능한 검색 기능 제공',
      'REST API 설계 및 구현',
      '데이터베이스 최적화',
      '사용자 친화적 검색 인터페이스'
    ],
    contribution: 'PM / UI·UX 디자인 / DB 설계 / 개발 / 유지보수',
    troubleshooting: [
      {
        title: '대용량 BIM 데이터의 효율적 검색과 API 설계',
        problem:
          'BIM 라이브러리 데이터는 매우 방대하고 복잡한 구조를 가지고 있어 효율적인 검색 시스템을 구축하기 어려웠습니다. 또한 REST API를 통해 외부 시스템과의 연동을 지원하면서도 성능을 보장해야 하는 도전이 있었습니다.',
        solution:
          'REST API를 활용한 모듈화된 검색 시스템을 구축하고, 데이터베이스 인덱싱과 쿼리 최적화를 통해 검색 성능을 향상시켰습니다. 캐싱 전략을 도입하여 반복적인 검색 요청에 대한 응답 속도를 개선했습니다.',
        reflection:
          '대용량 데이터를 다룰 때는 단순한 검색 기능 구현을 넘어서 성능 최적화와 확장성을 고려한 아키텍처 설계가 중요하다는 것을 깨달았습니다.'
      }
    ]
  }
]
