import React from 'react';
import { Grid, Card, CardMedia, Typography, Box, Button, CardContent, Divider, Link } from '@mui/material';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// living rule info images
import one from './livingInfo/1.png';
import two from './livingInfo/2.png';
import three from './livingInfo/3.png';
import four from './livingInfo/4.png';
import five from './livingInfo/5.png';
import six from './livingInfo/6.png';
import seven from './livingInfo/7.png';
import eight from './livingInfo/8.png';

const About = () => {
  const navigate = useNavigate();

  const Images = [
    { src: one, alt: 'BOYU living note' },
    { src: two, alt: 'BOYU living note' },
    { src: three, alt: 'BOYU living note' },
    { src: four, alt: 'BOYU living note' },
    { src: five, alt: 'BOYU living note' },
    { src: six, alt: 'BOYU living note' },
    { src: seven, alt: 'BOYU living note' },
    { src: eight, alt: 'BOYU living note' },
  ];

  const go2room = () => {
    navigate('/pictures');
  };

  // const go2travelinfo = () => {
  //   navigate('/travel');
  // };

  return (
    <Box className="aboutContainer" sx={{ mx: 'auto', maxWidth: 'lg', p: 4 }}>
      <Typography variant="h3" component="h4" gutterBottom sx={{ textAlign: 'center', fontFamily: '"Times New Roman", Times, serif' }}>
        關於泊寓
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" paragraph sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
        這裡是一座慢慢變身的透天老屋，目前僅有２間客房開放。屋內有鹿港木門改造的桌子、洗手台，以及各式古董小物裝飾。特別保留五零年代磨石子地板，搭配大膽配色，結合傳統元素，展現雅緻且創新的風格。期待為您帶來獨一無二的住宿體驗。
      </Typography>
      <Typography variant="body2" sx={{ textAlign:'right', fontFamily: '"Times New Roman", Times, serif' }}>
        民宿編號｜鹿港民宿登記１３１號
      </Typography><br /><br /><br /><br />
      <Grid container spacing={2} sx={{ justifyContent: 'space-around' }}>
        <Grid item xs={12} sm={6}>
        <Card sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(30, 43, 49)' }}>
            <CardMedia
              component="img"
              height="180"
              sx={{ opacity: 0.7 }}
            />
            <CardContent sx={{ position: 'absolute', bottom: '20%', width: '100%', textAlign: 'center', color: 'white', zIndex: 2 }}>
                <Typography variant="h3" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  房型介紹
                </Typography>
                <Button
              variant="contained"
              sx={{
                position: 'absolute',
                border: 'white 2px solid',
                top: '70%',
                right: '2em',
                bgcolor: 'transparent',
                fontWeight: 'bold',
                color: 'white',
                '&:hover': {
                  bgcolor: 'transparent',
                  opacity: 0.9
                }
              }}
              onClick={() => { go2room() }}
            >
              Learn More
            </Button>
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(30, 43, 49)' }}>
            <CardMedia
              component="img"
              height="180"
              sx={{ opacity: 0.7 }}
            />
            <CardContent sx={{ position: 'absolute', bottom: '20%', width: '100%', textAlign: 'center', color: 'white', zIndex: 2 }}>
              <Typography variant="h3" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
                我要訂房
              </Typography>
              <Button
                variant="contained"
                sx={{
                  position: 'absolute',
                  border: 'white 2px solid',
                  top: '70%',
                  right: '2em',
                  bgcolor: 'transparent',
                  fontWeight: 'bold',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'transparent',
                    opacity: 0.9
                  }
                }}
              >
                <Link href="https://lin.ee/Yu6BLGE" target="_blank" color="inherit" style={{ textDecoration: 'none' }}>
                  Learn More
                </Link>
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(30, 43, 49)' }}>
            <CardMedia
              component="img"
              height="180"
              sx={{ opacity: 0.7 }}
            />
            <CardContent sx={{ position: 'absolute', bottom: '20%', width: '100%', textAlign: 'center', color: 'white', zIndex: 2 }}>
                <Typography variant="h3" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  旅遊資訊
              </Typography>
              <Button
                variant="contained"
                sx={{
                  position: 'absolute',
                  border: 'white 2px solid',
                  top: '70%',
                  right: '2em',
                  bgcolor: 'transparent',
                  fontWeight: 'bold',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'transparent',
                    opacity: 0.9
                  }
                }}
              >
                <Link href="https://maps.app.goo.gl/9nDViLVKwYWtBWAy7" target="_blank" color="inherit" style={{ textDecoration: 'none' }}>
                  Learn More
                </Link>
              </Button>
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(30, 43, 49)' }}>
            <CardMedia
              component="img"
              height="180"
              sx={{ opacity: 0.7 }}
            />
            <CardContent sx={{ position: 'absolute', bottom: '20%', width: '100%', textAlign: 'center', color: 'white', zIndex: 2 }}>
                <Typography variant="h3" sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  google 地圖
              </Typography>
              <Button
                variant="contained"
                sx={{
                  position: 'absolute',
                  border: 'white 2px solid',
                  top: '70%',
                  right: '2em',
                  bgcolor: 'transparent',
                  fontWeight: 'bold',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'transparent',
                    opacity: 0.9
                  }
                }}
              >
                <Link href="https://maps.app.goo.gl/mWdWfSoSCX8u7vaH6?g_st=il" target="_blank" color="inherit" style={{ textDecoration: 'none' }}>
                  Learn More
                </Link>
              </Button>
              </CardContent>
          </Card>
        </Grid>
      </Grid><br /><br /><br /><br /><br />
      <></>
      <Divider sx={{
        width: '70%',
        borderStyle: 'dashed',
        borderColor: 'text.primary',
        mx: 'auto',
        my: 2 
      }} /><br /><br /><br /><br />
      <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Times New Roman", Times, serif' }} > 
        ⚠️提醒事項
      </Typography><br /><br />
      <Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					loop={true}
				>
          {Images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Divider sx={{
        width: '70%',
        borderStyle: 'dashed',
        borderColor: 'text.primary',
        mx: 'auto',
        my: 2
      }} /><br /><br /><br /><br />
      <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Times New Roman", Times, serif' }}>
        ✨需要行李寄放服務的旅客也歡迎加入官方LINE跟我們聯繫喔！
      </Typography><br /><br />
      <Footer/>
    </Box>
  );
};

export default About;
