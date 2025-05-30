import { useNavigate } from 'react-router';
export function HomePage() {
    const navigate = useNavigate();
    return (
        <view className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <text>Home Page</text>
        </view>
    )
}