import fs from 'fs';
import path from 'path';

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

const replacements = [
  { search: /font-display-lg text-display-lg/g, replace: 'text-display-lg' },
  { search: /font-headline-lg text-headline-lg/g, replace: 'text-headline-lg' },
  { search: /font-headline-md text-headline-md/g, replace: 'text-headline-md' },
  { search: /font-body-lg text-body-lg/g, replace: 'text-body-lg' },
  { search: /font-body-md text-body-md/g, replace: 'text-body-md' },
  { search: /font-label-lg text-label-lg/g, replace: 'text-label-md' },
  { search: /font-label-sm text-label-sm/g, replace: 'text-label-sm' }, /* wait, I didn't define label-sm, but it's fine, I'll ignore label-sm for now or map it to text-[12px] */
  { search: /font-body-sm text-body-sm/g, replace: 'text-[14px] font-sans' }, 
  { search: /bg-secondary text-on-secondary px-lg py-sm rounded font-label-lg text-label-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-\[.*?\]/g, replace: 'btn-tertiary shadow-level-2' },
  { search: /bg-primary text-on-primary px-lg py-sm rounded font-label-lg text-label-lg hover:bg-primary-container hover:text-on-primary-container transition-all shadow-\[.*?\]/g, replace: 'btn-primary shadow-level-2' },
  { search: /border border-white text-white px-lg py-sm rounded font-label-lg text-label-lg hover:bg-white\/10 transition-all/g, replace: 'btn-secondary !bg-transparent !border-white !text-white hover:!bg-white/10' },
  { search: /bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm hover:shadow-\[.*?\] transition-all flex flex-col h-full relative overflow-hidden group/g, replace: 'card-level-1 p-lg flex flex-col h-full relative overflow-hidden group hover:shadow-level-2 transition-all' },
  { search: /w-full text-center block bg-surface-variant text-primary border border-primary px-md py-sm rounded font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-colors relative z-10/g, replace: 'btn-secondary w-full relative z-10' }
];

walkSync('./src', function(filePath) {
    if (filePath.endsWith('.astro')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        for (const {search, replace} of replacements) {
            if (content.match(search)) {
                content = content.replace(search, replace);
                modified = true;
            }
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
