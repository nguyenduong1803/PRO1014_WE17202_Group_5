import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { AuthenProvider } from './contexts/AuthenContext';
import AdminLayout from "./layout/Admin/AdminLayout";
import SiteLayout from "./layout/Site/SiteLayout";
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthenProvider>
          <Switch>
            <Route exact path="/admin/*" component={AdminLayout} />
            <Route exact path="/*" component={SiteLayout} />
          </Switch>
        </AuthenProvider>
      </Provider>
    </>
  );
}

export default App;
