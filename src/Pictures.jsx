import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import Footer from './footer';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// 2A room images
import two1 from './2a/2a1.jpg';
import two3 from './2a/2a3.jpg';
import two4 from './2a/2a4.jpg';
import two5 from './2a/2a5.jpg';
import two6 from './2a/2a6.jpg';
import two7 from './2a/2a7.jpg';
import two8 from './2a/2a8.jpg';
import two9 from './2a/2a9.jpg';
import two10 from './2a/2a10.jpg';
import two11 from './2a/2a11.jpg';
// 3A room images
import three1 from './3a/3a1.jpg';
import three2 from './3a/3a2.jpg';
import three3 from './3a/3a3.jpg';
import three4 from './3a/3a4.jpg';
import three5 from './3a/3a5.jpg';
import three6 from './3a/3a6.jpg';
import three7 from './3a/3a7.jpg';
import three8 from './3a/3a8.jpg';
import three9 from './3a/3a9.jpg';

const twoImages = [
  { src: two1, alt: 'BOYU 2A' },
  { src: two3, alt: 'BOYU 2A' },
  { src: two4, alt: 'BOYU 2A' },
  { src: two5, alt: 'BOYU 2A' },
  { src: two6, alt: 'BOYU 2A' },
  { src: two7, alt: 'BOYU 2A' },
  { src: two8, alt: 'BOYU 2A' },
  { src: two9, alt: 'BOYU 2A' },
  { src: two10, alt: 'BOYU 2A bathroom' },
  { src: two11, alt: 'BOYU 2A bathroom' }
];

const threeImages = [
  { src: three1, alt: 'BOYU 3A' },
  { src: three2, alt: 'BOYU 3A' },
  { src: three3, alt: 'BOYU 3A' },
  { src: three4, alt: 'BOYU 3A' },
  { src: three5, alt: 'BOYU 3A' },
  { src: three6, alt: 'BOYU 3A' },
  { src: three7, alt: 'BOYU 3A' },
  { src: three8, alt: 'BOYU 3A' },
  { src: three9, alt: 'BOYU 3A bathroom' }
];

const theme = createTheme({
  typography: {
    fontFamily: '"Times New Roman", Times, serif',
  },
});

const Pictures = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom component="h1" textAlign="center">
          Our Rooms
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card raised>
              <Typography variant="h5" component="h2" sx={{ textAlign: 'center', my: 2 }}>
                2A Room
              </Typography>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
              >
                {twoImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <CardContent>
                <Typography sx={{ fontSize: '1.5rem' }}>Weekday (Sun-Thu): 1600 NTD</Typography>
                <Typography sx={{ fontSize: '1.5rem' }}>Weekend (Fri-Sat): 1800 NTD</Typography><br /><br />
                <Box sx={{ flexGrow: 1, p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                      <Typography variant="h6" component="h2">🏠房間設施</Typography><br />
                      <Typography>✔️ 加大雙人床</Typography>
                      <Typography>✔️ 獨立衛浴(24hr供應熱水)</Typography>
                      <Typography>✔️ 免費 WIFI</Typography>
                      <Typography>✔️ 冷暖變平空調</Typography>
                      <Typography>✔️ TV(小米電視盒,可觀看Netflix/YouTube)</Typography>
                      <Typography>✔️ 冰箱</Typography>
                      <Typography>✔️ 保溫壺、馬克杯</Typography>
                      <Typography>✔️ 沐浴乳、洗髮精</Typography>
                      <Typography>✔️ 浴巾</Typography>
                      <Typography>✔️ 吹風機</Typography>
                      <Typography>✔️ 衣架</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" component="h2">🏨 公共空間設施</Typography><br />
                      <Typography>✔️ 飲水機</Typography>
                      <Typography>✔️ 行李寄放</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card raised>
              <Typography variant="h5" component="h2" sx={{ textAlign: 'center', my: 2 }}>
                3A Room
              </Typography>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
              >
                {threeImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <CardContent>
                <Typography sx={{ fontSize: '1.5rem' }}>Weekday (Sun-Thu): 1600 NTD</Typography>
                <Typography sx={{ fontSize: '1.5rem' }}>Weekend (Fri-Sat): 1800 NTD</Typography><br /><br />
                <Box sx={{ flexGrow: 1, p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                      <Typography variant="h6" component="h2">🏠房間設施</Typography><br />
                      <Typography>✔️ 加大雙人床</Typography>
                      <Typography>✔️ 獨立衛浴(24hr供應熱水)</Typography>
                      <Typography>✔️ 免費 WIFI</Typography>
                      <Typography>✔️ 冷暖變平空調</Typography>
                      <Typography>✔️ TV(小米電視盒,可觀看Netflix/YouTube)</Typography>
                      <Typography>✔️ 冰箱</Typography>
                      <Typography>✔️ 保溫壺、馬克杯</Typography>
                      <Typography>✔️ 沐浴乳、洗髮精</Typography>
                      <Typography>✔️ 浴巾</Typography>
                      <Typography>✔️ 吹風機</Typography>
                      <Typography>✔️ 衣架</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" component="h2">🏨 公共空間設施</Typography><br />
                      <Typography>✔️ 飲水機</Typography>
                      <Typography>✔️ 行李寄放</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Pictures;

