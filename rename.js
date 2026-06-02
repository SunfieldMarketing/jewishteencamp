const fs = require('fs');
const path = require('path');

const dirs = ['app', 'components', 'lib'];
const root = 'd:\\Downloads\\jewishteencamp';

const replacements = [
  { regex: /Chicago Jewish Teens/gi, replacement: 'Chicago Jewish Teen Camp' },
  { regex: /Chicago Jewish Teen(?!\sCamp)/gi, replacement: 'Chicago Jewish Teen Camp' },
  { regex: /Chicago Jewish Teen Camp Camp/gi, replacement: 'Chicago Jewish Teen Camp' }, // fix double 'Camp'
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
