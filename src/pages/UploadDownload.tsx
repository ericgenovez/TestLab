import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Upload, Download, FileText, Image as ImageIcon } from 'lucide-react';

export default function UploadDownload() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string>('');
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);

      // Generate preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview('');
      }

      toast({
        title: 'Arquivo carregado!',
        description: `${file.name} (${(file.size / 1024).toFixed(2)} KB)`,
      });
    }
  };

  const handleDownloadCSV = () => {
    const csvContent = [
      ['ID', 'Nome', 'Email', 'Departamento'],
      ['1', 'João Silva', 'joao@empresa.com', 'TI'],
      ['2', 'Maria Santos', 'maria@empresa.com', 'RH'],
      ['3', 'Pedro Oliveira', 'pedro@empresa.com', 'Vendas'],
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'dados-usuarios.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: 'Download iniciado!',
      description: 'O arquivo CSV está sendo baixado.',
    });
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-6" data-testid="upload-page">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Upload e Download
          </h1>
          <p className="text-muted-foreground">
            Gerencie upload de arquivos e faça download de dados
          </p>
        </div>

        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle>Upload de Arquivo</CardTitle>
            <CardDescription>
              Selecione um arquivo para fazer upload (imagens terão preview)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Input
                id="file-upload"
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                data-testid="file-input"
              />
              <Button
                onClick={() => document.getElementById('file-upload')?.click()}
                data-testid="upload-button"
              >
                <Upload className="h-4 w-4 mr-2" />
                Escolher Arquivo
              </Button>
              
              {uploadedFile && (
                <div className="flex items-center gap-2">
                  {uploadedFile.type.startsWith('image/') ? (
                    <ImageIcon className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span className="text-sm" data-testid="file-name">
                    {uploadedFile.name}
                  </span>
                </div>
              )}
            </div>

            {filePreview && (
              <div className="mt-4" data-testid="image-preview">
                <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                <img
                  src={filePreview}
                  alt="Preview"
                  className="max-w-md rounded-lg border"
                />
              </div>
            )}

            {uploadedFile && !filePreview && (
              <div className="p-4 border rounded-lg bg-muted" data-testid="file-info">
                <p className="text-sm">
                  <strong>Tipo:</strong> {uploadedFile.type || 'Não especificado'}
                </p>
                <p className="text-sm">
                  <strong>Tamanho:</strong> {(uploadedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Download Section */}
        <Card>
          <CardHeader>
            <CardTitle>Download de Arquivo</CardTitle>
            <CardDescription>
              Faça download de um arquivo CSV com dados de exemplo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={handleDownloadCSV}
              variant="outline"
              data-testid="download-button"
            >
              <Download className="h-4 w-4 mr-2" />
              Download CSV
            </Button>
            
            <div className="mt-4 p-4 border rounded-lg bg-muted">
              <p className="text-sm text-muted-foreground">
                O arquivo contém dados de usuários em formato CSV com as colunas:
                ID, Nome, Email e Departamento.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
