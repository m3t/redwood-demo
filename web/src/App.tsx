import { AuthProvider } from '@redwoodjs/auth'
import { PublicClientApplication } from '@azure/msal-browser'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const azureActiveDirectoryClient = new PublicClientApplication({
    auth: {
      clientId: process.env.AZURE_ACTIVE_DIRECTORY_CLIENT_ID,
      authority: process.env.AZURE_ACTIVE_DIRECTORY_AUTHORITY,
      redirectUri: process.env.AZURE_ACTIVE_DIRECTORY_REDIRECT_URI,
      postLogoutRedirectUri: process.env.AZURE_ACTIVE_DIRECTORY_LOGOUT_REDIRECT_URI,
    },
  })

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider client={azureActiveDirectoryClient} type="azureActiveDirectory">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
