window.NakerNoventa = window.NakerNoventa || {};

(NakerNoventa => {

    function router(navigator, routes){

        async function resolveRoute(){
            let path = navigator.getLocationHash();
            return await routes.getRouteSolver(path);
        }

        return {
            resolveRoute: resolveRoute
        };
    }

    NakerNoventa.Router = router;

})(window.NakerNoventa);
