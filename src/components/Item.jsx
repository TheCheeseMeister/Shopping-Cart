/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button, TextField } from '@mui/material';

const Item = ({subURL}) => {
    const [value, setValue] = useState(1);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState("");
    const hasFetchedData = useRef(false);
    const isMounted = useRef(false);
    let url = "https://fakestoreapi.com/" + subURL;

    useEffect(() => {
        async function fetchData() {
            try {
                await fetch(url)
                    .then(res => res.json())
                    .then(json => setProduct(json));
            } catch(e) {
                console.error('Error fetching api data', e);
            }
        }

        if (hasFetchedData.current === false) {
            fetchData();
            hasFetchedData.current = true;
        }
    }, []);

    function numberHandler(e) {
        if (Number(e.target.value) > 10) {
            setValue(10);
        } else if (Number(e.target.value < 1)) {
            setValue(1);
        } else {
            setValue(e.target.value)
        }
    }

    const amountEvent = new CustomEvent('amountchanged');

    useEffect(() => {
        const key = setTimeout(() => {
            if (isMounted.current) {
                let temp = JSON.parse(localStorage.getItem('cart'));
                
                let updateIndex = temp.findIndex((ele) => ele[0] == product.title);
                if (updateIndex != -1) {
                    temp[updateIndex][1] += Number(value);
                } else {
                    temp.push([product.title, value]);
                }

                localStorage.setItem('cart', JSON.stringify(temp));

                let amount = JSON.parse(localStorage.getItem('cart-amount'));
                amount += Number(value);
                localStorage.setItem('cart-amount', amount);

                document.dispatchEvent(amountEvent);
            } else {
                isMounted.current = true;
            }
        });

        return () => {clearTimeout(key)};
    }, [cart]);

    async function addToCart(e) {
        e.preventDefault();

        await setCart(oldCart => [...oldCart, [product.title, value]]);
    }

    return (
        <>
            <Card sx={{
                width: 300,
            }}>
                <CardMedia 
                    sx={{ height: 140, objectFit: "contain" }}
                    image={product.image}
                    component='img'
                />

                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}>
                    <Typography variant='h7'>{product.title}</Typography>
                    <Typography variant='subtitle2'>{product.description}</Typography>

                    <form onSubmit={addToCart}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'end',
                            gap: 2,
                        }}>
                            <Typography>${value ? product.price * value : product.price}</Typography>
                            <TextField
                                sx={{
                                    width: 75,
                                }}
                                id='outlined-number'
                                label="Number"
                                slotProps={{
                                    input: {
                                        min: 1,
                                        max: 2,
                                    }
                                }}
                                onChange={numberHandler}
                                type="number"
                                value={value}
                            />
                            
                        </Box>
                        <Button type='submit'>Add to Cart</Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
};

export default Item;