import App from '../App';
import Shop from './Shop';
import Cart from './Cart';

const routes = [
    {
        path: '/',
        element: <App />,
        /*errorElement: <ErrorPage />,*/
    },
    {
        path: 'shop',
        element: <Shop />,
    },
    {
        path: 'cart',
        element: <Cart />
    },
];

export default routes;