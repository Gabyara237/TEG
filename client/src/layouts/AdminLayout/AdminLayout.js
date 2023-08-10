import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AdminMenu, AdminMenu2 } from "../../components/AdminLayout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailIcon from "@mui/icons-material/Mail";
import "./AdminLayout.scss";
import { Auth } from "../../api";
import { monitorTokenExpiration } from "../../utils/token"; // Ajusta la ruta según la ubicación de tu archivo tokenUtils
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const authController = new Auth();

export function AdminLayout(props) {
  const { children } = props;
  const accessToken = authController.getAccessToken(); // Obtén el token de acceso guardado
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState(false); // Estado para mostrar el diálogo
  const [autoRedirect, setAutoRedirect] = useState(false);

  const handleDialogOpen = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    authController.removeTokens();
    navigate("/");
  };

  const handleConfirm = async () => {
    setShowDialog(false);
    const nuevoToken = await authController.refreshAccessToken(accessToken);

    // Actualizar el monitoreo con el nuevo token
    const nuevoAccessToken = nuevoToken.accessToken;
    const warningTime = 1 * 60 * 1000; // 1 minutos antes de la expiración
    const expiryWarningCallback = () => {
      handleDialogOpen(); // Mostrar el diálogo al usuario
      // Aquí puedes tomar medidas, como notificar al usuario o renovar el token.
      setAutoRedirect(true);
    };
    monitorTokenExpiration(
      nuevoAccessToken,
      warningTime,
      expiryWarningCallback
    );

    // Puedes realizar otras acciones después de confirmar aquí
    setAutoRedirect(false);
  };

  useEffect(() => {
    const warningTime = 1 * 60 * 1000; // 1 minutos antes de la expiración

    const expiryWarningCallback = () => {
      handleDialogOpen(); // Mostrar el diálogo al usuario
      // Aquí puedes tomar medidas, como notificar al usuario o renovar el token.
      setAutoRedirect(true);
    };

    if (accessToken) {
      const tokenMonitor = monitorTokenExpiration(
        accessToken,
        warningTime,
        expiryWarningCallback
      );

      return () => {
        clearTimeout(tokenMonitor);
      };
    }
  }, [accessToken]); // Monitorea cuando el token de acceso cambia

  useEffect(() => {
    if (autoRedirect) {
      const autoRedirectTimer = setTimeout(() => {
        // Si el temporizador llega a cero y el usuario no ha realizado ninguna acción,
        // redirige automáticamente a la página principal
        authController.removeTokens();
        navigate("/");
      }, 60000);

      return () => {
        clearTimeout(autoRedirectTimer);
      };
    }
  }, [autoRedirect]);

  return (
    <div className="admin-layout">
      <div className="admin-layout__left">
        <div className="logo">LOGO</div>
        <AdminMenu />
      </div>
      <div className="admin-layout__right">
        <div className="admin-layout__right-header">
          <div className="wallet">
            <AttachMoneyIcon className="money" /> 0.00
          </div>
          <div className="menu2">
            <div className=" icons">
              <MailIcon className="notifications" />
              <div className="counter">2</div>
            </div>
            <div className=" icons">
              <NotificationsIcon className="notifications" />
              <div className="counter">2</div>
            </div>
            <AdminMenu2 />
          </div>
        </div>
        <div className="admin-layout__right-content">{children}</div>
      </div>
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>¡Atención!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tu sesión está a punto de expirar. ¿Deseas mantener la sesión
            activa?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cerrar sesión
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Mantener sesión
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
