
app.factory('Apartments', [ '$resource',
    function($resource) {
        var obj = {
            'city': $resource('http://spidey.zyring.com/cities/:city'),
            'apartment': $resource('http://spidey.zyring.com/apartments/:apartmentId')
        };

        return obj;
}]);
