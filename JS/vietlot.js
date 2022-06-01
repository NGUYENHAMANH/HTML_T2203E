function jackpot() {
    var randomNumber = [];// mang chua 6 so ngau nhien
    var ticketNumber = [];// mang chua 6 so nguoi dung mua ve
// tạo ngẫu nhiên 6 số từ 0--> 45
    while (randomNumber.length < 6) {
        var r = Math.random();
        r = r * 46;// muốn có giá trị 45 thì nhân với 46
        r = parseInt(r);
        if (!randomNumber.includes(r)) {
            randomNumber.push(r);
        }
    }
    console.log(randomNumber);
// yêu cầu nhập 6 số khác nhau từ 0--->45
    while (ticketNumber.length < 6) {
        var n = prompt("nhap tu 0--->45: ");
        n = parseInt(n);
        if (!isNaN(n) && !ticketNumber.includes(n) && n > 0 && n <= 45) {
            ticketNumber.push(n);
        }
    }
    var dem = 0;
    for (var i = 0; i < randomNumber.length; i++) {
        if (ticketNumber.includes(randomNumber[i])) {
            dem++;
        }
    }
// setTimeout(function (){
//     switch (dem){
//         case 6: alert("chúc mừng bạn đã trúng 100 tỷ"); break
//         case 5: alert("chúc mừng bạn đã trúng 10 triệu"); break
//         case 4: alert("chúc mừng bạn đã trúng 300 nghìn"); break
//         case 3: alert("chúc mừng bạn đã trúng 50 nghìn"); break
//         default: alert("chúc may mắn lần sau");
//
//     }
// },5000);
    setInterval(function () {
        switch (dem) {
            case 6:
                alert("chúc mừng bạn đã trúng 100 tỷ");
                break
            case 5:
                alert("chúc mừng bạn đã trúng 10 triệu");
                break
            case 4:
                alert("chúc mừng bạn đã trúng 300 nghìn");
                break
            case 3:
                alert("chúc mừng bạn đã trúng 50 nghìn");
                break
            default:
                alert("chúc may mắn lần sau");

        }
    }, 1000);
}
