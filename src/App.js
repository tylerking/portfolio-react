// Modules
import React, { useEffect, useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES} from '@contentful/rich-text-types'

// Material MUI
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Styles
import './assets/styles.scss'

// Components
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Service from './components/Service'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

// Contentful query
const query = `
{
  globalCollection {
    items {
      description {
        json
      }
      name
      title
    }
  }
  linkCollection {
    items {
      name
    }
  }
  projectCollection {
    items {
      description {
        json
      }
      image {
        title
        url
      }
      title
    }
  }
  serviceCollection {
    items {
      description {
        json
      }
      icon
      title
    }
  }
  socialCollection {
    items {
      name
      link
      icon
    }
  }
}
`

// Contentful rich text
const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>
    },
    [INLINES.HYPERLINK]: (node,children) => {
      return <a href={node.data.uri}>{children}</a>
    }
  }
}

// Material Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

// App
function App() {
  const [data, setData] = useState(null)
  const [introData, setAboutData] = useState(null)
  const [projectData, setProjectData] = useState(null)
  const [serviceData, setServiceData] = useState(null)
  const [socialData, setSocialData] = useState(null)

  useEffect(() => {
    const CONTENTFUL_BEARER = process.env.REACT_APP_CONTENTFUL_BEARER
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/alowrex0ufnr/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CONTENTFUL_BEARER}`,
        },
        // send GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors)
        }
        // rerender the entire component with new data
        setData(data)
        setAboutData(data.globalCollection.items[0])
        setProjectData(data.projectCollection.items)
        setServiceData(data.serviceCollection.items)
        setSocialData(data.socialCollection.items)
      })
  }, [])

  if (!data) {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          >
          <Grid item xs={1}>
            <CircularProgress />
          </Grid>
        </Grid> 
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SiteHeader />
      <Container maxWidth='xl'>
        {/* About */}
        <section id="About">
          <About 
            name={introData.name}
            title={introData.title}
            description={documentToReactComponents(introData.description.json, richTextOptions)}
            social={socialData}
          />
        </section>
        {/* Services */}
        <section id="Services">
          <h2>Services</h2>
          <Grid
            container
            rowSpacing={10} 
            spacing={2}
            >
            {serviceData.map((service, index) =>
              <Service
                key={index}
                title={service.title}
                icon={service.icon}
                description={documentToReactComponents(service.description.json, richTextOptions)}
              />
            )}
          </Grid>
        </section>
        {/* Projects */}
        <section id="Projects">
          <h2>Projects</h2>
          <Grid
            container
            rowSpacing={10} 
            spacing={2}
            >
            {projectData.map((project, index) =>
              <Project
                key={index}
                title={project.title}
                image={project.image}
                description={documentToReactComponents(project.description.json, richTextOptions)}
              />
            )}
          </Grid>
        </section>
        {/* Contact */}
        <section id="Contact">
          <h2>Contact</h2>
          <Contact />
        </section>
        {/* Footer */}
        <SiteFooter />
      </Container>
    </ThemeProvider>
  )
}

export default App