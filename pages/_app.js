import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { Provider } from 'react-redux';
import {persistor, store} from '../store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </PersistGate>
    </Provider>
  )
}
