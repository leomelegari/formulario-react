import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";

const Router = () => {
    return (
        <AnimatePresence>
            <Switch>
                <Route exact path="/"><Login /></Route>
                <Route path="/dashboard/:name"><Dashboard /></Route>
            </Switch>
        </AnimatePresence>
    )
}

export default Router;