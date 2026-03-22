const fs = require('fs');
let fileContent = fs.readFileSync('src/config/siteData.js', 'utf8');

// The lines look like:
// desc1: "Liverpool",
// desc2: "2 bed unit · High-yield corridor · Off-market",
// desc3: null,

// Replace desc1 row completely
fileContent = fileContent.replace(/^[ \t]*desc1:.*?\n/gm, '');

// Replace desc3 row completely
fileContent = fileContent.replace(/^[ \t]*desc3:.*?\n/gm, '');

// Replace desc2 row with desc
fileContent = fileContent.replace(/^[ \t]*desc2:/gm, '    desc:');

// Replace locations like location: "🌆 Sydney, NSW",
fileContent = fileContent.replace(/location:\s*"([^a-zA-Z0-9]+)?([^"]+)"/gm, 'location: "$2"');

fs.writeFileSync('src/config/siteData.js', fileContent);
console.log('Done script 3');
