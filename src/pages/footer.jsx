import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: 'rgb(30, 43, 49)',
        color: 'white',
        mt: 'auto', // 保持在底部
      }}
    >
      <Grid container >
        <Grid item xs={18} md={9}>
          <Typography variant="h6" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
            泊寓 BOYU Hotel
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Address: 彰化縣鹿港鎮鹿興路57巷3號
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Tel: 0973-138299
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Mail: <Link href="mailto:boyuhotel@gmail.com" color="inherit">boyuhotel@gmail.com</Link>
          </Typography>
        </Grid>
        <Grid item xs={16} md={3}>
          <Typography variant="body2" sx={{ fontSize: '1.5rem', fontFamily: '"Times New Roman", Times, serif' }}>
            Social Media
          </Typography><br />
          <Typography variant="body2" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
            <Link href="https://lin.ee/Yu6BLGE" color="inherit">LINE</Link>
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
            <Link href="https://www.facebook.com/BOYUHotel?mibextid=LQQJ4d" color="inherit">Facebook</Link>
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
            <Link href="https://www.instagram.com/boyu_hotel?igsh=MW1hbnR5MG53emxrYQ==" color="inherit">Instagram</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
