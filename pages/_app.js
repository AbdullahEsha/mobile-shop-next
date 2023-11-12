import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default App
