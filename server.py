#!/usr/bin/env python3
"""
Servidor HTTP simples para o projeto GOV.BR
Execute: python server.py
Acesse: http://localhost:8000
"""

import http.server
import socketserver
import os
import sys

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Adiciona headers CORS para permitir carregamento de recursos
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def log_message(self, format, *args):
        # Log mais limpo
        print(f"[{self.address_string()}] {format % args}")

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("=" * 60)
        print(f"🚀 Servidor GOV.BR rodando!")
        print(f"📍 Acesse: http://localhost:{PORT}")
        print(f"📁 Diretório: {os.getcwd()}")
        print("=" * 60)
        print("\n💡 Para parar o servidor, pressione Ctrl+C\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Servidor encerrado com sucesso!")
            sys.exit(0)

if __name__ == "__main__":
    main()
