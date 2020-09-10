import React from 'react';

import { Container, Grid } from '@material-ui/core';

import './styles.css';

function Footer() {
    return (
        <footer>
            <Container className="container">
                <Grid container spacing={2} direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={12} sm={4}>
                        Páginas
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        Contatos
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        Endereços
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;