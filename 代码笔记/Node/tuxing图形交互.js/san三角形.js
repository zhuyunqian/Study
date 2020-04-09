function sanjiao(layer) {
    var str = "";
    for (var i = 1; i <= layer; i++) {
        var spaceNum = layer - i;
        for (var j = 0; j < spaceNum; j++) {
            str += " ";
        }
        var starNum = 2 * i - 1;
        for (var j = 0; j < starNum; j++) {
            str += "*";
        }
        if (i < layer) {
            str += "\n";
        } else {
            break;
        }
    }
    console.log(str);
}
sanjiao(10);