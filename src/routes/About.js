import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PropTypes from 'prop-types'

import Stats from '../components/Stats'
import richTextOptions from '../utils/richTextOptions'

const About = ({aboutData, skillData}) => {
  return (
    <div id='about'>
      <section>
        <header>
          <h1>{aboutData.title}</h1>
          <div>{documentToReactComponents(aboutData.intro.json, richTextOptions)}</div>
        </header>
      </section>
      <Stats skillData={skillData}/>
      <section>
        <article>
          {documentToReactComponents(aboutData.bio.json, richTextOptions)}
        </article>
      </section>
    </div>
  )
}

About.propTypes = {
  aboutData: PropTypes.object,
  skillData: PropTypes.object
}

export default About