function sanjiao(ck) {
    var str = "";
    //控制行
    for (var i = 1; i <= ck; i++) {
        var spaceNum = ck - i;
        //控制空白
        for (var j = 1; j <= spaceNum; j++) {
            str += " ";
        }

        //控制内容
        var starNum = 2 * i - 1;
        for (var j = 1; j <= starNum; j++) {
            if (i == ck || j == 1 || j == starNum) {

                str += "*";

            } else {
                str += ' ';
            }

        }

        //减去最后一行空白
        if (i < ck) {
            str += "\n";
        } else {
            break;
        }

    }
    console.log(str);
}

sanjiao(5);