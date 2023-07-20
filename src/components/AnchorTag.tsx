/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextHandlerAnimations } from "../context/ui/ContextHandlerAnimations";


interface AnchorTagProps {
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  hasBackground?: boolean;
  href: string;
  label: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  padding?: string;
  size?: 'small' | 'medium' | 'large';
  textAlign?: | 'center' | 'justify' | 'left' | 'right' | 'start' | 'end';
  onClick?: () => void;
}
export const AnchorTag = ({
  backgroundColor = 'transparent',
  borderRadius = '0',
  color = 'black',
  hasBackground = true,
  href,
  label,
  margin = '0',
  marginBottom = '0',
  marginLeft = '0',
  marginRight = '0',
  marginTop = '0',
  padding = '0px',
  size = 'medium',
  textAlign = 'left',
  ...props
}: AnchorTagProps) => {

  const { onToggleSidebar } = useContext(ContextHandlerAnimations);

  const border = `${hasBackground ? 'none' : `1px solid ${color}`}`;
  const bg = `${!hasBackground ? 'transparent' : backgroundColor}`;

  return (

    <li className={`item item--active`}
      style={{
        textAlign, margin, marginLeft,
        marginBottom, marginTop, marginRight, borderRadius,
        border,
      }}
      {...props}
    >
      <NavLink
        className={`item__link item__link--${size} `}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? " rgba(131, 11, 164, 0.213)" : bg,
            color: 'white',
            padding
          };
        }}
        to={href}
        onClick={onToggleSidebar}
        {...props}
      >
        {label}
      </NavLink>
    </li>
  )
}
