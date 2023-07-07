const mapping: Record<string, string> = {
  orders: 'order',
  products: 'product',
  sellers: 'seller',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
