import type { Playlist } from '~/common/types/playlist';
import type { Track } from '~/common/types/track';

export const mockBrowserTracks: Track[] = [
  {
    id: 'browser1',
    title: '브라우저에 url을 입력하면 벌어지는 일들은 무엇인가?',
    content:
      '브라우저에 url을 입력하면 벌어지는 일들은 다음과 같습니다.\n1. DNS 조회\n2. TCP 연결\n3. HTTP 요청\n4. 데이터 처리\n5. 렌더링',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'browser2',
    title: '브라우저 렌더링 과정',
    content:
      '브라우저 렌더링 과정은 다음과 같습니다.\n1. HTML 파싱 및 DOM 트리 구축\n2. CSS 파싱 및 CSSOM 트리 구축\n3. DOM과 CSSOM을 결합하여 렌더 트리 구축\n4. 렌더 트리를 기반으로 레이아웃 계산\n5. 계산된 레이아웃 정보를 바탕으로 페인팅\n6. 여러 페인트 레이어를 합쳐서 최종 렌더링',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'browser3',
    title: 'CORS란 무엇인가?',
    content:
      'CORS는 Cross-Origin Resource Sharing의 약자로, 웹 애플리케이션이 다른 도메인의 리소스에 접근할 수 있도록 하는 메커니즘입니다.\n이를 통해 웹 애플리케이션은 다른 도메인의 리소스를 사용할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'browser4',
    title: '쿠키, 세션, 토큰은 각각 무엇인가?',
    content:
      '쿠키는 서버가 클라이언트에게 전달하는 작은 데이터 조각으로, 클라이언트의 상태를 유지하는 데 사용됩니다.\n세션은 서버가 클라이언트에게 전달하는 작은 데이터 조각으로, 클라이언트의 상태를 유지하는 데 사용됩니다.\n토큰은 서버가 클라이언트에게 전달하는 작은 데이터 조각으로, 클라이언트의 상태를 유지하는 데 사용됩니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'browser5',
    title: 'MVC와 MVVM패턴의 차이는 무엇인가?',
    content:
      'MVC는 Model-View-Controller의 약자로, 모델, 뷰, 컨트롤러로 구성된 패턴입니다.\nMVVM은 Model-View-ViewModel의 약자로, 모델, 뷰, 뷰모델로 구성된 패턴입니다.\nView와 View Model간의 의존성을 제거하기 위해 ViewModel을 도입한 패턴입니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
];

export const mockJavaScriptTracks: Track[] = [
  {
    id: 'javascript1',
    title: 'JavaScript란 무엇인가?',
    content:
      'JavaScript는 웹 브라우저에서 실행되는 프로그래밍 언어로, 웹 페이지의 동작을 제어하고 상호작용을 구현하는 데 사용됩니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'javascript2',
    title: 'closure란 무엇인가?',
    content:
      'closure는 함수가 생성될 때 그 함수가 선언된 환경에 대한 참조를 포함하는 함수입니다.\n이를 통해 함수 내부에서 외부 변수에 접근할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'javascript3',
    title: 'prototype란 무엇인가?',
    content:
      'prototype는 객체의 원형으로, 객체의 원형을 정의하고 객체의 원형을 상속받은 객체에서 사용할 수 있는 메서드와 속성을 정의합니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'javascript4',
    title: 'event loop란 무엇인가?',
    content:
      'event loop는 브라우저에서 이벤트가 발생할 때 이벤트 큐에 추가되고, 이벤트 루프가 이벤트 큐에서 이벤트를 꺼내 처리하는 과정입니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'javascript5',
    title: 'event bubbling란 무엇인가?',
    content: 'event bubbling은 이벤트가 발생한 요소에서 부모 요소로 이벤트가 전파되는 과정입니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'javascript6',
    title: 'event capturing란 무엇인가?',
    content: 'event capturing은 이벤트가 발생한 요소에서 부모 요소로 이벤트가 전파되는 과정입니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'javascript7',
    title: 'event delegation란 무엇인가?',
    content: 'event delegation은 이벤트가 발생한 요소에서 부모 요소로 이벤트가 전파되는 과정입니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'javascript8',
    title: 'event propagation란 무엇인가?',
    content: 'event propagation은 이벤트가 발생한 요소에서 부모 요소로 이벤트가 전파되는 과정입니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
];

export const mockTypeScriptTracks: Track[] = [
  {
    id: 'typescript1',
    title: 'TypeScript란 무엇인가?',
    content:
      'TypeScript는 자바스크립트의 상위 집합으로, 자바스크립트의 기능을 확장하여 더 강력한 타입 체크를 제공합니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'typescript2',
    title: 'TypeScript의 타입 추론이란 무엇인가?',
    content:
      'TypeScript의 타입 추론은 컴파일러가 코드를 분석하여 타입을 추론하는 과정입니다.\n이를 통해 개발자는 타입을 명시적으로 지정하지 않고도 타입 안전성을 유지할 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'typescript3',
    title: 'TypeScript의 타입 정의란 무엇인가?',
    content:
      'TypeScript의 타입 정의는 타입을 명시적으로 지정하는 과정입니다.\n이를 통해 개발자는 타입 안전성을 유지할 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'typescript4',
    title: 'TypeScript의 타입 별칭이란 무엇인가?',
    content:
      'TypeScript의 타입 별칭은 타입을 별칭으로 지정하는 과정입니다.\n이를 통해 개발자는 타입을 더 쉽게 사용할 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'typescript5',
    title: 'TypeScript의 제너럴이란 무엇인가?',
    content:
      'TypeScript의 제너럴은 타입을 추상화하여 타입 안전성을 유지하는 과정입니다.\n이를 통해 개발자는 타입을 더 쉽게 사용할 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'typescript6',
    title: 'TypeScript의 인터세션이란 무엇인가?',
    content:
      'TypeScript의 인터세션은 타입을 추상화하여 타입 안전성을 유지하는 과정입니다.\n이를 통해 개발자는 타입을 더 쉽게 사용할 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'typescript7',
    title: 'any와 unknown의 차이점은 무엇인가?',
    content: 'any와 unknown의 차이점은 any는 모든 타입을 허용하지만, unknown은 모든 타입을 허용하지 않습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'typescript8',
    title: 'TypeScript의 인터세션이란 무엇인가?',
    content:
      'TypeScript의 인터세션은 타입을 추상화하여 타입 안전성을 유지하는 과정입니다.\n이를 통해 개발자는 타입을 더 쉽게 사용할 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
];

export const mockReactTracks: Track[] = [
  {
    id: 'react1',
    title: '리액트 리스트에 왜 key를 사용해야 하나요?',
    content:
      'React에서 key는 리스트의 각 아이템을 고유하게 식별하여, UI 변경 시 효율적이고 정확한 업데이트를 가능하게 하는 중요한 역할을 합니다.\nkey 없이는 React가 어떤 항목이 변경되었는지 판단하기 어려워 성능 저하와 버그가 생길 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react2',
    title: '리액트에서 합성 이벤트란 무엇인가?',
    content:
      'React 합성 이벤트는 브라우저별 이벤트 차이를 감추고, 효율적인 이벤트 관리와 일관된 인터페이스를 제공하는 React만의 이벤트 래퍼 객체입니다.\n개발자는 합성 이벤트를 통해 편리하고 안정적으로 이벤트 처리를 할 수 있습니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react3',
    title: 'forwardRef란 무엇인가?',
    content:
      'forwardRef는 부모 컴포넌트가 자식 함수형 컴포넌트 내부의 DOM 요소에 직접 접근할 수 있도록 ref를 전달하는 React 기능입니다.\n이를 통해 함수형 컴포넌트에서도 ref를 사용할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react4',
    title: 'useImperativeHandle란 무엇인가?',
    content:
      'useImperativeHandle는 부모 컴포넌트가 자식 함수형 컴포넌트의 인스턴스 메서드에 접근할 수 있도록 해 주는 React 기능입니다.\n이를 통해 함수형 컴포넌트에서도 인스턴스 메서드를 사용할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react5',
    title: 'useRef란 무엇인가?',
    content:
      'useRef는 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장하는 React 기능입니다.\n이를 통해 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react6',
    title: 'useState란 무엇인가?',
    content:
      'useState는 컴포넌트의 상태를 관리하는 React 기능입니다.\n이를 통해 컴포넌트의 상태를 관리할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react7',
    title: 'useEffect란 무엇인가?',
    content:
      'useEffect는 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장하는 React 기능입니다.\n이를 통해 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react8',
    title: 'useContext란 무엇인가?',
    content:
      'useContext는 컴포넌트의 상태를 관리하는 React 기능입니다.\n이를 통해 컴포넌트의 상태를 관리할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react9',
    title: 'useMemo란 무엇인가?',
    content:
      'useMemo는 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장하는 React 기능입니다.\n이를 통해 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react10',
    title: 'useCallback란 무엇인가?',
    content:
      'useCallback는 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장하는 React 기능입니다.\n이를 통해 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react11',
    title: 'useReducer란 무엇인가?',
    content:
      'useReducer는 컴포넌트의 상태를 관리하는 React 기능입니다.\n이를 통해 컴포넌트의 상태를 관리할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react12',
    title: 'useLayoutEffect란 무엇인가?',
    content:
      'useLayoutEffect는 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장하는 React 기능입니다.\n이를 통해 컴포넌트의 렌더링 과정에서 변경되지 않는 값을 저장할 수 있게 해 줍니다.',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
  {
    id: 'react13',
    title: 'React에서 컴포넌트가 리렌더링 되는 경우는 무엇인가?',
    content:
      'React에서 컴포넌트가 리렌더링 되는 경우는 다음과 같습니다.\n1. 컴포넌트의 상태가 변경될 때\n2. 컴포넌트의 부모 컴포넌트가 리렌더링 될 때\n3. 컴포넌트의 속성이 변경될 때',
    audioUrl: '',
    createdAt: '2025-05-22',
    updatedAt: '2025-05-22',
  },
];

export const mockPlaylists: Playlist[] = [
  {
    id: 'browser',
    title: 'Browser',
    playlistTracks: mockBrowserTracks.map((track, index) => ({
      ...track,
      position: index,
    })),
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    playlistTracks: mockJavaScriptTracks.map((track, index) => ({
      ...track,
      position: index,
    })),
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    playlistTracks: mockTypeScriptTracks.map((track, index) => ({
      ...track,
      position: index,
    })),
  },
  {
    id: 'react',
    title: 'React',
    playlistTracks: mockReactTracks.map((track, index) => ({
      ...track,
      position: index,
    })),
  },
];
