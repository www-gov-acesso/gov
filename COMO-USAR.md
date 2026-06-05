# 🇧🇷 Como usar o projeto GOV.BR

Este projeto simula o portal GOV.BR com funcionalidades como carteira de documentos, caixa postal, certidões, e mais.

## 🚀 Início Rápido

### Opção 1: Usando o arquivo .bat (Mais fácil - Windows)

1. **Clique duas vezes** no arquivo `start-server.bat`
2. Uma janela preta vai abrir mostrando que o servidor está rodando
3. Abra seu navegador e acesse: **http://localhost:8000**
4. Pronto! 🎉

### Opção 2: Usando Python diretamente

1. Abra o terminal/prompt de comando nesta pasta
2. Execute:
   ```bash
   python server.py
   ```
3. Abra seu navegador e acesse: **http://localhost:8000**

### Opção 3: Servidor alternativo (Node.js)

Se você tiver Node.js instalado:

```bash
npx http-server -p 8000
```

## ⚠️ Importante

**NÃO abra o arquivo `index.html` diretamente clicando duas vezes nele!**

Isso causa erros de CORS porque o navegador bloqueia o carregamento de recursos locais por segurança. Você PRECISA usar um servidor local.

## 🛑 Para parar o servidor

- Pressione `Ctrl + C` no terminal/prompt onde o servidor está rodando
- Ou simplesmente feche a janela

## 📋 Pré-requisitos

- **Python 3** instalado (geralmente já vem instalado no Windows 10/11)
- Para verificar se tem Python: abra o terminal e digite `python --version`

Se não tiver Python instalado:
- Baixe em: https://www.python.org/downloads/
- Durante a instalação, marque a opção **"Add Python to PATH"**

## 🌐 Funcionalidades

- ✅ Portal GOV.BR (carregado via iframe)
- ✅ Botão "Minha área" flutuante para acessar o app
- ✅ Área logada com sidebar
- ✅ Carteira de documentos (upload de imagens)
- ✅ Caixa postal de mensagens
- ✅ Download de certidões
- ✅ Assinatura de documentos
- ✅ Agenda GovBR
- ✅ Procurações eletrônicas
- ✅ Sistemas e aplicativos
- ✅ Dados cadastrais com integração Supabase

## 🔧 Troubleshooting

### Erro: "Python não encontrado"
- Instale o Python em https://www.python.org/downloads/
- Marque "Add Python to PATH" durante a instalação

### Erro: "Porta 8000 já está em uso"
- Feche outros programas que possam estar usando a porta 8000
- Ou edite o arquivo `server.py` e mude `PORT = 8000` para outro número (ex: 8080)

### Página não carrega recursos/imagens
- Certifique-se de que está acessando via `http://localhost:8000`
- NÃO abra o arquivo diretamente (file://)

### Supabase não funciona
- Verifique sua conexão com a internet
- As credenciais do Supabase estão no código (você pode usar suas próprias credenciais)

## 📝 Estrutura do Projeto

```
gov/
├── index.html              # Página principal
├── GOV.BR.html            # Portal original (iframe)
├── gov.png                # Logo
├── server.py              # Servidor Python
├── start-server.bat       # Atalho Windows
├── GOV.BR_files/          # Recursos CSS/JS/Imagens
└── COMO-USAR.md           # Este arquivo
```

## 💡 Dicas

- Use o botão **"Minha área"** (canto inferior direito) para alternar entre o portal e o app
- Use o ícone de **grid** (4 quadrados) na topbar do app para voltar ao portal
- Seus dados são salvos no Supabase e permanecem entre sessões
- As imagens da carteira de documentos são armazenadas no Supabase Storage

## 📸 Screenshots

### Portal
- Tela inicial com serviços do governo
- Busca de serviços
- Serviços em destaque

### Área Logada
- Carteira de documentos digitais
- Caixa postal de mensagens
- Certidões para download
- Assinatura eletrônica
- Dados cadastrais

---

**Desenvolvido para demonstração educacional do portal GOV.BR** 🇧🇷
