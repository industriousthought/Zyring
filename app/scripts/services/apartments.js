
app.factory('Apartments', [ '$resource',
    function($resource) {
        var obj = {
            'listing': $resource('http://spidey.zyring.com/cities/:city')
        };

    console.log(obj.listing);
        return obj;
}]);
