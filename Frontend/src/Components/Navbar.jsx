import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, HStack, Text, Image, Flex, Box } from '@chakra-ui/react';
import { LogOut } from '../redux/auth/auth.actions';
import './Navbar.css';

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth?.isAuth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(LogOut());
  };

  return (
    <Flex className="navbar-container"
    >
      <Box>
      <NavLink  > <Image src="https://kryzen.com/wp-content/uploads/2022/02/kryzen-logo-1.png" alt="Kryzen Logo" className="logo" /></NavLink>
      </Box>
      <HStack  spacing='70px' transition= "background-color 0.3s ease" justifyContent="center" py="5">
      <Text color={"black"} fontSize="20px"  className="nav-link">
        <NavLink>Product Page</NavLink>
      </Text>
      <Text color={"black"} fontSize="20px "  className="nav-link">
        {isAuth ? "" : <NavLink to="/">Sign Up</NavLink>}
      </Text>
      <Text color={"black"} fontSize="20px" className="nav-link ">
        {isAuth ? <Button className='button-logout' onClick={handleLogOut}>Log Out</Button> : <NavLink to="/login">Log In</NavLink>}
      </Text>
     
    </HStack>
    </Flex>
  );
};

export default Navbar;
