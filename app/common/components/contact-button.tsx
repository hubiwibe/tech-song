import { Mail } from "lucide-react"

const ContactButton = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="absolute right-4 flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
        aria-label="이메일로 문의하기"
    >
        <Mail size={16} />
        <span>문의</span>
    </button>
);

export default ContactButton;