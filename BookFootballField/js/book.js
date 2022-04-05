let hrefField = window.location.hash;
switch (hrefField) {
    case "#Viglacera":
        document.getElementById("nameField").innerHTML = "Sân bóng nhân tạo Viglacera";
        document.getElementById("address").innerHTML = "671 Hoàng Hoa Thám, Vĩnh Phú, Ba Đình";
        document.getElementById("contact").innerHTML = "0946795885";
        break;
    case "#TrungHoa":
        document.getElementById("nameField").innerHTML = "Sân bóng nhân tạo Trung Hòa";
        document.getElementById("address").innerHTML = "Ngõ 55-57, đường Trần Phú, Hà Đông";
        document.getElementById("contact").innerHTML = "0962332338-Anh Hoàng";
        break;
    case "#ThanhPhat":
        document.getElementById("nameField").innerHTML = "Sân bóng nhân tạo Thành Phát";
        document.getElementById("address").innerHTML = "2 Hoàng Minh Giám, Trung Hoà, Cầu Giấy";
        document.getElementById("contact").innerHTML = "0963478677";
        break;

}

function checkName() {
    let temp = document.getElementById("name").value;
    if (temp.length == 0) {
        document.getElementById("nameError").style.display = "block";
        document.querySelector('#nameError p').innerHTML = "Hãy điền tên của bạn.";
        document.querySelector('#nameError p').style.color = "red";
        return false;
    } else if (temp.length > 50) {
        document.getElementById("nameError").style.display = "block";
        document.querySelector('#nameError p').innerHTML = "Tên không dài quá 50 kí tự.";
        document.querySelector('#nameError p').style.color = "red";
        return false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }
    return true;
}

function checkPhone() {
    let temp = document.getElementById("phone").value;
    if (temp.length == 0) {
        document.getElementById("phoneError").style.display = "block";
        document.querySelector('#phoneError p').innerHTML = "Hãy điền số điện thoại của bạn.";
        document.querySelector('#phoneError p').style.color = "red";
        return false;
    } else if (temp.length > 50) {
        document.getElementById("phoneError").style.display = "block";
        document.querySelector('#phoneError p').innerHTML = "Số điện thoại không dài quá 50 kí tự.";
        document.querySelector('#phoneError p').style.color = "red";
        return false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }
    return true;
}

function checkRangeTime() {
    let temp = document.getElementById("rangeTime").value;
    if (temp == "") {
        document.getElementById("rangeTimeError").style.display = "block";
        document.querySelector('#rangeTimeError p').innerHTML = "Hãy chọn khung giờ muốn đặt sân.";
        document.querySelector('#rangeTimeError p').style.color = "red";
        return false;
    } else {
        document.getElementById("rangeTimeError").style.display = "none";
    }
    return true;
}

function checkTime() {
    let temp = document.getElementById("time").value;
    if (temp.length == 0) {
        document.getElementById("timeError").style.display = "block";
        document.querySelector('#timeError p').innerHTML = "Hãy nhập số giờ muốn đặt sân.";
        document.querySelector('#timeError p').style.color = "red";
        return false;
    } else if (isNaN(temp) || temp < 0) {
        document.getElementById("timeError").style.display = "block";
        document.querySelector('#timeError p').innerHTML = "Chỉ được phép nhập số dương.";
        document.querySelector('#timeError p').style.color = "red";
        return false;
    } else {
        document.getElementById("timeError").style.display = "none";
    }
    return true;
}

function checkPeople() {
    let temp = document.getElementById("people").value;
    if (temp.length == 0) {
        document.getElementById("peopleError").style.display = "block";
        document.querySelector('#peopleError p').innerHTML = "Hãy nhập số người chơi.";
        document.querySelector('#peopleError p').style.color = "red";
        return false;
    } else if (!(Number.isInteger(Number(temp)) && Number(temp) > 0)) {
        document.getElementById("peopleError").style.display = "block";
        document.querySelector('#peopleError p').innerHTML = "Chỉ được phép nhập số nguyên dương.";
        document.querySelector('#peopleError p').style.color = "red";
        return false;
    } else {
        document.getElementById("peopleError").style.display = "none";
    }
    return true;
}

function checkTeam() {
    let temp = document.getElementById("team").value;
    if (temp.length == 0) {
        document.getElementById("teamError").style.display = "block";
        document.querySelector('#teamError p').innerHTML = "Hãy nhập số đội chơi.";
        document.querySelector('#teamError p').style.color = "red";
        return false;
    } else if (!(Number.isInteger(Number(temp)) && Number(temp) > 0)) {
        document.getElementById("teamError").style.display = "block";
        document.querySelector('#teamError p').innerHTML = "Chỉ được phép nhập số nguyên dương.";
        document.querySelector('#teamError p').style.color = "red";
        return false;
    } else {
        document.getElementById("teamError").style.display = "none";
    }
    return true;
}

function checkData() {
    let temp = true;
    if (!checkName()) {
        temp = false;
    }
    if (!checkPhone()) {
        temp = false;
    }
    if (!checkRangeTime()) {
        temp = false;
    }
    if (!checkTime()) {
        temp = false;
    }
    if (!checkPeople()) {
        temp = false;
    }
    if (!checkTeam()) {
        temp = false;
    }

    if (temp)
        alert("Thành Công!");

    return temp;
}

function checkDataForTotal() {
    let check = true;

    let temp = document.getElementById("name").value;
    if (temp.length == 0) {
        check = false;
    } else if (temp.length > 50) {
        check = false;
    }

    temp = document.getElementById("phone").value;
    if (temp.length == 0) {
        check == false;
    } else if (temp.length > 50) {
        check = false;
    }

    temp = document.getElementById("rangeTime").value;
    if (temp == "") {
        check = false;
    }

    temp = document.getElementById("time").value;
    if (temp.length == 0) {
        check = false;
    } else if (isNaN(temp) || temp < 0) {
        check = false;
    }

    temp = document.getElementById("people").value;
    if (temp.length == 0) {
        check = false;
    } else if (!(Number.isInteger(Number(temp)) && Number(temp) > 0)) {
        check = false;
    }

    temp = document.getElementById("team").value;
    if (temp.length == 0) {
        check = false;
    } else if (!(Number.isInteger(Number(temp)) && Number(temp) > 0)) {
        check = false;
    }

    if (check == false) {
        document.getElementById("total").innerHTML = "Hãy lựa chọn thông tin đặt sân";
        document.getElementById("total").style.color = "red";
    } else {
        let rangeTime = document.getElementById("rangeTime").value;
        let time = document.getElementById("time").value;
        let team = document.getElementById("team").value;
        let checkbox = document.getElementsByName('service');

        let total = 0;
        switch (rangeTime) {
            case "1":
                total += 300000 * time;
                break;
            case "2":
                total += 600000 * time;
                break;
            case "3":
                total += 800000 * time;
                break;
            case "4":
                total += 400000 * time;
                break;
        }

        for (var i = 0; i < checkbox.length; ++i) {
            if (checkbox[i].checked) {
                if (checkbox[i].value == "uniform") {
                    total += 300000 * team;
                }
                if (checkbox[i].value == "referee") {
                    total += 200000 * team;
                }
            }
        }

        document.getElementById("total").innerHTML = Intl.NumberFormat('de-DE').format(total) + " VND";
        document.getElementById("total").style.color = "black";
        document.getElementById("total").style.fontWeight = "bold";
    }
}