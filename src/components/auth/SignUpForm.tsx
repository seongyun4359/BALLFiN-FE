import BALLFiNLogo from "../../assets/BALLFiN.svg";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import Toast from "@/components/common/Toast";
import { useSignUpForm } from "../../features/auth/useSignUpForm";

export default function SignUpForm() {
  const {
    formData,
    showPassword,
    showConfirmPassword,
    toast,
    handleSubmit,
    handleChange,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    closeToast,
    navigateToLogin,
  } = useSignUpForm();

  return (
    <div className="w-full lg:w-1/2 p-8">
      <div className="text-center mb-8">
        <img src={BALLFiNLogo} alt="BALLFiN" className="mx-auto mb-4 h-8" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          BALLFiN 회원가입
        </h1>
        <p className="text-gray-600">AI 기반 주식 분석 서비스를 시작해보세요</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 이름 입력 */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            이름
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C2B] focus:border-transparent"
              placeholder="이름을 입력하세요"
              required
            />
          </div>
        </div>

        {/* 이메일 입력 */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            이메일
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C2B] focus:border-transparent"
              placeholder="이메일을 입력하세요"
              required
            />
          </div>
        </div>

        {/* 비밀번호 입력 */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            비밀번호
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C2B] focus:border-transparent"
              placeholder="비밀번호를 입력하세요"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* 비밀번호 확인 입력 */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            비밀번호 확인
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C2B] focus:border-transparent"
              placeholder="비밀번호를 다시 입력하세요"
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <button
          type="submit"
          className="w-full bg-[#0A5C2B] text-white py-2 px-4 rounded-lg hover:bg-[#0A5C2B]/90 transition-colors"
        >
          회원가입
        </button>

        {/* 로그인 링크 */}
        <div className="text-center">
          <button
            type="button"
            className="text-sm text-gray-600 hover:text-[#0A5C2B]"
            onClick={navigateToLogin}
          >
            이미 계정이 있으신가요? 로그인하기
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          계속 진행하면 BALLFiN의{" "}
          <a href="#" className="text-[#0A5C2B] hover:underline">
            이용약관
          </a>{" "}
          및{" "}
          <a href="#" className="text-[#0A5C2B] hover:underline">
            개인정보 처리방침
          </a>{" "}
          에 동의하게 됩니다.
        </p>
      </div>

      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
    </div>
  );
}
