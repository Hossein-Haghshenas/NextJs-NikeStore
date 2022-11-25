import '../styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900',] })

function MyApp({ Component, pageProps }) {
  return (
    <section className={poppins}>
      <Component {...pageProps} />
    </section>
  )
}

export default MyApp
