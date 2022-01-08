import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './reduxStore/configureStore';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './style/material-themes';

console.log(mainTheme);
const store = configureStore();


ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<ThemeProvider theme={mainTheme}>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
