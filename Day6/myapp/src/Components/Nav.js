// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import Rocket from "@mui/icons-material/Rocket";
// import Account from "@mui/icons-material/AccountCircle";
// import { useNavigate } from "react-router-dom";
// import Modal from "@mui/material/Modal";
// import { TextField } from "@mui/material";

// const pages = ["Home", "About", "Contact"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function Nav() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const handleAbout = () => {
//     var x = true;
//     if (x) {
//       navigate("/about");
//     } else {
//       navigate("/contact");
//     }
//   };

//   return (
//     <>
//       <AppBar position="static">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Rocket sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               LOGO
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Avatar sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               LOGO
//             </Typography>
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: {
//                   xs: "none",
//                   md: "flex",
//                   justifyContent: "flex-end",
//                   gap: "1rem",
//                   mr: "2rem",
//                 },
//               }}
//             >
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 Home
//               </Button>
//               <Button
//                 onClick={handleAbout}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 About
//               </Button>
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 Contact
//               </Button>
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="User">
//                 <IconButton sx={{ p: 0 }} onClick={handleOpen}>
                  
                 
//                   <Account
//                     sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
//                   />
//                 </IconButton>
//               </Tooltip>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//            Login
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//           <TextField id="outlined-basic" label="username" variant="outlined" color='secondary'sx={{my:1,width:'100%'}} />
//           <TextField id="outlined-basic" label="password" variant="outlined" color='secondary'sx={{my:1,width:'100%'}} />
//           <Button variant="contained">Login</Button>

//           </Typography>
//         </Box>
//       </Modal>
//     </>
//   );
// }
// export default Nav;
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Home = () => {
    const Item = styled(Paper)(() => ({
        textAlign: 'center',
    }));
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={5}>

                        <Grid item xs={3}>
                            <Item>item1</Item>
                            <Card sx={{ minWidth: 375, backgroundColor:'blue' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Things takes time to be ok
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>item2</Item>
                            <Card sx={{ minWidth: 275, backgroundColor:'lightgreen'  }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        be{bull}nev{bull}o{bull}lent
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>item3</Item>
                            <Card sx={{ minWidth: 275, backgroundColor:'pink'  }}>
                                <CardContent>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                       The world ends with mystery
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>item4</Item>
                            <Card sx={{ minWidth: 275, backgroundColor:'powderblue'  }}>
                                <CardContent>
                                    <Typography variant="body2">
                                     kindness gives peace 
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}
export default Home
