/* Bài 1

Mô hình 3 khối: 
1. Đầu vào 
- lương 1 ngày
- số ngày làm việc 
2. Xử lý 
- gán biến lương 1 ngày
- gán biến số ngày làm việc
- Gán biến tiền lương (salary) = lương 1 ngày x số ngày làm việc 
3. Đầu ra
- Tiền lương tương ướng 

*/

var wageHour = 100000;
var workingDay = 10;


// Cong thuc tinh luong 

var salary = wageHour*workingDay;

// Đầu ra
console.log ("Bài 1: Salary = " + salary + " VNĐ");



/* BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ THỰC 
Mô hình 3 khối: 
1. Đầu vào 
- Gía trị của 5 số thực
2. Xử lý 
- gán giá trị cho từng số thực 
- tính tổng 5 số thực 
- tính trung bình cộng = tổng/5
3. Đầu ra
- Giá trị trung bình 
*/

var soN1 = 4; 
var soN2 = 10; 
var soN3 = 20; 
var soN4 = 15; 
var soN5 = 1;

// tổng 5 số 

var sumN = soN1 + soN2 + soN3 + soN4 + soN5;

// Trung bình cộng

var avgN= sumN/5; 

console.log ("Bài 2: Giá trị trung bình của 5 số thực: " + avgN);


/* BÀI 3: Exchange money 
Mô hình 3 khối: 
1. Đầu vào 
- ExchangeRate (tỉ giá)
- Số tiền USD muốn đổi 
2. Xử lý 
- gán giá trị cho tỉ giá 
- Gán gái trị cho số tiền $ muốn đổi 
- tính số tiền Việt quy đổi = tỉ giá x số tiền
3. Đầu ra
- Giá trị đã quy đổi sang VND 
*/

var exchangeRate = 23500; 
var monUsd = 1000; 
var tienViet =  exchangeRate*monUsd; 

console.log ("Bài 3: " + tienViet + " VNĐ")


/* BÀI 4: Diện tích, chu vi hình chữ nhật 
Mô hình 3 khối: 
1. Đầu vào 
- Chiều dài
- chiều rộng
2. Xử lý 
- gán giá trị cho chiều dài, chiều rộng 
- Diện tích = chiều dài*chiều rộng
- Chu vi = (dài + rộng) *2
3. Đầu ra
- Giá trị diện tích 
- Giá trị chu vi 
*/

var chieuDai = 10;
var chieuRong = 5; 
var dienTich = chieuDai*chieuRong;
var chuVi = (chieuDai+chieuRong)*2;

console.log ("Bài 4: Diện tích hình chữ nhật: " + dienTich);
console.log ("Bài 4: Chu vi hình chữ nhật: " + chuVi);

/* BÀI 5: Tổng 2 ký số 
Mô hình 3 khối: 
1. Đầu vào 
- số có 2 chữ số 
2. Xử lý 
- Tính số hàng chục: n/10  (nhớ làm tròn số)
- Tính số hàng đơn vị: n%10 (lấy số dư)
3. Đầu ra
- tổng 2 của số hàng chục và số hàng đơn vị 
*/

var soNguyen = 25;
var hangChuc = Math.floor(soNguyen/10);
var hangDonvi = soNguyen % 10;
var tongSo = hangChuc + hangDonvi; 

console.log ("Bài 5: Tổng giá trị của 2 ký số là: " + tongSo);



