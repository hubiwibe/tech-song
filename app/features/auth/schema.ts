import { z } from 'zod';

// 로그인 요청 스키마
export const loginSchema = z.object({
  email: z.string().email('올바른 이메일 형식을 입력해주세요.'),
  password: z.string().min(6, '비밀번호는 6자 이상이어야 합니다.'),
});

// 회원가입 요청 스키마
export const signupSchema = z.object({
  email: z.string().email('올바른 이메일 형식을 입력해주세요.'),
  password: z.string().min(6, '비밀번호는 6자 이상이어야 합니다.'),
  name: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
});

// 로그인 응답 스키마
export const loginResponseSchema = z.object({
  user: z.object({
    id: z.string(),
    email: z.string().email(),
    name: z.string().optional(),
  }),
  token: z.string(),
});

// 회원가입 응답 스키마
export const signupResponseSchema = z.object({
  user: z.object({
    id: z.string(),
    email: z.string().email(),
    name: z.string(),
  }),
  token: z.string(),
});

// 카카오톡 로그인 요청 스키마
export const kakaoLoginSchema = z.object({
  code: z.string(),
  state: z.string().optional(),
});

// 카카오톡 회원가입 요청 스키마
export const kakaoSignupSchema = z.object({
  code: z.string(),
  state: z.string().optional(),
});

export type LoginRequest = z.infer<typeof loginSchema>;
export type SignupRequest = z.infer<typeof signupSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export type SignupResponse = z.infer<typeof signupResponseSchema>;
export type KakaoLoginRequest = z.infer<typeof kakaoLoginSchema>;
export type KakaoSignupRequest = z.infer<typeof kakaoSignupSchema>; 