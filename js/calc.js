window.onload = function() {

    setInterval(calcDay, 200);
};

function calcDay(){
    var startDate = new Date('1999-11-13');
    var todayDate = new Date();

    document.getElementById("mosol").innerHTML =  "승현이는 오늘로 " + (parseInt((todayDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24)).toString() + "일째 모쏠";

}
