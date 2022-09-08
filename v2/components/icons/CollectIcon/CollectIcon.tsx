import { IconProps, Icon } from '@chakra-ui/react';

export const CollectIcon = ({
  width = '32px',
  height = '32px',
  color = '#2ED9FF',
  ...props
}: IconProps) => (
  <Icon
    width={width}
    height={width}
    fill="none"
    viewBox={`0 0 ${width} ${height}`}
    {...props}
    color={color}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3.313c-7.007 0-12.688 5.68-12.688 12.688 0 7.007 5.68 12.687 12.688 12.687 7.007 0 12.688-5.68 12.688-12.688 0-7.007-5.68-12.687-12.688-12.687ZM.687 16.001C.688 7.543 7.543.687 16 .687S31.313 7.544 31.313 16c0 8.457-6.856 15.313-15.313 15.313S.687 24.457.687 16Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.418 13.225c.01-.49.15-.689.244-.784.124-.125.364-.26.808-.33.926-.148 2.178.067 3.212.339l1.269.334.668-2.538-1.269-.335c-1.09-.287-2.793-.631-4.292-.393-.768.122-1.608.417-2.26 1.075-.68.685-1.006 1.612-1.006 2.69v.05l.004.05c.095 1.247.837 2.076 1.607 2.622.706.5 1.58.863 2.287 1.158l.08.032c.798.333 1.39.59 1.801.89.362.265.398.425.398.566 0 .549-.162.766-.288.88-.17.154-.487.303-1.029.37-1.104.138-2.538-.132-3.594-.415l-1.268-.34-.679 2.536 1.268.34c1.116.298 2.963.688 4.598.484.827-.103 1.742-.374 2.465-1.027.764-.692 1.152-1.665 1.152-2.828 0-1.268-.71-2.125-1.472-2.684-.694-.508-1.575-.875-2.284-1.17l-.059-.025c-.797-.332-1.413-.594-1.859-.91-.378-.268-.478-.463-.502-.637Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 20.594c.725 0 1.313.588 1.313 1.313v3.281h-2.625v-3.281c0-.725.587-1.313 1.312-1.313Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.313 6.813v3.281a1.312 1.312 0 1 1-2.625 0V6.813h2.624Z"
      fill="currentColor"
    />
  </Icon>
);