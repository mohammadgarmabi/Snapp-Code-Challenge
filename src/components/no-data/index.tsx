import { Box, Typography, useTheme } from '@mui/material';

interface NoDataProps {
  message?: string;
}

const NoData = ({ message = 'No data available' }: NoDataProps) => {
  const { palette } = useTheme();

  return (
    <Box
      display="flex"
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      minHeight={200}
      width="100%"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          opacity=".4"
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
          fill={palette.primary.main}
        ></path>
        <path
          d="M10.64 9.501c-.19 0-.38-.07-.53-.22-.71-.71-1.87-.71-2.58 0-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM13.36 9.501c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.29.29-.77.29-1.06 0-.71-.71-1.87-.71-2.58 0a.71.71 0 0 1-.53.22ZM12 11.922c-2.69 0-4.88 2.19-4.88 4.88 0 .7.57 1.28 1.27 1.28h7.2c.7 0 1.27-.57 1.27-1.28.02-2.69-2.17-4.88-4.86-4.88Z"
          fill={palette.primary.main}
        ></path>
      </svg>
      <Typography variant="body1" color="text.secondary" align="center">
        {message}
      </Typography>
    </Box>
  );
};

export default NoData;
