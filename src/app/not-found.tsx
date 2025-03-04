// pages/not-found.tsx
import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
      <p>
        Desculpe, mas a página que você está procurando não existe. Volte para a{' '}
        <Link href="/">
          <a>Página Inicial</a>
        </Link>.
      </p>
    </div>
  );
};

export default NotFound;