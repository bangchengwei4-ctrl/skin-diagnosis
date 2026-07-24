const h = '<!DOCTYPE html><html lang=zh-CN><head><meta charset=UTF-8><title>Test</title></head><body><h1>WORKING</h1></body></html>';
require('fs').writeFileSync(require('path').join(__dirname, 'index.html'), h, 'utf8');
