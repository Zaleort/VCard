const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const PNGImages = './src/assets/*.png';
const JPEGImages = './src/assets/*.jpg';
const output = './src/assets/optimized';

const optimiseJPEGImages = () =>
    imagemin([JPEGImages], output, {
        plugins: [
            imageminMozjpeg({
                quality: 75,
            }),
        ],
    });

const optimisePNGImages = () =>
    imagemin([PNGImages], output, {
        plugins: [
            imageminPngquant({
                quality: '90-100',
                strip: true,
                verbose: true,
            }),
        ],
    });

optimiseJPEGImages()
    .then(() => optimisePNGImages())
    .catch(error => console.error(error));
