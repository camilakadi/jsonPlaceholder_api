import React, { useState, useEffect, FormEvent } from 'react';
import { useParams, useHistory } from 'react-router-dom';
//import { render } from 'react-dom';
import { Container, Button, FormControl, InputLabel, Input } from '@material-ui/core';
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

interface EditarProps {
    user: User;
}

function Editar() {
    const history = useHistory();

    const [tituloPagina, setTituloPagina] = useState("");

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    let { id } = useParams();

    useEffect(() => {
        if (id) {
            setTituloPagina("Editar Usuário");
            api.get(`/users/${id}`).then((retorno) => {
                console.log(retorno)
                if (retorno.data) {
                    setName(retorno.data.name);
                    setUsername(retorno.data.username);
                    setEmail(retorno.data.email);
                    setPhone(retorno.data.phone);
                }
            });
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
        }).then(() => {
            alert('Usuário adicionado com sucesso!');

            fechar();
        }).catch(() => {
            alert('Erro ao adicionar!');
        });
    }

   function editar() {
        api.put(`/users/${id}`, {
            name,
            username,
            email,
            phone
        }).then(() => {
            alert('Usuário adicionado com sucesso!');
            console.log({name, username, email, phone})
            fechar();
        }).catch(() => {
            alert('Erro ao adicionar!');
        });
    }


    function fechar() {
        history.push('/');
    }

    return (
        <div className="wrapper">
            <Header title={tituloPagina}>
            </Header>

            <main>
                <Container>
                    <form onSubmit={salvar}>
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

                        <Button variant="contained" color="secondary" className="btn-salve" type="submit">
                            Salvar
                        </Button>

                        <Button variant="contained" color="primary" onClick={fechar} className="btn-salve">
                            Fechar
                        </Button>
                    </form>
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default Editar;