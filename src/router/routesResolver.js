window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function routesResolver(routes){

        function getRouteSolverHandler(route){
            return new Promise(resolve => {
                resolve(getRouteSolver(route));
            });
        }

        function getRouteSolver(route){
            let defaultRoute = routes.filter(x => x.routeByDefault)[0];

            routes.map(x => {
                if(x.route === route){
                    defaultRoute = x;
                }
            });

            return defaultRoute;
        }

        return {
            getRouteSolverHandler: getRouteSolverHandler
        }
    }

    function createRoutesResolver(routes){
        return routesResolver(routes)
    }

    NakerNoventa.RoutesResolver = routesResolver;
    NakerNoventa.CreateRoutesResolver = createRoutesResolver;

})(window.NakerNoventa);