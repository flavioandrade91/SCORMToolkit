const fs = require('fs-extra');
const path = require('path');
const xmlbuilder = require('xmlbuilder');

async function convertManifest() {
  const manifestPath = path.join(__dirname, 'build', 'asset-manifest.json');
  const outputPath = path.join(__dirname, 'build', 'imsmanifest.xml');

  try {
    const manifest = await fs.readJson(manifestPath);
    const xml = xmlbuilder.create('manifest', { encoding: 'UTF-8' });

    xml.att('xmlns', 'http://www.imsglobal.org/xsd/imscp_v1p1')
       .att('xmlns:adlcp', 'http://www.adlnet.org/xsd/adlcp_v1p3')
       .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
       .att('xsi:schemaLocation', 'http://www.imsglobal.org/xsd/imscp_v1p1 imscp_v1p1.xsd');

    xml.ele('metadata')
       .ele('schema', 'ADL SCORM')
       .up()
       .ele('schemaversion', '1.2');

    const organizations = xml.ele('organizations')
                            .ele('organization', { 'identifier': 'ORG1' })
                            .ele('item', { 'identifier': 'ITEM1', 'identifierref': 'index_html' })
                            .ele('title', 'Start Here');

    const resources = xml.ele('resources');
    const seenFiles = new Set();

    const addFile = (identifier, file) => {
      if (!seenFiles.has(file)) {
        seenFiles.add(file);
        resources.ele('resource', {
          'identifier': identifier,
          'type': 'webcontent',
          'href': file
        }).ele('file', { 'href': file });
      }
    };

    addFile('index_html', 'index.html');

    Object.values(manifest.files).forEach(file => {
      addFile(path.basename(file, path.extname(file)).replace(/\./g, '_'), file);
    });

    addFile('SCORM_API', 'SCORM_API.js');

    const xmlString = xml.end({ pretty: true });
    await fs.writeFile(outputPath, xmlString);

    console.log('imsmanifest.xml has been created successfully.');
  } catch (error) {
    console.error('Error converting manifest.json to imsmanifest.xml:', error);
  }
}

convertManifest();
