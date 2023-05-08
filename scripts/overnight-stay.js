"use strict";

//gather inputs

const checkInDateEl = document.getElementById("checkInDate");

const stayLengthEl = document.getElementById('stayLength');

const numOfAdultsEl = document.getElementById('numOfAdults');
const numOfChildrenEl = document.getElementById('numOfChildren');

const noneDiscountEl = document.getElementById('noneDiscount');
const seniorDiscountEl= document.getElementById('seniorDiscount');
const militaryDiscountEl = document.getElementById('militaryDiscount');

const roomCostEl = document.getElementById('roomCost');
const discountsApplied = document.getElementById('discountsApplied');
const taxAmountEl = document.getElementById('taxAmount');
const totalCostEl = document.getElementById('totalCost');


const submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = onSubmitBtnClicked;


// perform calculation

function getRoomType(){
    const queenRoomEl = document.getElementById('queenRoomOption');
    const kingRoomEl = document.getElementById('kingRoomOption');
    const twobedRoomEl = document.getElementById('twobedRoomOption');

    let roomType;
    if (queenRoomEl.checked) {
        roomType == 'queen'
    } else if (kingRoomEl.checked) {
        roomType == 'king'
    } else if (twobedRoomEl.checked) {
        roomType == 'suite'
    }

    return roomType
}

function getRoomRate(checkInDate, roomType) { 
    const monthOfStay = checkInDate.getMonth();
    const onSeason = monthOfStay >= 5 && monthOfStay <= 7;

    let roomRate = 150;
    if (onSeason) {
        roomRate = 250
        if (roomType == 'suite') {
            roomRate = 350
        }
    } else {
        if (roomType == 'suite') {
            roomRate = 210
        }
    }

     return roomRate
}

function onSubmitBtnClicked () {
    console.log('hi')

    const userDate = checkInDateEl.value
    const checkInDate = new Date(userDate)
    const roomType = getRoomType();
    const roomRate = getRoomRate(checkInDate, roomType);

    
    console.log(roomRate)
}

