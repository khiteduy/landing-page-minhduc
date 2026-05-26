const fs = require('fs');
const https = require('https');
const path = require('path');

const qrs = [
  {
    url: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent('https://docs.google.com/spreadsheets/d/1AZf_-_-nUy3Hike9LBV4Mn4vSEKJV2HS3lrfZ34HnNA/edit?usp=sharing'),
    dest: path.join(__dirname, '..', 'public', 'course-assets', 'qr-banh-ga.png')
  },
  {
    url: 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent('https://docs.google.com/spreadsheets/d/1o8vyeVVVecCEyWV4v4X9wPtEX4mnhotHz9gmJa30Bt0/edit?usp=sharing'),
    dest: path.join(__dirname, '..', 'public', 'course-assets', 'qr-bee-english.png')
  }
];

// Ensure directory exists
const dir = path.join(__dirname, '..', 'public', 'course-assets');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

qrs.forEach((qr) => {
  const file = fs.createWriteStream(qr.dest);
  https.get(qr.url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Saved QR to ${qr.dest}`);
    });
  }).on('error', (err) => {
    fs.unlink(qr.dest, () => {});
    console.error(`Error downloading QR: ${err.message}`);
  });
});
