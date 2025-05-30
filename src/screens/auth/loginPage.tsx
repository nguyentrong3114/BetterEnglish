import { useCallback, useState } from '@lynx-js/react';
import lynxLogo from '../../assets/lynx-logo.png';
import { Button } from '../../components/Button.js';
import { useNavigate } from 'react-router';
export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = useCallback(() => {
    console.log('Đăng nhập với:', { username, password });
    navigate('/home');
  }, [username, password]);

  return (
    <view className="min-h-screen flex items-center justify-center p-4">
      <view className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <view className="flex justify-center">
          <image src={lynxLogo} className="w-24 h-24 rounded-full shadow-md" />
        </view>

        <text className="text-2xl font-bold text-center my-4 text-gray-700">Đăng nhập</text>

        <view className="space-y-4 py-4">
          <view>
            <text className="block text-sm font-medium text-gray-600 mb-1">Tên đăng nhập</text>
            <input
              bindinput={(e: any) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập"
              className="w-full p-2 h-12 border border-gray-300 rounded-md"
            />
          </view>

          <view className='space-y-4 py-4'>
            <text className="block text-sm font-medium text-gray-600 mb-1">Mật khẩu</text>
            <input
              bindinput={(e: any) => setPassword(e.target.value)}
              type="password"
              placeholder="Nhập mật khẩu"
              className="w-full p-2 h-12 border border-gray-300 rounded-md"
            />
          </view>
          <view className='flex justify-center'>
            <Button
              className="border-2 border-white text-white text-xl p-2 rounded-md mt-4"
              onClick={handleLogin}
            >
              <text className="font-semibold">Đăng nhập</text>
            </Button>
          </view>
        </view>
      </view>
    </view>
  );
}
