var x;
x=10;

var y;
y="hello world!";

x="T2203E";
y=20;

//gia su lam mot loat cac thao tac
console.log(x);
console.log(y);
var z=x+y;
var t=y+x;
y=y+10;

console.log(z);
console.log(t);
console.log(y);

console.log("y="+y);
var k="15";
console.log(k+10);

for(var i=0;i<20;i++){
    console.log("i="+i);
}

var arr=[];
arr[0]=20;
arr[1]="hello";
arr[2]=true;

arr[3]=[1,2,3,4];
arr[3][4]=[5,3,1];

var arr2=[];
for(var i=0;i<20;i++){
    arr2[i]=i*i+1;
}

tinhtong(5,9);
tinhtong("xin chao",8);
arr2[arr2.length]=1001;

for(var i=0;i<10;i++){
    arr2.push(1001*i+1001);
}
function tinhtong(a,b){
    // return a+b;
    console.log(a+b);
}

var giaithua=function (n){
    var gt=1;
    for(var i=1;i<n;i++){
        gt *=i;
    }
    // return gt;
    console.log("GT: "+gt);
}
giaithua(7);

var nhapmang=(n)=>{
    var ary=[];
    for(var i=0;i<n;i++){
        ary.push(i*i+n);
    }
    return ary;
}
var arr3=nhapmang(10);

//mot so ham hay

// alert("Yêu cầu phải trên 18 tuổi");  //void
confirm("bạn chắc chắn muốn truy cập tiếp?");//booler
var year =prompt("bạn bao nhiêu tuổi?");//string
console.log(year);

year=parseInt(year);//chuyen tu string-->number
console.log("sau khi them 2 tuoi: "+(year+2));

var p="abc15";
var q="15abc";
p=parseInt(p);
q=parseInt(q);
console.log("kiem tra NAN cua p: "+isNaN(p));
console.log("kiem tra NAN cua q: "+isNaN(q));
//sinh 1 so ngau nhien
var r=Math.random();//sinh ra so ngau nhien 0<n<1
r=r*100; //0<r<100
r=parseInt(r);
/*
do{
    var sn;
    sn=prompt("nhap mot so nguyen duong")
    sn=parseInt(sn)
}while(isNaN(sn)||sn<=0||r!=sn);

 */




