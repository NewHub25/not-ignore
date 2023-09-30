import { useContext, useEffect, useState } from "react";

import {
  AspectRatio,
  Box,
  IconButton,
  Card,
  CardContent,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  Typography,
  Sheet,
  Avatar,
} from "@mui/joy";
import {
  FacebookRounded,
  GitHub,
  Wifi,
  WifiOff,
  LinkedIn,
  Twitter,
  LocalGroceryStore,
} from "@mui/icons-material";
import { ThemeContext } from "styled-components";

export default function Footer() {
  const toggleTheme = useContext(ThemeContext);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  return (
    <Sheet
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        ...(toggleTheme.name === "dark" && {
          bgcolor: "primary.800",
        }),
        flexGrow: 1,
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {isOnline ? <Wifi fontSize="small" /> : <WifiOff fontSize="small" />}
        <Divider orientation="vertical" />
        {[
          {
            href: "https://web.facebook.com/terrydaniel.ildefonsochagua",
            decorator: <FacebookRounded />,
          },
          { href: "https://github.com/NewHub25", decorator: <GitHub /> },
          {
            href: "https://www.linkedin.com/in/terry-chagua-84a7a8252/",
            decorator: <LinkedIn />,
          },
          { href: "https://twitter.com/@TerrySmart25", decorator: <Twitter /> },
        ].map(({ href, decorator }) => {
          return (
            <a key={href} href={href} target="_blank" rel="noreferrer">
              <IconButton variant="plain">{decorator}</IconButton>
            </a>
          );
        })}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: "row", md: "column" },
            minWidth: { xs: "90%", md: "200px" },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="2/1.5"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: "initial" } }}
          >
            <img
              alt=""
              src="/future.gif"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Sé parte de esto</Typography>
            <Typography level="body-xs" sx={{ mb: 0.5 }}>
              Añade un video de programación
            </Typography>
          </CardContent>
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, "--ListItem-radius": "8px" }}
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
            <ListSubheader>Enlaces</ListSubheader>
            <List>
              {[
                {
                  href: "https://newhub25.github.io/portafolio-publico-2023/",
                  title: "Portafolio",
                  decorator: (
                    <Avatar
                      sx={{ ml: "auto" }}
                      size="sm"
                      alt="Terry"
                      src="https://avatars.githubusercontent.com/u/103373722?v=4"
                    />
                  ),
                },
                {
                  href: "https://newhub25.github.io/ecommerce/",
                  title: "Ecommerce",
                  decorator: (
                    <LocalGroceryStore sx={{ ml: "auto" }} size="sm" />
                  ),
                },
              ].map(({ href, title, decorator }) => {
                return (
                  <ListItem key={href}>
                    <a
                      style={{ width: "min(80%, 150px)" }}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ListItemButton>
                        {title}
                        {decorator}
                      </ListItemButton>
                    </a>
                  </ListItem>
                );
              })}
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader>Construido con</ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "40px" }}>
              {[
                {
                  href: "https://es.react.dev/",
                  title: "React",
                  decorator: (
                    <img
                      alt="react"
                      src="/React.svg"
                      width="24"
                      loading="lazy"
                    />
                  ),
                },
                {
                  href: "https://mui.com/",
                  title: "MUI",
                  decorator: (
                    <img alt="mui" src="/mui.svg" width="24" loading="lazy" />
                  ),
                },
                {
                  href: "https://styled-components.com/",
                  title: "Styled Components",
                  decorator: (
                    <img
                      alt="Styled Components"
                      src="/styled-components.jpg"
                      width="40"
                      loading="lazy"
                    />
                  ),
                },
                {
                  href: "https://vitejs.dev/",
                  title: "Vite",
                  decorator: (
                    <img alt="vite" src="/vite.svg" width="24" loading="lazy" />
                  ),
                },
                {
                  href: "https://git-scm.com/",
                  title: "GIT",
                  decorator: (
                    <img alt="GIT" src="/git.svg" width="24" loading="lazy" />
                  ),
                },
              ].map(({ href, title, decorator }) => {
                return (
                  <ListItem key={href}>
                    <a
                      style={{ width: "100%" }}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ListItemButton>
                        <IconButton variant="solid" sx={{ mr: 1 }}>
                          {decorator}
                        </IconButton>
                        {title}
                      </ListItemButton>
                    </a>
                  </ListItem>
                );
              })}
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
