/* bài 1
    Đầu vào:
         nhập vào số ngày làm:ngayLam
        const Luong1Ngay = 100000
    Xử lý
         LuongThang = ngayLam*Luong1Ngay
    b3 
        LuongThang
*/
var currentFormat = new Intl.NumberFormat("vn-VN")
var ngayLam = 5;
const luong1Ngay = 100000;
var luongThang = luong1Ngay*ngayLam;
console.log("Bài 1:");
console.log("Lương của "+ngayLam+" la: "+currentFormat.format(luongThang));

/* bài 2
    Đầu vào 
        nhập vào 5 số thực numb_1 numb_2 numb_3 numb_4 numb_5
    Xử lý
        TBC = (numb_1 + numb_2 + numb_3 + numb_4 + numb_5)/5
    Đầu ra
        TBC
*/
var numb_1 = 1;
var numb_2 = 2;
var numb_3 = 3;
var numb_4 = 4;
var numb_5 = 5;
var numb = 5;
console.log("Bài 2:");
console.log("Tổng của 5 số thực nhập vào:"+(numb_1 + numb_2 + numb_3 + numb_4 + numb_5)/numb);

/*bài 3
    đầu vào
        nhập số tiền USD tienUSD
        const VND = 23.500
    xử lý
        tienUSD * VND
    đầu ra
        số tiền sau quy đổi
*/
var tienUSD = 4;
const VND = 23500;
console.log("Bài 3:");
console.log("Số tiền sau quy đổi:" + currentFormat.format((tienUSD*VND)));

/*bài 4
    đầu vào
        nhập vào chiều dài: CD
        nhập vào chiều rộng: CR
    xử lý
        diện tích HCN: CD*CR
        chu vi HCN: (CD+CR)*2
    đầu ra
        diện tích
        chu vi
*/
var chieudai = 5;
var chieurong = 4;
console.log("Bài 4:");
console.log("Diện tích HCN:"+(chieudai*chieurong));
console.log("Chu vi:"+((chieudai+chieurong)*2));

/*
    đầu vào
        nhập vào con số number
    xử lý
        lấy số hàng đơn vị donvi = number%10
        lấy số hàng chục chuc = number/10
        donvi + chuc
    đầu ra
        tổng 2 ký số
*/
var number = 99;
var donvi = number%10;
var chuc = Math.floor(number/10);
console.log("Tổng 2 ký số:"+(donvi+chuc)); 