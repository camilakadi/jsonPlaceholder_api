import React, { useState, useEffect, FormEvent } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Container, Button, FormControl, InputLabel, Input, Paper, Grid } from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';

import './styles.css';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

interface RegisterProps {
	toast: Function;
}

const Register: React.FC<RegisterProps> = ({ toast }) => {
    const history = useHistory();
    const location = useLocation();
	const state = location.state as any;

    const [tituloPagina, setTituloPagina] = useState("");

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    let { id } = useParams();

    useEffect(() => {
        if (id) {
            setTituloPagina("Editar Usuário");

            const {name, username, email, phone} = state.find((x: User) => x.id == id);
            setName(name);
            setUsername(username);
            setEmail(email);
            setPhone(phone);
        }
        else
            setTituloPagina("Adicionar Usuário");
    }, [id]);

    function salvar(e: FormEvent) {
        e.preventDefault();

        if (id)
            editar();
        else
            adicionar();
    }

    function adicionar() {
        api.post('/users', {
            name,
            username,
            email,
            phone
        }).then((resultado) => {
            toast("Usuário adicionado com sucesso!", "success");
            state.push({ id: resultado.data.id, name, username, email, phone });
            fechar();
        }).catch(() => {
            toast("Erro ao adicionar!", "error");
        });
    }

   function editar() {
        if(id <= 10) {
            api.put(`/users/${id}`, {
                name,
                username,
                email,
                phone
            }).then(() => {
                editarUsuarioCallback();
            }).catch(() => {
                toast("Erro ao editar!", "error");
            });
        }
        else
            editarUsuarioCallback();
    }

    function editarUsuarioCallback() {
		toast("Usuário editado com sucesso!", "success");

		const index = state.findIndex((x: User) => x.id == id);
		state[index] = { id, name, username, email, phone };

		fechar();
	}

    function fechar() {
        if (state)
            history.push("/", state);
        else
            history.push("/");
	}

    return (
        <div className="wrapper">
            <Header title={tituloPagina}>
            </Header>

            <main>
                <Container>
                    <Grid className="container-inside" component={Paper}>
                        <form onSubmit={salvar} className="form-inside">
                            <FormControl className="form-control-add">
                                <InputLabel htmlFor="name">Nome</InputLabel>
                                <Input id="name" name="name" aria-describedby="Nome" value={name} type="text" required
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                            </FormControl>
                            <FormControl className="form-control-add">
                                <InputLabel htmlFor="username">Nome de Usuário</InputLabel>
                                <Input id="username" name="username" aria-describedby="Nome de Usuário" value={username} type="text" required
                                    onChange={(e) => {setUsername(e.target.value)}}
                                />
                            </FormControl>
                            <FormControl className="form-control-add">
                                <InputLabel htmlFor="email">E-mail</InputLabel>
                                <Input id="email" name="email" aria-describedby="E-mail" value={email} type="email" required
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </FormControl>
                            <FormControl className="form-control-add">
                                <InputLabel htmlFor="phone">Telefone</InputLabel>
                                <Input id="phone" name="phone" aria-describedby="Telefone" value={phone} type="tel" required
                                    onChange={(e) => {setPhone(e.target.value)}}
                                />
                            </FormControl>

                            <div className="buttons-inside">
                                <Button variant="contained" color="primary" onClick={fechar} className="btn-salve">
                                    Fechar
                                </Button>

                                <Button variant="contained" color="secondary" className="btn-salve" type="submit">
                                    Salvar
                                </Button>
                            </div>

                        </form>
                    </Grid>
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default Register;