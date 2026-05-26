const fs = require('fs');
const path = require('path');

const dirs = ['app', 'components'];
const root = 'd:\\Downloads\\jewishteencamp';

const replacements = [
  { regex: /California Jewish Teens/gi, replacement: 'Chicago Jewish Teens' },
  { regex: /California Jewish Teen/gi, replacement: 'Chicago Jewish Teen' },
  { regex: /California\\'s premier Jewish day camp/gi, replacement: "Chicago's premier Jewish day camp" },
  { regex: /California's premier Jewish day camp/gi, replacement: "Chicago's premier Jewish day camp" },
  { regex: /CGI California/gi, replacement: 'CGI Chicago' },
  { regex: /Camp Gan Israel California/gi, replacement: 'Camp Gan Israel Chicago' },
  { regex: /californiajewishteens/gi, replacement: 'chicagojewishteens' },
];

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

dirs.forEach(dir => {
  walkDir(path.join(root, dir), filePath => {
    if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let original = content;
      replacements.forEach(r => {
        content = content.replace(r.regex, r.replacement);
      });
      if (original !== content) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated', filePath);
      }
    }
  });
});
