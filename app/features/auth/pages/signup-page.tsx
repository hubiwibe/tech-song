import { useState } from 'react';
import { Button } from 'app/common/components/ui/button';
import { cn } from 'app/lib/utils';
import { MessageCircle } from 'lucide-react';
import { signupUser, signupWithKakao } from '../mutations';
import { signupSchema } from '../schema';
import { useNavigate } from 'react-router';

// 상수 정의 - Magic Number 제거
const EMAIL_PLACEHOLDER = 'i.e wemake@example.com';
const PASSWORD_PLACEHOLDER = 'Enter your password';
const CONFIRM_PASSWORD_PLACEHOLDER = 'Confirm your password';
const NAME_PLACEHOLDER = 'Enter your name';

// 유효성 검사 함수들 - 일관된 반환 타입 사용
type ValidationResult = { ok: true } | { ok: false; reason: string };

function validateEmail(email: string): ValidationResult {
  if (email.length === 0) return { ok: false, reason: '이메일을 입력해주세요.' };
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return { ok: false, reason: '올바른 이메일 형식을 입력해주세요.' };
  }
  return { ok: true };
}

function validatePassword(password: string): ValidationResult {
  if (password.length === 0) return { ok: false, reason: '비밀번호를 입력해주세요.' };
  if (password.length < 6) return { ok: false, reason: '비밀번호는 6자 이상이어야 합니다.' };
  return { ok: true };
}

function validateConfirmPassword(password: string, confirmPassword: string): ValidationResult {
  if (confirmPassword.length === 0) return { ok: false, reason: '비밀번호 확인을 입력해주세요.' };
  if (password !== confirmPassword) return { ok: false, reason: '비밀번호가 일치하지 않습니다.' };
  return { ok: true };
}

function validateName(name: string): ValidationResult {
  if (name.length === 0) return { ok: false, reason: '이름을 입력해주세요.' };
  if (name.length < 2) return { ok: false, reason: '이름은 2자 이상이어야 합니다.' };
  return { ok: true };
}

// 회원가입 폼 컴포넌트 - 단일 책임 원칙
function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 이메일 유효성 검사 - 간단한 로직은 인라인으로 처리
  const handleEmailChange = (value: string) => {
    setEmail(value);
    const validation = validateEmail(value);
    setEmailError(validation.ok ? '' : validation.reason);
  };

  // 비밀번호 유효성 검사
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const validation = validatePassword(value);
    setPasswordError(validation.ok ? '' : validation.reason);
    
    // 비밀번호 확인도 다시 검사
    if (confirmPassword) {
      const confirmValidation = validateConfirmPassword(value, confirmPassword);
      setConfirmPasswordError(confirmValidation.ok ? '' : confirmValidation.reason);
    }
  };

  // 비밀번호 확인 유효성 검사
  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    const validation = validateConfirmPassword(password, value);
    setConfirmPasswordError(validation.ok ? '' : validation.reason);
  };

  // 이름 유효성 검사
  const handleNameChange = (value: string) => {
    setName(value);
    const validation = validateName(value);
    setNameError(validation.ok ? '' : validation.reason);
  };

  // 회원가입 처리 - 명확한 함수명 사용
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const confirmPasswordValidation = validateConfirmPassword(password, confirmPassword);
    const nameValidation = validateName(name);
    
    if (!emailValidation.ok) {
      setEmailError(emailValidation.reason);
      return;
    }
    
    if (!passwordValidation.ok) {
      setPasswordError(passwordValidation.reason);
      return;
    }

    if (!confirmPasswordValidation.ok) {
      setConfirmPasswordError(confirmPasswordValidation.reason);
      return;
    }

    if (!nameValidation.ok) {
      setNameError(nameValidation.reason);
      return;
    }

    setIsLoading(true);
    try {
      // Zod 스키마로 유효성 검사
      const validatedData = signupSchema.parse({ email, password, name });
      const result = await signupUser(validatedData);
      console.log('회원가입 성공:', result);
      // TODO: 회원가입 성공 후 리다이렉트 처리
    } catch (error) {
      console.error('회원가입 실패:', error);
      if (error instanceof Error) {
        setEmailError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 카카오톡 회원가입 처리
  const handleKakaoSignup = async () => {
    setIsLoading(true);
    try {
      // TODO: 카카오톡 OAuth 리다이렉트 처리
      // 실제 구현에서는 카카오톡 OAuth URL로 리다이렉트
      console.log('카카오톡 회원가입 시도');
      // window.location.href = '카카오톡 OAuth URL';
      await new Promise(resolve => setTimeout(resolve, 1000)); // 임시 딜레이
    } catch (error) {
      console.error('카카오톡 회원가입 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignupSubmit} className="w-full max-w-md space-y-6">
      {/* 이름 입력 필드 */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-900">
          Name
        </label>
        <p className="text-xs text-gray-500">Enter your full name</p>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder={NAME_PLACEHOLDER}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "placeholder-gray-400",
            nameError && "border-red-500 focus:ring-red-500"
          )}
        />
        {nameError && (
          <p className="text-xs text-red-500">{nameError}</p>
        )}
      </div>

      {/* 이메일 입력 필드 */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-900">
          Email
        </label>
        <p className="text-xs text-gray-500">Enter your email address</p>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder={EMAIL_PLACEHOLDER}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "placeholder-gray-400",
            emailError && "border-red-500 focus:ring-red-500"
          )}
        />
        {emailError && (
          <p className="text-xs text-red-500">{emailError}</p>
        )}
      </div>

      {/* 비밀번호 입력 필드 */}
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-900">
          Password
        </label>
        <p className="text-xs text-gray-500">Enter your password</p>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          placeholder={PASSWORD_PLACEHOLDER}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "placeholder-gray-400",
            passwordError && "border-red-500 focus:ring-red-500"
          )}
        />
        {passwordError && (
          <p className="text-xs text-red-500">{passwordError}</p>
        )}
      </div>

      {/* 비밀번호 확인 입력 필드 */}
      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-900">
          Confirm Password
        </label>
        <p className="text-xs text-gray-500">Confirm your password</p>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          placeholder={CONFIRM_PASSWORD_PLACEHOLDER}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "placeholder-gray-400",
            confirmPasswordError && "border-red-500 focus:ring-red-500"
          )}
        />
        {confirmPasswordError && (
          <p className="text-xs text-red-500">{confirmPasswordError}</p>
        )}
      </div>

      {/* 회원가입 버튼 */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        {isLoading ? '회원가입 중...' : 'Sign up'}
      </Button>

      {/* 구분선 */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">OR CONTINUE WITH</span>
        </div>
      </div>

      {/* 카카오톡 회원가입 버튼 */}
      <Button
        type="button"
        variant="outline"
        onClick={handleKakaoSignup}
        disabled={isLoading}
        className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        Kakao Talk
      </Button>
    </form>
  );
}

// 메인 회원가입 페이지 컴포넌트
export default function SignupPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Create your account
          </h1>
        </div>

        {/* 회원가입 폼 */}
        <SignupForm />

        {/* 로그인 링크 */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={handleLoginClick}
              className="text-blue-600 hover:text-blue-700 font-medium underline"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
} 