import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PropTypes from 'prop-types'

import Service from '../components/Service'
import richTextOptions from '../utils/richTextOptions'

const checkIndex = (index) => {
  if (index%2==1) {
    return true
  }
}

const Services = ({serviceData}) => {
  return (
    <article id='services'>
      <header>
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </header>
      {serviceData.map((service, index) =>
        <div className='service' key={index}>
          <Service
            capabilities={service.capabilities}
            description={documentToReactComponents(service.description.json, richTextOptions)}
            icon={service.icon}
            image={service.image}
            odd={checkIndex(index)}
            title={service.title}
          />
        </div>
      )}
    </article>
  )
}

Services.propTypes = {
  serviceData: PropTypes.array
}

export default Services