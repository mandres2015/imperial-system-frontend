import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper, store } from '../redux/store'
import { Provider } from 'react-redux'
import Link from 'next/link'
import route from '../core/routes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
