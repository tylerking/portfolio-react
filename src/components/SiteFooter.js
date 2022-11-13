import React from 'react'

import { Container } from '@mui/system'
import PropTypes from 'prop-types'

import Social from '../components/Social'

const SiteFooter = ({socialData}) => {
  return (
    <footer>
      <Container>
        {socialData.map((social, index) =>
          <Social
            key={index}
            name={social.name}
            link={social.link}
            icon={social.icon}
          />
        )}
        <p>&copy; 2022 Tyler King. All rights reserved.</p>
      </Container>
    </footer>
  )
}

SiteFooter.propTypes = {
  socialData: PropTypes.array
}

export default SiteFooter