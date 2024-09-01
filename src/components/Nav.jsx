import { Box, AppBar, Typography, Button, Badge } from '@mui/material'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = () => {
    const [amount, setAmount] = useState(0);

    function displayCart() {
        let array = JSON.parse(localStorage.getItem('cart'));
        console.log(array);
    }
    
    document.addEventListener('amountchanged', () => {
        let val = localStorage.getItem('cart-amount');

        setAmount(val);
    });

    return (
        <Box sx={{
        }}>
            <AppBar sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: 2,
                backgroundColor: "grey"
            }}>
                <Typography variant="h4">StuffStore</Typography>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    marginLeft: 'auto',
                }}>
                    <Button component={Link} to={"/"} variant='contained'>Home</Button>
                    <Button component={Link} to={"shop"} variant='contained'>Store</Button>

                    <Badge badgeContent={amount} color="primary">
                        <Button component={Link} to={"cart"} sx={{
                            color: 'white',
                        }}>
                            <ShoppingCartIcon onClick={displayCart} />
                        </Button>
                    </Badge>
                </Box>
            </AppBar>
        </Box>
    );
};

export default Nav;