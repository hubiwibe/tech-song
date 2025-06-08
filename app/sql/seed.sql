-- seed.sql
-- Seed data for all tables except profiles
-- profile_id is fixed as '68805675-e29b-4255-8eee-28d1d56d079b'
-- 1. playlists
INSERT INTO
    playlists (
        title,
        description,
        is_public,
        stats,
        profile_id,
        created_at,
        updated_at
    )
VALUES
    (
        'Browser',
        NULL,
        true,
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'JavaScript',
        NULL,
        true,
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'TypeScript',
        NULL,
        true,
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'React',
        NULL,
        true,
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'Next.js',
        NULL,
        true,
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    );

-- 2. tracks
INSERT INTO
    tracks (
        title,
        content,
        audio_url,
        stats,
        profile_id,
        created_at,
        updated_at
    )
VALUES
    -- Browser
    (
        '브라우저에 url을 입력하면 벌어지는 일들은 무엇인가?',
        '### 브라우저에 URL을 입력하면 벌어지는 일들은 무엇인가?

사용자가 브라우저 주소창에 URL을 입력하면, 브라우저는 여러 단계의 과정을 거쳐 웹 페이지를 보여줍니다.

1. **URL 파싱 및 스킴 확인:**
   브라우저는 입력된 URL을 파싱해서 프로토콜(예: http, https), 도메인, 경로, 쿼리스트링 등을 분리합니다.

2. **DNS 조회:**
   입력한 도메인에 대해 IP 주소를 찾기 위해 로컬 캐시, 운영체제, 라우터, ISP, 그리고 결국 DNS 서버에 순차적으로 질의합니다.

3. **TCP 연결(3-way Handshake):**
   서버와 클라이언트가 서로 연결을 맺습니다. HTTPS라면 이 뒤에 TLS(SSL) 암호화 핸드셰이크도 이뤄집니다.

4. **HTTP(S) 요청 전송:**
   브라우저는 서버에 GET 요청(또는 필요에 따라 POST, PUT 등)을 보냅니다. 이때 헤더, 쿠키, 캐시, 인증 토큰 등도 포함됩니다.

5. **서버 처리 및 응답:**
   서버는 요청을 처리해서 HTML, CSS, JS, 이미지 등 리소스를 반환합니다. 서버가 리다이렉트(3xx)를 보내면 브라우저가 다시 요청을 반복할 수 있습니다.

6. **리소스 다운로드 및 렌더링:**
   브라우저는 HTML을 파싱하며 필요한 리소스(CSS, JS, 폰트, 이미지 등)를 추가로 요청하고, 동적으로 웹 페이지를 화면에 렌더링합니다.

7. **자바스크립트 실행 및 동적 처리:**
   JS 코드가 실행되어 DOM이 조작되거나, 추가적인 비동기 데이터(ajax/fetch) 요청이 발생할 수 있습니다.

**예시:**
네이버에 `https://www.naver.com` 입력
→ 네이버 서버 IP 조회
→ 서버와 연결
→ HTML 받아와서 렌더링
→ 동적 광고/뉴스/실시간 데이터는 JS로 추가 fetch.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        '브라우저 렌더링 과정',
        '### 브라우저 렌더링 과정

브라우저가 HTML을 화면에 표시하기까지의 과정은 아래와 같습니다.

1. **HTML 파싱 → DOM 트리 생성**
   HTML 문서를 파싱해서 DOM(Document Object Model) 트리를 만듭니다. 예를 들어 `<div><p>안녕</p></div>`는 트리 구조로 메모리에 저장.

2. **CSS 파싱 → CSSOM 트리 생성**
   CSS 파일 및 style 태그를 파싱해서 CSSOM(CSS Object Model) 트리를 만듭니다. 이는 각 노드가 어떤 스타일을 갖는지 기록하는 구조입니다.

3. **DOM + CSSOM → 렌더 트리(Render Tree) 생성**
   두 트리를 합쳐 화면에 실제로 표시될 요소와 스타일을 갖는 렌더 트리를 생성합니다. `display: none` 요소는 렌더 트리에 포함되지 않습니다.

4. **Layout(배치)**
   각 노드가 **어디에, 어떤 크기로** 표시될지 계산합니다. 이걸 레이아웃, 혹은 리플로우라고도 부릅니다.

5. **Paint(그리기)**
   계산된 레이아웃 정보를 바탕으로 픽셀 단위로 화면에 그립니다. 텍스트, 색상, 그림자 등 다양한 스타일이 이 단계에서 반영됩니다.

6. **컴포지팅**
   여러 레이어를 합쳐 최종 화면을 완성합니다.

**실무에서 주의할 점:**

- CSS/JS가 너무 많거나, 비동기 JS가 DOM 조작을 많이 하면 렌더링 성능이 떨어집니다.
- 크리티컬 렌더링 패스 최적화, lazy loading, 코드 분할 등으로 렌더링을 최적화할 수 있습니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'CORS란 무엇인가?',
        '### CORS란 무엇인가?

CORS(Cross-Origin Resource Sharing)는 **브라우저의 보안 정책** 중 하나로, \*\*다른 출처(origin)\*\*로의 리소스 요청을 제한하는 기능입니다.

- 예를 들어, 내가 `www.abc.com`에서 페이지를 보고 있는데, 자바스크립트 코드로 `www.xyz.com` API를 호출하면, 브라우저가 이를 차단할 수 있습니다.

- 이때 서버가 응답 헤더에 `Access-Control-Allow-Origin: *` 또는 `Access-Control-Allow-Origin: https://www.abc.com`처럼 허용 도메인을 명시해주면 요청이 성공합니다.

- **Preflight 요청:**
  특정 조건(CUSTOM HEADER, PUT/DELETE 등)일 때 브라우저는 먼저 OPTIONS 메서드로 사전 요청(preflight)을 보내 허용여부를 확인합니다.

**실무:**
CORS는 서버 개발자와의 협업 포인트입니다. FE가 직접 해결할 수 없고, 서버에서 명시적으로 허용해줘야 합니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        '쿠키, 세션, 토큰은 각각 무엇인가?',
        '### 쿠키, 세션, 토큰은 각각 무엇인가?

- **쿠키(Cookie):**
  브라우저가 key-value 형태로 저장하는 작은 데이터.
  도메인, path, expires, httpOnly, secure 등 속성 설정 가능.
  서버가 Set-Cookie로 내려주면, 같은 도메인 요청시 자동으로 전송됨.

- **세션(Session):**
  서버가 사용자 상태(로그인 등)를 서버 메모리나 DB에 저장.
  보통 "세션ID"만 쿠키로 클라이언트에 전달.
  세션ID로 서버가 사용자 상태 추적.

- **토큰(Token, 예: JWT):**
  로그인 등 인증 후 서버가 발급하는 **암호화된 데이터**.
  브라우저에 직접 저장(localStorage, sessionStorage, 쿠키 등) 후
  API 호출시 Authorization 헤더 등으로 명시적으로 전송.
  서버는 토큰 검증 후 신원 확인.

**실무 차이:**
쿠키/세션은 **상태 기반 인증**에 가깝고,
토큰(JWT 등)은 **무상태(Stateless) 인증**.
SPA/모바일/마이크로서비스 환경에서는 주로 토큰을 씁니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'MVC와 MVVM패턴의 차이는 무엇인가?',
        '### MVC와 MVVM 패턴의 차이

- **MVC(Model-View-Controller):**
  Model(데이터), View(화면), Controller(로직)가 분리.
  View는 사용자에게 데이터 표시,
  Controller가 View와 Model 중재.

  ```
  View → Controller → Model
       ←            ←
  ```

- **MVVM(Model-View-ViewModel):**
  View와 Model 사이에 ViewModel이 존재.
  ViewModel이 데이터와 UI를 중재하고,
  주로 **양방향 바인딩**(Two-way data binding, 예: React Hook의 상태 관리, Angular, Vue 등) 지원.

  ```
  View ←→ ViewModel ←→ Model
  ```

**실무:**
React, Vue 등은 MVVM 성격을 띕니다.
MVC는 전통적인 백엔드 프레임워크(Spring, Django 등)에서 자주 사용.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    -- JavaScript
    (
        'JavaScript란 무엇인가?',
        '### JavaScript란 무엇인가?

JavaScript는 **웹 브라우저에서 동작하는 대표적인 스크립트 언어**로,
HTML/CSS와 함께 웹의 3대 구성요소 중 하나입니다.

- **동적이고 인터프리터 방식**(실행시 해석)
- **함수형, 객체지향 프로그래밍 모두 지원**
- ES6(ECMAScript 2015) 이후로 모듈, 클래스, Arrow Function 등 다양한 기능 추가
- **Node.js**를 통해 서버에서도 사용
- SPA, 모바일앱, 데스크탑앱(예: Electron) 등 다양한 플랫폼에서 사용',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'closure란 무엇인가?',
        '### closure란 무엇인가?

Closure(클로저)는 **외부 함수의 지역 변수를 내부 함수가 참조**하는 현상을 말합니다.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

여기서 `inner` 함수는 `outer` 함수의 지역변수 `count`에 접근할 수 있습니다.
**실무에서 클로저는**

- 캡슐화(정보 은닉)
- 메모리 관리(예: 이벤트 핸들러)
- 콜백/비동기 처리 등에서 유용하게 활용됩니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'prototype란 무엇인가?',
        '### prototype란 무엇인가?

JavaScript의 모든 객체는 **프로토타입(Prototype)이라는 숨은 객체**를 갖고 있습니다.

- 함수로 객체를 만들면, 해당 함수의 `prototype` 속성에 메서드를 정의할 수 있습니다.
- 인스턴스가 메서드를 찾을 때, 자기 자신 → 프로토타입 순서로 탐색합니다. (프로토타입 체인)

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello" + this.name);
};
const p = new Person("Tom");
p.sayHello(); // Hello Tom
```

**실무:**
ES6 클래스(`class`)도 내부적으로 프로토타입을 이용합니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'event loop란 무엇인가?',
        '### event loop란 무엇인가?

JavaScript는 **싱글 스레드**이지만,
비동기 작업(타이머, 네트워크 등)을 처리하기 위해
이벤트 루프(Event Loop)라는 메커니즘을 사용합니다.

- Call Stack(동기 코드)와 Task Queue(비동기 작업 대기열)로 구성
- Stack이 비어있을 때마다 Queue에서 작업을 꺼내 실행

**예시:**

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// 출력: A C B
```

setTimeout은 콜백을 바로 실행하지 않고 Queue에 넣었다가,
동기 코드가 모두 끝난 뒤에 실행합니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'event bubbling란 무엇인가?',
        '### event bubbling이란 무엇인가?

이벤트 버블링(Event Bubbling)은
**이벤트가 가장 안쪽(자식) 요소에서 발생하여, 부모 요소로 전파되는 현상**입니다.

- 예를 들어, `<div><button>Click</button></div>`에서 버튼을 클릭하면,

  1. button에서 click 이벤트 발생
  2. div로 이벤트 전파
  3. document, window 순서로 전달

**실무:**
이벤트 위임, 혹은 중복 핸들러 방지에 응용됩니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'event capturing란 무엇인가?',
        '### event capturing이란 무엇인가?

이벤트 캡처링(Event Capturing)은
**이벤트가 루트(최상위) 요소에서부터 자식 방향으로 전달되는 현상**입니다.

- DOM 이벤트는 기본적으로 **캡처링 → 버블링** 두 단계로 전달됩니다.
- addEventListener의 세 번째 인자(true)로 캡처링 단계에서 핸들러 실행 가능

```js
element.addEventListener("click", handler, true);
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'event delegation란 무엇인가?',
        '### event delegation이란 무엇인가?

이벤트 위임(Event Delegation)은
**부모 요소에 이벤트 리스너를 등록해서,
자식 요소의 이벤트를 한 번에 관리**하는 기법입니다.

- 대량의 동적 요소(예: 수백 개 리스트 아이템)에 각각 이벤트 등록 X
- 부모에서 이벤트가 버블링되어 올라오는 것을 감지 → 필요하면 target 분기

```js
document.querySelector("ul").addEventListener("click", e => {
  if (e.target.matches("li")) {
    alert("클릭한 아이템: " + e.target.textContent);
  }
});
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'event propagation란 무엇인가?',
        '### event propagation이란 무엇인가?

이벤트 전파(Event Propagation)는
**이벤트가 DOM 트리를 따라 이동하는 전체 과정**을 의미합니다.
(캡처링 → 타깃 → 버블링)

- 캡처링: 루트에서 이벤트 발생 요소로
- 타깃: 실제 이벤트가 발생한 요소
- 버블링: 발생 요소에서 다시 루트로',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    -- TypeScript
    (
        'TypeScript란 무엇인가?',
        '### TypeScript란 무엇인가?

TypeScript는 **JavaScript에 정적 타입(type system)을 추가**한 언어로,
컴파일 시 타입 오류를 사전에 체크할 수 있게 해줍니다.

- JS로 컴파일되어 동작하므로, JS 생태계와 호환됨
- 객체지향(클래스, 인터페이스, 제네릭) 지원
- 대규모 프로젝트에서 유지보수, 협업에 유리',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'TypeScript의 타입 추론이란 무엇인가?',
        '### TypeScript의 타입 추론이란 무엇인가?

TypeScript는 개발자가 타입을 명시하지 않아도
**코드 문맥을 분석해서 변수, 함수의 타입을 자동으로 유추**합니다.

```typescript
let a = "hello"; // a는 string
function sum(x = 10, y = 20) {
  return x + y;
} // return 타입 number
```

타입 추론은 코드를 간결하게 하면서도 타입 안정성을 유지하게 해줍니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'TypeScript의 타입 정의란 무엇인가?',
        '### TypeScript의 타입 정의란 무엇인가?

변수, 함수, 객체 등에 대해
**타입을 명시적으로 지정하는 것**을 의미합니다.

```typescript
let age: number = 20;
function add(x: number, y: number): number {
  return x + y;
}
```

명확한 타입 정의는 타입 체크를 강화하고,
IDE의 자동완성/오류 검출 등 개발 생산성을 높여줍니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'TypeScript의 타입 별칭이란 무엇인가?',
        '### TypeScript의 타입 별칭이란 무엇인가?

타입 별칭(Type Alias)은
`type` 키워드를 이용해 복잡한 타입에 **이름을 부여**하는 기능입니다.

```typescript
type User = { name: string; age: number };
const tom: User = { name: "Tom", age: 30 };
```

타입 별칭은 유니언, 인터섹션 타입 등에도 사용할 수 있습니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'TypeScript의 제너릭이란 무엇인가?',
        '### TypeScript의 제너릭이란 무엇인가?

제너릭(Generic)은
**타입을 파라미터화해서** 다양한 타입에 대해 재사용 가능한 함수를 만들 수 있게 해줍니다.

```typescript
function identity<T>(arg: T): T {
  return arg;
}
identity<number>(10);
identity<string>("hi");
```

Array, Promise 등도 모두 제너릭 타입입니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'TypeScript의 인터섹션이란 무엇인가?',
        '### TypeScript의 인터섹션(Intersection)이란 무엇인가?

인터섹션(Intersection)은
`&` 연산자로 **여러 타입을 합성**해서
모든 타입의 속성을 모두 포함한 새 타입을 만드는 기능입니다.

```typescript
type A = { name: string };
type B = { age: number };
type C = A & B; // { name: string; age: number }
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'any와 unknown의 차이점은 무엇인가?',
        '### any와 unknown의 차이점은 무엇인가?

- **any:**
  타입 체크가 완전히 무력화됨.
  어떤 타입이든 할당, 연산 가능(런타임 오류 위험).

- **unknown:**
  어떤 타입이든 할당 가능하지만,
  실제 사용 시 **타입 검사**가 필요.
  안전하게 타입을 좁혀 써야 함.

```typescript
let x: any = 123;
x.foo(); // 에러 안남(런타임 에러 발생 가능)
let y: unknown = 123;
y.foo(); // 에러 발생(컴파일 단계에서)
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    -- React
    (
        '리액트 리스트에 왜 key를 사용해야 하나요?',
        '### 리액트 리스트에 왜 key를 사용해야 하나요?

리스트 렌더링에서 **key는 각 아이템을 고유하게 식별**하는 값입니다.

- key가 없으면, 아이템 추가/삭제 시 리액트가 DOM 변화를 최적화하지 못해
  의도치 않은 리렌더링, 상태 꼬임, 성능 저하가 발생할 수 있습니다.

- 예를 들어, key가 index면 배열이 재정렬될 때 버그가 날 수 있으니
  실제 고유 ID(주로 DB id, uuid 등)를 쓰는 게 바람직합니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        '리액트에서 합성 이벤트란 무엇인가?',
        '### 리액트에서 합성 이벤트란 무엇인가?

합성 이벤트(Synthetic Event)는
리액트가 브라우저의 네이티브 이벤트를 추상화해서 제공하는 객체입니다.

- 모든 브라우저에서 동일한 이벤트 인터페이스 제공
- 이벤트 풀링, 버블링/캡처링 등 네이티브 이벤트와 거의 동일하게 사용
- 예시: `onClick`, `onChange` 등 props에 함수 할당

```jsx
function MyButton() {
  return <button onClick={e => console.log(e)}>Click</button>;
}
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'forwardRef란 무엇인가?',
        '### forwardRef란 무엇인가?

`forwardRef`는
부모 컴포넌트가 자식 컴포넌트의 ref를 직접 참조할 수 있게
ref를 전달(포워딩)하는 고차 컴포넌트(HOC)입니다.

- 일반적으로 컴포넌트에는 ref를 직접 쓸 수 없지만, forwardRef로 래핑하면 내부 DOM 또는 메서드에 접근 가능

```jsx
const Input = React.forwardRef((props, ref) => <input ref={ref} {...props} />);
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'useImperativeHandle란 무엇인가?',
        '### useImperativeHandle란 무엇인가?

`useImperativeHandle`은
`forwardRef`와 함께 사용하며,

부모가 자식 컴포넌트의 ref를 통해 **특정 메서드나 값만 노출**할 수 있게 제어합니다.

```jsx
const MyInput = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      /* 내부 DOM 접근 */
    },
  }));
  return <input />;
});
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'useRef란 무엇인가?',
        '### useRef란 무엇인가?

`useRef`는
컴포넌트에서 **값을 저장하고, 해당 값이 변경되어도 리렌더링되지 않는 참조**를 만듭니다.

- DOM 요소 접근
- 이전 상태 값 저장
- setTimeout, setInterval ID 보관 등에도 활용

```jsx
const inputRef = useRef(null);
<input ref={inputRef} />;
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'useState란 무엇인가?',
        '### useState란 무엇인가?

`useState`는
함수형 컴포넌트에서 **상태(state) 관리를 가능하게 하는 훅**입니다.

```jsx
const [count, setCount] = useState(0);
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'useEffect란 무엇인가?',
        '### useEffect란 무엇인가?

`useEffect`는
컴포넌트의 **생명주기(마운트, 언마운트, 업데이트)별로 실행되는 부수 효과(side effect) 처리**를 위한 훅입니다.

- 데이터 fetch, 이벤트 리스너 등록/해제, 타이머 등
- 두 번째 인자로 dependency array 전달 가능

```jsx
useEffect(() => {
  console.log("마운트/업데이트");
  return () => {
    console.log("언마운트");
  };
}, [deps]);
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'useContext란 무엇인가?',
        '### useContext란 무엇인가?

`useContext`는
리액트의 Context API와 연동해서,
**전역 데이터(테마, 인증, 언어 등)를 쉽게 공유**할 수 있게 해주는 훅입니다.

```jsx
const value = useContext(MyContext);
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'useMemo란 무엇인가?',
        '### useMemo란 무엇인가?

`useMemo`는
\*\*값(계산 결과)을 메모이제이션(캐싱)\*\*해서
의존성이 변하지 않으면 이전 값을 재사용합니다.

- 무거운 연산, 리렌더링 최적화에 사용

```jsx
const expensiveValue = useMemo(() => computeExpensive(a, b), [a, b]);
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'useCallback란 무엇인가?',
        '### useCallback란 무엇인가?

`useCallback`은
**함수(콜백)를 메모이제이션**해서
의존성이 변하지 않으면 같은 함수 인스턴스를 유지합니다.

- 자식 컴포넌트에 props로 함수 전달할 때, 불필요한 리렌더링 방지

```jsx
const handleClick = useCallback(() => { ... }, [deps]);
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'useReducer란 무엇인가?',
        '### useReducer란 무엇인가?

`useReducer`는
복잡한 상태 관리(여러 상태, 상태 변경 로직이 복잡할 때)에
Redux처럼 **reducer 패턴**으로 state를 관리할 수 있게 해줍니다.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'useLayoutEffect란 무엇인가?',
        '### useLayoutEffect란 무엇인가?

`useLayoutEffect`는
DOM이 변경된 후 **화면이 그려지기 직전에 동기적으로 실행**되는 훅입니다.

- 레이아웃 측정, 스크롤 위치 조정 등
- useEffect는 비동기, useLayoutEffect는 동기(렌더-페인트 사이 실행)',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    ),
    (
        'React에서 컴포넌트가 리렌더링 되는 경우는 무엇인가?',
        '### React에서 컴포넌트가 리렌더링 되는 경우는 무엇인가?

- **컴포넌트의 state가 변경될 때**
- **props가 변경될 때**
- **부모 컴포넌트가 리렌더링될 때**
- **context value가 변경될 때**
- **forceUpdate가 호출될 때**
- key가 바뀌어서 새로 마운트될 때

실무에서는 **불필요한 리렌더링을 막기 위해 useMemo, React.memo, useCallback 등 최적화** 기법을 자주 사용합니다.',
        'https://413b273c-tech-song-cdn.hubiwibe.workers.dev/closure.mp3',
        '{"views":0,"likes":0}',
        '68805675-e29b-4255-8eee-28d1d56d079b',
        now (),
        now ()
    );

-- 3. categories
INSERT INTO
    categories (title, description, created_at, updated_at)
VALUES
    ('Frontend', '프론트엔드 개발', now (), now ()),
    ('Backend', '백엔드 개발', now (), now ()),
    ('DevOps', '데브옵스', now (), now ()),
    ('Full Stack', '풀스택 개발', now (), now ()),
    ('AI Engineer', 'AI 엔지니어', now (), now ());

-- 4. tags
INSERT INTO
    tags (name, created_at, updated_at)
VALUES
    ('browser', now (), now ()),
    ('javascript', now (), now ()),
    ('typescript', now (), now ()),
    ('react', now (), now ());

-- Browser (playlist_id = 1)
INSERT INTO
    playlist_tracks (
        playlist_id,
        track_id,
        "order",
        created_at,
        updated_at
    )
VALUES
    (1, 1, 1, now (), now ()),
    (1, 2, 2, now (), now ()),
    (1, 3, 3, now (), now ()),
    (1, 4, 4, now (), now ()),
    (1, 5, 5, now (), now ());

-- JavaScript (playlist_id = 2)
INSERT INTO
    playlist_tracks (
        playlist_id,
        track_id,
        "order",
        created_at,
        updated_at
    )
VALUES
    (2, 6, 1, now (), now ()),
    (2, 7, 2, now (), now ()),
    (2, 8, 3, now (), now ()),
    (2, 9, 4, now (), now ()),
    (2, 10, 5, now (), now ()),
    (2, 11, 6, now (), now ()),
    (2, 12, 7, now (), now ()),
    (2, 13, 8, now (), now ());

-- TypeScript (playlist_id = 3)
INSERT INTO
    playlist_tracks (
        playlist_id,
        track_id,
        "order",
        created_at,
        updated_at
    )
VALUES
    (3, 14, 1, now (), now ()),
    (3, 15, 2, now (), now ()),
    (3, 16, 3, now (), now ()),
    (3, 17, 4, now (), now ()),
    (3, 18, 5, now (), now ()),
    (3, 19, 6, now (), now ()),
    (3, 20, 7, now (), now ()),
    (3, 21, 8, now (), now ());

-- React (playlist_id = 4)
INSERT INTO
    playlist_tracks (
        playlist_id,
        track_id,
        "order",
        created_at,
        updated_at
    )
VALUES
    (4, 22, 1, now (), now ()),
    (4, 23, 2, now (), now ()),
    (4, 24, 3, now (), now ()),
    (4, 25, 4, now (), now ()),
    (4, 26, 5, now (), now ()),
    (4, 27, 6, now (), now ()),
    (4, 28, 7, now (), now ()),
    (4, 29, 8, now (), now ()),
    (4, 30, 9, now (), now ()),
    (4, 31, 10, now (), now ()),
    (4, 32, 11, now (), now ()),
    (4, 33, 12, now (), now ());