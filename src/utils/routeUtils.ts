type Route = {
  [key: string]: string;
};
const generateRoute = (baseRoute: string, subRoutes: string[] = []) => {
  const routes = {
    base: `/${baseRoute}`,
    ...subRoutes.reduce((acc: Route, route) => {
      acc[route] = `/${baseRoute}/${route}`;
      return acc;
    }, {}),
  };
  return routes;
};

export const DASHBOARD_ROUTE = generateRoute('dashboard');
export const PRODUCT_ROUTE = generateRoute('products', ['create', 'list']);
