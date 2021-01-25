function ling(nr, ck, kong) {
    if (kong == '否') {
        for (var i = 0; i < ck; i++) {
            var str = '';
            for (var j = ck; j > i; j--) {
                str += " ";
            }
            for (var k = 0; k < 2 * i + 1; k++) {
                str += nr;
            }
            console.log(str);
        }



        for (var i = ck + 1; i > 0; i--) {
            var str = "";
            for (var j = ck + 1; j > i; j--) {
                str += " ";
            }
            for (var k = 0; k < 2 * (i - 1) + 1; k++) {
                str += nr;
            }
            console.log(str);
        }



    } else {

        //空心菱形

        if (ck == 1) return 1;
        var str = '';
        var kong = '';
        var s = '';
        var ko = '';
        for (var i = 1; i <= ck; i++) {
            for (var k = ck - 1; k >= i; k--) {
                kong += ' ';
            }
            for (var j = 1; j <= 2 * i - 1; j++) {
                if (j == 1 || j == 2 * i - 1) {
                    str += '*';
                } else {
                    str += ' ';
                }
            }
            console.log(kong + str);
            str = '';
            kong = '';
        }
        for (var a = ck - 1; a >= 1; a--) {
            for (var b = ck - 1; b >= a; b--) {
                ko += ' ';
            }
            for (var c = 1; c <= 2 * a - 1; c++) {
                if (c == 1 || c == 2 * a - 1) {
                    s += '*';
                } else {
                    s += ' ';
                }
            }
            console.log(ko + s);
            ko = "";
            s = "";
        }

    }
}

ling('g', 2, '否');