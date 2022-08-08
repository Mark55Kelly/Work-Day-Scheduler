var text9AM = $('#textarea-9AM');
var text10AM = $('#textarea-10AM');
var text11AM = $('#textarea-11AM');
var text12PM = $('#textarea-12PM');
var text1PM = $('#textarea-1PM');
var text2PM = $('#textarea-2PM');
var text3PM = $('#textarea-3PM');
var text4PM = $('#textarea-4PM');
var text5PM = $('#textarea-5PM');

var savebutton9AM = $('#saveBtn-9AM');
var savebutton10AM = $('#saveBtn-10AM');
var savebutton11AM = $('#saveBtn-11AM');
var savebutton12PM = $('#saveBtn-12PM');
var savebutton1PM = $('#saveBtn-1PM');
var savebutton2PM = $('#saveBtn-2PM');
var savebutton3PM = $('#saveBtn-3PM');
var savebutton4PM = $('#saveBtn-4PM');
var savebutton5PM = $('#saveBtn-5PM');

var timeupdate = function () {
    var currentTime = moment().format('MMM Do, YYYY, HH:mm:ss');
    $('#currentDay').text(currentTime);
    console.log(timeupdate);
};
timeupdate();

function textareasave() {
    var save9AM = JSON.parse(localStorage.getItem('textnineam'));
    var save10AM = JSON.parse(localStorage.getItem('texttenam'));
    var save11AM = JSON.parse(localStorage.getItem('textelevenam'));
    var save12PM = JSON.parse(localStorage.getItem('texttwelvepm'));
    var save1PM = JSON.parse(localStorage.getItem('textonepm'));
    var save2PM = JSON.parse(localStorage.getItem('texttwopm'));
    var save3PM = JSON.parse(localStorage.getItem('textthreepm'));
    var save4PM = JSON.parse(localStorage.getItem('textfourpm'));
    var save5PM = JSON.parse(localStorage.getItem('textfivepm'));

    text9AM.val(save9AM);
    text10AM.val(save10AM);
    text11AM.val(save11AM);
    text12PM.val(save12PM);
    text1PM.val(save1PM);
    text2PM.val(save2PM);
    text3PM.val(save3PM);
    text4PM.val(save4PM);
    text5PM.val(save5PM);

};
textareasave();

function timenowcolorupdate() {
    var hour = new Date().getHours();
    console.log(timenowcolorupdate);
    if (9 >= hour && hour <10) {
        text9AM.addClass('present');
    } else if (hour >=10) {
        text9AM.addClass('past');
    };
    if (hour<9) {
        text9AM.addClass('future');
    };

    //10 AM
    if (10 >= hour && hour <11) {
        text10AM.addClass('present');
    } else if (hour >=11) {
        text10AM.addClass('past');
    };
    if (hour<10) {
        text10AM.addClass('future');
    };

    //11 am
    if (11 >= hour && hour <12) {
        text11AM.addClass('present');
    } else if (hour >=12) {
        text11AM.addClass('past');
    };
    if (hour<11) {
        text11AM.addClass('future');
    };
    // 12
    if (12 >= hour && hour <13) {
        text12PM.addClass('present');
    } else if (hour >=13) {
        text12PM.addClass('past');
    };
    if (hour<12) {
        text12PM.addClass('future');
    };
    // 1
    if (13 >= hour && hour <14) {
        text1PM.addClass('present');
    } else if (hour >=10) {
        text1PM.addClass('past');
    };
    if (hour<13) {
        text1PM.addClass('future');
    };

    // 2
    if (14 >= hour && hour <15) {
        text2PM.addClass('present');
    } else if (hour >=15) {
        text2PM.addClass('past');
    };
    if (hour<14) {
        text2PM.addClass('future');
    };

    // 3
    if (15 >= hour && hour <16) {
        text3PM.addClass('present');
    } else if (hour >=16) {
        text3PM.addClass('past');
    };
    if (hour<15) {
        text3PM.addClass('future');
    };

    // 4
    if (16 >= hour && hour <17) {
        text4PM.addClass('present');
    } else if (hour >=16) {
        text4PM.addClass('past');
    };
    if (hour<16) {
        text4PM.addClass('future');
    };

    // 5
    if (17 >= hour && hour <18) {
        text5PM.addClass('present');
    } else if (hour >=18) {
        text5PM.addClass('past');
    };
    if (hour<17) {
        text5PM.addClass('future');
    };
};
timenowcolorupdate();

var currentTime = new Date();
var futureTime = new Date();
futureTime.setTime(futureTime.getTime() + 3600000);
futureTime.setMinutes(0);
futureTime.setMinutes(0);
var refreshTime = (futureTime.getTime() - currentTime.getTime());
setTimeout(function(){
    window.location.reload(true);
}, refreshTime);

savebutton9AM.on('click', function() {
    var textnineam = text9AM.val();
    localStorage.setItem('textnineam', JSON.stringify(textnineam));
});

savebutton10AM.on('click', function() {
    var texttenam = text10AM.val();
    localStorage.setItem('texttenam', JSON.stringify(texttenam));
});


savebutton11AM.on('click', function () {
    var textelevenam = text11AM.val();
    localStorage.setItem('textelevenam', JSON.stringify(textelevenam));
});

savebutton12PM.on('click', function () {
    var texttwelvepm = text12PM.val();
    localStorage.setItem('texttwelvepm', JSON.stringify(texttwelvepm));
});

savebutton1PM.on('click', function () {
    var textonepm = text1PM.val();
    localStorage.setItem('textonepm', JSON.stringify(textonepm));
});

savebutton2PM.on('click', function () {
    var texttwopm = text2PM.val();
    localStorage.setItem('texttwopm', JSON.stringify(texttwopm));
});

savebutton3PM.on('click', function () {
    var textthreepm = text3PM.val();
    localStorage.setItem('textthreepm', JSON.stringify(textthreepm));
});

savebutton4PM.on('click', function () {
    var textfourpm = text4PM.val();
    localStorage.setItem('textfourpm', JSON.stringify(textfourpm));
});

savebutton5PM.on('click', function () {
    var textfivepm = text5PM.val();
    localStorage.setItem('textfivepm', JSON.stringify(textfivepm));
});

