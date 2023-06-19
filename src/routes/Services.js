import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Container from '@mui/material/Container'
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
    <Container id='services'>
      <section>
        <header className='title'>
          <h1>Services</h1>
          <p>I offer a comprehensive range of services, and if you have specific requirements not listed below, feel free to <a href='/contact'>reach out</a> as I strive to accommodate diverse needs or provide suitable referrals. Let&apos;s explore how I can deliver the ideal solution for your project.</p>
        </header>
      </section>
      <section>
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
      </section>
    </Container>
  )
}

Services.propTypes = {
  serviceData: PropTypes.array
}

export default Services