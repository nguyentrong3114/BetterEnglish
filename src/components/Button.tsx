export function Button({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  return (
    <view bindtap={onClick} className={className}>
      <text>{children}</text>
    </view>
  );
}