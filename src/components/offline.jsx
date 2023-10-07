import { CardContent, List, ListItem, Typography } from "@mui/material";

export const OfflineComponent = () => {
  return (
    <CardContent
      sx={{
        height: "calc(100vh - 5rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography component="p" fontWeight={700}>
        Te has desconectado
      </Typography>
      <Typography component="span" fontWeight={700}>
        Vuelve a conectarte o verifica tu señal de red
      </Typography>
      <List>
        <ListItem>
          Problemas de Configuración: Puede haber cambios en la configuración de
          red, como un cambio en la contraseña del Wi-Fi, que requieran ajustes
          para volver a conectarse.
        </ListItem>
        <ListItem>
          Problemas de Hardware: Los problemas con el router, el módem u otros
          dispositivos de red pueden causar desconexiones y requerir solución.
        </ListItem>
      </List>
    </CardContent>
  );
};
