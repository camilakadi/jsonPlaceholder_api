import React from 'react';

import './styles.css';
import { Container } from '@material-ui/core';

interface PageHeaderProps {
    title: string;
    description?: string;
    homeHeader?: string;
}
//ou pode colocar FC tb no lugar de functionComponent
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header>
            <Container className="container top-container">
                <div className="content-header">
                    <div className="logo">
                        {props.title}
                    </div>

                    <div className="content-header-props">
                        {props.children}
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default PageHeader;