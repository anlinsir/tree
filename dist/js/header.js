define(["jquery"],function(o){o.ajax("/html/header.html").done(function(e){console.log(e),o(".footer").html(e)}),o(".header").load("/html/header.html")});