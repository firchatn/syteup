(function(window) {
    "use strict";

    function setupGoogleAnalytics(settings) {
        var _gaq = _gaq || [];
        _gaq.push(["_setAccount", settings["tracking_id"]]);
        _gaq.push(["_trackPageview"]);
        var ga = document.createElement("script");
        ga.type = "text/javascript";
        ga.async = true;
        ga.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(ga, s);
    }
    window.googleAnalyticsPlugin = {
        setup: setupGoogleAnalytics
    };
})(window);
