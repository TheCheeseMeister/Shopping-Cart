import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

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
            </Container>
        </>
    );  
};

export default Shop;