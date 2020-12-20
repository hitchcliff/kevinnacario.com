import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { FramerTest } from "../app/index";
import { Loading } from "../components";

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/framer" component={FramerTest} />
        <Route path="*">Page not found</Route>
      </Switch>
    </Suspense>
  );
}
