import { User, Settings, ChevronRight, Bell, HelpCircle, LogOut } from 'lucide-react';

export default function ProfileSettings() {
  const menuItems = [
    { icon: User, label: '내 정보', color: 'text-gray-600' },
    { icon: Settings, label: '내 정보 수정', color: 'text-gray-600' },
    { icon: Bell, label: '알림 설정', color: 'text-gray-600' },
    { icon: HelpCircle, label: '고객센터', color: 'text-gray-600' },
    { icon: LogOut, label: '로그아웃', color: 'text-red-600', isLogout: true },
  ];
  return (
    <section className="bg-white rounded-xl shadow-sm">
      <div className="divide-y divide-gray-100">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
              item.isLogout ? 'text-red-600' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} className={item.color} />
              <span className={item.isLogout ? 'text-red-600' : 'text-gray-900'}>{item.label}</span>
            </div>
            <ChevronRight size={20} className={item.isLogout ? 'text-red-600' : 'text-gray-400'} />
          </button>
        ))}
      </div>
    </section>
  );
}
