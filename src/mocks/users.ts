export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'active' | 'inactive';
  avatar: string;
  phone: string;
  joinDate: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@empresa.com',
    role: 'Desenvolvedor Senior',
    department: 'Tecnologia',
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=joao',
    phone: '(11) 98765-4321',
    joinDate: '2020-03-15'
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria.santos@empresa.com',
    role: 'Designer UX/UI',
    department: 'Design',
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria',
    phone: '(11) 97654-3210',
    joinDate: '2021-06-20'
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@empresa.com',
    role: 'Product Manager',
    department: 'Produto',
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pedro',
    phone: '(11) 96543-2109',
    joinDate: '2019-11-10'
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana.costa@empresa.com',
    role: 'Analista de QA',
    department: 'Qualidade',
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ana',
    phone: '(11) 95432-1098',
    joinDate: '2022-01-05'
  },
  {
    id: 5,
    name: 'Carlos Ferreira',
    email: 'carlos.ferreira@empresa.com',
    role: 'DevOps Engineer',
    department: 'Infraestrutura',
    status: 'inactive',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos',
    phone: '(11) 94321-0987',
    joinDate: '2020-08-12'
  },
  {
    id: 6,
    name: 'Juliana Alves',
    email: 'juliana.alves@empresa.com',
    role: 'Scrum Master',
    department: 'Produto',
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=juliana',
    phone: '(11) 93210-9876',
    joinDate: '2021-04-18'
  },
  {
    id: 7,
    name: 'Roberto Lima',
    email: 'roberto.lima@empresa.com',
    role: 'Desenvolvedor Frontend',
    department: 'Tecnologia',
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=roberto',
    phone: '(11) 92109-8765',
    joinDate: '2022-09-01'
  },
  {
    id: 8,
    name: 'Fernanda Souza',
    email: 'fernanda.souza@empresa.com',
    role: 'UI Designer',
    department: 'Design',
    status: 'active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fernanda',
    phone: '(11) 91098-7654',
    joinDate: '2023-02-14'
  }
];
