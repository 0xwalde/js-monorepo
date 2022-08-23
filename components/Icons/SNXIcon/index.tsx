import { Icon } from '@chakra-ui/react';

interface SnxIconProps {
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

const SNXIcon = ({
  width = 25,
  height = 24,
  color = '#00D1FF',
  backgroundColor = '#0E052F',
}: SnxIconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path
        d="M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12Z"
        fill={backgroundColor}
      />
      <path
        d="M8.58669 9.12476C8.48131 9.00522 8.35158 8.94531 8.1972 8.94531H5.03992C5.01188 8.94531 4.98894 8.9365 4.97166 8.9189C4.95409 8.90158 4.94531 8.88199 4.94531 8.86098V6.75102C4.94531 6.73001 4.95409 6.7107 4.97166 6.69309C4.98894 6.67549 5.01188 6.66669 5.03992 6.66669H8.37622C9.21809 6.66669 9.94438 7.00798 10.5548 7.69001L11.3652 8.67102L9.7866 10.5805L8.58669 9.12476ZM14.4174 7.6795C15.0279 7.00429 15.7575 6.66669 16.6065 6.66669H19.9323C19.9604 6.66669 19.9813 6.67379 19.9955 6.6877C20.0094 6.7019 20.0164 6.72291 20.0164 6.75102V8.86098C20.0164 8.88199 20.0094 8.90158 19.9955 8.9189C19.9813 8.9365 19.9604 8.94531 19.9323 8.94531H16.775C16.6207 8.94531 16.4909 9.00522 16.3855 9.12476L14.0597 11.9309L16.396 14.7581C16.5014 14.8708 16.6275 14.9271 16.775 14.9271H19.9323C19.9604 14.9271 19.9813 14.9359 19.9955 14.9535C20.0094 14.9711 20.0164 14.9941 20.0164 15.0219V17.1319C20.0164 17.1529 20.0094 17.1725 19.9955 17.1898C19.9813 17.2074 19.9604 17.2162 19.9323 17.2162H16.6065C15.7575 17.2162 15.0313 16.8752 14.4279 16.1929L12.4915 13.8509L10.5548 16.1929C9.94438 16.8752 9.21469 17.2162 8.36574 17.2162H5.03992C5.01188 17.2162 4.99063 17.2074 4.97675 17.1898C4.96259 17.1722 4.95579 17.1495 4.95579 17.1211V15.0111C4.95579 14.9901 4.96259 14.9708 4.97675 14.9532C4.99063 14.9356 5.01188 14.9268 5.03992 14.9268H8.1972C8.3445 14.9268 8.47423 14.8672 8.58669 14.7473L10.8704 11.9835L14.4174 7.6795Z"
        fill={color}
      />
    </Icon>
  );
};

export default SNXIcon;
