function ConvertCentiSec() {

        var centiSec = parseFloat(document.getElementById("centiSec").value);

        var footSec             = centiSec * 0.0328084;
        var inchSec             = centiSec * 0.393701;
        var kilometerHour       = centiSec * 0.03600001944;
        var kilometerSec        = centiSec * 0.00001;
        var knot                = centiSec * 0.019438444925;
        var mach                = centiSec * 0.00002938669958;
        var meterSec            = centiSec *  0.01;
        var mileHour            = centiSec * 0.022369362921;
        var mileSec             = centiSec * 0.0000062137119224;
        var millimeterSec       = centiSec * 10;
        var speedVaccum         = centiSec *  3.335640952e-11;
        var speedSound          = centiSec * 0.00002938669958 ;

        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertfootSec() {

        var footSec = parseFloat(document.getElementById("footSec").value);

        var centiSec            = footSec * 30.48 ;
        var inchSec             = footSec * 12;
        var kilometerHour       = footSec * 1.09728;
        var kilometerSec        = footSec * 0.0003048;
        var knot                = footSec * 0.5924838013;
        var mach                = footSec * 0.00089570660319 ;
        var meterSec            = footSec * 0.3048;
        var mileHour            = footSec * 0.68181818182;
        var mileSec             = footSec * 0.00018939393939;
        var millimeterSec       = footSec * 304.8;
        var speedVaccum         = footSec * 1.0167033622e-9;
        var speedSound          = footSec * 0.00089570660319 ;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertInchSec() {

        var inchSec = parseFloat(document.getElementById("inchSec").value);

        var centiSec            = inchSec * 2.54 ;
        var footSec             = inchSec * 0.083333333333;
        var kilometerHour       = inchSec * 0.091439999999;
        var kilometerSec        = inchSec * 0.0000254;
        var knot                = inchSec * 0.049373650108;
        var mach                = inchSec * 0.000074642216933 ;
        var meterSec            = inchSec * 0.0254;
        var mileHour            = inchSec * 0.056818181818;
        var mileSec             = inchSec * 0.000015782828283;
        var millimeterSec       = inchSec * 25.4;
        var speedVaccum         = inchSec * 8.472528018e-11;
        var speedSound          = inchSec * 0.000074642216933 ;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertKilometerHour() {

        var kilometerHour = parseFloat(document.getElementById("kilometerHour").value);

        var centiSec            = kilometerHour * 27.777777778;
        var footSec             = kilometerHour * 0.91134441529;
        var inchSec             = kilometerHour * 10.936132983;
        var kilometerSec        = kilometerHour * 0.00027777777778;
        var knot                = kilometerHour * 0.53995680346;
        var mach                = kilometerHour * 0.00081629721056;
        var meterSec            = kilometerHour * 0.27777777778 ;
        var mileHour            = kilometerHour * 0.62137119224;
        var mileSec             = kilometerHour * 0.00017260310896;
        var millimeterSec       = kilometerHour * 277.77777778;
        var speedVaccum         = kilometerHour * 9.2656693111e-10;
        var speedSound          = kilometerHour * 0.00081629721056;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}
function ConvertKilometerSec() {

        var kilometerSec = parseFloat(document.getElementById("kilometerSec").value);

        var centiSec            = kilometerSec * 100000;
        var footSec             = kilometerSec * 3280.839895;
        var inchSec             = kilometerSec * 39370.07874;
        var kilometerHour       = kilometerSec * 3600;
        var knot                = kilometerSec * 1943.8444925 ;
        var mach                = kilometerSec * 2.938669958;
        var meterSec            = kilometerSec * 1000;
        var mileHour            = kilometerSec * 2236.9362921;
        var mileSec             = kilometerSec * 0.62137119224;
        var millimeterSec       = kilometerSec * 1000000 ;
        var speedVaccum         = kilometerSec * 0.000003335640952;
        var speedSound          = kilometerSec * 2.938669958;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertKnot() {

        var knot = parseFloat(document.getElementById("knot").value);

        var centiSec            = knot * 51.444444444 ;
        var footSec             = knot * 1.6878098571 ;
        var inchSec             = knot * 20.253718285;
        var kilometerHour       = knot * 1.852;
        var kilometerSec        = knot * 0.00051444444444;
        var mach                = knot * 0.0015117824339;
        var meterSec            = knot * 0.51444444444;
        var mileHour            = knot * 1.150779448;
        var mileSec             = knot * 0.00031966095778;
        var millimeterSec       = knot * 514.44444444;
        var speedVaccum         = knot * 1.7160019564e-9;
        var speedSound          = knot * 0.0015117824339;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertMach() {

        var mach = parseFloat(document.getElementById("mach").value);

        var centiSec            = mach * 34029 ;
        var footSec             = mach * 1116.4370079;
        var inchSec             = mach * 13397.244094;
        var kilometerHour       = mach * 1225.044 ;
        var kilometerSec        = mach * 0.34029;
        var knot                = mach * 661.47084234;
        var meterSec            = mach * 340.29;
        var mileHour            = mach * 761.20705082;
        var mileSec             = mach * 0.21144640301;
        var millimeterSec       = mach * 340290;
        var speedVaccum         = mach * 0.0000011350852595;
        var speedSound          = mach * 1;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertMeterSec() {

        var meterSec = parseFloat(document.getElementById("meterSec").value);

        var centiSec            = meterSec * 100;
        var footSec             = meterSec * 3.280839895;
        var inchSec             = meterSec * 39.37007874;
        var kilometerHour       = meterSec * 3.6;
        var kilometerSec        = meterSec * 0.001;
        var knot                = meterSec * 1.9438444925;
        var mach                = meterSec * 0.002938669958;
        var mileHour            = meterSec * 2.2369362921;
        var mileSec             = meterSec * 0.00062137119224;
        var millimeterSec       = meterSec * 1000;
        var speedVaccum         = meterSec * 3.335640952e-9;
        var speedSound          = meterSec * 0.002938669958;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertMileHour() {

        var mileHour = parseFloat(document.getElementById("mileHour").value);

        var centiSec            = mileHour * 44.704;
        var footSec             = mileHour * 1.4666666667;
        var inchSec             = mileHour * 17.6;
        var kilometerHour       = mileHour * 1.609344;
        var kilometerSec        = mileHour * 0.00044704 ;
        var knot                = mileHour * 0.86897624191;
        var mach                = mileHour * 0.001313703018;
        var meterSec            = mileHour * 0.44704;
        var mileSec             = mileHour * 0.00027777777778;
        var millimeterSec       = mileHour * 447.04;
        var speedVaccum         = mileHour * 1.4911649312e-9;
        var speedSound          = mileHour * 0.001313703018;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertMileSec() {

        var mileSec = parseFloat(document.getElementById("mileSec").value);

        var centiSec            = mileSec * 160934.4;
        var footSec             = mileSec * 5280;
        var inchSec             = mileSec * 63360;
        var kilometerHour       = mileSec * 5793.6384;
        var kilometerSec        = mileSec * 1.609344;
        var knot                = mileSec * 3128.3144709;
        var mach                = mileSec * 4.7293308649;
        var meterSec            = mileSec * 1609.344;
        var mileHour            = mileSec * 3600;
        var millimeterSec       = mileSec * 1609344;
        var speedVaccum         = mileSec * 0.0000053681937522;
        var speedSound          = mileSec * 4.7293308649;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").kilometerSec = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertMillimeterSec() {

        var millimeterSec = parseFloat(document.getElementById("millimeterSec").value);

        var centiSec            = millimeterSec * 0.1;
        var footSec             = millimeterSec * 0.003280839895;
        var inchSec             = millimeterSec * 0.03937007874;
        var kilometerHour       = millimeterSec * 0.0036;
        var kilometerSec        = millimeterSec * 0.000001;
        var knot                = millimeterSec * 0.0019438444925;
        var mach                = millimeterSec * 0.000002938669958;
        var meterSec            = millimeterSec * 0.001;
        var mileHour            = millimeterSec * 0.0022369362921;
        var mileSec             = millimeterSec * 6.2137119224e-7;
        var speedVaccum         = millimeterSec * 3.335640952e-12;
        var speedSound          = millimeterSec * 0.000002938669958;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}

function ConvertSpeedVaccum() {

        var speedVaccum = parseFloat(document.getElementById("speedVaccum").value);

        var centiSec            = speedVaccum * 29979245800;
        var footSec             = speedVaccum *  983571056.43;
        var inchSec             = speedVaccum * 11802852677;
        var kilometerHour       = speedVaccum * 1079252848.8;
        var kilometerSec        = speedVaccum * 299792.458;
        var knot                = speedVaccum * 582749918.36;
        var mach                = speedVaccum * 880991.08995;
        var meterSec            = speedVaccum * 299792458;
        var mileHour            = speedVaccum * 670616629.38;
        var mileSec             = speedVaccum * 186282.39705;
        var millimeterSec       = speedVaccum * 299792458000;
        var speedSound          = speedVaccum * 880991.08995;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}


function ConvertSpeedVaccum() {

        var speedVaccum = parseFloat(document.getElementById("speedVaccum").value);

        var centiSec            = speedVaccum * 29979245800;
        var footSec             = speedVaccum *  983571056.43;
        var inchSec             = speedVaccum * 11802852677;
        var kilometerHour       = speedVaccum * 1079252848.8;
        var kilometerSec        = speedVaccum * 299792.458;
        var knot                = speedVaccum * 582749918.36;
        var mach                = speedVaccum * 880991.08995;
        var meterSec            = speedVaccum * 299792458;
        var mileHour            = speedVaccum * 670616629.38;
        var mileSec             = speedVaccum * 186282.39705;
        var millimeterSec       = speedVaccum * 299792458000;
        var speedSound          = speedVaccum * 880991.08995;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedSound").value = speedSound.toFixed(8);
}


function ConvertSpeedSound() {

        var speedSound = parseFloat(document.getElementById("speedSound").value);

        var centiSec            = speedSound * 34029;
        var footSec             = speedSound * 1116.4370079;
        var inchSec             = speedSound * 13397.244094;
        var kilometerHour       = speedSound * 1225.044;
        var kilometerSec        = speedSound * 0.34029;
        var knot                = speedSound * 661.47084234 ;
        var mach                = speedSound * 1;
        var meterSec            = speedSound * 340.29;
        var mileHour            = speedSound * 761.20705082 ;
        var mileSec             = speedSound * 0.21144640301;
        var millimeterSec       = speedSound * 340290;
        var speedVaccum         = speedSound * 0.0000011350852595 ;

        document.getElementById("centiSec").value = centiSec.toFixed(8);
        document.getElementById("footSec").value = footSec.toFixed(8);
        document.getElementById("inchSec").value = inchSec.toFixed(8);
        document.getElementById("kilometerHour").value = kilometerHour.toFixed(8);
        document.getElementById("kilometerSec").value = kilometerSec.toFixed(8);
        document.getElementById("knot").value = knot.toFixed(8);
        document.getElementById("mach").value = mach.toFixed(8);
        document.getElementById("meterSec").value = meterSec.toFixed(8);
        document.getElementById("mileHour").value = mileHour.toFixed(8);
        document.getElementById("mileSec").value = mileSec.toFixed(8);
        document.getElementById("millimeterSec").value = millimeterSec.toFixed(8);
        document.getElementById("speedVaccum").value = speedVaccum;
}

 function reset() {
        document.getElementById("centiSec").value = '';
        document.getElementById("footSec").value = '';
        document.getElementById("inchSec").value = '';
        document.getElementById("kilometerHour").value = '';
        document.getElementById("kilometerSec").value = '';
        document.getElementById("knot").value = '';
        document.getElementById("mach").value = '';
        document.getElementById("meterSec").value = '';
        document.getElementById("mileHour").value = '';
        document.getElementById("mileSec").value = '';
        document.getElementById("millimeterSec").value = '';
        document.getElementById("speedVaccum").value = '';
        document.getElementById("speedSound").value = '';
    }