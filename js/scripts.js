/* Mobile nav functions */
function openNav(){
    document.getElementById("mobile_menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile_menu").style.width = "0";
}

/* Modal functions */

    function openModal(){
        document.querySelector(".modal").style.display = "flex";
    }

    function closeModal(){
        document.querySelector(".modal").style.display = "none";
    }


/* Social Media sharedcounts */

   jQuery.sharedCount = function(url, fn) {
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
    return jQuery.ajax(arg);
  };

   jQuery(document).ready(function($){
    $.sharedCount(location.href, function(data){
        console.log(data.twitter);
        console.log(data.facebook);
    });
});