import React from 'react';

import { Container, Grid, SvgIcon } from '@material-ui/core';

import './styles.css';

function Footer() {
    return (
        <footer>
            <Container className="container">
                <Grid container spacing={2} direction="row" justify="space-between" className="footer-top">
                    <Grid item xs={12} sm={4} className="box-pages">
                        <h3>Páginas</h3>

                        <ul>
                            <li>Home</li>
                            <li>Cadastros</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4} className="box-contacts">
                        <h3>Contatos</h3>

                        <ul>
                            <li>
                                <SvgIcon>
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </SvgIcon>
                                <a href="tel:551145454545">(11) 4545-4545</a>
                            </li>
                            <li>
                                <SvgIcon>
                                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                                </SvgIcon>
                                <a href="tel:5511989073144">(11) 9 8907-3144</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4} className="box-address">
                        <h3>Endereços</h3>
                        <div className="address-group">
                            <SvgIcon>
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </SvgIcon>
                            <address>
                                Rua Paschoal Guzzo 600, Jardim Messina - Jundiaí / SP
                            </address>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;