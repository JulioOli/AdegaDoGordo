# Adega do Gordo — Protótipo

Site protótipo em React para a **Adega do Gordo** (Junqueirópolis, SP). Catálogo de produtos com sacola e finalização de pedido via WhatsApp.

## Requisitos

- Node.js 18+
- npm

## Instalação

```bash
npm install
```

## Rodar localmente

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

### Acessar pelo celular (mesma rede Wi-Fi)

```bash
npm run dev -- --host
```

Use o IP da sua máquina na rede local, por exemplo: `http://192.168.1.10:5173`

## Build de produção

```bash
npm run build
npm run preview
```

## Hospedar no Firebase (link fixo na internet)

O **Firebase** é uma plataforma do Google. Para este site usamos só o **Firebase Hosting**: ele guarda os arquivos estáticos gerados pelo `npm run build` (pasta `dist/`) em servidores na nuvem e entrega um link público (ex.: `https://seu-projeto.web.app`).

Diferente do ngrok, o site fica no ar **sem** seu PC ligado.

### 1. Criar projeto no Firebase

1. Acesse [https://console.firebase.google.com](https://console.firebase.google.com)
2. **Adicionar projeto** → nome sugerido: `adega-do-gordo`
3. Pode desativar o Google Analytics se quiser (opcional no protótipo)

### 2. Instalar a CLI e entrar na conta Google

```bash
npm install -g firebase-tools
firebase login
```

Abre o navegador para você autorizar com a conta Google.

### 3. Vincular este repositório ao projeto

Na pasta do projeto:

```bash
cd ~/Documents/Projects/Adega
firebase use --add
```

Escolha o projeto que criou no passo 1. Isso atualiza o arquivo `.firebaserc`.

### 4. Publicar o site

```bash
npm run deploy
```

Ou em dois passos:

```bash
npm run build
firebase deploy --only hosting
```

No final, o terminal mostra a URL, por exemplo:

- `https://adgdogordo.web.app`
- `https://adgdogordo.firebaseapp.com`

### Atualizar o site depois de mudanças

Sempre que alterar código ou produtos:

```bash
npm run deploy
```

### Horários da loja

Edite o array `storeHours` em [`src/data/config.ts`](src/data/config.ts).

## Como editar o catálogo

Edite o arquivo [`src/data/products.ts`](src/data/products.ts) com os produtos reais da adega.

Cada produto segue este formato:

```ts
{
  id: '1',
  name: 'Heineken Long Neck',
  description: '330ml — gelada e pronta pra servir.',
  price: 8,
  image: '/caminho-da-imagem.jpg',
  category: 'cervejas', // cervejas | destilados | vinhos | naoAlcoolicos | petiscos
  available: true,
  featured: true, // opcional — aparece nos destaques da Home
}
```

## Google Analytics (acompanhar uso do site)

O site pede consentimento de cookies (LGPD) e só carrega o Analytics se o visitante aceitar.

### 1. Obter o Measurement ID

1. [Firebase Console](https://console.firebase.google.com) → projeto **adgdogordo**
2. Engrenagem → **Configurações do projeto** → aba **Integrações**
3. Se não houver Google Analytics, vincule ou crie um fluxo GA4
4. Copie o **Measurement ID** (formato `G-XXXXXXXXXX`)

Também em [analytics.google.com](https://analytics.google.com) → Admin → Fluxos de dados → Web.

### 2. Configurar no projeto

```bash
cp .env.example .env.local
```

Edite `.env.local`:

```
VITE_GA_MEASUREMENT_ID=G-SEU_ID_AQUI
```

### 3. Publicar com analytics ativo

O ID é embutido no build — rode o deploy **depois** de criar o `.env.local`:

```bash
npm run deploy
```

### Eventos registrados

| Evento | Quando |
|--------|--------|
| `page_view` | Troca de página (Início, Catálogo, Checkout) |
| `add_to_cart` | Adicionar produto à sacola |
| `begin_checkout` | Abrir a página de finalizar pedido |
| `whatsapp_click` | Clique no WhatsApp (hero, rodapé ou checkout) |

Relatórios em [analytics.google.com](https://analytics.google.com) → Relatórios → Tempo real / Engajamento.

## Configurações da loja

Edite [`src/data/config.ts`](src/data/config.ts) para atualizar:

- Número do WhatsApp (formato internacional, ex: `5518999999999`)
- Endereço e horário de funcionamento
- Link do Instagram
- Textos da landing page

## Estrutura do projeto

```
src/
  components/   # UI reutilizável (Header, Footer, ProductCard, CartDrawer...)
  pages/        # Home, Catálogo, Checkout
  data/         # Catálogo estático e configurações
  context/      # Estado global da sacola (Context API + localStorage)
  utils/        # Formatação de moeda e mensagem do WhatsApp
```

## Git

Após o primeiro commit, o push para o GitHub funciona normalmente:

```bash
git add .
git commit -m "Initial commit: protótipo Adega do Gordo"
git push -u origin main
```
