window.onload = function() {

    setInterval(calcDay, 1000);
};

function calcDay(){
    var startDate = new Date('1999-11-13');
    var todayDate = new Date();

    var day = (parseInt((todayDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24)).toString();
    var hour = (parseInt((todayDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 % 24 )).toString();
    var minute = (parseInt((todayDate.getTime() - startDate.getTime()) / 1000 / 60 % 60 )).toString();
    var second = (parseInt((todayDate.getTime() - startDate.getTime()) / 1000 % 60  )).toString();

    document.getElementById("mosolDay").innerHTML =  "승현이는 오늘로 " + day + "일 " + hour + "시간 " + minute + "분 " + second + "초 째 모쏠";

}