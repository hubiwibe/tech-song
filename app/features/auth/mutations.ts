import {
  type LoginRequest,
  type SignupRequest,
} from './schema';

// 로그인 API 호출 함수
export async function loginUser(credentials: LoginRequest) {
  // 실제 구현에서는 API 엔드포인트로 요청
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('로그인에 실패했습니다.');
  }

  return response.json();
}

// 회원가입 API 호출 함수
export async function signupUser(credentials: SignupRequest) {
  // 실제 구현에서는 API 엔드포인트로 요청
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('회원가입에 실패했습니다.');
  }

  return response.json();
}

// 카카오톡 로그인 API 호출 함수
export async function loginWithKakao(code: string, state?: string) {
  const response = await fetch('/api/auth/kakao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, state }),
  });

  if (!response.ok) {
    throw new Error('카카오톡 로그인에 실패했습니다.');
  }

  return response.json();
}

// 카카오톡 회원가입 API 호출 함수
export async function signupWithKakao(code: string, state?: string) {
  const response = await fetch('/api/auth/kakao/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, state }),
  });

  if (!response.ok) {
    throw new Error('카카오톡 회원가입에 실패했습니다.');
  }

  return response.json();
}

// 로그아웃 API 호출 함수
export async function logoutUser() {
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('로그아웃에 실패했습니다.');
  }

  return response.json();
} 