#!/usr/bin/env node
/**
 * Servidor HTTP simples para o projeto GOV.BR (Node.js)
 * Execute: node server.js
 * Acesse: http://localhost:8000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

// MIME types para diferentes tipos de arquivo
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.baixados': 'application/javascript' // arquivos .baixados são scripts/css
};

const server = http.createServer((req, res) => {
  // Remove query string da URL
  let filePath = req.url.split('?')[0];
  
  // Se for a raiz, serve o index.html
  if (filePath === '/') {
    filePath = '/index.html';
  }
  
  // Caminho completo do arquivo
  const fullPath = path.join(__dirname, filePath);
  
  // Extensão do arquivo
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  // Tenta ler o arquivo
  fs.readFile(fullPath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Arquivo não encontrado
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Arquivo não encontrado</h1>', 'utf-8');
        console.log(`❌ 404: ${filePath}`);
      } else {
        // Erro do servidor
        res.writeHead(500);
        res.end(`Erro do servidor: ${err.code}`, 'utf-8');
        console.log(`⚠️  Erro: ${err.code} - ${filePath}`);
      }
    } else {
      // Sucesso - envia o arquivo
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      });
      res.end(content, 'utf-8');
      console.log(`✅ ${req.method} ${filePath}`);
    }
  });
});

server.listen(PORT, () => {
  console.log('='.repeat(60));
  console.log('🚀 Servidor GOV.BR rodando!');
  console.log(`📍 Acesse: http://localhost:${PORT}`);
  console.log(`📁 Diretório: ${__dirname}`);
  console.log('='.repeat(60));
  console.log('\n💡 Para parar o servidor, pressione Ctrl+C\n');
});

// Tratamento de erros
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Erro: A porta ${PORT} já está em uso!`);
    console.error('   Feche o outro programa ou use outra porta.\n');
  } else {
    console.error(`\n❌ Erro no servidor: ${err.message}\n`);
  }
  process.exit(1);
});

// Tratamento de Ctrl+C
process.on('SIGINT', () => {
  console.log('\n\n✅ Servidor encerrado com sucesso!');
  process.exit(0);
});
