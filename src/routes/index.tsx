import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { Home } from "../pages/Home/Home";
// import { Route } from "./Route";

// export const Routes = () => (
// <DomRouter>
//   <Route exact path="/" component={Home} />
//   <Route path="/dashboard" component={Dashboard} />
//   <Route path="/demo" component={AdmDashboard} />
//   <Route path="/redflag" component={Redflag} />
//   <Route path="/answered" component={Answered} />
// </DomRouter>

export const Routes = () => {
  const { authenticated, setAuthenticated } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    history.push("/");
    localStorage.clear();
    setAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("@ask.demo:token");

    if (token) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      {/*<Route exact path="/dashboard">
        <Dashboard authenticated={authenticated} handleLogout={handleLogout} />
      </Route>
      <Route exact path="/demo">
        <AdmDashboard
          authenticated={authenticated}
          handleLogout={handleLogout}
        />
      </Route>
      <Route exact path="/answered">
        <Answered authenticated={authenticated} handleLogout={handleLogout} />
      </Route>
      <Route exact path="/redflag">
        <Redflag authenticated={authenticated} handleLogout={handleLogout} />
      </Route> */}
    </Switch>
  );
};

// );
