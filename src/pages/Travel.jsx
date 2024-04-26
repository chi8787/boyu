import React from 'react';
import { Grid, Card, CardMedia, Typography, Box, Button, CardContent } from '@mui/material';
import Footer from './footer';

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontFamily: '"Times New Roman", Times, serif' }}>
        在地景點與美食
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://example.com/image.jpg" 
              alt="美食图片"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                美食推荐
              </Typography>
              <Typography variant="body2" color="text.secondary">
                介绍一些地道美食，例如特色小吃、地方菜肴等。
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
            //   img=
              alt="旅游景点"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                旅游景点
              </Typography>
              <Typography variant="body2" color="text.secondary">
                探索一些必游的旅游景点，包括自然风光、历史遗迹等。
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary">
          了解更多
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
