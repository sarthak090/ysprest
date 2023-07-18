import React from 'react';
import { Link } from 'react-scroll';

interface SmoothScrollLinkProps {
  to: string;
  spy?: boolean;
  smooth?: boolean;
  offset?: number;
  duration?: number;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  spy = true,
  smooth = true,
  offset = -70,
  duration = 500,
  children,
}) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={spy}
      smooth={smooth}
      offset={offset}
      duration={duration}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
