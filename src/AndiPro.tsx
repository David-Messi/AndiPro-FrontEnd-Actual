
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { AppTheme } from './theme';

import { store } from './store';





export const AndiPro = () => {


    return (

      <Provider store={ store } >
        <AppTheme>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </AppTheme>
      </Provider>


    )




}
