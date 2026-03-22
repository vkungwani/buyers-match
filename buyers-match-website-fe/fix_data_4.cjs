const fs = require('fs');
let fileContent = fs.readFileSync('src/config/siteData.js', 'utf8');

// The lines look like:
//     desc1: "Liverpool",
//     desc2: "2 bed unit · High-yield corridor · Off-market",
//     desc3: null,

// Replace desc1 row completely
fileContent = fileContent.replace(/^[ \t]*desc1:.*?\n/gm, '');

// Replace desc3 row completely
fileContent = fileContent.replace(/^[ \t]*desc3:.*?\n/gm, '');

// Replace desc2 row with desc
fileContent = fileContent.replace(/^[ \t]*desc2:/gm, '    desc:');

// Replace locations like location: "🌆 Sydney, NSW",
// match anything before the actual location text
fileContent = fileContent.replace(/location:\s*"[^a-zA-Z0-9]+([^"]+)"/g, 'location: "$1"');

fs.writeFileSync('src/config/siteData.js', fileContent);

let siteTsContent = fs.readFileSync('src/config/site.ts', 'utf8');
siteTsContent = siteTsContent.replace(/desc1:\s*string;\n/g, '');
siteTsContent = siteTsContent.replace(/desc3:\s*string\s*\|\s*null;\n/g, '');
siteTsContent = siteTsContent.replace(/desc2:\s*string;/g, 'desc: string;');
fs.writeFileSync('src/config/site.ts', siteTsContent);

console.log('Done script 4');
