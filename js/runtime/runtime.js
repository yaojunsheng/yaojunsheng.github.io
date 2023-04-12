var now = new Date;

function createtime() {
    var t = new Date("04/06/2023 00:00:00");
    now.setTime(now.getTime() + 250);
    var e = (now - t) / 1e3 / 60 / 60 / 24,
        a = Math.floor(e),
        n = (now - t) / 1e3 / 60 / 60 - 24 * a,
        r = Math.floor(n);

    if (r < 10) {
        r = "0" + r;
    }

    var s = (now - t) / 1e3 / 60 - 1440 * a - 60 * r,
        i = Math.floor(s);

    if (i < 10) {
        i = "0" + i;
    }

    var o = (now - t) / 1e3 - 86400 * a - 3600 * r - 60 * i,
        l = Math.round(o);

    if (l < 10) {
        l = "0" + l;
    }

    let g = "";

    if (r < 18 && r >= 9) {
        g = "<img class='boardsign' src='https://img01.anzhiy.cn/useruploads/0/2023/04/12/64367444c7e02.png' title='距离月入25k也就还差一个大佬带我~'><span class='textTip'> <br> 本站居然运行了 " + a + " 天</span><span id='runtime'> " + r + " 小时 " + i + " 分 " + l + " 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>";
    } else {
        g = "<img class='boardsign' src='https://img01.anzhiy.cn/useruploads/0/2023/04/12/64367444c7e02.png' title='下班了就该开开心心的玩耍，嘿嘿~'><span class='textTip'> <br> 本站居然运行了 " + a + " 天</span><span id='runtime'> " + r + " 小时 " + i + " 分 " + l + " 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>";
    }

    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = g;
    }
}

setInterval(() => {
    createtime();
}, 250);