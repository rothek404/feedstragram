var feed = new Instafeed({
    // get: 'tagged',
    // tagName: 'awesome',
    get: "user",
    userId: 8636519331,
    accessToken: "8636519331.1677ed0.f095d3f928414041bcfe639937cf9851",
    limit: 3,
    resolution: "standard_resolution",
    useHttp: "true",
    template: '<a class="insta-feed-item" href="{{link}}" target="_blank" style="background:url({{image}}) no-repeat center center;"><div class="insta-feed-item__info"> {{caption}} {{likes}} {{comments}} </div></a>'
});
feed.run();

var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  feed.next()
});