
    function ConvertFromPascal() {

        var pascal = parseFloat(document.getElementById("pascal").value);
        var kilopascal = pascal * 0.001;
        var megapascal = pascal * 1.0e-6;
        var hectopascal = pascal * 0.01;
        var bar = pascal * 1.0E-5;
        var torr = pascal * 0.0075006168270417;
        var pound = pascal * 0.00014503768078;
        var kilopound = pascal * 1.4503768078E-7;

        if (pascal) {
            document.getElementById("kilopascal").value = kilopascal;
            document.getElementById("megapascal").value = megapascal;
            document.getElementById("hectopascal").value = hectopascal;
            document.getElementById("bar").value = bar;
            document.getElementById("torr").value = torr;
            document.getElementById("pound").value = pound;
            document.getElementById("kilopound").value = kilopound;
        } 
    }

    function ConvertFromKilopascal() {

        var kilopascal = parseFloat(document.getElementById("kilopascal").value);
        var pascal = kilopascal *   1000;
        var megapascal = kilopascal * 0.001;
        var hectopascal = kilopascal * 10;
        var bar = kilopascal * 0.01;
        var torr = kilopascal * 7.5006168270417;
        var pound = kilopascal * 0.14503768078;
        var kilopound = kilopascal * 0.00014503768078;

        if (kilopascal) {
            document.getElementById("pascal").value = pascal;
            document.getElementById("megapascal").value = megapascal;
            document.getElementById("hectopascal").value = hectopascal;
            document.getElementById("bar").value = bar;
            document.getElementById("torr").value = torr;
            document.getElementById("pound").value = pound;
            document.getElementById("kilopound").value = kilopound;
        } 
    }

    function ConvertFromMegapascal() {

        var megapascal = parseFloat(document.getElementById("megapascal").value);
        var pascal = megapascal *   1000000;
        var kilopascal = megapascal * 1000;
        var hectopascal = megapascal * 10000;
        var bar = megapascal * 10;
        var torr = megapascal * 7500.6168270417;
        var pound = megapascal * 145.03768078;
        var kilopound = megapascal * 0.14503768078;

        if (megapascal) {
            document.getElementById("pascal").value = pascal;
            document.getElementById("kilopascal").value = kilopascal;
            document.getElementById("hectopascal").value = hectopascal;
            document.getElementById("bar").value = bar;
            document.getElementById("torr").value = torr;
            document.getElementById("pound").value = pound;
            document.getElementById("kilopound").value = kilopound;
        } 
    }

    function ConvertFromHectopascal() {

        var hectopascal = parseFloat(document.getElementById("hectopascal").value);
        var pascal = hectopascal *      100;
        var kilopascal = hectopascal * 0.1;
        var megapascal = hectopascal * 0.0001;
        var bar = hectopascal * 0.001;
        var torr = hectopascal * 0.75006168270417;
        var pound = hectopascal * 0.014503768078;
        var kilopound = hectopascal * 1.4503768078E-5;

        if (hectopascal) {
            document.getElementById("pascal").value = pascal;
            document.getElementById("kilopascal").value = kilopascal;
            document.getElementById("megapascal").value = megapascal;
            document.getElementById("bar").value = bar;
            document.getElementById("torr").value = torr;
            document.getElementById("pound").value = pound;
            document.getElementById("kilopound").value = kilopound;
        } 
    }

    function ConvertFromBar() {

        var bar = parseFloat(document.getElementById("bar").value);
        var pascal = bar *      100000;
        var kilopascal = bar * 100;
        var megapascal = bar * 0.1;
        var hectopascal = bar * 1000;
        var torr = bar * 750.06168270417;
        var pound = bar * 14.503768078;
        var kilopound = bar * 0.014503768078;

        if (bar) {
            document.getElementById("pascal").value = pascal;
            document.getElementById("kilopascal").value = kilopascal;
            document.getElementById("megapascal").value = megapascal;
            document.getElementById("hectopascal").value = hectopascal;
            document.getElementById("torr").value = torr;
            document.getElementById("pound").value = pound;
            document.getElementById("kilopound").value = kilopound;
        } 
    }

    function ConvertFromTorr() {

        var torr = parseFloat(document.getElementById("torr").value);
        var pascal = torr *      133.32236842105;
        var kilopascal = torr * 0.13332236842105;
        var megapascal = torr * 0.00013332236842105;
        var hectopascal = torr * 1.3332236842105;
        var bar = torr * 0.0013332236842105;
        var pound = torr * 0.019336767111886;
        var kilopound = torr * 1.9336767111886E-5;

        if (torr) {
            document.getElementById("pascal").value = pascal;
            document.getElementById("kilopascal").value = kilopascal;
            document.getElementById("megapascal").value = megapascal;
            document.getElementById("hectopascal").value = hectopascal;
            document.getElementById("bar").value = bar;
            document.getElementById("pound").value = pound;
            document.getElementById("kilopound").value = kilopound;
        } 
    }

    function ConvertFromPound() {


        var pound = parseFloat(document.getElementById("pound").value);
        var pascal = pound *      6894.7600004501;
        var kilopascal = pound * 6.8947600004501;
        var megapascal = pound * 0.0068947600004501;
        var hectopascal = pound * 68.947600004501;
        var bar = pound * 0.068947600004501;
        var torr = pound * 51.71495287779;
         var kilopound = pound * 0.001;


        if (pound) {
            document.getElementById("pascal").value = pascal;
            document.getElementById("kilopascal").value = kilopascal;
            document.getElementById("megapascal").value = megapascal;
            document.getElementById("hectopascal").value = hectopascal;
            document.getElementById("bar").value = bar;
            document.getElementById("torr").value = torr;
            document.getElementById("kilopound").value = kilopound;
        } 
    }

     function ConvertFromKilopound() {

        var kilopound = parseFloat(document.getElementById("kilopound").value);
        var pascal = kilopound *      6894760.0004501;
        var kilopascal = kilopound * 6894.7600004501;
        var megapascal = kilopound * 6.8947600004501;
        var hectopascal = kilopound * 68947.600004501;
        var bar = kilopound * 68.947600004501;
        var torr = kilopound * 51714.95287779;
        var pound = kilopound * 1000;

        if (kilopound) {
            document.getElementById("pascal").value = pascal;
            document.getElementById("kilopascal").value = kilopascal;
            document.getElementById("megapascal").value = megapascal;
            document.getElementById("hectopascal").value = hectopascal;
            document.getElementById("bar").value = bar;
            document.getElementById("torr").value = torr;
            document.getElementById("pound").value = pound;
        } 
    }


  

    function reset() {
        document.getElementById("pascal").value = '';
        document.getElementById("kilopascal").value = '';
        document.getElementById("megapascal").value = '';
        document.getElementById("hectopascal").value = '';
        document.getElementById("bar").value = '';
        document.getElementById("torr").value = '';
        document.getElementById("pound").value = '';
        document.getElementById("kilopound").value = '';
    }