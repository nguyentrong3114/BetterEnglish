import React from 'react';
import { Button } from './components/Button.js';
import lynxLogo from './assets/lynx-logo.png';
import { useNavigate } from 'react-router'; 
export function App() {
  const navigate = useNavigate();
  return (
    <view className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <view className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <view className="flex justify-center mb-8">
          <image src={lynxLogo} className="w-24 h-24" />
        </view>

        <text className="text-2xl font-bold text-center mb-4">Trang chính</text>
        <text className="text-center text-gray-600 mb-8">Chào mừng đến với ứng dụng!</text>
        <view className="flex justify-center mb-8">
          <Button className='text-white border-2 border-white rounded-md p-2' onClick={() => navigate('/login')}>
            <text className='text-white border-2 border-white rounded-md p-2'>Trang Đăng Nhập</text>
          </Button>
        </view>
      </view>
    </view>
  );
}
