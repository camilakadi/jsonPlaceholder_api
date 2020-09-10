import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import { render } from 'react-dom';

import { TextField, IconButton, Container,  SvgIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TableFooter, Button } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import './styles.css';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import api from '../../services/api';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
};

function Home() {
    let history = useHistory();

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (e: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        api.get("/users").then((retorno) => {
            if (retorno.data)
                setUsers(retorno.data);
        });
    }, []);

    async function pesquisarUsuarios(e: FormEvent) {
        e.preventDefault();

        let url = "/users";

        if (search)
            url += `?name=${search}`;

        try {
            let retorno = await api.get(url);
            if (retorno.data)
                setUsers(retorno.data);
        }
        catch (error) {
            alert('Nome de usuário inexistente!');
            setUsers([]);
        }
    }

    function handleClick() {
        history.push("/adicionar");
    }

    // function navegarParaEditar(userId) {
    //     history.push(`/editar/${userId}`);
    // }

    function construirLista() {
        if (users.length) {
            return users.map((user: User) => {
                return(
                    <TableRow key={user.id}>
                        <TableCell>
                            <Link to={`/editar/${user.id}`}>
                                <IconButton aria-label="Editar" color="primary">
                                    <SvgIcon>
                                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                    </SvgIcon>
                                </IconButton>
                            </Link>
                            <IconButton aria-label="Excluir" color="secondary" className="btn-delete">
                                <SvgIcon>
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
                                </SvgIcon>
                            </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                );
            })
        }
        else {
            return (
                <TableRow>
                    <TableCell colSpan={6}>Não existem resultados</TableCell>
                </TableRow>
            );
        }
    }

    return (
        <div className="wrapper">

            <Header title="Lista de Usuários">
                <form className="searchs__form" onClick={pesquisarUsuarios}>
                    <TextField type="text" id="search" name="search" className="searchs__input" value={search}
                        onChange={(e) => {setSearch(e.target.value)}} label="Pesquisar Nome"
                    />
                    <IconButton color="primary" aria-label="Pesquisar" size="small" type="submit">
                        <Search fontSize="small" />
                    </IconButton>
                </form>

                <Button variant="contained" color="secondary" onClick={handleClick}>
                    Adicionar
                </Button>
            </Header>

            <main>
                <div className="content">
                    <Container className="container">
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Ações</TableCell>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Nome</TableCell>
                                        <TableCell>Username</TableCell>
                                        <TableCell>E-mail</TableCell>
                                        <TableCell>Telefone</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        construirLista()
                                    }
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25 ]}
                                            colSpan={6}
                                            count={users.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: { 'aria-label': 'Linhas Por página' },
                                                native: true,
                                            }}
                                            labelRowsPerPage={'Linhas por página'}
                                            onChangePage={handleChangePage}
                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </Container>
                </div>
            </main>

            <Footer />

        </div>
    )
}

export default Home;