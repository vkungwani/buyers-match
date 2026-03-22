const fs = require('fs');

let fileContent = fs.readFileSync('src/config/siteData.js', 'utf8');

// Replace desc1
fileContent = fileContent.replace(/desc1:\s*".*?",\s*\n\s*/g, '');
fileContent = fileContent.replace(/desc3:\s*null,\s*\n\s*/g, '');
fileContent = fileContent.replace(/desc2:/g, 'desc:');

// Cleanup emojis from location
fileContent = fileContent.replace(/location:\s*"[\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\s]+(.*?)"/gu, 'location: "$1"');

fs.writeFileSync('src/config/siteData.js', fileContent);
console.log('Done data cleanup');
