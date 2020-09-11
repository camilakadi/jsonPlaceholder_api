import React from "react";
import "./assets/css/reset.css";
import "./assets/css/global.css";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps, Color } from "@material-ui/lab/Alert";

import Routes from "./routes";

function App() {
    const [open, setOpen] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("");
    const [alertSeverity, setAlertSeverity] = React.useState<Color>();

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    function alertaMenssagem(menssagem: string, severidade: Color) {
        setAlertMessage(menssagem);
        setAlertSeverity(severidade);
        setOpen(true);
    }

    return (
        <div>
            <Routes toast={alertaMenssagem} />
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={alertSeverity}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default App;
