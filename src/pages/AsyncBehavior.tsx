import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export default function AsyncBehavior() {
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [data, setData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSuccessLoad = async () => {
    setLoadingState('loading');
    setData(null);
    setErrorMessage('');

    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setData({
      message: 'Dados carregados com sucesso!',
      timestamp: new Date().toISOString(),
      items: ['Item 1', 'Item 2', 'Item 3']
    });
    setLoadingState('success');
  };

  const handleErrorLoad = async () => {
    setLoadingState('loading');
    setData(null);
    setErrorMessage('');

    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setErrorMessage('Erro 500: Falha no servidor. Não foi possível carregar os dados.');
    setLoadingState('error');
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-6" data-testid="async-page">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Comportamentos Assíncronos
          </h1>
          <p className="text-muted-foreground">
            Teste diferentes cenários de carregamento e resposta de API
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Simulação de Chamadas API</CardTitle>
            <CardDescription>
              Clique nos botões para simular diferentes comportamentos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Button
                onClick={handleSuccessLoad}
                disabled={loadingState === 'loading'}
                data-testid="load-success-button"
              >
                {loadingState === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Carregando...
                  </>
                ) : (
                  'Carregar com Sucesso'
                )}
              </Button>

              <Button
                variant="destructive"
                onClick={handleErrorLoad}
                disabled={loadingState === 'loading'}
                data-testid="load-error-button"
              >
                {loadingState === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Carregando...
                  </>
                ) : (
                  'Simular Erro 500'
                )}
              </Button>
            </div>

            {/* Loading State */}
            {loadingState === 'loading' && (
              <div 
                className="flex items-center justify-center p-8"
                data-testid="loading-spinner"
              >
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}

            {/* Success State */}
            {loadingState === 'success' && data && (
              <Alert data-testid="success-message">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Sucesso!</AlertTitle>
                <AlertDescription>
                  <p className="mb-2">{data.message}</p>
                  <p className="text-sm text-muted-foreground">
                    Timestamp: {new Date(data.timestamp).toLocaleString('pt-BR')}
                  </p>
                  <ul className="mt-2 list-disc list-inside">
                    {data.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {/* Error State */}
            {loadingState === 'error' && errorMessage && (
              <Alert variant="destructive" data-testid="error-message">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informações</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Esta página simula diferentes comportamentos assíncronos comuns em aplicações web:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Delay de 2 segundos para simular latência de rede</li>
              <li>Estado de loading com spinner</li>
              <li>Resposta de sucesso com dados</li>
              <li>Simulação de erro 500 do servidor</li>
              <li>Mensagens de feedback visual para o usuário</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
