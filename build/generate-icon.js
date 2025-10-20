const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
let pngToIco = require('png-to-ico');
pngToIco = (pngToIco && pngToIco.default) ? pngToIco.default : pngToIco;

async function generateIcon() {
  const pngPath = path.resolve(__dirname, '..', 'iconGEMINI3K.png');
  const outPath = path.resolve(__dirname, 'icon.ico');
  const pngBuffer = fs.readFileSync(pngPath);
  const sizes = [16, 24, 32, 48, 64, 128, 256];
  const resizedBuffers = await Promise.all(
    sizes.map((size) => sharp(pngBuffer).resize(size, size, { fit: 'contain' }).png().toBuffer())
  );
  const icoBuffer = await pngToIco(resizedBuffers);
  fs.writeFileSync(outPath, icoBuffer);
  console.log(`Icon generated at: ${outPath}`);
}

generateIcon().catch((err) => {
  console.error('Failed to generate .ico from PNG:', err);
  process.exit(1);
});


