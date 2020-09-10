import React from 'react';

import './styles.css';
import { Container, Grid} from '@material-ui/core';

interface PageHeaderProps {
    title: string;
    description?: string;
}
//ou pode colocar FC tb no lugar de functionComponent
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header>
            <Container className="container top-container">
                <Grid container spacing={2} direction="row" justify="space-between" alignItems="flex-end">
                    <Grid item xs={12} sm={6} className="logo">
                        {props.title}
                    </Grid>
                    <Grid item xs={12} sm={6} container direction="row" justify="flex-end" alignItems="flex-end">
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default PageHeader;