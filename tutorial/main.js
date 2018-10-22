var path = process.argv[2];
var filterBy = process.argv[3];
var mymodule = require('./test');

mymodule(path, filterBy, function (err,data) {
    if (err)
        return err;
    
    data.forEach(function(file) {
         console.log(file);
    })
});







