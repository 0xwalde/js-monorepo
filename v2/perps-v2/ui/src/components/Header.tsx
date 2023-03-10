import { Button, Divider, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <>
      <Flex as="header" p="2" alignItems="center" gap="4">
        <svg
          width="29"
          height="22"
          viewBox="0 0 29 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.81239 5.58926C6.61525 5.35964 6.37254 5.24456 6.08372 5.24456H0.177C0.124536 5.24456 0.0816109 5.22765 0.0492845 5.19384C0.0164282 5.16057 0 5.12293 0 5.08257V1.02966C0 0.989301 0.0164282 0.952214 0.0492845 0.918399C0.0816109 0.884583 0.124536 0.867676 0.177 0.867676H6.41864C7.99362 0.867676 9.35239 1.52325 10.4944 2.83332L12.0106 4.7177L9.05722 8.38555L6.81239 5.58926ZM17.7207 2.81314C18.8627 1.51616 20.2278 0.867676 21.8161 0.867676H28.0381C28.0906 0.867676 28.1298 0.881311 28.1563 0.908036C28.1822 0.935306 28.1955 0.975666 28.1955 1.02966V5.08257C28.1955 5.12293 28.1822 5.16057 28.1563 5.19384C28.1298 5.22765 28.0906 5.24456 28.0381 5.24456H22.1314C21.8426 5.24456 21.5998 5.35964 21.4027 5.58926L17.0514 10.9795L21.4223 16.4101C21.6195 16.6266 21.8553 16.7346 22.1314 16.7346H28.0381C28.0906 16.7346 28.1298 16.7515 28.1563 16.7854C28.1822 16.8192 28.1955 16.8633 28.1955 16.9168V20.9697C28.1955 21.0101 28.1822 21.0477 28.1563 21.081C28.1298 21.1148 28.0906 21.1317 28.0381 21.1317H21.8161C20.2278 21.1317 18.8691 20.4767 17.7403 19.166L14.1176 14.6675L10.4944 19.166C9.35239 20.4767 7.98726 21.1317 6.39903 21.1317H0.177C0.124536 21.1317 0.0847905 21.1148 0.0588234 21.081C0.0323264 21.0472 0.0196078 21.0035 0.0196078 20.949V16.8961C0.0196078 16.8557 0.0323264 16.8186 0.0588234 16.7848C0.0847905 16.751 0.124536 16.7341 0.177 16.7341H6.08372C6.35929 16.7341 6.602 16.6195 6.81239 16.3894L11.0848 11.0804L17.7207 2.81314Z"
            fill="#2ED9FF"
          />
        </svg>
        <Heading mr="auto" fontFamily="Lustra Text">
          Perps Dashboard
        </Heading>
        <Button
          variant="outline"
          rightIcon={
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.07952 1.47127L1.65444 1.47127L1.65444 0.304778L8.07096 0.30478L8.07097 6.7213L6.90447 6.7213L6.90448 2.29623L1.11716 8.32502L0.292206 7.50006L6.07952 1.47127Z"
                fill="#00D1FF"
              />
            </svg>
          }
        >
          <Link to="https://synthetix.io/perps" target="_blank" rel="noopener">
            Trade
          </Link>
        </Button>
      </Flex>
      <Divider color="cyan.500" mb="2" />
    </>
  );
};