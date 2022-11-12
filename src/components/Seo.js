import React from 'react'

import PropTypes from 'prop-types'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const SEO = ({ description, keywords, title, subtitle }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset='utf-8' />
        <title>{title} | {subtitle}</title>
        <meta name="author" content={title}></meta>
        <meta name='description' content={description}/>
        <meta name="keywords" content={keywords}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
    </HelmetProvider>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SEO