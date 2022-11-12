// Modules
import React, { useEffect, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Styles
import './assets/styles.scss'

// Routes
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import About from './routes/About'
import Contact from './routes/Contact'
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import Projects from './routes/Projects'
import Services from './routes/Services'

// Material Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#008080',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#f5f5f5',
    },
  },
})

// Contentful query
const query = `
{
  aboutCollection {
    items {
      bio {
        json
      }
      intro {
        json
      }
      title
    }
  }
  companyCollection(order: [order_ASC]) {
    items {
      logo {
        title
        url
      }
      name
    }
  }
  globalCollection {
    items {
      description {
        json
      }
      title
    }
  }
  homeCollection {
    items {
      description {
        json
      }
      title
      name
      primaryLink
      primaryLinkText
      secondaryLink
      secondaryLinkText
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
      demo
      image {
        title
        url
      }
      source
      title
    }
  }
  serviceCollection(order: [order_ASC]) {
    items {
      description {
        json
      }
      icon
      title
    }
  }
  skillCollection {
    items {
      skill
      title
      tool
    }
  }
  socialCollection(order: [order_ASC]) {
    items {
      name
      link
      icon
    }
  }
  workflowCollection(order: [order_ASC]) {
    items {
      description {
        json
      }
      case
      icon
      link
      title
    }
  }
}
`

// App
function App() {
  const [data, setData] = useState(null)
  const [aboutData, setAboutData] = useState(null)
  const [companyData, setCompanyData] = useState(null)
  const [homeData, setHomeData] = useState(null)
  const [projectData, setProjectData] = useState(null)
  const [serviceData, setServiceData] = useState(null)
  const [skillData, setSkillData] = useState(null)
  const [socialData, setSocialData] = useState(null)
  const [workflowData, setWorkflowData] = useState(null)

  useEffect(() => {
    const CONTENTFUL_BEARER = process.env.REACT_APP_CONTENTFUL_BEARER
    window
      .fetch('https://graphql.contentful.com/content/v1/spaces/alowrex0ufnr/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CONTENTFUL_BEARER}`,
        },
        // send GraphQL query
        body: JSON.stringify({ query }),
        order: 'fields.myCustomDateField'
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors)
        }
        // rerender the entire component with new data
        setData(data)
        setAboutData(data.aboutCollection.items[0])
        setCompanyData(data.companyCollection.items)
        setHomeData(data.homeCollection.items[0])
        setProjectData(data.projectCollection.items)
        setServiceData(data.serviceCollection.items)
        setSkillData(data.skillCollection.items[0])
        setSocialData(data.socialCollection.items)
        setWorkflowData(data.workflowCollection.items)
      })
  }, [])

  if (!data) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          alignItems='center'
          justifyContent='center'
        >
          <Grid item xs={1}>
            <CircularProgress />
          </Grid>
        </Grid> 
      </ThemeProvider>
    )
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SiteHeader />
        <Container maxWidth='xl'>
          <Routes>
            <Route path='/' element={
              <Home 
                homeData={homeData}
                companyData={companyData}
                workflowData={workflowData}
              />
            }/>
            <Route path='/services' element={<Services serviceData={serviceData} />} />
            <Route path='/projects' element={<Projects projectData={projectData} />} />
            <Route path='/about' element={
              <About 
                aboutData={aboutData} 
                skillData={skillData}
                socialData={socialData}
              />
            }/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          <SiteFooter />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App