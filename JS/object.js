var obj={
    name:"Nguyen Van An",
    age:18,
    telephone:["025456","5454255"],
    girlFriend:{
        name: "Nguyễn Thị Hà",
        age:16,
        eat:function (){
            console.log("ăn...cơm");
        }
    },
    run:function (){
        console.log( this.name+" running...");
    }
}
obj.name="Nguyễn Hà Mạnh";
console.log(obj.name);
obj.run();
obj.girlFriend.eat();
// obj.age # obj.girlFriend.age
var sinhVien={
    name: "Nguyễn Hà Mạnh",
    age: 21,
    address:"Hà Nội",
    telephone: "0327497279",
    class:{
        tenLop:"T2203E",
        phongHoc:"B16",
    },
    nhom:{
        tenNhom:"nhom4",
        dsThanhvien:[
            {
                name:"Nguyễn Văn Cáp",
                telephone:"4114811845",
            },
            {
                name:"Nguyễn Văn Cừ",
                telephone:"41104811845",
            }

        ]


    }

};
// console.log(sinhVien.nhom.dsThanhvien[0].name);
console.log("danh sach thanh vien");
for(var i=0;i<sinhVien.nhom.dsThanhvien.length;i++){
    console.log(sinhVien.nhom.dsThanhvien[i].name);
}