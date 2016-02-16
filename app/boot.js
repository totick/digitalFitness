System.register(['angular2/platform/browser', './main.component'], function(exports_1) {
    var browser_1, main_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(main_component_1.MainComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map