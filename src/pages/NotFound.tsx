import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div 
      className="flex min-h-screen items-center justify-center bg-background"
      data-testid="not-found-page"
    >
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <Button asChild data-testid="back-home-button">
          <Link to="/dashboard">
            <Home className="mr-2 h-4 w-4" />
            Voltar para Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
