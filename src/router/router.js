function router(navigator, routes){

    function resolveCurrentRoute(){
        let cache = {};
        return () => {
            let route = navigator.getLocationHash();
            if(route !== cache){
                let resolver = getRouteResolver(route);
                resolver.resolve();
                navigator.setHashLocation(resolver.route);
                cache = route;
            }
        };
    }

    function getRouteResolver(route){
        return getRouteSolverIfThereIsAMatch()
            || getRouteSolverByDefault();

        function getRouteSolverIfThereIsAMatch() {
            return routes.filter(x => x.route === route)[0];
        }

        function getRouteSolverByDefault () {
            return routes.filter(x => x.routeByDefault)[0];
        }
    }

    return {
        resolveCurrentRoute: resolveCurrentRoute
    };
}

module.exports = router;