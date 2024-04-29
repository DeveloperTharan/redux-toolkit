import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const cartProducts = useSelector((state: RootState) => state.cartSlice);

  return (
    <Navbar maxWidth="full" className="shadow-md shadow-slate-700/20">
      <NavbarBrand>
        <Avatar src="/vite.svg" alt="logo" size="sm" />
        <p className="font-bold text-inherit pl-1">REDUX</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/cart">cart {cartProducts.length}</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
