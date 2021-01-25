changfang('#', 10, 5, '是');

function changfang(nr, c, k, kong) {

    if (kong == '否') {
        for (var i = 1; i <= k; i++) {
            var str = '';
            for (var j = 1; j <= c; j++) {
                str += nr;
            }
            console.log(str);
        }
    } else {

        //空心长方形
        for (var i = 1; i <= k; i++) {
            var str = '';
            for (var j = 1; j <= c; j++) {
                if (i == 1 || j == 1 || i == k || j == c) {
                    str += nr;
                } else {
                    str += ' ';
                }
            }
            console.log(str)
        }
    }
}