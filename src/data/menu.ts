export type MenuCategory = 'Desayunos' | 'All day' | 'Pizza' | 'Bebidas'

export interface MenuItem {
  id: string
  nombre: string
  descripcion?: string
  precio: number
  categoria: MenuCategory
  destacado?: boolean
  imagenUrl?: string
}

export type MenuData = Record<MenuCategory, MenuItem[]>

export const menuData: MenuData = {
  Desayunos: [
    {
      id: 'des-01',
      nombre: 'Croissant de mantequilla',
      descripcion: 'Hojaldre artesanal, crujiente y dorado.',
      precio: 45,
      categoria: 'Desayunos',
      destacado: true,
    },
    {
      id: 'des-02',
      nombre: 'Chilaquiles verdes',
      descripcion: 'Totopos con salsa verde, crema y queso.',
      precio: 98,
      categoria: 'Desayunos',
    },
  ],
  'All day': [
    {
      id: 'all-01',
      nombre: 'Sandwich bistró',
      descripcion: 'Jamón, queso, mostaza Dijon y pepinillos.',
      precio: 120,
      categoria: 'All day',
      destacado: true,
    },
    {
      id: 'all-02',
      nombre: 'Ensalada de la casa',
      descripcion: 'Verde mixta, vinagreta de miel y limón.',
      precio: 110,
      categoria: 'All day',
    },
  ],
  Pizza: [
    {
      id: 'piz-01',
      nombre: 'Margherita clásica',
      descripcion: 'Tomate, mozzarella y albahaca fresca.',
      precio: 165,
      categoria: 'Pizza',
      destacado: true,
    },
    {
      id: 'piz-02',
      nombre: 'Cuatro quesos',
      descripcion: 'Mozzarella, gorgonzola, parmesano y provolone.',
      precio: 189,
      categoria: 'Pizza',
    },
  ],
  Bebidas: [
    {
      id: 'beb-01',
      nombre: 'Café americano',
      descripcion: 'Grano seleccionado, extracción limpia.',
      precio: 38,
      categoria: 'Bebidas',
    },
    {
      id: 'beb-02',
      nombre: 'Limonada de miel',
      descripcion: 'Refrescante con toque de miel de la casa.',
      precio: 55,
      categoria: 'Bebidas',
      destacado: true,
    },
  ],
}
