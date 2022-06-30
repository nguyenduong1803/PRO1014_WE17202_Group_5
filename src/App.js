import { Route, Switch } from 'react-router-dom'
import AdminLayout from "./layout/Admin/AdminLayout";
import SiteLayout from "./layout/Site/SiteLayout";

function App() {
  return (
    <>
        <Switch>
          <Route path="/admin/*" component={AdminLayout} />
          <Route path="/*" component={SiteLayout} />
        </Switch>
    </>
  );
}

export default App;
