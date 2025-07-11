This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Sim, é bem tranquilo migrar de PostgreSQL local para produção! Na verdade, pode até ser mais prático começar com PostgreSQL local durante o desenvolvimento. Vou te ajudar a instalar e depois explico como será a migração para produção.

Vamos instalar o PostgreSQL localmente:

1. Baixe o instalador do PostgreSQL:
   - Acesse: https://www.postgresql.org/download/windows/
   - Clique no link do instalador do "EnterpriseDB" (geralmente é a primeira opção)
   - Escolha a versão mais recente (atualmente 16.2)

2. Durante a instalação:
   - Mantenha todos os componentes selecionados
   - Use estas configurações:
     - Senha para o usuário postgres: `admin123`
     - Porta: `5432` (padrão)
     - Locale: `Portuguese, Brazil`

3. Depois da instalação, vamos criar o banco de dados. Você pode fazer isso pelo pgAdmin (interface gráfica que vem junto) ou pelo comando. Vou mostrar os dois jeitos:

Pelo pgAdmin:
1. Abra o pgAdmin 4 (foi instalado junto)
2. Na primeira vez, ele vai pedir uma senha master - crie uma que você lembre
3. No painel esquerdo, expanda "Servers" -> "PostgreSQL"
4. Clique com botão direito em "Databases" -> "Create" -> "Database"
5. Nome do banco: `repasse_veiculos`

Depois que o PostgreSQL estiver instalado e o banco criado, vamos configurar o projeto:

1. Crie um arquivo `.env` na raiz do projeto com este conteúdo:
```env
<code_block_to_apply_changes_from>
# Prisma
DATABASE_URL="postgresql://postgres:admin123@localhost:5432/repasse_veiculos?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="chave-secreta-temporaria"
```

2. Depois vamos rodar as migrações do Prisma:
