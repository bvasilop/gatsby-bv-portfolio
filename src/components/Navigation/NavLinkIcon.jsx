import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../shared/colors';
import { transitions } from '../../shared/transitions';

const NavLinkIcon = ({ icon, to, mouseOver }) => {
  const wrapperRef = useRef(null);
  return (
    <Wrapper ref={wrapperRef} onMouseOver={() => mouseOver(wrapperRef.current)}>
      <CustomLink target="_blank" href={to} activeClassName="active">
        {icon}
      </CustomLink>
    </Wrapper>
  );
};

NavLinkIcon.propTypes = {
  to: PropTypes.string,
  mouseOver: PropTypes.func,
  icon: PropTypes.object,
};

NavLinkIcon.defaultProps = {
  to: `/`,
};

const CustomLink = styled.a`
  position: relative;
  height: 100%;
  line-height: 7rem;
  ${transitions.satanSnap}

  svg {
    fill: ${colors.white};
  }
`;

const Wrapper = styled.li`
  position: relative;
  margin-left: 5rem;
  display: flex;
  align-items: center;
  height: 7rem;
`;

export default NavLinkIcon;
