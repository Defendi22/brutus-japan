# Brutus - Vegetables Japan 🥦🇯🇵

Este é o projeto da Landing Page da **Brutus**, uma plataforma de venda de legumes frescos no Japão com integração direta para pedidos via WhatsApp e LINE.

---

## 🚀 Como Iniciar o Projeto

### 1. Instalação
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. No terminal, execute:
```bash
npm install
```

### 2. Desenvolvimento Local (com acesso via rede)
Para rodar o projeto e acessá-lo de outros dispositivos (como seu celular) na mesma rede Wi-Fi:
```bash
npx vite --host
```
*   O terminal mostrará um endereço como `http://192.168.x.x:5173`.
*   Acesse esse IP no navegador do seu celular para testar a experiência mobile.

---

## 📦 Build e Produção

### 1. Gerar a Build
Para criar a versão final otimizada para o seu site:
```bash
npm run build
```
*   Este comando criará uma pasta chamada `dist/`.
*   O conteúdo desta pasta é o que deve ser enviado para o seu servidor de hospedagem.

### 2. Testar a Build Localmente
Se quiser ver como a versão final ficou antes de subir para a internet:
```bash
npx vite preview --host
```

---

## 🛠️ Configurações Importantes (Obrigatório)

Para que os pedidos cheguem corretamente ao fornecedor, você **deve** alterar as seguintes informações:

### 1. Número do WhatsApp e Links
Abra o arquivo `src/components/CartDrawer.tsx` e altere:
*   `SUPPLIER_PHONE`: Coloque o número com código do país (ex: `8190XXXXXXXX` para Japão).

No arquivo `src/App.tsx`, altere os links dos botões flutuantes:
*   Link do WhatsApp: `https://wa.me/SEU_NUMERO`
*   Link do LINE: `https://line.me/R/ti/p/@SEU_ID`

### 2. Catálogo de Produtos
Para adicionar, remover ou mudar preços dos legumes, edite o arquivo:
`src/data/products.ts`
*   Você pode alterar o `name`, `japaneseName`, `price`, `unit` e a `image`.

---

## 🌐 Hospedagem (Web Hosting)

Para colocar o site no ar de forma profissional e gratuita:

1.  **Netlify:** Arraste a pasta `dist` para o site [netlify.com](https://www.netlify.com/).
2.  **Vercel:** Conecte seu repositório do GitHub em [vercel.com](https://vercel.com/).
3.  **GitHub Pages:** Requer configuração extra no `vite.config.ts`, mas é uma ótima opção gratuita.

---

## ✨ Tecnologias Utilizadas
*   React + Vite
*   Tailwind CSS (Estilização)
*   Lucide React (Ícones)
*   Framer Motion (Animações)
*   Integração com APIs de Mensagens (WhatsApp/LINE)