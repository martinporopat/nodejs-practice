var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

for (var r = 0; r < 3; r++) {
    results[r] = "";
}


function print_results() {
    for (var j = 0; j < 3; j++) {
        console.log(results[j]);
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.log(err)

            results[index] = data.toString();
            if (results[index].length > 0)
                count++;

            if (count == 3)
                print_results()

        }))
    })
}
for (var i = 0; i < 3; i++) {
    httpGet(i);
}



//    response.setEncoding("utf8");
//    response.on("data", function (data) {
//        console.log(data);
//    })
//
//    response.on("error", function (err) {
//        if (err)
//            return err;
//    })
//
//    response.on("end", function (end) {
//        console.log("");
//    })




