import React from 'react'

import PropTypes from 'prop-types'

import Social from '../components/Social'

const SiteFooter = ({socialData}) => {
  return (
    <footer>
      <p>Follow Me:</p>
      {socialData.map((social, index) =>
        <Social
          key={index}
          name={social.name}
          link={social.link}
          icon={social.icon}
        />
      )}
      <p>&copy; 2022 Tyler King. All rights reserved.</p>
    </footer>
  )
}

SiteFooter.propTypes = {
  socialData: PropTypes.array
}

export default SiteFooter