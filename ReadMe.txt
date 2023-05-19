I/righ in terminal:

1/npm audit fix --force
2/npm i react-router-dom

II/go to index.js
1/add 
 		'import { BrowserRouter } from 'react-router-dom';'
2/put <app> betwen <BrowserRouter> as folow
		  <BrowserRouter>
    			<App />
  			</BrowserRouter>
III/in app.js
inport import { Link, Route, Routes } from 'react-router-dom';
IV/on app() function
