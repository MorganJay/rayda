import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

const CustomNavLink = (props: NavLinkProps) => {
  const { search } = useLocation();

  return (
    <NavLink {...{ ...props, to: `${props.to}${search}` }}>
      {props.children}
    </NavLink>
  );
};

export default CustomNavLink;
