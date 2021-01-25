//交互式四种图形打印,创建了Tuxing类,包括了内容属性,长度属性,是否空心属性,以及4个图形的方法.

const rl = require('readline'); //导入模块
var readline = rl.createInterface({ //创建readline接口
    input: process.stdin,
    output: process.stdout
});


//功能提示

console.log('\n//------------------本工具提供 正方形、三角形、回字、菱形的打印-------------------//\n\n请依次输入图形、填充内容、边长、是否空心，并用空格分割.\n');


//处理交互功能:

readline.on("line", (mes) => { //事件监听
    if (mes == ".exit") { //如果输入.exit,结束程序
        process.exit(); //创建出口    

    } else { //处理输入内容

        var args = mes.trim().split(" "); //分割成数组

        var zz = new Tuxing(args[1], args[2], args[3]); //Tuxing类实例化,并传入参数

        //判断调用哪个类方法:
        if (args[0] == "正方形") {
            zz.zfx();
        } else if (args[0] == "三角形") {
            zz.sjx();
        } else if (args[0] == "回字") {
            zz.hui();
        } else if (args[0] == "菱形") {
            zz.ling();

            //图形不存在,给出提示:
        } else if (args[0] != "正方形" || args[0] != "回字" || args[0] != "三角形" ||
            args[0] != "菱形") {
            console.log("输入的图形不存在");
        }
        console.log('\n输入.exit退出，或者重新输入图形 填充内容 边长 是否空心');
    }
});


//--------------------------------------------------------------------------------//

//创建Tuxing类

class Tuxing {
    constructor(nr, ck, kong) { //创建共有属性.构造方法,初始化数据,new完自动调用
        this.nr = nr;
        this.ck = ck;
        this.kong = kong;
    }



    //正方形方法:


    zfx() {

        //判断输入的长度格式是否正确
        if (isNaN(this.ck) || String(this.ck).indexOf(".") != -1) {
            return console.log("-----仅支持正整数.-----");
        }
        if (this.ck < 2) {
            return console.log("-----边长不能小于2.-----");
        }

        //实心正方形:
        console.log('\n'); //执行一次换行,和上文空开一行
        if (this.kong == '否') { //执行实心的代码块
            for (var j = 0; j < this.ck; j++) {
                var str = '';
                for (var k = 0; k < this.ck; k++) {
                    str += ' ' + this.nr;
                }
                console.log(str);
            }


        } else if (this.kong == "是") { //执行空心图形的代码块

            //空心正方形:
            console.log('\n');
            for (var j = 0; j < this.ck; j++) {
                var str = '';
                for (var k = 0; k < this.ck; k++) {
                    if (j == 0 || j == this.ck - 1 || k == 0 || k == this.ck - 1) {
                        str += ' ' + this.nr;
                    } else {
                        str += '  ';
                    }
                }
                console.log(str);
            }
        } else {
            console.log("-----我不明白你想要空心还是实心的-----");
        }
    }



    //三角形方法:


    sjx() {

        //判断输入的长度格式是否正确
        if (isNaN(this.ck) || String(this.ck).indexOf(".") != -1) {
            return console.log("-----仅支持正整数.-----");
        }
        if (this.ck < 2) {
            return console.log("-----边长不能小于2.-----");
        }


        //实心等腰三角形:
        console.log('\n');
        if (this.kong == '否') { //执行实心图形代码块
            var str = "";
            for (var i = 1; i <= this.ck; i++) { //填充空白
                var spaceNum = this.ck - i;
                for (var j = 0; j < spaceNum; j++) {
                    str += " ";
                }

                var starNum = 2 * i - 1; //填充内容
                for (var j = 0; j < starNum; j++) {
                    str += this.nr;
                }
                if (i < this.ck) { //删除最后一行
                    str += "\n";
                } else {
                    break;
                }
            }
            console.log(str);

        } else if (this.kong == "是") { //执行是空心图形代码块   

            //空心等腰三角形:
            console.log('\n');
            var str = ""; //填充空白
            for (var i = 1; i <= this.ck; i++) {
                var spaceNum = this.ck - i;
                for (var j = 1; j <= spaceNum; j++) {
                    str += " ";
                }

                var starNum = 2 * i - 1; //填充内容
                for (var j = 1; j <= starNum; j++) {
                    if (i == this.ck || j == 1 || j == starNum) {
                        str += this.nr;
                    } else {
                        str += ' ';
                    }
                }

                if (i < this.ck) { //减去最后一行空白
                    str += "\n";
                } else {
                    break;
                }
            }
            console.log(str);
        } else {
            console.log("-----我不明白你想要空心还是实心的.-----")
        }
    }



    //回字方法:


    hui() {

        //判断输入的长度格式是否正确
        if (isNaN(this.ck) || String(this.ck).indexOf(".") != -1) {
            return console.log("-----仅支持正整数.-----");
        }
        if (this.ck < 2) {
            return console.log("-----边长不能小于2.-----");
        }


        //实心回字
        console.log('\n');

        if (this.kong == '否') { //执行实心图形代码块
            for (var j = 0; j < this.ck; j++) {
                var str = '';
                for (var k = 0; k < this.ck; k++) {
                    str += ' ' + this.nr;
                }
                console.log(str);
            }
        } else if (this.kong == "是") { //执行空心图形代码块

            //空心回字
            console.log('\n');

            if (this.ck < 7) { //如果边长小于7,则不会显示出回字
                return console.log('回字边长要大于等7,请重新输入:');
            }
            for (var j = 0; j < this.ck; j++) { //外侧边填充
                var str = '';
                for (var k = 0; k < this.ck; k++) {
                    if (j == 0 || j == this.ck - 1 || k == 0 || k == this.ck - 1) {
                        str += ' ' + this.nr;

                    } else if (j == 2 && k != 1 && k != this.ck - 2 || j == this.ck - 3 && k != 1 && k != this.ck - 2 || k == 2 && j != 1 && j != this.ck - 2 || k == this.ck - 3 && j != 1 && j != this.ck - 2) { //内侧边填充内容
                        str += ' ' + this.nr;
                    } else { //其他位置填充空白
                        str += '  ';
                    }
                }
                console.log(str);
            }

        } else {
            console.log("-----我不明白你想要空心还是实心的.-----")
        }
    }



    //菱形方法:


    ling() {

        //判断输入的数字格式是否正确
        if (isNaN(this.ck) || String(this.ck).indexOf(".") != -1) {
            return console.log("-----仅支持正整数.-----");
        }
        if (this.ck < 2) {
            return console.log("-----边长不能小于2.-----");
        }

        //实心菱形
        console.log('\n');
        if (this.kong == '否') { //执行实心图形代码块
            //上半部分空白占位
            for (var i = 0; i < this.ck; i++) {
                var str = '';
                for (var j = this.ck; j > i; j--) {
                    str += " ";
                }

                //填充内容
                for (var k = 0; k < 2 * i + 1; k++) {
                    str += this.nr;
                }
                console.log(str);
            }

            //下半部分空白占位
            for (var i = this.ck - 1; i >= 0; i--) {
                var str = "";
                for (var j = this.ck; j >= i; j--) {
                    str += " ";
                }

                //填充内容
                for (var k = 0; k < 2 * (i - 1) + 1; k++) {
                    str += this.nr;
                }
                console.log(str);
            }


        } else if (this.kong == "是") { //执行空心图形代码块

            //空心菱形
            console.log('\n');

            if (this.ck == 1) return 1;
            var str = '';
            var kon = '';
            var ko = '';

            //上半部分空白占位
            for (var i = 1; i <= this.ck; i++) {
                for (var k = this.ck - 1; k >= i; k--) {
                    kon += ' ';
                }
                //上半部分填充内容
                for (var j = 1; j <= 2 * i - 1; j++) {
                    if (j == 1 || j == 2 * i - 1) {
                        str += this.nr;
                    } else {
                        str += ' ';
                    }
                }
                console.log(kon + str);
                str = '';
                kon = '';
            }

            //空心菱形下半部分空白占位
            for (var a = this.ck - 1; a >= 1; a--) {
                for (var b = this.ck - 1; b >= a; b--) {
                    ko += ' ';
                }

                //填充内容
                for (var c = 1; c <= 2 * a - 1; c++) {
                    if (c == 1 || c == 2 * a - 1) {
                        str += this.nr;
                    } else {
                        str += ' ';
                    }
                }
                console.log(ko + str);
                ko = "";
                str = "";
            }
        } else {
            console.log("-----我不明白你想要空心的还是实心的.-----")
        }
    }


} //类创建结束



//最后修改时间:2019.12月27日
//修改内容:格式
//作者:兰鹏飞