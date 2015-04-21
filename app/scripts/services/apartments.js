
app.factory('Apartments', [ '$resource',
    function($resource) {
        var obj = {
            'listing': $resource('http://spidey.zyring.com/cities/:city')
        };

        return obj;
}]);
