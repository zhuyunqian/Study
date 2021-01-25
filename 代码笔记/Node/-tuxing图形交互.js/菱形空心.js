function ling(n) {
    if (n == 1) return 1;
    var str = '';
    var kong = '';
    var s = '';
    var ko = '';
    for (var i = 1; i <= n; i++) {
        for (var k = n - 1; k >= i; k--) {
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
    for (var a = n - 1; a >= 1; a--) {
        for (var b = n - 1; b >= a; b--) {
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
ling(7);