document.addEventListener('DOMContentLoaded', function () {

    // Function to convert decimal degrees to DMS
    function aceDecimalToDMS(degrees, isLatitude) {
        var hemisphere = degrees >= 0 ? (isLatitude ? 'N' : 'E') : (isLatitude ? 'S' : 'W');
        degrees = Math.abs(degrees);
        var deg = Math.floor(degrees);
        var min = (degrees - deg) * 60;
        var sec = (min - Math.floor(min)) * 60;
        min = Math.floor(min);
        sec = Math.round(sec);

        return {
            deg: deg,
            min: min,
            sec: sec,
            hemisphere: hemisphere
        };
    }

    // Function to convert DMS to decimal degrees
    function aceDMSToDecimal(deg, min, sec, hemisphere) {
        var sign = (hemisphere === 'S' || hemisphere === 'W') ? -1 : 1;
        return sign * (deg + min / 60 + sec / 3600);
    }

    // Function to handle the transfer button click for decimal to DMS conversion
        document.getElementById('acex_transfertoDeg').addEventListener('click', function () {
        var lat = parseFloat(document.getElementById('LatVal1').value) || 0;
        var long = parseFloat(document.getElementById('LongVal1').value) || 0;

        // Convert latitude and longitude to DMS
        var latDMS = aceDecimalToDMS(lat, true);
        var longDMS = aceDecimalToDMS(long, false);

        // Display DMS values in the respective input fields
        document.getElementById('dms_lat_deg').value = lat ? latDMS.deg || 0 : 0;
        document.getElementById('dms_lat_min').value = lat ? latDMS.min || 0 : 0;
        document.getElementById('dms_lat_sec').value = lat ? latDMS.sec || 0 : 0;

        var dmsLatHemSelect = document.getElementById('dms_lat_hem');
        dmsLatHemSelect.value = latDMS.hemisphere;
        dmsLatHemSelect.style.display = latDMS.hemisphere === '' ? 'none' : 'block';

        document.getElementById('dms_long_deg').value = long ? longDMS.deg || 0 : 0;
        document.getElementById('dms_long_min').value = long ? longDMS.min || 0 : 0;
        document.getElementById('dms_long_sec').value = long ? longDMS.sec || 0 : 0;

        var dmsLongHemSelect = document.getElementById('dms_long_hem');
        dmsLongHemSelect.value = longDMS.hemisphere;
        dmsLongHemSelect.style.display = longDMS.hemisphere === '' ? 'none' : 'block';
    });

    var resetBtn = document.getElementById("dmsResetLatLong");
    resetBtn.addEventListener("click", function() {
        // Reset input values
        document.getElementById('LatVal1').value = "";
        document.getElementById('LongVal1').value = "";
    });

    // Function to handle the transfer button click for DMS to decimal conversion
    document.getElementById('acexTransfertoDecimal').addEventListener('click', function () {
        // Retrieve DMS values from input fields
        var latDeg = parseFloat(document.getElementById('dms_lat_deg').value) || 0;
        var latMin = parseFloat(document.getElementById('dms_lat_min').value) || 0;
        var latSec = parseFloat(document.getElementById('dms_lat_sec').value) || 0;
        var latHem = document.getElementById('dms_lat_hem').value || 0;

        var longDeg = parseFloat(document.getElementById('dms_long_deg').value) || 0;
        var longMin = parseFloat(document.getElementById('dms_long_min').value) || 0;
        var longSec = parseFloat(document.getElementById('dms_long_sec').value) || 0;
        var longHem = document.getElementById('dms_long_hem').value  || 0;

        // Convert DMS to decimal degrees
        var latDecimal = aceDMSToDecimal(latDeg, latMin, latSec, latHem);
        var longDecimal = aceDMSToDecimal(longDeg, longMin, longSec, longHem);

        // Display decimal values in the respective input fields
        document.getElementById('LatVal1').value = latDecimal;
        document.getElementById('LongVal1').value = longDecimal;
    });

    var resetBtn2 = document.getElementById("dmsReset");
    resetBtn2.addEventListener("click", function() {
        document.getElementById('dms_lat_deg').value = "";
        document.getElementById('dms_lat_min').value = "";
        document.getElementById('dms_lat_sec').value = "";
        document.getElementById('dms_long_deg').value = "";
        document.getElementById('dms_long_min').value = "";
        document.getElementById('dms_long_sec').value = "";
    });
});