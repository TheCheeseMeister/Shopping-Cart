import { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const Cart = () => {
    const [currCart, setCurrCart] = useState();

    useEffect(() => {
        setCurrCart(JSON.parse(localStorage.getItem('cart')));
    }, []);

    if (currCart === undefined || currCart[0] === undefined) {
        return <Typography variant='body1'>You have no items in your cart.</Typography>
    }

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Typography variant='h7'>This is your current cart!</Typography>

            {currCart.map((item, index) => {
                return(
                    <Accordion key={index} sx={{
                        width: 500,
                    }}>
                        <AccordionSummary>
                            <Box
                                sx={{
                                    height: 140,
                                    marginRight: 4,
                                }}
                                component="img"
                                src={item[0].image}
                            />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Typography variant='body1'>{item[0].title}</Typography>
                                <Typography>${item[0].price * item[1]} ({item[1]} items; retail ${item[0].price})</Typography>
                            </Box>
                        </AccordionSummary>
        
                        <AccordionDetails>
                            <Typography variant='body2'>{item[0].description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Container>
    );
};

export default Cart;