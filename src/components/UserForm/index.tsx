import React from 'react';
import { FormControl, InputLabel, Input} from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

interface UserFormProps {
    user: User;
}

const UserForm:React.FC<UserFormProps> = ({user}) => {
    return (
        <form>
            <FormControl className="form-control-add">
                <InputLabel htmlFor="name">Nome</InputLabel>
                <Input id="name" aria-describedby="Nome" value={user.name} />
            </FormControl>
            <FormControl className="form-control-add">
                <InputLabel htmlFor="username">Nome de Usuário</InputLabel>
                <Input id="username" aria-describedby="Nome de Usuário" value={user.username} />
            </FormControl>
            <FormControl className="form-control-add">
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <Input id="email" aria-describedby="E-mail" value={user.email} />
            </FormControl>
            <FormControl className="form-control-add">
                <InputLabel htmlFor="phone">Telefone</InputLabel>
                <Input id="phone" aria-describedby="Telefone" value={user.phone} />
            </FormControl>
        </form>
    )
}

export default UserForm;