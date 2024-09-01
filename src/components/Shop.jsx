import { Link } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import Item from './Item.jsx';

localStorage.clear();
localStorage.setItem('cart', JSON.stringify([]));
localStorage.setItem('cart-amount', 0);

const Shop = () => {
    return (
        <>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography>This is the shop!</Typography>

                <Link to="/">Return to Home</Link>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 4,
                }}>
                    <Item subURL={"products/1"} />
                    <Item subURL={"products/2"} />
                    <Item subURL={"products/3"} />
                    <Item subURL={"products/4"} />
                    <Item subURL={"products/5"} />
                    <Item subURL={"products/6"} />
                </Box>
            </Container>
        </>
    );  
};

export default Shop;