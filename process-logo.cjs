const Jimp = require('jimp');

async function processLogo() {
  try {
    const image = await Jimp.read('./public/logo.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // Detect gold: Gold has significantly more red than blue
      const isGold = (red > blue + 30) && (green > blue + 10);
      
      if (!isGold) {
        // It's grayscale (white background or dark navy text)
        // Convert to white with variable opacity based on darkness
        const lum = (red * 0.299 + green * 0.587 + blue * 0.114);
        
        this.bitmap.data[idx + 0] = 255; // Red
        this.bitmap.data[idx + 1] = 255; // Green
        this.bitmap.data[idx + 2] = 255; // Blue
        this.bitmap.data[idx + 3] = Math.max(0, 255 - lum); // Alpha
      }
    });
    
    await image.writeAsync('./public/logo-transparent.png');
    console.log('Successfully processed logo!');
  } catch (err) {
    console.error('Error processing logo:', err);
  }
}

processLogo();
