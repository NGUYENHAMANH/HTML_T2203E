var chiphi=0;
var doanhthu=0;
for(var i=0;i<30;i++){
    //tao random 27 so nguyen
    var ds=[];
    for(var j=0;j<27;j++){
        var r=Math.random();//sinh ra so ngau nhien 0<n<1
        r=r*100; //0<r<100
        r=parseInt(r);
        ds.push(r);
    }
    //chon so va dat tien cuoc
    do{
        var luckynumber;
        luckynumber=prompt("nhap mot so ");
        luckynumber=parseInt(luckynumber);
    }while(isNaN(sn)||sn<=0||luckynumber>99);

    var money;
    do{
        money=prompt("nhap so tien cuoc: ");
        money=parseInt(money);
    }while (isNaN(money)||money<=0||money%100!=0);
    //soi giai thuong
    var dem=0;
    for(var k=0;k<ds.length;k++){
        if(ds[k]==luckynumber){
            dem++;
        }
    }
    console.log("hom nay trung"+dem+"giai thuong");
    //thong ke tien
    chiphi+=money;
    doanhthu+=(dem*(80/23)*money);
}
