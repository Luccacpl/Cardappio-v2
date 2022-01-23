interface ImenuItems {
  id: number
  name: string
  route: string
}

const menuItems: ImenuItems[] = [
  {
    id: 0,
    name: 'Cardápio',
    route: '/menu'
  },
  {
    id: 1,
    name:'Comandas',
    route: '/commands'
  },
  {
    id: 2,
    name: 'Mesas',
    route: '/tables'
  },
  {
    id: 3,
    name: 'Pedidos',
    route: '/orders'
  }
]

export { menuItems }
