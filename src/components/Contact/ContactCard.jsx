import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaLink } from 'react-icons/fa';
import colors from '../../shared/colors';

const ContactCard = ({ title, copy, link }) => (
  <Card>
    <h1>{title}</h1>
    <p>{copy}</p>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        View the project <FaLink />
      </a>
    ) : (
      <a href="tel:(773) 571-3820">(773) 571-3820</a>
    )}
  </Card>
);

const Card = styled.div`
  margin-bottom: 5rem;
  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }

  a {
    color: ${colors.blue};

    svg {
      transform: translate(0.75rem, 0.25rem);
    }
  }
`;

ContactCard.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  link: PropTypes.string,
};

export default ContactCard;
