import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
