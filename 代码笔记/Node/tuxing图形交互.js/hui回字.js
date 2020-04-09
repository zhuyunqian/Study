function hui(nr, ck, kong) {
    if (kong == '否') {
        for (var j = 0; j < ck; j++) {
            var str = '';
            for (var k = 0; k < ck; k++) {
                if (j == 0 || j == ck - 1 || k == 0 || k == ck - 1) {
                    str += nr;
                } else if (j == 2 && k != 1 && k != ck - 2 || j == ck - 3 && k != 1 && k != ck - 2 || k == 2 && j != 1 && j != ck - 2 || k == ck - 3 && j != 1 && j != ck - 2) {
                    str += nr;
                } else {
                    str += ' ';
                }
            }
            console.log(str);
        }
    } else {
        for (var j = 0; j < ck; j++) {
            var str = '';
            for (var k = 0; k < ck; k++) {
                str += nr;
            }
            console.log(str);
        }

    }
}



hui('b', 10, '否');