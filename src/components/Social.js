import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faDribbble, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

const Social = ({icon, link, name}) => {
  return (
    <a 
      href={link} 
      rel="noreferrer" 
      target='_blank' 
      title={name}
      >
      {
        {
          'codepen': <FontAwesomeIcon icon={faCodepen} size='2x' />,
          'github': <FontAwesomeIcon icon={faGithub} size='2x' />,
          'dribbble': <FontAwesomeIcon icon={faDribbble} size='2x' />,
          'linkedin-in': <FontAwesomeIcon icon={faLinkedinIn} size='2x' />,
        }[icon] || <FontAwesomeIcon icon={faCodepen} size='2x' />
      }
    </a>
  )
}

Social.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string
}

export default Social