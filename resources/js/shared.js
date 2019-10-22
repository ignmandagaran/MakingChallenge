/* Social Media sharedcounts */
(function($){
    sharedCount = function(url, fn) {
        url = encodeURIComponent(url || location.href);
        var domain = "//api.sharedcount.com/v1.0/";
        var apikey = "f7a093c169e08c3e61db32c765638560b61d44ff"
        var arg = {
        data: {
            url: url,
            apikey: apikey
        },
        url: domain,
        cache: true,
        dataType: "json"
        };
        if ('withCredentials' in new XMLHttpRequest) {
        arg.success = fn;
        } else {
        var cb = "sc_" + url.replace(/\W/g, '');
        window[cb] = fn;
        arg.jsonpCallback = cb;
        arg.dataType += "p";
        }
        return $.ajax(arg);
    };

    function nFormatter(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'G';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num;
    }

parseSharedCount = function(url) {
    sharedCount(url, function(data){
       var facebookCount        = data.Facebook.total_count;
       var twitterCount         = data.Twitter;
       var linkedinCount         = data.LinkedIn;
       $('.facebook .count').text(nFormatter(facebookCount));
       $('.twitter .count').text(nFormatter(twitterCount));
       $('.linkedin .count').text(nFormatter(linkedinCount));
    });
}
})(jQuery);