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
    name: 'Usuários',
    route: '/users'
  },
  {
    id: 2,
    name: 'Pedidos',
    route: '/orders'
  }
]

export { menuItems }
