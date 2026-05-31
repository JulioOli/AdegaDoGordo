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
