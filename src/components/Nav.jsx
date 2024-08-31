import { Box, AppBar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom';

const Nav = () => {
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
                    gap: 4,
                    marginLeft: 'auto',
                }}>
                    <Button component={Link} to={"/"} variant='contained'>Home</Button>
                    <Button component={Link} to={"shop"} variant='contained'>Store</Button>
                </Box>
            </AppBar>
        </Box>
    );
};

export default Nav;