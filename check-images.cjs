const Jimp = require('jimp');

async function run() {
  for(let i=1; i<=3; i++) {
    const img = await Jimp.read('public/logo-part'+i+'.png');
    console.log('part'+i, img.bitmap.width, 'x', img.bitmap.height);
  }
}
run();
