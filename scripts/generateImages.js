const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');
const outputFilePath = path.join(__dirname, '../src/data/images.js');

fs.readdir(assetsDir, (err, files) => {
  if (err) {
    console.error('Erro ao ler a pasta assets:', err);
    return;
  }

  const images = files.reduce((acc, file) => {
    const fileName = path.parse(file).name;
    acc[fileName] = `./assets/${file}`;
    return acc;
  }, {});

  const content = `const images = ${JSON.stringify(images, null, 2)};\n\nexport default images;\n`;

  fs.writeFileSync(outputFilePath, content, (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo images.js:', err);
      return;
    }
    console.log('Arquivo images.js gerado com sucesso!');
  });
});
