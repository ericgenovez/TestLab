import { ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  FileText,
  ListTodo,
  Upload,
  Activity,
  LogOut
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/users', icon: Users, label: 'Usuários' },
    { path: '/register', icon: FileText, label: 'Cadastro' },
    { path: '/todo', icon: ListTodo, label: 'To-Do List' },
    { path: '/async', icon: Activity, label: 'Async' },
    { path: '/upload', icon: Upload, label: 'Upload' },
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="layout">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-card fixed h-screen">
        <div className="flex items-center h-16 border-b px-6">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-extrabold text-lg">TL</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Training System</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4" data-testid="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-${item.label.toLowerCase()}`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex flex-col md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-100 flex h-16 items-center justify-end border-b bg-card shadow-sm pr-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground" data-testid="user-name">
              Olá, {user?.name}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              data-testid="logout-button"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
