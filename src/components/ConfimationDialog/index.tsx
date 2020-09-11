import React from "react";
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

interface ConfirmationDialogProps {
	user: User;
	open: boolean;
	setOpen: Function;
	onConfirm: Function;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ user, open, setOpen, onConfirm }) => {
	return (
		<Dialog
			open={open}
			onClose={() => { setOpen(false); }}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{"Deseja excluir?"}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">Ao confirmar o usuário será excluído.</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button	onClick={() => { setOpen(false); }} color="secondary">
					Cancelar
				</Button>
                <Button	onClick={() => { setOpen(false); onConfirm(user);} } color="primary">
					Confirmar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmationDialog;