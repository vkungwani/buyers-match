const fs = require('fs');
let content = fs.readFileSync('src/config/siteData.js', 'utf8');

content = content.replace(/desc1:\s*".*?",\r?\n\s*/g, '');
content = content.replace(/desc3:\s*null,\r?\n\s*/g, '');
content = content.replace(/desc2:/g, 'desc:');

// Also stripping emoji from location because the user said "location i.e. brisbane qld"
content = content.replace(/location:\s*"[^\w]+(.*?)"/g, 'location: "$1"');

fs.writeFileSync('src/config/siteData.js', content);
console.log('done');
