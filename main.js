var diemChuan,khuVuc,doiTuong,mon1,mon2,mon3;
function handleDiem(){
    var diemChuan = +document.getElementById("diemChuan").value;
    console.log('diemChuan: ', diemChuan);
    var khuVuc = document.getElementById("khuVuc").value;
    console.log('khuVuc: ', khuVuc);
    var doiTuong = +document.getElementById("doiTuong").value;
    console.log('doiTuong: ', doiTuong);
    var mon1 = +document.getElementById("mon1").value;
    console.log('mon1: ', mon1);
    var mon2 = +document.getElementById("mon2").value;
    console.log('mon2: ', mon2);
    var mon3 = +document.getElementById("mon3").value;
    console.log('mon3: ', mon3);
    var tongDiem = 0;
    console.log('tongDiem: ', tongDiem);


    var diemKhuVuc = 0;
    var diemDoiTuong = 0;
    
    if (mon1 === 0){
        document.getElementById("bai1__result").innerHTML = "Bạn đã rớt";
    }
    if (mon2 === 0){
        document.getElementById("bai1__result").innerHTML = "Bạn đã rớt";
    }
    if (mon3 === 0){
        document.getElementById("bai1__result").innerHTML = "Bạn đã rớt";
    }

    //khu vực
    if (khuVuc === A) {
        diemKhuVuc = 2;
    } else if(khuVuc === B){
        diemKhuVuc = 1;   
    } else if(khuVuc === C ) {
        diemKhuVuc = 0.5;
    }
    else {
        diemKhuVuc = 0;
    }
    
    //đối tượng
    if (diemDoiTuong === 1) {
        diemDoiTuong = 2.5;
    } else if(diemDoiTuong === 2){
        diemDoiTuong = 1.5;   
    } else if(diemDoiTuong === 3 ) {
        diemDoiTuong = 1;
    }
    else {
        diemdiemDoiTuong = 0;
    }

    tongDiem = mon1 + mon2 + mon3 + diemKhuVuc + diemDoiTuong;
    if (diemTong >= diemChuan) {
        document.getElementById("bai1__result").innerHTML = "Bạn đã đậu, điểm của bạn là: ", tongDiem ;
    } else {
        document.getElementById("bai1__result").innerHTML = "Bạn đã rớt";
    }

}

