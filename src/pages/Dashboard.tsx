import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, ListTodo, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const statsData = [
  {
    title: 'Total de Usuários',
    value: '248',
    icon: Users,
    change: '+12%',
    testId: 'stat-users'
  },
  {
    title: 'Formulários Enviados',
    value: '1,429',
    icon: FileText,
    change: '+8%',
    testId: 'stat-forms'
  },
  {
    title: 'Tarefas Concluídas',
    value: '342',
    icon: ListTodo,
    change: '+23%',
    testId: 'stat-tasks'
  },
  {
    title: 'Taxa de Crescimento',
    value: '18%',
    icon: TrendingUp,
    change: '+5%',
    testId: 'stat-growth'
  },
];

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Fev', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Abr', value: 800 },
  { name: 'Mai', value: 500 },
  { name: 'Jun', value: 900 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-8" data-testid="dashboard-page">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo ao sistema de treinamento. Aqui você encontra uma visão geral.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.testId} data-testid={stat.testId}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-success mt-1">
                    {stat.change} em relação ao mês anterior
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Chart */}
        <Card data-testid="dashboard-chart">
          <CardHeader>
            <CardTitle>Atividade Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            data-testid="quick-action-users"
            onClick={() => navigate('/users')}
          >
            <CardHeader>
              <CardTitle className="text-lg">Gerenciar Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Visualize, edite e gerencie todos os usuários do sistema
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            data-testid="quick-action-register"
            onClick={() => navigate('/register')}
          >
            <CardHeader>
              <CardTitle className="text-lg">Novo Cadastro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cadastre novos usuários com formulário completo
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            data-testid="quick-action-tasks"
            onClick={() => navigate('/todo')}
          >
            <CardHeader>
              <CardTitle className="text-lg">Lista de Tarefas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Gerencie suas tarefas diárias de forma eficiente
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
