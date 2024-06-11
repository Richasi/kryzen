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
    <Flex className="navbar-container">
      <Box>
        <Image src="https://kryzen.com/wp-content/uploads/2022/02/kryzen-logo-1.png" alt="Kryzen Logo" className="logo" />
      </Box>
      <HStack spacing="30px">
      <Text className="nav-link">
          <NavLink to="/product-page">Product Page</NavLink>
        </Text>
        {!isAuth && (
          <Text className="nav-link">
            <NavLink to="/">Sign Up</NavLink>
          </Text>
        )}
        <Text className="nav-link">
          {isAuth ? (
            <Button onClick={handleLogOut} className="button-logout">Log Out</Button>
          ) : (
            <NavLink to="/login">Log In</NavLink>
          )}
        </Text>
        
      </HStack>
    </Flex>
  );
};

export default Navbar;
