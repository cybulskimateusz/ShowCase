function matrixRewrite(starttime, maxtime, cell, makeid, name){
    for (var i = 0; i <= 10; i++) {
                (function(i) {
                  for (var j = starttime; j <= maxtime; j += 100) {
                    if (j < maxtime)
                      setTimeout(function() {
                        cell[i].innerHTML = makeid(1);
                      }, j);
                    else
                      setTimeout(function() {
                        cell[i].innerHTML = name.charAt(i);
                      }, j);
                  }
                })(i, maxtime);
                starttime += 100;
                maxtime += 100;
}}

export default matrixRewrite