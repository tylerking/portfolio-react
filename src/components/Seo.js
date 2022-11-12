import React from 'react'

import PropTypes from 'prop-types'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const SEO = ({ description, title, siteTitle }) => {
  return (
    <HelmetProvider>
      <Helmet
        title={title}
        titleTemplate={siteTitle ? `%s | ${siteTitle}` : null}
        meta={[
          {
            name: 'description',
            content: description,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: description,
          },
          {
            property: 'og:type',
            content: 'website',
          }
        ]}
      />
    </HelmetProvider>
  )
}

SEO.propTypes = {
  description: PropTypes.object,
  title: PropTypes.string,
  siteTitle: PropTypes.string
}

export default SEO