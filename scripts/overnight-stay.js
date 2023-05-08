"use strict";

//gather inputs

const checkInDateEl = document.getElementById("checkInDate").value;

const stayLengthEl = document.getElementById('stayLength');

const queenRoomEl = document.getElementById('queenRoomOption');
const kingRoomEl = document.getElementById('kingRoomOption');
const twobedRoomEl = document.getElementById('twobedRoomOption');

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

function onSubmitBtnClicked () {
    console.log('hi')

    roomCostEl.innerHTML = roomRate.toFixed(2);
}

function getRoomRate(checkInDate, roomType) { 
    const monthOfStay = checkInDate.getMonth();
    const onSeason = monthOfStay >= 5 && monthOfStay <= 7;

    let roomRate = 150;
    if (onSeason) {
        roomRate = 250
        if (roomType == twobedRoomEl.checked) {
            roomRate = 350
        }
    } else {
        if (roomType == twobedRoomEl.checked) {
            roomRate = 210
        }
    }

     return roomRate
}

const onSeasonDate = new Date('2023-07-01')
const offSeasonDate = new Date ('2023-02-01')
console.log(`${onSeasonDate} ${twobedRoomEl.checked}`);

