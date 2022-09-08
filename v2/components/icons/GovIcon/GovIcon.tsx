import { Icon, IconProps } from '@chakra-ui/react';

export const GovIcon = ({
  width = '20px',
  height = '20px',
  color = 'white',
  ...props
}: IconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" color={color} {...props}>
      <path
        d="M11.2249 6.23994C11.469 5.99587 11.8647 5.99587 12.1088 6.23994L12.8833 7.01449L14.9259 4.97441C15.1701 4.73048 15.5659 4.73073 15.8098 4.97496C16.0537 5.21918 16.0535 5.61491 15.8093 5.85884L13.3272 8.33783L13.325 8.34005C13.0809 8.58413 12.6852 8.58413 12.4411 8.34005L11.2249 7.12383C10.9808 6.87975 10.9808 6.48402 11.2249 6.23994Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0002 2.29163C9.19475 2.29163 8.54183 2.94454 8.54183 3.74996V9.16663C8.54183 9.90131 9.0851 10.5091 9.79183 10.6102V11.6666C9.79183 11.8971 9.91869 12.1089 10.1219 12.2177C10.3251 12.3264 10.5717 12.3145 10.7635 12.1867L13.1061 10.625H16.6668C17.4722 10.625 18.1252 9.97204 18.1252 9.16663V3.74996C18.1252 2.94454 17.4722 2.29163 16.6668 2.29163H10.0002ZM9.79183 3.74996C9.79183 3.6349 9.8851 3.54163 10.0002 3.54163H16.6668C16.7819 3.54163 16.8752 3.6349 16.8752 3.74996V9.16663C16.8752 9.28169 16.7819 9.37496 16.6668 9.37496H12.7276L11.0418 10.4988V9.37496H10.0002C9.8851 9.37496 9.79183 9.28169 9.79183 9.16663V3.74996Z"
        fill="currentColor"
      />
      <path
        d="M7.50016 8.12496C7.84534 8.12496 8.12516 8.40478 8.12516 8.74996C8.12516 9.09514 7.84534 9.37496 7.50016 9.37496H2.91683C2.80177 9.37496 2.7085 9.46823 2.7085 9.58329V15C2.7085 15.115 2.80177 15.2083 2.91683 15.2083H6.85606L8.54183 16.3321V15.2083H9.5835C9.69856 15.2083 9.79183 15.115 9.79183 15V13.3333C9.79183 12.9881 10.0717 12.7083 10.4168 12.7083C10.762 12.7083 11.0418 12.9881 11.0418 13.3333V15C11.0418 15.7346 10.4986 16.3424 9.79183 16.4435V17.5C9.79183 17.7305 9.66496 17.9422 9.46174 18.051C9.25852 18.1598 9.01193 18.1478 8.82014 18.02L6.47759 16.4583H2.91683C2.11141 16.4583 1.4585 15.8054 1.4585 15V9.58329C1.4585 8.77788 2.11141 8.12496 2.91683 8.12496H7.50016Z"
        fill="currentColor"
      />
      <path
        d="M4.55822 10.808C4.8023 10.5639 5.19803 10.5639 5.4421 10.808L6.25016 11.6161L7.05822 10.808C7.3023 10.5639 7.69803 10.5639 7.9421 10.808C8.18618 11.0521 8.18618 11.4478 7.9421 11.6919L7.13405 12.5L7.9421 13.308C8.18618 13.5521 8.18618 13.9478 7.9421 14.1919C7.69803 14.436 7.3023 14.436 7.05822 14.1919L6.25016 13.3838L5.4421 14.1919C5.19803 14.436 4.8023 14.436 4.55822 14.1919C4.31414 13.9478 4.31414 13.5521 4.55822 13.308L5.36628 12.5L4.55822 11.6919C4.31414 11.4478 4.31414 11.0521 4.55822 10.808Z"
        fill="currentColor"
      />
    </Icon>
  );
};