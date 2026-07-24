const fs=require('fs'),path=require('path');const p=path.join(__dirname,'index.html');let h='';
h+='<!DOCTYPE html><html lang=zh-CN><head><meta charset=UTF-8><title>Test</title></head><body><h1>Test OK</h1></body></html>');
fs.writeFileSync(p,h,'utf8');console.log('OK: '+h.length);
