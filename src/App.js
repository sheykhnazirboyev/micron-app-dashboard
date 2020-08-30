import React  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './Pages/admin/Home';
import Profile from './Pages/admin/Profile';
import ProductAll from './Pages/admin/ProductAll';
import ProductCreate from './Pages/admin/ProductCreate';
import CategoryAll from './Pages/admin/CategoryAll';
import CategoryCreate from './Pages/admin/CategoryCreate';
import ProductEdit from './Pages/admin/ProductEdit';
import ProductShow from './Pages/admin/ProductShow';
import Login from './Pages/admin/Login';
import Register from './Pages/admin/Register';
import CheckAuth from './helpers/checkAuth';
import Protected from './routes/Protected';
import ErrorPage from './Pages/admin/Error';
import ServerError from './Pages/admin/ServerError';


function App() {
	CheckAuth()
	console.log = function () {};
	
	return (
		<div className="App">
			<Switch>
				<Route exact path="/"  component={() => <Redirect to = "/admin" />} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/admin/login" component={Login} />
				<Route exact path="/admin/register" component={Register} />
				<Route exact path = "/404"  component = {ErrorPage}  />
				<Route exact path = "/500"  component = {ServerError}  />
				{/*  Protected Routes  */}
				<Protected exact path="/admin" component={Dashboard} />
				<Protected exact path="/admin/product/all" component={ProductAll} />
				<Protected exact path="/admin/category/all" component={CategoryAll} />
				<Protected exact path="/admin/profile" component={Profile} />
				<Protected exact path="/admin/product/new" component={ProductCreate} />
				<Protected exact path="/admin/product/edit/:id" component={ProductEdit} />
				<Protected exact path="/admin/product/show/:id" component={ProductShow} />
				<Protected exact path="/admin/category/create" component={CategoryCreate} />
				<Route component = {ErrorPage} />
			</Switch>
		</div>
	);
}

export default App;
