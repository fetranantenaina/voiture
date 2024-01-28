
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, RouteProps, Switch, RouteComponentProps } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './pages/Login';
import DashboardPage from './Redirect';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <Redirect from="/" to="/login" />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

interface PrivateRouteProps extends RouteProps {
  component: React.FC<RouteComponentProps>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default App;