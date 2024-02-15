function ConvertFromjoule() {

        var joule = parseFloat(document.getElementById("joule").value);

        var kilojoule             = joule * 0.001;
        var kilowatt_hour         = joule * 2.777777777E-7;
        var watt_hour             = joule * 0.0002777778;
        var calorie               = joule * 0.0002388459;
        var horsepower            = joule * 3.776726714E-7;
        var btu_IT                = joule * 0.0009478171;
        var btu_th                = joule * 0.0009484517;
        var gigajoule             = joule * 9.999999999E-10;
        var megajoule             = joule * 0.000001;
        var millijoule            = joule * 1000;
        var microjoule            = joule *  1000000;
        var nanojoule             = joule *  1000000000;
        var attojoule             = joule *  1000000000000000000;
        var megaelectron_volt     = joule *  6241506363094;
        var kiloelectron_volt     = joule * 6241506363094000;
        var electron_volt         = joule * 6241506363094000000;
        var erg                   = joule * 10000000;
        var gigawatt_hour         = joule * 2.777777777E-13;
        var megawatt_hour         = joule * 2.777777777E-10;

        var kilowatt_second         = joule * 0.001;
        var watt_second             = joule * 1;
        var newton_meter            = joule * 1;
        var horsepower_hour         = joule * 3.725061361E-7;
        var kilocalorie_it          = joule * 0.0002388459;
        var kilocalorie_th          = joule * 0.0002390057;
        var calorie_it              = joule * 0.2388458966;
        var calorie_th              = joule * 0.2390057361;
        var mega_Btu                = joule * 9.478171203E-10;
        var ton_hour                = joule * 7.898476002E-8;
        var fuel_oil_kiloliter      = joule * 2.487708977E-11;
        var fuel_oil_barrel         = joule * 1.566639868E-10;
        var gigaton                 = joule * 2.390057361E-19;
        var megaton                 = joule * 2.390057361E-16;
        var kiloton                 = joule * 2.390057361E-13;
        var ton_explosives          = joule * 2.390057361E-10;
        var dyne_centimeter         = joule * 10000000;
        var gram_force_meter        = joule * 101.9716213;
        var gram_force_cm           = joule * 10197.16213;
        var kilogram_force_cm       = joule * 10.19716213;
        var kilogram_force_meter    = joule * 0.1019716213;
        var kilopond_meter          = joule * 0.1019716213;
        var pound_force_foot        = joule * 0.7375621493;
        var pound_force_inch        = joule * 8.8507457916;
        var ounce_force_inch        = joule * 141.61193267;
        var foot_pound              = joule * 0.7375621493;
        var inch_pound              = joule * 8.8507457916;
        var inch_ounce              = joule * 141.61193267;
        var poundal_foot            = joule * 23.730360457;
        var therm                   = joule * 9.478169879E-9;
        var therm_EC                = joule * 9.478169879E-9;
        var therm_US                = joule * 9.480434279E-9;
        var hartree_energy          = joule * 229371044869059970;
        var rydberg_constant        = joule * 458742089738119940;
       

        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromKilojoule() {

        var kilojoule = parseFloat(document.getElementById("kilojoule").value);

        var joule                   = kilojoule * 1000;
        var kilowatt_hour           = kilojoule * 0.0002777778;
        var watt_hour               = kilojoule * 0.2777777778;
        var calorie                 = kilojoule * 0.2388458966;
        var horsepower              = kilojoule * 0.0003776727;
        var btu_IT                  = kilojoule * 0.9478171203;
        var btu_th                  = kilojoule * 0.9484516527;
        var gigajoule               = kilojoule * 0.000001;
        var megajoule               = kilojoule * 0.001;
        var millijoule              = kilojoule * 1000000;
        var microjoule              = kilojoule * 1000000000;
        var nanojoule               = kilojoule * 1000000000000;
        var attojoule               = kilojoule * 1.E+21;
        var megaelectron_volt       = kilojoule * 6241506363094002;
        var kiloelectron_volt       = kilojoule * 6241506363094001000;
        var electron_volt           = kilojoule * 6.241506363E+21;
        var erg                     = kilojoule * 10000000000;
        var gigawatt_hour           = kilojoule * 2.777777777E-10;
        var megawatt_hour           = kilojoule * 2.777777777E-7;

        var kilowatt_second         = kilojoule * 1;
        var watt_second             = kilojoule * 1000;
        var newton_meter            = kilojoule * 1000;
        var horsepower_hour         = kilojoule * 0.0003725061;
        var kilocalorie_it          = kilojoule * 0.2388458966;
        var kilocalorie_th          = kilojoule * 0.2390057361;
        var calorie_it              = kilojoule * 238.84589663;
        var calorie_th              = kilojoule * 239.00573614;
        var mega_Btu                = kilojoule * 9.478171203E-7;
        var ton_hour                = kilojoule * 0.0000789848;
        var fuel_oil_kiloliter      = kilojoule * 2.487708977E-8;
        var fuel_oil_barrel         = kilojoule * 1.566639868E-7;
        var gigaton                 = kilojoule * 2.390057361E-16;
        var megaton                 = kilojoule * 2.390057361E-13;
        var kiloton                 = kilojoule * 2.390057361E-10;
        var ton_explosives          = kilojoule * 2.390057361E-7;
        var dyne_centimeter         = kilojoule * 10000000000;
        var gram_force_meter        = kilojoule * 101971.6213;
        var gram_force_cm           = kilojoule * 10197162.13;
        var kilogram_force_cm       = kilojoule * 10197.16213;
        var kilogram_force_meter    = kilojoule * 101.9716213;
        var kilopond_meter          = kilojoule * 101.9716213;
        var pound_force_foot        = kilojoule * 737.5621493;
        var pound_force_inch        = kilojoule * 8850.7457916;
        var ounce_force_inch        = kilojoule * 141611.93267;
        var foot_pound              = kilojoule * 737.5621493;
        var inch_pound              = kilojoule * 8850.7457916;
        var inch_ounce              = kilojoule * 141611.93267;
        var poundal_foot            = kilojoule * 23730.360457;
        var therm                   = kilojoule * 0.0000094782;
        var therm_EC                = kilojoule * 0.0000094782;
        var therm_US                = kilojoule * 0.0000094804;
        var hartree_energy          = kilojoule * 229371044869060000000;
        var rydberg_constant        = kilojoule * 458742089738120000000;
       

        document.getElementById("joule").value = joule;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromKilowattHour() {

        var kilowatt_hour = parseFloat(document.getElementById("kilowatt_hour").value);

        var joule                   = kilowatt_hour * 3600000;
        var kilojoule               = kilowatt_hour * 3600;
        var watt_hour               = kilowatt_hour * 1000;
        var calorie                 = kilowatt_hour * 859.84522786;
        var horsepower              = kilowatt_hour * 1.3596216173;
        var btu_IT                  = kilowatt_hour * 3412.1416331;
        var btu_th                  = kilowatt_hour * 3414.4259497;
        var gigajoule               = kilowatt_hour * 0.0036;
        var megajoule               = kilowatt_hour * 3.6;
        var millijoule              = kilowatt_hour * 3600000000;
        var microjoule              = kilowatt_hour * 3600000000000;
        var nanojoule               = kilowatt_hour * 3599999999999971;
        var attojoule               = kilowatt_hour * 3.599999999E+24;
        var megaelectron_volt       = kilowatt_hour * 22469422907138220000;
        var kiloelectron_volt       = kilowatt_hour * 2.24694229E+22;
        var electron_volt           = kilowatt_hour * 2.24694229E+25;
        var erg                     = kilowatt_hour * 36000000000000;
        var gigawatt_hour           = kilowatt_hour * 0.000001;
        var megawatt_hour           = kilowatt_hour * 0.001;

        var kilowatt_second         = kilowatt_hour * 3600;
        var watt_second             = kilowatt_hour * 3600000;
        var newton_meter            = kilowatt_hour * 3600000;
        var horsepower_hour         = kilowatt_hour * 1.34102209;
        var kilocalorie_it          = kilowatt_hour * 859.84522786;
        var kilocalorie_th          = kilowatt_hour * 860.4206501;
        var calorie_it              = kilowatt_hour * 859845.22786;
        var calorie_th              = kilowatt_hour * 860420.6501;
        var mega_Btu                = kilowatt_hour * 0.0034121416;
        var ton_hour                = kilowatt_hour * 0.2843451361;
        var fuel_oil_kiloliter      = kilowatt_hour * 0.0000895575;
        var fuel_oil_barrel         = kilowatt_hour * 0.0005639904;
        var gigaton                 = kilowatt_hour * 8.6042065E-13;
        var megaton                 = kilowatt_hour * 8.6042065E-10;
        var kiloton                 = kilowatt_hour * 8.6042065E-7;
        var ton_explosives          = kilowatt_hour * 0.0008604207;
        var dyne_centimeter         = kilowatt_hour * 36000000000000;
        var gram_force_meter        = kilowatt_hour * 367097836.68;
        var gram_force_cm           = kilowatt_hour * 36709783668;
        var kilogram_force_cm       = kilowatt_hour * 36709783.668;
        var kilogram_force_meter    = kilowatt_hour * 367097.83668;
        var kilopond_meter          = kilowatt_hour * 367097.83668;
        var pound_force_foot        = kilowatt_hour * 2655223.7375;
        var pound_force_inch        = kilowatt_hour * 31862684.85;
        var ounce_force_inch        = kilowatt_hour * 509802957.6;
        var foot_pound              = kilowatt_hour * 2655223.7375;
        var inch_pound              = kilowatt_hour * 31862684.85;
        var inch_ounce              = kilowatt_hour * 509802957.6;
        var poundal_foot            = kilowatt_hour * 85429297.646;
        var therm                   = kilowatt_hour * 0.0341214116;
        var therm_EC                = kilowatt_hour * 0.0341214116;
        var therm_US                = kilowatt_hour * 0.0341295634;
        var hartree_energy          = kilowatt_hour * 8.257357615E+23;
        var rydberg_constant        = kilowatt_hour * 1.651471523E+24;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromWattHour() {

        var watt_hour = parseFloat(document.getElementById("watt_hour").value);

        var joule                   = watt_hour * 3600;
        var kilojoule               = watt_hour * 3.6;
        var kilowatt_hour           = watt_hour * 0.001;
        var calorie                 = watt_hour * 0.8598452279;
        var horsepower              = watt_hour * 0.0013596216;
        var btu_IT                  = watt_hour * 3.4121416331;
        var btu_th                  = watt_hour * 3.4144259497;
        var gigajoule               = watt_hour * 0.0000036;
        var megajoule               = watt_hour * 0.0036;
        var millijoule              = watt_hour * 3600000;
        var microjoule              = watt_hour * 3600000000;
        var nanojoule               = watt_hour * 3600000000000;
        var attojoule               = watt_hour * 3.599999999E+21;
        var megaelectron_volt       = watt_hour * 22469422907138220;
        var kiloelectron_volt       = watt_hour * 22469422907138220000;
        var electron_volt           = watt_hour * 2.24694229E+22;
        var erg                     = watt_hour * 36000000000;
        var gigawatt_hour           = watt_hour * 1.E-9;
        var megawatt_hour           = watt_hour * 0.000001;

        var kilowatt_second         = watt_hour * 3.6;
        var watt_second             = watt_hour * 3600;
        var newton_meter            = watt_hour * 3600;
        var horsepower_hour         = watt_hour * 0.0013410221;
        var kilocalorie_it          = watt_hour * 0.8598452279;
        var kilocalorie_th          = watt_hour * 0.8604206501;
        var calorie_it              = watt_hour * 859.84522786;
        var calorie_th              = watt_hour * 860.4206501;
        var mega_Btu                = watt_hour * 0.0000034121;
        var ton_hour                = watt_hour * 0.0002843451;
        var fuel_oil_kiloliter      = watt_hour * 8.955752317E-8;
        var fuel_oil_barrel         = watt_hour * 5.639903525E-7;
        var gigaton                 = watt_hour * 8.6042065E-16;
        var megaton                 = watt_hour * 8.6042065E-13;
        var kiloton                 = watt_hour * 8.6042065E-10;
        var ton_explosives          = watt_hour * 8.6042065E-7;
        var dyne_centimeter         = watt_hour * 36000000000;
        var gram_force_meter        = watt_hour * 367097.83668;
        var gram_force_cm           = watt_hour * 36709783.668;
        var kilogram_force_cm       = watt_hour * 36709.783668;
        var kilogram_force_meter    = watt_hour * 367.09783668;
        var kilopond_meter          = watt_hour * 367.09783668;
        var pound_force_foot        = watt_hour * 2655.2237375;
        var pound_force_inch        = watt_hour * 31862.68485;
        var ounce_force_inch        = watt_hour * 509802.9576;
        var foot_pound              = watt_hour * 2655.2237375;
        var inch_pound              = watt_hour * 31862.68485;
        var inch_ounce              = watt_hour * 509802.9576;
        var poundal_foot            = watt_hour * 85429.297646;
        var therm                   = watt_hour * 0.0000341214;
        var therm_EC                = watt_hour * 0.0000341214;
        var therm_US                = watt_hour * 0.0000341296;
        var hartree_energy          = watt_hour * 825735761528609300000;
        var rydberg_constant        = watt_hour * 1.651471523E+21;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}


function ConvertFromCalorie() {

        var calorie = parseFloat(document.getElementById("calorie").value);

        var joule                   = calorie * 4186.8;
        var kilojoule               = calorie * 4.1868;
        var kilowatt_hour           = calorie * 0.001163;
        var watt_hour               = calorie * 1.163;
        var horsepower              = calorie * 0.0015812399;
        var btu_IT                  = calorie * 3.9683207193;
        var btu_th                  = calorie * 3.9709773795;
        var gigajoule               = calorie * 0.0000041868;
        var megajoule               = calorie * 0.0041868;
        var millijoule              = calorie * 4186800;
        var microjoule              = calorie * 4186800000;
        var nanojoule               = calorie * 4186800000000;
        var attojoule               = calorie * 4.186799999E+21;
        var megaelectron_volt       = calorie * 26131938841001516;
        var kiloelectron_volt       = calorie * 26131938841001517000;
        var electron_volt           = calorie * 2.613193884E+22;
        var erg                     = calorie * 41868000000;
        var gigawatt_hour           = calorie * 1.162999999E-9;
        var megawatt_hour           = calorie * 0.000001163;

        var kilowatt_second         = calorie * 4.1868;
        var watt_second             = calorie * 4186.8;
        var newton_meter            = calorie * 4186.8;
        var horsepower_hour         = calorie * 0.0015596087;
        var kilocalorie_it          = calorie * 1;
        var kilocalorie_th          = calorie * 1.0006692161;
        var calorie_it              = calorie * 1000;
        var calorie_th              = calorie * 1000.6692161;
        var mega_Btu                = calorie * 0.0000039683;
        var ton_hour                = calorie * 0.0003306934;
        var fuel_oil_kiloliter      = calorie * 1.041553994E-7;
        var fuel_oil_barrel         = calorie * 6.5592078E-7;
        var gigaton                 = calorie * 1.000669216E-15;
        var megaton                 = calorie * 1.000669216E-12;
        var kiloton                 = calorie * 1.000669216E-9;
        var ton_explosives          = calorie * 0.0000010007;
        var dyne_centimeter         = calorie * 41868000000;
        var gram_force_meter        = calorie * 426934.78406;
        var gram_force_cm           = calorie * 42693478.406;
        var kilogram_force_cm       = calorie * 42693.478406;
        var kilogram_force_meter    = calorie * 426.93478406;
        var kilopond_meter          = calorie * 426.93478406;
        var pound_force_foot        = calorie * 3088.0252067;
        var pound_force_inch        = calorie * 37056.30248;
        var ounce_force_inch        = calorie * 592900.83968;
        var foot_pound              = calorie * 3088.0252067;
        var inch_pound              = calorie * 37056.30248;
        var inch_ounce              = calorie * 592900.83968;
        var poundal_foot            = calorie * 99354.273162;
        var therm                   = calorie * 0.0000396832;
        var therm_EC                = calorie * 0.0000396832;
        var therm_US                = calorie * 0.0000396927;
        var hartree_energy          = calorie * 960330690657764000000;
        var rydberg_constant        = calorie * 1.920661381E+21;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}


function ConvertFromHorsepower() {

        var horsepower = parseFloat(document.getElementById("horsepower").value);

        var joule                   = horsepower * 2647795.5;
        var kilojoule               = horsepower * 2647.7955;
        var kilowatt_hour           = horsepower * 0.73549875;
        var watt_hour               = horsepower * 735.49875;
        var calorie                 = horsepower * 632.41509028;
        var btu_IT                  = horsepower * 2509.625906;
        var btu_th                  = horsepower * 2511.306018;
        var gigajoule               = horsepower * 0.0026477955;
        var megajoule               = horsepower * 2.6477955;
        var millijoule              = horsepower * 2647795500;
        var microjoule              = horsepower * 2647795500000;
        var nanojoule               = horsepower * 2647795499999977;
        var attojoule               = horsepower * 2.647795499E+24;
        var megaelectron_volt       = horsepower * 16526232461421517000;
        var kiloelectron_volt       = horsepower * 1.652623246E+22;
        var electron_volt           = horsepower * 1.652623246E+25;
        var erg                     = horsepower * 26477955000000;
        var gigawatt_hour           = horsepower * 7.354987499E-7;
        var megawatt_hour           = horsepower * 0.0007354987;

        var kilowatt_second         = horsepower * 2647.7955;
        var watt_second             = horsepower * 2647795.5;
        var newton_meter            = horsepower * 2647795.5;
        var horsepower_hour         = horsepower * 0.9863200709;
        var kilocalorie_it          = horsepower * 632.41509028;
        var kilocalorie_th          = horsepower * 632.83831262;
        var calorie_it              = horsepower * 632415.09028;
        var calorie_th              = horsepower * 632838.31262;
        var mega_Btu                = horsepower * 0.0025096259;
        var ton_hour                = horsepower * 0.2091354922;
        var fuel_oil_kiloliter      = horsepower * 0.0000658694;
        var fuel_oil_barrel         = horsepower * 0.0004148142;
        var gigaton                 = horsepower * 6.328383126E-13;
        var megaton                 = horsepower * 6.328383126E-10;
        var kiloton                 = horsepower * 6.328383126E-7;
        var ton_explosives          = horsepower * 0.0006328383;
        var dyne_centimeter         = horsepower * 26477955000000;
        var gram_force_meter        = horsepower * 270000000.01;
        var gram_force_cm           = horsepower * 27000000001;
        var kilogram_force_cm       = horsepower * 27000000.001;
        var kilogram_force_meter    = horsepower * 270000.00001;
        var kilopond_meter          = horsepower * 270000.00001;
        var pound_force_foot        = horsepower * 1952913.7399;
        var pound_force_inch        = horsepower * 23434964.879;
        var ounce_force_inch        = horsepower * 374959438.06;
        var foot_pound              = horsepower * 1952913.7399;
        var inch_pound              = horsepower * 23434964.879;
        var inch_ounce              = horsepower * 374959438.06;
        var poundal_foot            = horsepower * 62833141.632;
        var therm                   = horsepower * 0.0250962556;
        var therm_EC                = horsepower * 0.0250962556;
        var therm_US                = horsepower * 0.0251022512;
        var hartree_energy          = horsepower * 6.073276204E+23;
        var rydberg_constant        = horsepower * 1.21465524E+24;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}


function ConvertFromBtuIt() {

        var btu_IT = parseFloat(document.getElementById("btu_IT").value);

        var joule                   = btu_IT * 1055.0558526;
        var kilojoule               = btu_IT * 1.0550558526;
        var kilowatt_hour           = btu_IT * 0.0002930711;
        var watt_hour               = btu_IT * 0.2930710702;
        var calorie                 = btu_IT * 0.2519957611;
        var horsepower              = btu_IT * 0.0003984658;
        var btu_th                  = btu_IT * 1.0006694671;
        var gigajoule               = btu_IT * 0.0000010551;
        var megajoule               = btu_IT * 0.0010550559;
        var millijoule              = btu_IT * 1055055.8526;
        var microjoule              = btu_IT * 1055055852.6;
        var nanojoule               = btu_IT * 1055055852620;
        var attojoule               = btu_IT * 1.055055852E+21;
        var megaelectron_volt       = btu_IT * 6585137817547276;
        var kiloelectron_volt       = btu_IT * 6585137817547276000;
        var electron_volt           = btu_IT * 6.585137817E+21;
        var erg                     = btu_IT * 10550558526;
        var gigawatt_hour           = btu_IT * 2.930710701E-10;
        var megawatt_hour           = btu_IT * 2.930710701E-7;

        var kilowatt_second         = btu_IT * 1.0550558526;
        var watt_second             = btu_IT * 1055.0558526;
        var newton_meter            = btu_IT * 1055.0558526;
        var horsepower_hour         = btu_IT * 0.0003930148;
        var kilocalorie_it          = btu_IT * 0.2519957611;
        var kilocalorie_th          = btu_IT * 0.2521644007;
        var calorie_it              = btu_IT * 251.99576111;
        var calorie_th              = btu_IT * 252.16440072;
        var mega_Btu                = btu_IT * 0.000001;
        var ton_hour                = btu_IT * 0.0000833333;
        var fuel_oil_kiloliter      = btu_IT * 2.624671916E-8;
        var fuel_oil_barrel         = btu_IT * 1.652892561E-7;
        var gigaton                 = btu_IT * 2.521644007E-16;
        var megaton                 = btu_IT * 2.521644007E-13;
        var kiloton                 = btu_IT * 2.521644007E-10;
        var ton_explosives          = btu_IT * 2.521644007E-7;
        var dyne_centimeter         = btu_IT * 10550558526;
        var gram_force_meter        = btu_IT * 107585.75585;
        var gram_force_cm           = btu_IT * 10758575.585;
        var kilogram_force_cm       = btu_IT * 10758.575585;
        var kilogram_force_meter    = btu_IT * 107.58575585;
        var kilopond_meter          = btu_IT * 107.58575585;
        var pound_force_foot        = btu_IT * 778.16926229;
        var pound_force_inch        = btu_IT * 9338.0311475;
        var ounce_force_inch        = btu_IT * 149408.49836;
        var foot_pound              = btu_IT * 778.16926229;
        var inch_pound              = btu_IT * 9338.0311475;
        var inch_ounce              = btu_IT * 149408.49836;
        var poundal_foot            = btu_IT * 25036.855685;
        var therm                   = btu_IT * 0.00001;
        var therm_EC                = btu_IT * 0.00001;
        var therm_US                = btu_IT * 0.0000100024;
        var hartree_energy          = btu_IT * 241999263310665650000;
        var rydberg_constant        = btu_IT * 483998526621331300000;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromBtuTh() {

        var btu_th = parseFloat(document.getElementById("btu_th").value);

        var joule                   = btu_th * 1054.35;
        var kilojoule               = btu_th * 1.05435;
        var kilowatt_hour           = btu_th * 0.000292875;
        var watt_hour               = btu_th * 0.292875;
        var calorie                 = btu_th * 0.2518271711;
        var horsepower              = btu_th * 0.0003981992;
        var btu_IT                  = btu_th * 0.9993309808;
        var gigajoule               = btu_th * 0.0000010543;
        var megajoule               = btu_th * 0.00105435;
        var millijoule              = btu_th * 1054350;
        var microjoule              = btu_th * 1054350000;
        var nanojoule               = btu_th * 1054349999974;
        var attojoule               = btu_th * 1.054349999E+21;
        var megaelectron_volt       = btu_th * 6580732233768610;
        var kiloelectron_volt       = btu_th * 6580732233768610000;
        var electron_volt           = btu_th * 6.580732233E+21;
        var erg                     = btu_th * 10543500000;
        var gigawatt_hour           = btu_th * 2.928749999E-10;
        var megawatt_hour           = btu_th * 2.928749999E-7;

        var kilowatt_second         = btu_th * 1.05435;
        var watt_second             = btu_th * 1054.35;
        var newton_meter            = btu_th * 1054.35;
        var horsepower_hour         = btu_th * 0.0003927518;
        var kilocalorie_it          = btu_th * 0.2518271711;
        var kilocalorie_th          = btu_th * 0.2519956979;
        var calorie_it              = btu_th * 251.8271711;
        var calorie_th              = btu_th * 251.99569789;
        var mega_Btu                = btu_th * 9.993309807E-7;
        var ton_hour                = btu_th * 0.0000832776;
        var fuel_oil_kiloliter      = btu_th * 2.62291596E-8;
        var fuel_oil_barrel         = btu_th * 1.651786745E-7;
        var gigaton                 = btu_th * 2.519956978E-16;
        var megaton                 = btu_th * 2.519956978E-13;
        var kiloton                 = btu_th * 2.519956978E-10;
        var ton_explosives          = btu_th * 2.519956978E-7;
        var dyne_centimeter         = btu_th * 10543500000;
        var gram_force_meter        = btu_th * 107513.77892;
        var gram_force_cm           = btu_th * 10751377.892;
        var kilogram_force_cm       = btu_th * 10751.377892;
        var kilogram_force_meter    = btu_th * 107.51377892;
        var kilopond_meter          = btu_th * 107.51377892;
        var pound_force_foot        = btu_th * 777.6486521;
        var pound_force_inch        = btu_th * 9331.7838251;
        var ounce_force_inch        = btu_th * 149308.5412;
        var foot_pound              = btu_th * 777.6486521;
        var inch_pound              = btu_th * 9331.7838251;
        var inch_ounce              = btu_th * 149308.5412;
        var poundal_foot            = btu_th * 25020.105547;
        var therm                   = btu_th * 0.0000099933;
        var therm_EC                = btu_th * 0.0000099933;
        var therm_US                = btu_th * 0.0000099957;
        var hartree_energy          = btu_th * 241837361151830030000;
        var rydberg_constant        = btu_th * 483674722303660060000;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromGigajoule() {

        var gigajoule = parseFloat(document.getElementById("gigajoule").value);

        var joule                   = gigajoule * 1000000000;
        var kilojoule               = gigajoule * 1000000;
        var kilowatt_hour           = gigajoule * 277.77777778;
        var watt_hour               = gigajoule * 277777.77778;
        var calorie                 = gigajoule * 238845.89663;
        var horsepower              = gigajoule * 377.67267147;
        var btu_IT                  = gigajoule * 947817.12031;
        var btu_th                  = gigajoule * 948451.6527;
        var megajoule               = gigajoule * 1000;
        var millijoule              = gigajoule * 1000000000000;
        var microjoule              = gigajoule * 1000000000000000;
        var nanojoule               = gigajoule * 1000000000000000000;
        var attojoule               = gigajoule * 1.E+27;
        var megaelectron_volt       = gigajoule * 6.241506363E+21;
        var kiloelectron_volt       = gigajoule * 6.241506363E+24;
        var electron_volt           = gigajoule * 6.241506363E+27;
        var erg                     = gigajoule * 10000000000000000;
        var gigawatt_hour           = gigajoule * 0.0002777778;
        var megawatt_hour           = gigajoule * 0.2777777778;

        var kilowatt_second         = gigajoule * 1000000;
        var watt_second             = gigajoule * 1000000000;
        var newton_meter            = gigajoule * 1000000000;
        var horsepower_hour         = gigajoule * 372.50613611;
        var kilocalorie_it          = gigajoule * 238845.89663;
        var kilocalorie_th          = gigajoule * 239005.73614;
        var calorie_it              = gigajoule * 238845896.63;
        var calorie_th              = gigajoule * 239005736.14;
        var mega_Btu                = gigajoule * 0.9478171203;
        var ton_hour                = gigajoule * 78.984760026;
        var fuel_oil_kiloliter      = gigajoule * 0.0248770898;
        var fuel_oil_barrel         = gigajoule * 0.1566639868;
        var gigaton                 = gigajoule * 2.390057361E-10;
        var megaton                 = gigajoule * 2.390057361E-7;
        var kiloton                 = gigajoule * 0.0002390057;
        var ton_explosives          = gigajoule * 0.2390057361;
        var dyne_centimeter         = gigajoule * 10000000000000000;
        var gram_force_meter        = gigajoule * 101971621301;
        var gram_force_cm           = gigajoule * 10197162130094;
        var kilogram_force_cm       = gigajoule * 10197162130;
        var kilogram_force_meter    = gigajoule * 101971621.3;
        var kilopond_meter          = gigajoule * 101971621.3;
        var pound_force_foot        = gigajoule * 737562149.3;
        var pound_force_inch        = gigajoule * 8850745791.6;
        var ounce_force_inch        = gigajoule * 141611932666;
        var foot_pound              = gigajoule * 737562149.3;
        var inch_pound              = gigajoule * 8850745791.6;
        var inch_ounce              = gigajoule * 141611932666;
        var poundal_foot            = gigajoule * 23730360457;
        var therm                   = gigajoule * 9.4781698791;
        var therm_EC                = gigajoule * 9.4781698791;
        var therm_US                = gigajoule * 9.4804342797;
        var hartree_energy          = gigajoule * 2.293710448E+26;
        var rydberg_constant        = gigajoule * 4.587420897E+26;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}


function ConvertFromMegajoule() {

        var megajoule = parseFloat(document.getElementById("megajoule").value);

        var joule                   = megajoule * 1000000;
        var kilojoule               = megajoule * 1000;
        var kilowatt_hour           = megajoule * 0.2777777778;
        var watt_hour               = megajoule * 277.77777778;
        var calorie                 = megajoule * 238.84589663;
        var horsepower              = megajoule * 0.3776726715;
        var btu_IT                  = megajoule * 947.81712031;
        var btu_th                  = megajoule * 948.4516527;
        var gigajoule               = megajoule * 0.001;
        var millijoule              = megajoule * 1000000000;
        var microjoule              = megajoule * 1000000000000;
        var nanojoule               = megajoule * 1000000000000000;
        var attojoule               = megajoule * 1.E+24;
        var megaelectron_volt       = megajoule * 6241506363094001000;
        var kiloelectron_volt       = megajoule * 6.241506363E+21;
        var electron_volt           = megajoule * 6.241506363E+24;
        var erg                     = megajoule * 10000000000000;
        var gigawatt_hour           = megajoule * 2.777777777E-7;
        var megawatt_hour           = megajoule * 0.0002777778;

        var kilowatt_second         = megajoule * 1000;
        var watt_second             = megajoule * 1000000;
        var newton_meter            = megajoule * 1000000;
        var horsepower_hour         = megajoule * 0.3725061361;
        var kilocalorie_it          = megajoule * 238.84589663;
        var kilocalorie_th          = megajoule * 239.00573614;
        var calorie_it              = megajoule * 238845.89663;
        var calorie_th              = megajoule * 239005.73614;
        var mega_Btu                = megajoule * 0.0009478171;
        var ton_hour                = megajoule * 0.07898476;
        var fuel_oil_kiloliter      = megajoule * 0.0000248771;
        var fuel_oil_barrel         = megajoule * 0.000156664;
        var gigaton                 = megajoule * 2.390057361E-13;
        var megaton                 = megajoule * 2.390057361E-10;
        var kiloton                 = megajoule * 2.390057361E-7;
        var ton_explosives          = megajoule * 0.0002390057;
        var dyne_centimeter         = megajoule * 10000000000000;
        var gram_force_meter        = megajoule * 101971621.3;
        var gram_force_cm           = megajoule * 10197162130;
        var kilogram_force_cm       = megajoule * 10197162.13;
        var kilogram_force_meter    = megajoule * 101971.6213;
        var kilopond_meter          = megajoule * 101971.6213;
        var pound_force_foot        = megajoule * 737562.1493;
        var pound_force_inch        = megajoule * 8850745.7916;
        var ounce_force_inch        = megajoule * 141611932.67;
        var foot_pound              = megajoule * 737562.1493;
        var inch_pound              = megajoule * 8850745.7916;
        var inch_ounce              = megajoule * 141611932.67;
        var poundal_foot            = megajoule * 23730360.457;
        var therm                   = megajoule * 0.0094781699;
        var therm_EC                = megajoule * 0.0094781699;
        var therm_US                = megajoule * 0.0094804343;
        var hartree_energy          = megajoule * 2.293710448E+23;
        var rydberg_constant        = megajoule * 4.587420897E+23;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}


function ConvertFromMillijoule() {

        var millijoule = parseFloat(document.getElementById("millijoule").value);

        var joule                   = millijoule * 0.001;
        var kilojoule               = millijoule * 0.000001;
        var kilowatt_hour           = millijoule * 2.777777777E-10;
        var watt_hour               = millijoule * 2.777777777E-7;
        var calorie                 = millijoule * 2.388458966E-7;
        var horsepower              = millijoule * 3.776726714E-10;
        var btu_IT                  = millijoule * 9.478171203E-7;
        var btu_th                  = millijoule * 9.484516527E-7;
        var gigajoule               = millijoule * 1.E-12;
        var megajoule               = millijoule * 1.E-9;
        var microjoule              = millijoule * 1000;
        var nanojoule               = millijoule * 1000000;
        var attojoule               = millijoule * 1000000000000000;
        var megaelectron_volt       = millijoule * 6241506363.1;
        var kiloelectron_volt       = millijoule * 6241506363094;
        var electron_volt           = millijoule * 6241506363094002;
        var erg                     = millijoule * 10000;
        var gigawatt_hour           = millijoule * 2.777777777E-16;
        var megawatt_hour           = millijoule * 2.777777777E-13;

        var kilowatt_second         = millijoule * 0.000001;
        var watt_second             = millijoule * 0.001;
        var newton_meter            = millijoule * 0.001;
        var horsepower_hour         = millijoule * 3.725061361E-10;
        var kilocalorie_it          = millijoule * 2.388458966E-7;
        var kilocalorie_th          = millijoule * 2.390057361E-7;
        var calorie_it              = millijoule * 0.0002388459;
        var calorie_th              = millijoule * 0.0002390057;
        var mega_Btu                = millijoule * 9.478171203E-13;
        var ton_hour                = millijoule * 7.898476002E-11;
        var fuel_oil_kiloliter      = millijoule * 2.487708977E-14;
        var fuel_oil_barrel         = millijoule * 1.566639868E-13;
        var gigaton                 = millijoule * 2.390057361E-22;
        var megaton                 = millijoule * 2.390057361E-19;
        var kiloton                 = millijoule * 2.390057361E-16;
        var ton_explosives          = millijoule * 2.390057361E-13;
        var dyne_centimeter         = millijoule * 10000;
        var gram_force_meter        = millijoule * 0.1019716213;
        var gram_force_cm           = millijoule * 10.19716213;
        var kilogram_force_cm       = millijoule * 0.0101971621;
        var kilogram_force_meter    = millijoule * 0.0001019716;
        var kilopond_meter          = millijoule * 0.0001019716;
        var pound_force_foot        = millijoule * 0.0007375621;
        var pound_force_inch        = millijoule * 0.0088507458;
        var ounce_force_inch        = millijoule * 0.1416119327;
        var foot_pound              = millijoule * 0.0007375621;
        var inch_pound              = millijoule * 0.0088507458;
        var inch_ounce              = millijoule * 0.1416119327;
        var poundal_foot            = millijoule * 0.0237303605;
        var therm                   = millijoule * 9.478169879E-12;
        var therm_EC                = millijoule * 9.478169879E-12;
        var therm_US                = millijoule * 9.480434279E-12;
        var hartree_energy          = millijoule * 229371044869060;
        var rydberg_constant        = millijoule * 458742089738120;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromMicrojoule() {

        var microjoule = parseFloat(document.getElementById("microjoule").value);

        var joule                   = microjoule * 0.000001;
        var kilojoule               = microjoule * 9.999999999E-10;
        var kilowatt_hour           = microjoule * 2.777777777E-13;
        var watt_hour               = microjoule * 2.777777777E-10;
        var calorie                 = microjoule * 2.388458966E-10;
        var horsepower              = microjoule * 3.776726714E-13;
        var btu_IT                  = microjoule * 9.478171203E-10;
        var btu_th                  = microjoule * 9.484516527E-10;
        var gigajoule               = microjoule * 9.999999999E-16;
        var megajoule               = microjoule * 1.E-12;
        var millijoule              = microjoule * 0.001;
        var nanojoule               = microjoule * 1000;
        var attojoule               = microjoule * 1000000000000;
        var megaelectron_volt       = microjoule * 6241506.3631;
        var kiloelectron_volt       = microjoule * 6241506363.1;
        var electron_volt           = microjoule * 6241506363094;
        var erg                     = microjoule * 10;
        var gigawatt_hour           = microjoule * 2.777777777E-19;
        var megawatt_hour           = microjoule * 2.777777777E-16;

        var kilowatt_second         = microjoule * 9.999999999E-10;
        var watt_second             = microjoule * 0.000001;
        var newton_meter            = microjoule * 0.000001;
        var horsepower_hour         = microjoule * 3.725061361E-13;
        var kilocalorie_it          = microjoule * 2.388458966E-10;
        var kilocalorie_th          = microjoule * 2.390057361E-10;
        var calorie_it              = microjoule * 2.388458966E-7;
        var calorie_th              = microjoule * 2.390057361E-7;
        var mega_Btu                = microjoule * 2.390057361E-7;
        var ton_hour                = microjoule * 7.898476002E-14;
        var fuel_oil_kiloliter      = microjoule * 2.487708977E-17;
        var fuel_oil_barrel         = microjoule * 1.566639868E-16;
        var gigaton                 = microjoule * 2.390057361E-25;
        var megaton                 = microjoule * 2.390057361E-22;
        var kiloton                 = microjoule * 2.390057361E-19;
        var ton_explosives          = microjoule * 2.390057361E-16;
        var dyne_centimeter         = microjoule * 10;
        var gram_force_meter        = microjoule * 0.0001019716;
        var gram_force_cm           = microjoule * 0.0101971621;
        var kilogram_force_cm       = microjoule * 0.0000101972;
        var kilogram_force_meter    = microjoule * 1.019716213E-7;
        var kilopond_meter          = microjoule * 1.019716213E-7;
        var pound_force_foot        = microjoule * 7.375621493E-7;
        var pound_force_inch        = microjoule * 0.0000088507;
        var ounce_force_inch        = microjoule * 0.0001416119;
        var foot_pound              = microjoule * 7.375621493E-7;
        var inch_pound              = microjoule * 0.0000088507;
        var inch_ounce              = microjoule * 0.0001416119;
        var poundal_foot            = microjoule * 0.0000237304;
        var therm                   = microjoule * 9.478169879E-15;
        var therm_EC                = microjoule * 9.478169879E-15;
        var therm_US                = microjoule * 9.480434279E-15;
        var hartree_energy          = microjoule * 229371044869;
        var rydberg_constant        = microjoule * 458742089738;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromNanojoule() {

        var nanojoule = parseFloat(document.getElementById("nanojoule").value);

        var joule                   = nanojoule * 1.E-9;
        var kilojoule               = nanojoule * 1.E-12;
        var kilowatt_hour           = nanojoule * 2.777777777E-16;
        var watt_hour               = nanojoule * 2.777777777E-13;
        var calorie                 = nanojoule * 2.388458966E-13;
        var horsepower              = nanojoule * 3.776726714E-16;
        var btu_IT                  = nanojoule * 9.478171203E-13;
        var btu_th                  = nanojoule * 9.484516527E-13;
        var gigajoule               = nanojoule * 1.E-18;
        var megajoule               = nanojoule * 1.E-15;
        var millijoule              = nanojoule * 0.000001;
        var microjoule               = nanojoule * 0.001;
        var attojoule               = nanojoule * 1000000000;
        var megaelectron_volt       = nanojoule * 6241.5063631;
        var kiloelectron_volt       = nanojoule * 6241506.3631;
        var electron_volt           = nanojoule * 6241506363.1;
        var erg                     = nanojoule * 0.01;
        var gigawatt_hour           = nanojoule * 2.777777777E-22;
        var megawatt_hour           = nanojoule * 2.777777777E-19;

        var kilowatt_second         = nanojoule * 1.E-12;
        var watt_second             = nanojoule * 1.E-9;
        var newton_meter            = nanojoule * 1.E-9;
        var horsepower_hour         = nanojoule * 3.725061361E-16;
        var kilocalorie_it          = nanojoule * 2.388458966E-13;
        var kilocalorie_th          = nanojoule * 2.390057361E-13;
        var calorie_it              = nanojoule * 2.388458966E-10;
        var calorie_th              = nanojoule * 2.390057361E-10;
        var mega_Btu                = nanojoule * 9.478171203E-19;
        var ton_hour                = nanojoule * 7.898476002E-17;
        var fuel_oil_kiloliter      = nanojoule * 2.487708977E-20;
        var fuel_oil_barrel         = nanojoule * 1.566639868E-19;
        var gigaton                 = nanojoule * 2.390057361E-28;
        var megaton                 = nanojoule * 2.390057361E-25;
        var kiloton                 = nanojoule * 2.390057361E-22;
        var ton_explosives          = nanojoule * 2.390057361E-19;
        var dyne_centimeter         = nanojoule * 0.01;
        var gram_force_meter        = nanojoule * 1.019716213E-7;
        var gram_force_cm           = nanojoule * 0.0000101972;
        var kilogram_force_cm       = nanojoule * 1.019716213E-8;
        var kilogram_force_meter    = nanojoule * 1.019716213E-10;
        var kilopond_meter          = nanojoule * 1.019716213E-10;
        var pound_force_foot        = nanojoule * 7.375621493E-10;
        var pound_force_inch        = nanojoule * 8.850745791E-9;
        var ounce_force_inch        = nanojoule * 1.416119326E-7;
        var foot_pound              = nanojoule * 7.375621493E-10;
        var inch_pound              = nanojoule * 8.850745791E-9;
        var inch_ounce              = nanojoule * 1.416119326E-7;
        var poundal_foot            = nanojoule * 2.373036045E-8;
        var therm                   = nanojoule * 9.478169879E-18;
        var therm_EC                = nanojoule * 9.478169879E-18;
        var therm_US                = nanojoule * 9.480434279E-18;
        var hartree_energy          = nanojoule * 229371044.87;
        var rydberg_constant        = nanojoule * 458742089.74;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromAttjoule() {

        var attojoule = parseFloat(document.getElementById("attojoule").value);

        var joule                   = attojoule * 9.999999999E-19;
        var kilojoule               = attojoule * 1.E-21;
        var kilowatt_hour           = attojoule * 2.777777777E-25;
        var watt_hour               = attojoule * 2.777777777E-22;
        var calorie                 = attojoule * 2.388458966E-22;
        var horsepower              = attojoule * 3.776726714E-25;
        var btu_IT                  = attojoule * 9.478171203E-22;
        var btu_th                  = attojoule * 9.484516527E-22;
        var gigajoule               = attojoule * 9.999999999E-28;
        var megajoule               = attojoule * 1.E-24;
        var millijoule              = attojoule * 9.999999999E-16;
        var microjoule              = attojoule * 1.E-12;
        var nanojoule               = attojoule * 9.999999999E-10;
        var megaelectron_volt       = attojoule * 0.0000062415;
        var kiloelectron_volt       = attojoule * 0.0062415064;
        var electron_volt           = attojoule * 6.2415063631;
        var erg                     = attojoule * 9.999999999E-12;
        var gigawatt_hour           = attojoule * 2.777777777E-31;
        var megawatt_hour           = attojoule * 2.777777777E-28;

        var kilowatt_second         = attojoule * 1.E-21;
        var watt_second             = attojoule * 9.999999999E-19;
        var newton_meter            = attojoule * 9.999999999E-19;
        var horsepower_hour         = attojoule * 3.725061361E-25;
        var kilocalorie_it          = attojoule * 2.388458966E-22;
        var kilocalorie_th          = attojoule * 2.390057361E-22;
        var calorie_it              = attojoule * 2.388458966E-19;
        var calorie_th              = attojoule * 2.390057361E-19;
        var mega_Btu                = attojoule * 9.478171203E-28;
        var ton_hour                = attojoule * 7.898476002E-26;
        var fuel_oil_kiloliter      = attojoule * 2.487708977E-29;
        var fuel_oil_barrel         = attojoule * 1.566639868E-28;
        var gigaton                 = attojoule * 2.390057361E-37;
        var megaton                 = attojoule * 2.390057361E-37;
        var kiloton                 = attojoule * 2.390057361E-31;
        var ton_explosives          = attojoule * 2.390057361E-28;
        var dyne_centimeter         = attojoule * 9.999999999E-12;
        var gram_force_meter        = attojoule * 1.019716213E-16;
        var gram_force_cm           = attojoule * 1.019716213E-14;
        var kilogram_force_cm       = attojoule * 1.019716213E-17;
        var kilogram_force_meter    = attojoule * 1.019716213E-19;
        var kilopond_meter          = attojoule * 1.019716213E-19;
        var pound_force_foot        = attojoule * 7.375621492E-19;
        var pound_force_inch        = attojoule * 8.850745791E-18;
        var ounce_force_inch        = attojoule * 1.416119326E-16;
        var foot_pound              = attojoule * 7.375621492E-19;
        var inch_pound              = attojoule * 8.850745791E-18;
        var inch_ounce              = attojoule * 1.416119326E-16;
        var poundal_foot            = attojoule * 2.373036045E-17;
        var therm                   = attojoule * 9.478169879E-27;
        var therm_EC                = attojoule * 9.478169879E-27;
        var therm_US                = attojoule * 9.480434279E-27;
        var hartree_energy          = attojoule * 0.2293710449;
        var rydberg_constant        = attojoule * 0.4587420897;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromMegaelectron() {

        var megaelectron_volt = parseFloat(document.getElementById("megaelectron_volt").value);

        var joule                   = megaelectron_volt * 1.60217733E-13;
        var kilojoule               = megaelectron_volt * 1.60217733E-16;
        var kilowatt_hour           = megaelectron_volt * 4.450492583E-20;
        var watt_hour               = megaelectron_volt * 4.450492583E-17;
        var calorie                 = megaelectron_volt * 3.826734809E-17;
        var horsepower              = megaelectron_volt * 6.050985923E-20;
        var btu_IT                  = megaelectron_volt * 1.518571103E-16;
        var btu_th                  = megaelectron_volt * 1.519587736E-16;
        var gigajoule               = megaelectron_volt * 1.60217733E-22;
        var megajoule               = megaelectron_volt * 1.60217733E-19;
        var millijoule              = megaelectron_volt * 1.60217733E-10;
        var microjoule              = megaelectron_volt * 1.60217733E-7;
        var nanojoule               = megaelectron_volt * 0.0001602177;
        var attojoule               = megaelectron_volt * 160217.733;
        var kiloelectron_volt       = megaelectron_volt * 1000;
        var electron_volt           = megaelectron_volt * 1000000;
        var erg                     = megaelectron_volt * 0.0000016022;
        var gigawatt_hour           = megaelectron_volt * 4.450492583E-26;
        var megawatt_hour           = megaelectron_volt * 4.450492583E-23;

        var kilowatt_second         = megaelectron_volt * 1.60217733E-16;
        var watt_second             = megaelectron_volt * 1.60217733E-13;
        var newton_meter            = megaelectron_volt * 1.60217733E-13;
        var horsepower_hour         = megaelectron_volt * 35.968208865E-20;
        var kilocalorie_it          = megaelectron_volt * 3.826734809E-17;
        var kilocalorie_th          = megaelectron_volt * 3.829295721E-17;
        var calorie_it              = megaelectron_volt * 3.826734809E-14;
        var calorie_th              = megaelectron_volt * 3.829295721E-14;
        var mega_Btu                = megaelectron_volt * 1.518571103E-22;
        var ton_hour                = megaelectron_volt * 1.265475919E-20;
        var fuel_oil_kiloliter      = megaelectron_volt * 3.985750926E-24;
        var fuel_oil_barrel         = megaelectron_volt * 2.510034881E-23;
        var gigaton                 = megaelectron_volt * 3.829295721E-32;
        var megaton                 = megaelectron_volt * 3.829295721E-29;
        var kiloton                 = megaelectron_volt * 3.829295721E-26;
        var ton_explosives          = megaelectron_volt * 3.829295721E-23;
        var dyne_centimeter         = megaelectron_volt * 0.0000016022;
        var gram_force_meter        = megaelectron_volt * 1.633766199E-11;
        var gram_force_cm           = megaelectron_volt * 1.633766199E-9;
        var kilogram_force_cm       = megaelectron_volt * 1.633766199E-12;
        var kilogram_force_meter    = megaelectron_volt * 1.633766199E-14;
        var kilopond_meter          = megaelectron_volt * 1.633766199E-14;
        var pound_force_foot        = megaelectron_volt * 1.181705355E-13;
        var pound_force_inch        = megaelectron_volt * 1.418046426E-12;
        var ounce_force_inch        = megaelectron_volt * 2.268874281E-11;
        var foot_pound              = megaelectron_volt * 1.181705355E-13;
        var inch_pound              = megaelectron_volt * 1.418046426E-12;
        var inch_ounce              = megaelectron_volt * 2.268874281E-11;
        var poundal_foot            = megaelectron_volt * 3.802024555E-12;
        var therm                   = megaelectron_volt * 1.518570891E-21;
        var therm_EC                = megaelectron_volt * 1.518570891E-21;
        var therm_US                = megaelectron_volt * 1.518933688E-21;
        var hartree_energy          = megaelectron_volt * 36749.308825;
        var rydberg_constant        = megaelectron_volt * 73498.61765;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromKiloelectron() {

        var kiloelectron_volt = parseFloat(document.getElementById("kiloelectron_volt").value);

        var joule                   = kiloelectron_volt * 1.60217733E-16;
        var kilojoule               = kiloelectron_volt * 1.60217733E-19;        ;
        var kilowatt_hour           = kiloelectron_volt * 4.450492583E-23;
        var watt_hour               = kiloelectron_volt * 4.450492583E-20;
        var calorie                 = kiloelectron_volt * 3.826734809E-20;
        var horsepower              = kiloelectron_volt * 6.050985923E-23;
        var btu_IT                  = kiloelectron_volt * 1.518571103E-19;
        var btu_th                  = kiloelectron_volt * 1.519587736E-19;
        var gigajoule               = kiloelectron_volt * 1.60217733E-25;
        var megajoule               = kiloelectron_volt * 1.60217733E-22;
        var millijoule              = kiloelectron_volt * 1.60217733E-13;
        var microjoule              = kiloelectron_volt * 1.60217733E-10;
        var nanojoule               = kiloelectron_volt * 1.60217733E-7;
        var attojoule               = kiloelectron_volt * 160.217733;
        var megaelectron_volt       = kiloelectron_volt * 0.001;
        var electron_volt           = kiloelectron_volt * 1000;
        var erg                     = kiloelectron_volt * 1.60217733E-9;
        var gigawatt_hour           = kiloelectron_volt * 4.450492583E-29;
        var megawatt_hour           = kiloelectron_volt * 4.450492583E-26;

        var kilowatt_second         = kiloelectron_volt * 1.60217733E-19;
        var watt_second             = kiloelectron_volt * 1.60217733E-19;
        var newton_meter            = kiloelectron_volt * 1.60217733E-16;
        var horsepower_hour         = kiloelectron_volt * 5.968208865E-23;
        var kilocalorie_it          = kiloelectron_volt * 3.826734809E-20;
        var kilocalorie_th          = kiloelectron_volt * 3.829295721E-20;
        var calorie_it              = kiloelectron_volt * 3.826734809E-17;
        var calorie_th              = kiloelectron_volt * 3.829295721E-17;
        var mega_Btu                = kiloelectron_volt * 1.518571103E-25;
        var ton_hour                = kiloelectron_volt * 1.265475919E-23;
        var fuel_oil_kiloliter      = kiloelectron_volt * 3.985750926E-27;
        var fuel_oil_barrel         = kiloelectron_volt * 2.510034881E-26;
        var gigaton                 = kiloelectron_volt * 3.829295721E-35;
        var megaton                 = kiloelectron_volt * 3.829295721E-32;
        var kiloton                 = kiloelectron_volt * 3.829295721E-29;
        var ton_explosives          = kiloelectron_volt * 3.829295721E-26;
        var dyne_centimeter         = kiloelectron_volt * 1.60217733E-9;
        var gram_force_meter        = kiloelectron_volt * 1.633766199E-14;
        var gram_force_cm           = kiloelectron_volt * 1.633766199E-12;
        var kilogram_force_cm       = kiloelectron_volt * 1.633766199E-15;
        var kilogram_force_meter    = kiloelectron_volt * 1.633766199E-17;
        var kilopond_meter          = kiloelectron_volt * 1.633766199E-17;
        var pound_force_foot        = kiloelectron_volt * 1.181705355E-16;
        var pound_force_inch        = kiloelectron_volt * 1.418046426E-15;
        var ounce_force_inch        = kiloelectron_volt * 2.268874281E-14;
        var foot_pound              = kiloelectron_volt * 1.181705355E-16;
        var inch_pound              = kiloelectron_volt * 1.418046426E-15;
        var inch_ounce              = kiloelectron_volt * 2.268874281E-14;
        var poundal_foot            = kiloelectron_volt * 3.802024555E-15;
        var therm                   = kiloelectron_volt * 1.518570891E-24;
        var therm_EC                = kiloelectron_volt * 1.518570891E-24;
        var therm_US                = kiloelectron_volt * 1.518933688E-24;
        var hartree_energy          = kiloelectron_volt * 36.749308825;
        var rydberg_constant        = kiloelectron_volt * 73.49861765;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromelectronvolt() {

        var electron_volt = parseFloat(document.getElementById("electron_volt").value);

        var joule                   = electron_volt * 1.60217733E-19;
        var kilojoule               = electron_volt * 1.60217733E-22;        ;
        var kilowatt_hour           = electron_volt * 4.450492583E-26;
        var watt_hour               = electron_volt * 4.450492583E-23;
        var calorie                 = electron_volt * 3.826734809E-23;
        var horsepower              = electron_volt * 6.050985923E-26;
        var btu_IT                  = electron_volt * 1.518571103E-22;
        var btu_th                  = electron_volt * 1.519587736E-22;
        var gigajoule               = electron_volt * 1.60217733E-28;
        var megajoule               = electron_volt * 1.60217733E-25;
        var millijoule              = electron_volt * 1.60217733E-16;
        var microjoule              = electron_volt * 1.60217733E-13;
        var nanojoule               = electron_volt * 1.60217733E-10;
        var attojoule               = electron_volt * 0.160217733;
        var megaelectron_volt       = electron_volt * 0.000001;
        var kiloelectron_volt       = electron_volt * 0.001;
        var erg                     = electron_volt * 1.60217733E-12;
        var gigawatt_hour           = electron_volt * 4.450492583E-32;
        var megawatt_hour           = electron_volt * 4.450492583E-29;

        var kilowatt_second         = electron_volt * 1.60217733E-22;
        var watt_second             = electron_volt * 1.60217733E-19;
        var newton_meter            = electron_volt * 1.60217733E-19;
        var horsepower_hour         = electron_volt * 5.968208865E-26;
        var kilocalorie_it          = electron_volt * 3.826734809E-23;
        var kilocalorie_th          = electron_volt * 3.829295721E-23;
        var calorie_it              = electron_volt * 3.826734809E-20;
        var calorie_th              = electron_volt * 3.829295721E-20;
        var mega_Btu                = electron_volt * 1.518571103E-28;
        var ton_hour                = electron_volt * 1.265475919E-26;
        var fuel_oil_kiloliter      = electron_volt * 3.985750926E-30;
        var fuel_oil_barrel         = electron_volt * 2.510034881E-29;
        var gigaton                 = electron_volt * 2.510034881E-29;
        var megaton                 = electron_volt * 3.829295721E-35;
        var kiloton                 = electron_volt * 3.829295721E-32;
        var ton_explosives          = electron_volt * 3.829295721E-29;
        var dyne_centimeter         = electron_volt * 1.60217733E-12;
        var gram_force_meter        = electron_volt * 1.633766199E-17;
        var gram_force_cm           = electron_volt * 1.633766199E-15;
        var kilogram_force_cm       = electron_volt * 1.633766199E-18;
        var kilogram_force_meter    = electron_volt * 1.633766199E-20;
        var kilopond_meter          = electron_volt * 1.633766199E-20;
        var pound_force_foot        = electron_volt * 1.181705355E-19;
        var pound_force_inch        = electron_volt * 1.418046426E-18;
        var ounce_force_inch        = electron_volt * 2.268874281E-17;
        var foot_pound              = electron_volt * 1.181705355E-19;
        var inch_pound              = electron_volt * 1.418046426E-18;
        var inch_ounce              = electron_volt * 2.268874281E-17;
        var poundal_foot            = electron_volt * 3.802024555E-18;
        var therm                   = electron_volt * 1.518570891E-27;
        var therm_EC                = electron_volt * 1.518570891E-27;
        var therm_US                = electron_volt * 1.518933688E-27;
        var hartree_energy          = electron_volt * 0.0367493088;
        var rydberg_constant        = electron_volt * 0.0734986176;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromerg() {

        var erg = parseFloat(document.getElementById("erg").value);

        var joule                   = erg * 1.E-7;
        var kilojoule               = erg * 9.999999999E-11;        ;
        var kilowatt_hour           = erg * 2.777777777E-14;
        var watt_hour               = erg * 2.777777777E-11;
        var calorie                 = erg * 2.388458966E-11;
        var horsepower              = erg * 3.776726714E-14;
        var btu_IT                  = erg * 9.478171203E-11;
        var btu_th                  = erg * 9.484516527E-11;
        var gigajoule               = erg * 1.E-16;
        var megajoule               = erg * 1.E-13;
        var millijoule              = erg * 0.0001;
        var microjoule              = erg * 0.1;
        var nanojoule               = erg * 100;
        var attojoule               = erg * 100000000000;
        var megaelectron_volt       = erg * 624150.63631;
        var kiloelectron_volt       = erg * 624150636.31;
        var electron_volt           = erg * 624150636309;
        var gigawatt_hour           = erg * 2.777777777E-20;
        var megawatt_hour           = erg * 2.777777777E-17;

        var kilowatt_second         = erg * 9.999999999E-11;
        var watt_second             = erg * 1.E-7;
        var newton_meter            = erg * 1.E-7;
        var horsepower_hour         = erg * 3.725061361E-14;
        var kilocalorie_it          = erg * 2.388458966E-11;
        var kilocalorie_th          = erg * 2.390057361E-11;
        var calorie_it              = erg * 2.388458966E-8;
        var calorie_th              = erg * 2.390057361E-8;
        var mega_Btu                = erg * 9.478171203E-17;
        var ton_hour                = erg * 7.898476002E-15;
        var fuel_oil_kiloliter      = erg * 2.487708977E-18;
        var fuel_oil_barrel         = erg * 1.566639868E-17;
        var gigaton                 = erg * 2.390057361E-26;
        var megaton                 = erg * 2.390057361E-23;
        var kiloton                 = erg * 2.390057361E-20;
        var ton_explosives          = erg * 2.390057361E-17;
        var dyne_centimeter         = erg * 1;
        var gram_force_meter        = erg * 0.0000101972;
        var gram_force_cm           = erg * 0.0010197162;
        var kilogram_force_cm       = erg * 0.0000010197;
        var kilogram_force_meter    = erg * 1.019716213E-8;
        var kilopond_meter          = erg * 1.019716213E-8;
        var pound_force_foot        = erg * 7.375621493E-8;
        var pound_force_inch        = erg * 8.850745791E-7;
        var ounce_force_inch        = erg * 0.0000141612;
        var foot_pound              = erg * 7.375621493E-8;
        var inch_pound              = erg * 8.850745791E-7;
        var inch_ounce              = erg * 0.0000141612;
        var poundal_foot            = erg * 0.000002373;
        var therm                   = erg * 9.478169879E-16;
        var therm_EC                = erg * 9.478169879E-16;
        var therm_US                = erg * 9.480434279E-16;
        var hartree_energy          = erg * 22937104487;
        var rydberg_constant        = erg * 45874208974;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromGigawatthour() {

        var gigawatt_hour = parseFloat(document.getElementById("gigawatt_hour").value);

        var joule                   = gigawatt_hour * 3600000000000;
        var kilojoule               = gigawatt_hour * 3600000000;        ;
        var kilowatt_hour           = gigawatt_hour * 1000000;
        var watt_hour               = gigawatt_hour * 1000000000;
        var calorie                 = gigawatt_hour * 859845227.86;
        var horsepower              = gigawatt_hour * 1359621.6173;
        var btu_IT                  = gigawatt_hour * 3412141633.1;
        var btu_th                  = gigawatt_hour * 3414425949.7;
        var gigajoule               = gigawatt_hour * 3600;
        var megajoule               = gigawatt_hour * 3600000;
        var millijoule              = gigawatt_hour * 3599999999999971;
        var microjoule              = gigawatt_hour * 3599999999999971300;
        var nanojoule               = gigawatt_hour * 3.599999999E+21;
        var attojoule               = gigawatt_hour * 3.599999999E+30;
        var megaelectron_volt       = gigawatt_hour * 2.24694229E+25;
        var kiloelectron_volt       = gigawatt_hour * 2.24694229E+28;
        var electron_volt           = gigawatt_hour * 2.24694229E+31;
        var erg                     = gigawatt_hour * 35999999999999710000;
        var megawatt_hour           = gigawatt_hour * 1000;

        var kilowatt_second         = gigawatt_hour * 3600000000;
        var watt_second             = gigawatt_hour * 3600000000000;
        var newton_meter            = gigawatt_hour * 3600000000000;
        var horsepower_hour         = gigawatt_hour * 1341022.09;
        var kilocalorie_it          = gigawatt_hour * 859845227.86;
        var kilocalorie_th          = gigawatt_hour * 860420650.1;
        var calorie_it              = gigawatt_hour * 859845227859;
        var calorie_th              = gigawatt_hour * 860420650096;
        var mega_Btu                = gigawatt_hour * 3412.1416331;
        var ton_hour                = gigawatt_hour * 284345.13609;
        var fuel_oil_kiloliter      = gigawatt_hour * 89.557523179;
        var fuel_oil_barrel         = gigawatt_hour * 563.99035258;
        var gigaton                 = gigawatt_hour * 8.6042065E-7;
        var megaton                 = gigawatt_hour * 0.0008604207;
        var kiloton                 = gigawatt_hour * 0.8604206501;
        var ton_explosives          = gigawatt_hour * 860.4206501;
        var dyne_centimeter         = gigawatt_hour * 35999999999999710000;
        var gram_force_meter        = gigawatt_hour * 367097836683381;
        var gram_force_cm           = gigawatt_hour * 36709783668338104;
        var kilogram_force_cm       = gigawatt_hour * 36709783668338;
        var kilogram_force_meter    = gigawatt_hour * 367097836683;
        var kilopond_meter          = gigawatt_hour * 367097836683;
        var pound_force_foot        = gigawatt_hour * 2655223737480;
        var pound_force_inch        = gigawatt_hour * 31862684849760;
        var ounce_force_inch        = gigawatt_hour * 509802957596156;
        var foot_pound              = gigawatt_hour * 2655223737480;
        var inch_pound              = gigawatt_hour * 31862684849760;
        var inch_ounce              = gigawatt_hour * 509802957596156;
        var poundal_foot            = gigawatt_hour * 85429297645559;
        var therm                   = gigawatt_hour * 34121.411565;
        var therm_EC                = gigawatt_hour * 34121.411565;
        var therm_US                = gigawatt_hour * 34129.563407;
        var hartree_energy          = gigawatt_hour * 8.257357615E+29;
        var rydberg_constant        = gigawatt_hour * 1.651471523E+30;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("megawatt_hour").value = megawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromMegawatthour() {

        var megawatt_hour = parseFloat(document.getElementById("megawatt_hour").value);

        var joule                   = megawatt_hour * 3600000000;
        var kilojoule               = megawatt_hour * 3600000;        
        var kilowatt_hour           = megawatt_hour * 1000;
        var watt_hour               = megawatt_hour * 1000000;
        var calorie                 = megawatt_hour * 859845.22786;
        var horsepower              = megawatt_hour * 1359.6216173;
        var btu_IT                  = megawatt_hour * 3412141.6331;
        var btu_th                  = megawatt_hour * 3414425.9497;
        var gigajoule               = megawatt_hour * 3.6;
        var megajoule               = megawatt_hour * 3600;
        var millijoule              = megawatt_hour * 3600000000000;
        var microjoule              = megawatt_hour * 3599999999999972;
        var nanojoule               = megawatt_hour * 3599999999999971300;
        var attojoule               = megawatt_hour * 3.599999999E+27;
        var megaelectron_volt       = megawatt_hour * 2.24694229E+22;
        var kiloelectron_volt       = megawatt_hour * 2.24694229E+25;
        var electron_volt           = megawatt_hour * 2.24694229E+28;
        var erg                     = megawatt_hour * 35999999999999710;
        var gigawatt_hour           = megawatt_hour * 0.001;

        var kilowatt_second         = megawatt_hour * 3600000;
        var watt_second             = megawatt_hour * 3600000000;
        var newton_meter            = megawatt_hour * 3600000000;
        var horsepower_hour         = megawatt_hour * 1341.02209;
        var kilocalorie_it          = megawatt_hour * 859845.22786;
        var kilocalorie_th          = megawatt_hour * 860420.6501;
        var calorie_it              = megawatt_hour * 859845227.86;
        var calorie_th              = megawatt_hour * 860420650.1;
        var mega_Btu                = megawatt_hour * 3.4121416331;
        var ton_hour                = megawatt_hour * 284.34513609;
        var fuel_oil_kiloliter      = megawatt_hour * 0.0895575232;
        var fuel_oil_barrel         = megawatt_hour * 0.5639903526;
        var gigaton                 = megawatt_hour * 8.6042065E-10;
        var megaton                 = megawatt_hour * 8.6042065E-7;
        var kiloton                 = megawatt_hour * 0.0008604207;
        var ton_explosives          = megawatt_hour * 0.8604206501;
        var dyne_centimeter         = megawatt_hour * 35999999999999710;
        var gram_force_meter        = megawatt_hour * 367097836683;
        var gram_force_cm           = megawatt_hour * 36709783668338;
        var kilogram_force_cm       = megawatt_hour * 36709783668;
        var kilogram_force_meter    = megawatt_hour * 367097836.68;
        var kilopond_meter          = megawatt_hour * 367097836.68;
        var pound_force_foot        = megawatt_hour * 2655223737.5;
        var pound_force_inch        = megawatt_hour * 31862684850;
        var ounce_force_inch        = megawatt_hour * 509802957596;
        var foot_pound              = megawatt_hour * 2655223737.5;
        var inch_pound              = megawatt_hour * 31862684850;
        var inch_ounce              = megawatt_hour * 509802957596;
        var poundal_foot            = megawatt_hour * 85429297646;
        var therm                   = megawatt_hour * 34.121411565;
        var therm_EC                = megawatt_hour * 34.121411565;
        var therm_US                = megawatt_hour * 34.129563407;
        var hartree_energy          = megawatt_hour * 8.257357615E+26;
        var rydberg_constant        = megawatt_hour * 1.651471523E+27;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;

        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertKilowattsecond() {

        var kilowatt_second = parseFloat(document.getElementById("kilowatt_second").value);

        var joule                   = kilowatt_second * 1000;
        var kilojoule               = kilowatt_second * 1;        
        var kilowatt_hour           = kilowatt_second * 0.0002777778;
        var watt_hour               = kilowatt_second * 0.2777777778;
        var calorie                 = kilowatt_second * 0.2388458966;
        var horsepower              = kilowatt_second * 0.0003776727;
        var btu_IT                  = kilowatt_second * 0.9478171203;
        var btu_th                  = kilowatt_second * 0.9484516527;
        var gigajoule               = kilowatt_second * 0.000001;
        var megajoule               = kilowatt_second * 0.001;
        var millijoule              = kilowatt_second * 1000000;
        var microjoule              = kilowatt_second * 1000000000;
        var nanojoule               = kilowatt_second * 1000000000000;
        var attojoule               = kilowatt_second * 1.E+21;
        var megaelectron_volt       = kilowatt_second * 6241506363094002;
        var kiloelectron_volt       = kilowatt_second * 6241506363094001000;
        var electron_volt           = kilowatt_second * 6.241506363E+21;
        var erg                     = kilowatt_second * 10000000000;
        var gigawatt_hour           = kilowatt_second * 2.777777777E-10;

        var megawatt_hour           = kilowatt_second * 2.777777777E-7;
        var watt_second             = kilowatt_second * 1000;
        var newton_meter            = kilowatt_second * 1000;
        var horsepower_hour         = kilowatt_second * 0.0003725061;
        var kilocalorie_it          = kilowatt_second * 0.2388458966;
        var kilocalorie_th          = kilowatt_second * 0.2390057361;
        var calorie_it              = kilowatt_second * 238.84589663;
        var calorie_th              = kilowatt_second * 239.00573614;
        var mega_Btu                = kilowatt_second * 9.478171203E-7;
        var ton_hour                = kilowatt_second * 0.0000789848;
        var fuel_oil_kiloliter      = kilowatt_second * 2.487708977E-8;
        var fuel_oil_barrel         = kilowatt_second * 1.566639868E-7;
        var gigaton                 = kilowatt_second * 2.390057361E-16;
        var megaton                 = kilowatt_second * 2.390057361E-13;
        var kiloton                 = kilowatt_second * 2.390057361E-10;
        var ton_explosives          = kilowatt_second * 2.390057361E-7;
        var dyne_centimeter         = kilowatt_second * 10000000000;
        var gram_force_meter        = kilowatt_second * 101971.6213;
        var gram_force_cm           = kilowatt_second * 10197162.13;
        var kilogram_force_cm       = kilowatt_second * 10197.16213;
        var kilogram_force_meter    = kilowatt_second * 101.9716213;
        var kilopond_meter          = kilowatt_second * 101.9716213;
        var pound_force_foot        = kilowatt_second * 737.5621493;
        var pound_force_inch        = kilowatt_second * 8850.7457916;
        var ounce_force_inch        = kilowatt_second * 141611.93267;
        var foot_pound              = kilowatt_second * 737.5621493;
        var inch_pound              = kilowatt_second * 8850.7457916;
        var inch_ounce              = kilowatt_second * 141611.93267;
        var poundal_foot            = kilowatt_second * 23730.360457;
        var therm                   = kilowatt_second * 0.0000094782;
        var therm_EC                = kilowatt_second * 0.0000094782;
        var therm_US                = kilowatt_second * 0.0000094804;
        var hartree_energy          = kilowatt_second * 229371044869060000000;
        var rydberg_constant        = kilowatt_second * 458742089738120000000;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;

        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromWattsecond() {

        var watt_second = parseFloat(document.getElementById("watt_second").value);

        var joule                   = watt_second * 1;
        var kilojoule               = watt_second * 0.001;        
        var kilowatt_hour           = watt_second * 2.777777777E-7;
        var watt_hour               = watt_second * 0.0002777778;
        var calorie                 = watt_second * 0.0002388459;
        var horsepower              = watt_second * 3.776726714E-7;
        var btu_IT                  = watt_second * 0.0009478171;
        var btu_th                  = watt_second * 0.0009484517;
        var gigajoule               = watt_second * 9.999999999E-10;
        var megajoule               = watt_second * 0.000001;
        var millijoule              = watt_second * 1000;
        var microjoule              = watt_second * 1000000;
        var nanojoule               = watt_second * 1000000000;
        var attojoule               = watt_second * 1000000000000000000;
        var megaelectron_volt       = watt_second * 6241506363094;
        var kiloelectron_volt       = watt_second * 6241506363094000;
        var electron_volt           = watt_second * 6241506363094000000;
        var erg                     = watt_second * 10000000;
        var gigawatt_hour           = watt_second * 2.777777777E-13;

        var megawatt_hour           = watt_second * 2.777777777E-10;
        var kilowatt_second         = watt_second * 0.001;
        var newton_meter            = watt_second * 1;
        var horsepower_hour         = watt_second * 3.725061361E-7;
        var kilocalorie_it          = watt_second * 0.0002388459;
        var kilocalorie_th          = watt_second * 0.0002390057;
        var calorie_it              = watt_second * 0.2388458966;
        var calorie_th              = watt_second * 239.00573614;
        var mega_Btu                = watt_second * 0.2390057361;
        var ton_hour                = watt_second * 7.898476002E-8;
        var fuel_oil_kiloliter      = watt_second * 2.487708977E-11;
        var fuel_oil_barrel         = watt_second * 1.566639868E-10;
        var gigaton                 = watt_second * 2.390057361E-19;
        var megaton                 = watt_second * 2.390057361E-16;
        var kiloton                 = watt_second * 2.390057361E-13;
        var ton_explosives          = watt_second * 2.390057361E-10;
        var dyne_centimeter         = watt_second * 10000000;
        var gram_force_meter        = watt_second * 101.9716213;
        var gram_force_cm           = watt_second * 10197.16213;
        var kilogram_force_cm       = watt_second * 10.19716213;
        var kilogram_force_meter    = watt_second * 0.1019716213;
        var kilopond_meter          = watt_second * 0.1019716213;
        var pound_force_foot        = watt_second * 0.7375621493;
        var pound_force_inch        = watt_second * 8.8507457916;
        var ounce_force_inch        = watt_second * 141.61193267;
        var foot_pound              = watt_second * 0.7375621493;
        var inch_pound              = watt_second * 8.8507457916;
        var inch_ounce              = watt_second * 141.61193267;
        var poundal_foot            = watt_second * 23.730360457;
        var therm                   = watt_second * 9.478169879E-9;
        var therm_EC                = watt_second * 9.478169879E-9;
        var therm_US                = watt_second * 9.480434279E-9;
        var hartree_energy          = watt_second * 229371044869059970;
        var rydberg_constant        = watt_second * 458742089738119940;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;

        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromNewtonmeter() {

        var newton_meter = parseFloat(document.getElementById("newton_meter").value);

        var joule                   = newton_meter * 1;
        var kilojoule               = newton_meter * 0.001;        
        var kilowatt_hour           = newton_meter * 2.777777777E-7;
        var watt_hour               = newton_meter * 0.0002777778;
        var calorie                 = newton_meter * 0.0002388459;
        var horsepower              = newton_meter * 3.776726714E-7;
        var btu_IT                  = newton_meter * 0.0009478171;
        var btu_th                  = newton_meter * 0.0009484517;
        var gigajoule               = newton_meter * 9.999999999E-10;
        var megajoule               = newton_meter * 0.000001;
        var millijoule              = newton_meter * 1000;
        var microjoule              = newton_meter * 1000000;
        var nanojoule               = newton_meter * 1000000000;
        var attojoule               = newton_meter * 1000000000000000000;
        var megaelectron_volt       = newton_meter * 6241506363094;
        var kiloelectron_volt       = newton_meter * 6241506363094000;
        var electron_volt           = newton_meter * 6241506363094000000;
        var erg                     = newton_meter * 10000000;
        var gigawatt_hour           = newton_meter * 2.777777777E-13;

        var megawatt_hour           = newton_meter * 2.777777777E-10;
        var kilowatt_second         = newton_meter * 0.001;
        var watt_second             = newton_meter * 1;
        var horsepower_hour         = newton_meter * 3.725061361E-7;
        var kilocalorie_it          = newton_meter * 0.0002388459;
        var kilocalorie_th          = newton_meter * 0.0002390057;
        var calorie_it              = newton_meter * 0.2388458966;
        var calorie_th              = newton_meter * 0.2390057361;
        var mega_Btu                = newton_meter * 9.478171203E-10;
        var ton_hour                = newton_meter * 7.898476002E-8;
        var fuel_oil_kiloliter      = newton_meter * 2.487708977E-11;
        var fuel_oil_barrel         = newton_meter * 1.566639868E-10;
        var gigaton                 = newton_meter * 2.390057361E-19;
        var megaton                 = newton_meter * 2.390057361E-16;
        var kiloton                 = newton_meter * 2.390057361E-13;
        var ton_explosives          = newton_meter * 2.390057361E-10;
        var dyne_centimeter         = newton_meter * 10000000;
        var gram_force_meter        = newton_meter * 101.9716213;
        var gram_force_cm           = newton_meter * 10197.16213;
        var kilogram_force_cm       = newton_meter * 10.19716213;
        var kilogram_force_meter    = newton_meter * 0.1019716213;
        var kilopond_meter          = newton_meter * 0.1019716213;
        var pound_force_foot        = newton_meter * 0.7375621493;
        var pound_force_inch        = newton_meter * 8.8507457916;
        var ounce_force_inch        = newton_meter * 141.61193267;
        var foot_pound              = newton_meter * 0.7375621493;
        var inch_pound              = newton_meter * 8.8507457916;
        var inch_ounce              = newton_meter * 141.61193267;
        var poundal_foot            = newton_meter * 23.730360457;
        var therm                   = newton_meter * 9.478169879E-9;
        var therm_EC                = newton_meter * 9.478169879E-9;
        var therm_US                = newton_meter * 9.480434279E-9;
        var hartree_energy          = newton_meter * 229371044869059970;
        var rydberg_constant        = newton_meter * 458742089738119940;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;

        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromHorsepowerhour() {

        var horsepower_hour = parseFloat(document.getElementById("horsepower_hour").value);

        var joule                   = horsepower_hour * 2684519.5369;
        var kilojoule               = horsepower_hour * 2684.5195369;        
        var kilowatt_hour           = horsepower_hour * 0.7456998714;
        var watt_hour               = horsepower_hour * 745.69987136;
        var calorie                 = horsepower_hour * 641.1864758;
        var horsepower              = horsepower_hour * 1.0138696651;
        var btu_IT                  = horsepower_hour * 2544.4335769;
        var btu_th                  = horsepower_hour * 2546.1369915;
        var gigajoule               = horsepower_hour * 0.0026845195;
        var megajoule               = horsepower_hour * 2.6845195369;
        var millijoule              = horsepower_hour * 2684519536.9;
        var microjoule              = horsepower_hour * 2684519536886;
        var nanojoule               = horsepower_hour * 2684519536885561;
        var attojoule               = horsepower_hour * 2.684519536E+24;
        var megaelectron_volt       = horsepower_hour * 16755445771321390000;
        var kiloelectron_volt       = horsepower_hour * 1.675544577E+22;
        var electron_volt           = horsepower_hour * 1.675544577E+25;
        var erg                     = horsepower_hour * 26845195368856;
        var gigawatt_hour           = horsepower_hour * 7.456998713E-7;

        var megawatt_hour           = horsepower_hour * 0.0007456999;
        var kilowatt_second         = horsepower_hour * 2684.5195369;
        var watt_second             = horsepower_hour * 2684519.5369;
        var newton_meter            = horsepower_hour * 2684519.5369;
        var kilocalorie_it          = horsepower_hour * 641.1864758;
        var kilocalorie_th          = horsepower_hour * 641.61556809;
        var calorie_it              = horsepower_hour * 641186.4758;
        var calorie_th              = horsepower_hour * 641615.56809;
        var mega_Btu                = horsepower_hour * 0.0025444336;
        var ton_hour                = horsepower_hour * 0.2120361314;
        var fuel_oil_kiloliter      = horsepower_hour * 0.000066783;
        var fuel_oil_barrel         = horsepower_hour * 0.0004205675;
        var gigaton                 = horsepower_hour * 6.41615568E-13;
        var megaton                 = horsepower_hour * 6.41615568E-10;
        var kiloton                 = horsepower_hour * 6.41615568E-7;
        var ton_explosives          = horsepower_hour * 0.0006416156;
        var dyne_centimeter         = horsepower_hour * 26845195368856;
        var gram_force_meter        = horsepower_hour * 273744809.59;
        var gram_force_cm           = horsepower_hour * 27374480959;
        var kilogram_force_cm       = horsepower_hour * 27374480.959;
        var kilogram_force_meter    = horsepower_hour * 273744.80959;
        var kilopond_meter          = horsepower_hour * 273744.80959;
        var pound_force_foot        = horsepower_hour * 1979999.9995;
        var pound_force_inch        = horsepower_hour * 23759999.994;
        var ounce_force_inch        = horsepower_hour * 380159999.9;
        var foot_pound              = horsepower_hour * 1979999.9995;
        var inch_pound              = horsepower_hour * 23759999.994;
        var inch_ounce              = horsepower_hour * 380159999.9;
        var poundal_foot            = horsepower_hour * 63704616.264;
        var therm                   = horsepower_hour * 0.0254443322;
        var therm_EC                = horsepower_hour * 0.0254443322;
        var therm_US                = horsepower_hour * 0.025450411;
        var hartree_energy          = horsepower_hour * 6.157510511E+23;
        var rydberg_constant        = horsepower_hour * 1.231502102E+24;
       

        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;

        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;

        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
}
/***** 12April2022 */

function ConvertFromKilocalorieIt() {

        var kilocalorie_it = parseFloat(document.getElementById("kilocalorie_it").value);
    
        var joule                   = kilocalorie_it * 4186.8;
        var kilojoule               = kilocalorie_it * 4.1868;        
        var kilowatt_hour           = kilocalorie_it * 0.001163;
        var watt_hour               = kilocalorie_it * 1.163;
        var calorie                 = kilocalorie_it * 1;
        var horsepower              = kilocalorie_it * 0.0015812399;
        var btu_IT                  = kilocalorie_it * 3.9683207193;
        var btu_th                  = kilocalorie_it * 3.9709773795;
        var gigajoule               = kilocalorie_it * 0.0000041868;
        var megajoule               = kilocalorie_it * 0.0041868;
        var millijoule              = kilocalorie_it * 4186800;
        var microjoule              = kilocalorie_it * 4186800000;
        var nanojoule               = kilocalorie_it * 4186800000000;
        var attojoule               = kilocalorie_it * 4.186799999E+21;
        var megaelectron_volt       = kilocalorie_it * 26131938841001516;
        var kiloelectron_volt       = kilocalorie_it * 26131938841001517000;
        var electron_volt           = kilocalorie_it * 2.613193884E+22;
        var erg                     = kilocalorie_it * 41868000000;
        var gigawatt_hour           = kilocalorie_it * 1.162999999E-9;
    
        var megawatt_hour           = kilocalorie_it * 0.000001163;
        var kilowatt_second         = kilocalorie_it * 4.1868;
        var watt_second             = kilocalorie_it * 4186.8;
        var newton_meter            = kilocalorie_it * 4186.8;
        var horsepower_hour          = kilocalorie_it * 0.0015596087;
        var kilocalorie_th          = kilocalorie_it * 1.0006692161;
        var calorie_it              = kilocalorie_it * 1000;
        var calorie_th              = kilocalorie_it * 1000.6692161;
        var mega_Btu                = kilocalorie_it * 0.0000039683;
        var ton_hour                = kilocalorie_it * 0.0003306934;
        var fuel_oil_kiloliter      = kilocalorie_it * 1.041553994E-7;
        var fuel_oil_barrel         = kilocalorie_it * 6.5592078E-7;
        var gigaton                 = kilocalorie_it * 1.000669216E-15;
        var megaton                 = kilocalorie_it * 1.000669216E-12;
        var kiloton                 = kilocalorie_it * 1.000669216E-9;
        var ton_explosives          = kilocalorie_it * 0.0000010007;
        var dyne_centimeter         = kilocalorie_it * 41868000000;
        var gram_force_meter        = kilocalorie_it * 426934.78406;
        var gram_force_cm           = kilocalorie_it * 42693478.406;
        var kilogram_force_cm       = kilocalorie_it * 42693.478406;
        var kilogram_force_meter    = kilocalorie_it * 426.93478406;
        var kilopond_meter          = kilocalorie_it * 426.93478406;
        var pound_force_foot        = kilocalorie_it * 3088.0252067;
        var pound_force_inch        = kilocalorie_it * 37056.30248;
        var ounce_force_inch        = kilocalorie_it * 592900.83968;
        var foot_pound              = kilocalorie_it * 3088.0252067;
        var inch_pound              = kilocalorie_it * 37056.30248;
        var inch_ounce              = kilocalorie_it * 592900.83968;
        var poundal_foot            = kilocalorie_it * 99354.273162;
        var therm                   = kilocalorie_it * 0.0000396832;
        var therm_EC                = kilocalorie_it * 0.0000396832;
        var therm_US                = kilocalorie_it * 0.0000396927;
        var hartree_energy          = kilocalorie_it * 960330690657764000000;
        var rydberg_constant        = kilocalorie_it * 1.920661381E+21;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromKilocalorieTh() {

        var kilocalorie_th = parseFloat(document.getElementById("kilocalorie_th").value);
    
        var joule                   = kilocalorie_th * 4184;
        var kilojoule               = kilocalorie_th * 4.184;        
        var kilowatt_hour           = kilocalorie_th * 0.0011622222;
        var watt_hour               = kilocalorie_th * 1.1622222222;
        var calorie                 = kilocalorie_th * 0.9993312315;
        var horsepower              = kilocalorie_th * 0.0015801825;
        var btu_IT                  = kilocalorie_th * 3.9656668314;
        var btu_th                  = kilocalorie_th * 3.9683217149;
        var gigajoule               = kilocalorie_th * 0.000004184;
        var megajoule               = kilocalorie_th * 0.004184;
        var millijoule              = kilocalorie_th * 4184000;
        var microjoule              = kilocalorie_th * 4184000000;
        var nanojoule               = kilocalorie_th * 4186800000000;
        var attojoule               = kilocalorie_th * 4.183999999E+21;
        var megaelectron_volt       = kilocalorie_th * 26114462623185000;
        var kiloelectron_volt       = kilocalorie_th * 26114462623185002000;
        var electron_volt           = kilocalorie_th * 2.611446262E+22;
        var erg                     = kilocalorie_th * 41840000000;
        var gigawatt_hour           = kilocalorie_th * 1.162222222E-9;
    
        var megawatt_hour           = kilocalorie_th * 0.0000011622;
        var kilowatt_second         = kilocalorie_th * 4.184;
        var watt_second             = kilocalorie_th * 4184;
        var newton_meter            = kilocalorie_th * 4184;
        var horsepower_hour          = kilocalorie_th * 0.0015585657;
        var kilocalorie_it          = kilocalorie_th * 0.9993312315;
        var calorie_it              = kilocalorie_th * 999.33123149;
        var calorie_th              = kilocalorie_th * 1000;
        var mega_Btu                = kilocalorie_th * 0.0000039657;
        var ton_hour                = kilocalorie_th * 0.0003304722;
        var fuel_oil_kiloliter      = kilocalorie_th * 1.040857436E-7;
        var fuel_oil_barrel         = kilocalorie_th * 6.554821208E-7;
        var gigaton                 = kilocalorie_th * 1.E-15;
        var megaton                 = kilocalorie_th * 1.E-12;
        var kiloton                 = kilocalorie_th * 1.E-9;
        var ton_explosives          = kilocalorie_th * 0.000001;
        var dyne_centimeter         = kilocalorie_th * 41840000000;
        var gram_force_meter        = kilocalorie_th * 426649.26352;
        var gram_force_cm           = kilocalorie_th * 42664926.352;
        var kilogram_force_cm       = kilocalorie_th * 42664.926352;
        var kilogram_force_meter    = kilocalorie_th * 426.64926352;
        var kilopond_meter          = kilocalorie_th * 426.64926352;
        var pound_force_foot        = kilocalorie_th * 3085.9600327;
        var pound_force_inch        = kilocalorie_th * 37031.520392;
        var ounce_force_inch        = kilocalorie_th * 592504.32627;
        var foot_pound              = kilocalorie_th * 3085.9600327;
        var inch_pound              = kilocalorie_th * 37031.520392;
        var inch_ounce              = kilocalorie_th * 592504.32627;
        var poundal_foot            = kilocalorie_th * 99287.828153;
        var therm                   = kilocalorie_th * 0.0000396567;
        var therm_EC                = kilocalorie_th * 0.0000396567;
        var therm_US                = kilocalorie_th * 0.0000396661;
        var hartree_energy          = kilocalorie_th * 959688451732136100000;
        var rydberg_constant        = kilocalorie_th * 1.919376903E+21;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromCalorieIt() {

        var calorie_it = parseFloat(document.getElementById("calorie_it").value);
    
        var joule                   = calorie_it * 4.1868;
        var kilojoule               = calorie_it * 0.0041868;        
        var kilowatt_hour           = calorie_it * 0.000001163;
        var watt_hour               = calorie_it * 0.001163;
        var calorie                 = calorie_it * 0.001;
        var horsepower              = calorie_it * 0.0000015812;
        var btu_IT                  = calorie_it * 0.0039683207;
        var btu_th                  = calorie_it * 0.0039709774;
        var gigajoule               = calorie_it * 4.186799999E-9;
        var megajoule               = calorie_it * 0.0000041868;
        var millijoule              = calorie_it * 4186.8;
        var microjoule              = calorie_it * 4186800;
        var nanojoule               = calorie_it * 4186800000;
        var attojoule               = calorie_it * 4186799999999929300;
        var megaelectron_volt       = calorie_it * 26131938841002;
        var kiloelectron_volt       = calorie_it * 26131938841001520;
        var electron_volt           = calorie_it * 26131938841001517000;
        var erg                     = calorie_it * 41868000;
        var gigawatt_hour           = calorie_it * 1.162999999E-12;
    
        var megawatt_hour           = calorie_it * 1.162999999E-9;
        var kilowatt_second         = calorie_it * 0.0041868;
        var watt_second             = calorie_it * 4.1868;
        var newton_meter            = calorie_it * 4.1868;
        var horsepower_hour         = calorie_it * 0.0000015596;
        var kilocalorie_it          = calorie_it * 0.001;
        var kilocalorie_th          = calorie_it * 0.0010006692;
        var calorie_th              = calorie_it * 1.0006692161;
        var mega_Btu                = calorie_it * 3.968320719E-9;
        var ton_hour                = calorie_it * 3.306933932E-7;
        var fuel_oil_kiloliter      = calorie_it * 1.041553994E-10;
        var fuel_oil_barrel         = calorie_it * 6.5592078E-10;
        var gigaton                 = calorie_it * 1.000669216E-18;
        var megaton                 = calorie_it * 1.000669216E-15;
        var kiloton                 = calorie_it * 1.000669216E-12;
        var ton_explosives          = calorie_it * 1.000669216E-9;
        var dyne_centimeter         = calorie_it * 41868000;
        var gram_force_meter        = calorie_it * 426.93478406;
        var gram_force_cm           = calorie_it * 42693.478406;
        var kilogram_force_cm       = calorie_it * 42.693478406;
        var kilogram_force_meter    = calorie_it * 0.4269347841;
        var kilopond_meter          = calorie_it * 0.4269347841;
        var pound_force_foot        = calorie_it * 3.0880252067;
        var pound_force_inch        = calorie_it * 37.05630248;
        var ounce_force_inch        = calorie_it * 592.90083968;
        var foot_pound              = calorie_it * 3.0880252067;
        var inch_pound              = calorie_it * 37.05630248;
        var inch_ounce              = calorie_it * 592.90083968;
        var poundal_foot            = calorie_it * 99.354273162;
        var therm                   = calorie_it * 3.968320164E-8;
        var therm_EC                = calorie_it * 3.968320164E-8;
        var therm_US                = calorie_it * 3.969268224E-8;
        var hartree_energy          = calorie_it * 960330690657764100;
        var rydberg_constant        = calorie_it * 1920661381315528200;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromCalorieTh() {

        var calorie_th = parseFloat(document.getElementById("calorie_th").value);
    
        var joule                   = calorie_th * 4.184;
        var kilojoule               = calorie_th * 0.004184;        
        var kilowatt_hour           = calorie_th * 0.0000011622;
        var watt_hour               = calorie_th * 0.0011622222;
        var calorie                 = calorie_th * 0.0009993312;
        var horsepower              = calorie_th * 0.0000015802;
        var btu_IT                  = calorie_th * 0.0039656668;
        var btu_th                  = calorie_th * 0.0039683217;
        var gigajoule               = calorie_th * 4.183999999E-9;
        var megajoule               = calorie_th * 0.000004184;
        var millijoule              = calorie_th * 4184;
        var microjoule              = calorie_th * 4184000;
        var nanojoule               = calorie_th * 4184000000;
        var attojoule               = calorie_th * 4183999999999953400;
        var megaelectron_volt       = calorie_th * 26114462623185;
        var kiloelectron_volt       = calorie_th * 26114462623185004;
        var electron_volt           = calorie_th * 26114462623185002000;
        var erg                     = calorie_th * 41840000;
        var gigawatt_hour           = calorie_th * 1.162222222E-12;
    
        var megawatt_hour           = calorie_th * 1.162222222E-9;
        var kilowatt_second         = calorie_th * 0.004184;
        var watt_second             = calorie_th * 4.184;
        var newton_meter            = calorie_th * 4.184;
        var horsepower_hour         = calorie_th * 0.0000015586;
        var kilocalorie_it          = calorie_th * 0.0009993312;
        var kilocalorie_th          = calorie_th * 0.001;
        var calorie_it              = calorie_th * 0.9993312315;
        var mega_Btu                = calorie_th * 3.965666831E-9;
        var ton_hour                = calorie_th * 3.304722359E-7;
        var fuel_oil_kiloliter      = calorie_th * 1.040857436E-10;
        var fuel_oil_barrel         = calorie_th * 6.554821208E-10;
        var gigaton                 = calorie_th * 1.E-18;
        var megaton                 = calorie_th * 1.E-15;
        var kiloton                 = calorie_th * 1.E-12;
        var ton_explosives          = calorie_th * 1.E-9;
        var dyne_centimeter         = calorie_th * 41840000;
        var gram_force_meter        = calorie_th * 426.64926352;
        var gram_force_cm           = calorie_th * 42664.926352;
        var kilogram_force_cm       = calorie_th * 42.664926352;
        var kilogram_force_meter    = calorie_th * 0.4266492635;
        var kilopond_meter          = calorie_th * 0.4266492635;
        var pound_force_foot        = calorie_th * 3.0859600327;
        var pound_force_inch        = calorie_th * 37.031520392;
        var ounce_force_inch        = calorie_th * 592.50432627;
        var foot_pound              = calorie_th * 3.0859600327;
        var inch_pound              = calorie_th * 37.031520392;
        var inch_ounce              = calorie_th * 592.50432627;
        var poundal_foot            = calorie_th * 99.287828153;
        var therm                   = calorie_th * 3.965666277E-8;
        var therm_EC                = calorie_th * 3.965666277E-8;
        var therm_US                = calorie_th * 3.966613702E-8;
        var hartree_energy          = calorie_th * 959688451732136200;
        var rydberg_constant        = calorie_th * 1919376903464272400;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromMegaBtu() {

        var mega_Btu = parseFloat(document.getElementById("mega_Btu").value);
    
        var joule                   = mega_Btu * 1055055852.6;
        var kilojoule               = mega_Btu * 1055055.8526;        
        var kilowatt_hour           = mega_Btu * 293.07107017;
        var watt_hour               = mega_Btu * 293071.07017;
        var calorie                 = mega_Btu * 251995.76111;
        var horsepower              = mega_Btu * 398.46576241;
        var btu_IT                  = mega_Btu * 1000000;
        var btu_th                  = mega_Btu * 1000669.4671;
        var gigajoule               = mega_Btu * 1.0550558526;
        var megajoule               = mega_Btu * 1055.0558526;
        var millijoule              = mega_Btu * 1055055852620;
        var microjoule              = mega_Btu * 1055055852619997;
        var nanojoule               = mega_Btu * 1055055852619996800;
        var attojoule               = mega_Btu * 1.055055852E+27;
        var megaelectron_volt       = mega_Btu * 6.585137817E+21;
        var kiloelectron_volt       = mega_Btu * 6.585137817E+24;
        var electron_volt           = mega_Btu * 6.585137817E+27;
        var erg                     = mega_Btu * 10550558526199968;
        var gigawatt_hour           = mega_Btu * 0.0002930711;
    
        var megawatt_hour           = mega_Btu * 0.2930710702;
        var kilowatt_second         = mega_Btu * 1055055.8526;
        var watt_second             = mega_Btu * 1055055852.6;
        var newton_meter            = mega_Btu * 1055055852.6;
        var horsepower_hour         = mega_Btu * 393.01477904;
        var kilocalorie_it          = mega_Btu * 251995.76111;
        var kilocalorie_th          = mega_Btu * 252164.40072; 
        var calorie_it              = mega_Btu * 251995761.11;
        var calorie_th              = mega_Btu * 252164400.72;
        var ton_hour                = mega_Btu * 83.333333333;
        var fuel_oil_kiloliter      = mega_Btu * 0.0262467192;
        var fuel_oil_barrel         = mega_Btu * 0.1652892562;
        var gigaton                 = mega_Btu * 2.521644007E-10;
        var megaton                 = mega_Btu * 2.521644007E-7;
        var kiloton                 = mega_Btu * 0.0002521644;
        var ton_explosives          = mega_Btu * 0.2521644007;
        var dyne_centimeter         = mega_Btu * 10550558526199968;
        var gram_force_meter        = mega_Btu * 107585755855;
        var gram_force_cm           = mega_Btu * 10758575585471;
        var kilogram_force_cm       = mega_Btu * 10758575585;
        var kilogram_force_meter    = mega_Btu * 107585755.85;
        var kilopond_meter          = mega_Btu * 107585755.85;
        var pound_force_foot        = mega_Btu * 778169262.29;
        var pound_force_inch        = mega_Btu * 149408498360;
        var ounce_force_inch        = mega_Btu * 149408498360;
        var foot_pound              = mega_Btu * 778169262.29;
        var inch_pound              = mega_Btu * 9338031147;
        var inch_ounce              = mega_Btu * 149408498360;
        var poundal_foot            = mega_Btu * 25036855685;
        var therm                   = mega_Btu * 9.9999986031;
        var therm_EC                = mega_Btu * 9.9999986031;
        var therm_US                = mega_Btu * 10.002387672;
        var hartree_energy          = mega_Btu * 2.419992633E+26;
        var rydberg_constant        = mega_Btu * 4.839985266E+26;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromTonHour() {

        var ton_hour = parseFloat(document.getElementById("ton_hour").value);
    
        var joule                   = ton_hour * 12660670.231;
        var kilojoule               = ton_hour * 12660.670231;        
        var kilowatt_hour           = ton_hour * 3.5168528421;
        var watt_hour               = ton_hour * 3516.8528421;
        var calorie                 = ton_hour * 3023.9491333;
        var horsepower              = ton_hour * 4.781589149;
        var btu_IT                  = ton_hour * 12000;
        var btu_th                  = ton_hour * 12008.033605;
        var gigajoule               = ton_hour * 0.0126606702;
        var megajoule               = ton_hour * 12.660670231;
        var millijoule              = ton_hour * 12660670231;
        var microjoule              = ton_hour * 12660670231440;
        var nanojoule               = ton_hour * 12660670231439962;
        var attojoule               = ton_hour * 1.266067023E+25;
        var megaelectron_volt       = ton_hour * 79021653810567320000;
        var kiloelectron_volt       = ton_hour * 7.902165381E+22;
        var electron_volt           = ton_hour * 7.902165381E+25;
        var erg                     = ton_hour * 126606702314400;
        var gigawatt_hour           = ton_hour * 0.0000035169;
    
        var megawatt_hour           = ton_hour * 0.0035168528;
        var kilowatt_second         = ton_hour * 12660.670231;
        var watt_second             = ton_hour * 12660670.231;
        var newton_meter            = ton_hour * 12660670.231;
        var horsepower_hour         = ton_hour * 4.7161773485;
        var kilocalorie_it          = ton_hour * 3023.9491333;
        var kilocalorie_th          = ton_hour * 3025.9728087;
        var calorie_it              = ton_hour * 3023949.1333;
        var calorie_th              = ton_hour * 3025972.8087;
        var mega_Btu                = ton_hour * 0.012;
        var fuel_oil_kiloliter      = ton_hour * 0.0003149606;
        var fuel_oil_barrel         = ton_hour * 0.0019834711;
        var gigaton                 = ton_hour * 3.025972808E-12;
        var megaton                 = ton_hour * 3.025972808E-9;
        var kiloton                 = ton_hour * 0.000003026;
        var ton_explosives          = ton_hour * 0.0030259728;
        var dyne_centimeter         = ton_hour * 126606702314400;
        var gram_force_meter        = ton_hour * 1291029070.3;
        var gram_force_cm           = ton_hour * 129102907026;
        var kilogram_force_cm       = ton_hour * 129102907.03;
        var kilogram_force_meter    = ton_hour * 1291029.0703;
        var kilopond_meter          = ton_hour * 1291029.0703;
        var pound_force_foot        = ton_hour * 9338031.1475;
        var pound_force_inch        = ton_hour * 112056373.77;
        var ounce_force_inch        = ton_hour * 1792901980.3;
        var foot_pound              = ton_hour * 9338031.1475;
        var inch_pound              = ton_hour * 112056373.77;
        var inch_ounce              = ton_hour * 1792901980.3;
        var poundal_foot            = ton_hour * 300442268.22;
        var therm                   = ton_hour * 0.1199999832;
        var therm_EC                = ton_hour * 0.1199999832;
        var therm_US                = ton_hour * 0.1200286521;
        var hartree_energy          = ton_hour * 2.903991159E+24;
        var rydberg_constant        = ton_hour * 5.807982319E+24;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromFuelOilKiloliter() {

        var fuel_oil_kiloliter = parseFloat(document.getElementById("fuel_oil_kiloliter").value);
    
        var joule                   = fuel_oil_kiloliter * 40197627985;
        var kilojoule               = fuel_oil_kiloliter * 40197627.985;        
        var kilowatt_hour           = fuel_oil_kiloliter * 11166.007774;
        var watt_hour               = fuel_oil_kiloliter * 11166007.774;
        var calorie                 = fuel_oil_kiloliter * 9601038.4983;
        var horsepower              = fuel_oil_kiloliter * 15181.545548;
        var btu_IT                  = fuel_oil_kiloliter * 38100000;
        var btu_th                  = fuel_oil_kiloliter * 38125506.697;
        var gigajoule               = fuel_oil_kiloliter * 40.197627985;
        var megajoule               = fuel_oil_kiloliter * 40197.627985;
        var millijoule              = fuel_oil_kiloliter * 40197627984822;
        var microjoule              = fuel_oil_kiloliter * 40197627984822130;
        var nanojoule               = fuel_oil_kiloliter * 40197627984822125000;
        var attojoule               = fuel_oil_kiloliter * 4.019762798E+28;
        var megaelectron_volt       = fuel_oil_kiloliter * 2.508937508E+23;
        var kiloelectron_volt       = fuel_oil_kiloliter * 2.508937508E+26;
        var electron_volt           = fuel_oil_kiloliter * 2.508937508E+29;
        var erg                     = fuel_oil_kiloliter * 401976279848221200;
        var gigawatt_hour           = fuel_oil_kiloliter * 0.0111660078;
    
        var megawatt_hour           = fuel_oil_kiloliter * 11.166007774;
        var kilowatt_second         = fuel_oil_kiloliter * 40197627.985;
        var watt_second             = fuel_oil_kiloliter * 40197627985;
        var newton_meter            = fuel_oil_kiloliter * 40197627985;
        var horsepower_hour         = fuel_oil_kiloliter * 14973.863081;
        var kilocalorie_it          = fuel_oil_kiloliter * 9601038.4983;
        var kilocalorie_th          = fuel_oil_kiloliter * 9607463.6675;
        var calorie_it              = fuel_oil_kiloliter * 9601038498.3;
        var calorie_th              = fuel_oil_kiloliter * 9607463667.5;
        var mega_Btu                = fuel_oil_kiloliter * 38.1;
        var ton_hour                = fuel_oil_kiloliter * 3175;
        var fuel_oil_barrel         = fuel_oil_kiloliter * 6.2975206612;
    
        var gigaton                 = fuel_oil_kiloliter * 9.607463667E-9;
        var megaton                 = fuel_oil_kiloliter * 0.0000096075;
        var kiloton                 = fuel_oil_kiloliter * 0.0096074637;
    
        var ton_explosives          = fuel_oil_kiloliter * 9.6074636675;
        var dyne_centimeter         = fuel_oil_kiloliter * 401976279848221200;
        var gram_force_meter        = fuel_oil_kiloliter * 4099017298064;
        var gram_force_cm           = fuel_oil_kiloliter * 409901729806435;
        var kilogram_force_cm       = fuel_oil_kiloliter * 409901729806;
        var kilogram_force_meter    = fuel_oil_kiloliter * 4099017298.1;
    
    
        var kilopond_meter          = fuel_oil_kiloliter * 4099017298.1;
        var pound_force_foot        = fuel_oil_kiloliter * 29648248893;
        var pound_force_inch        = fuel_oil_kiloliter * 355778986719;
        var ounce_force_inch        = fuel_oil_kiloliter * 5692463787503;
        var foot_pound              = fuel_oil_kiloliter * 29648248893;
        var inch_pound              = fuel_oil_kiloliter * 355778986719;
        var inch_ounce              = fuel_oil_kiloliter * 5692463787503;
        var poundal_foot            = fuel_oil_kiloliter * 953904201600;
        var therm                   = fuel_oil_kiloliter * 380.99994678;
        var therm_EC                = fuel_oil_kiloliter * 380.99994678;
        var therm_US                = fuel_oil_kiloliter * 381.09097031;
        var hartree_energy          = fuel_oil_kiloliter * 9.220171932E+27;
        var rydberg_constant        = fuel_oil_kiloliter * 1.844034386E+28;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromFuelOilBarrel() {

        var fuel_oil_barrel = parseFloat(document.getElementById("fuel_oil_barrel").value);
    
        var joule                   = fuel_oil_barrel * 6383087908.4;
        var kilojoule               = fuel_oil_barrel * 6383087.9084;        
        var kilowatt_hour           = fuel_oil_barrel * 1773.0799745;
        var watt_hour               = fuel_oil_barrel * 1773079.9745;
        var calorie                 = fuel_oil_barrel * 1524574.3547;
        var horsepower              = fuel_oil_barrel * 2410.7178626;
        var btu_IT                  = fuel_oil_barrel * 6050000;
        var btu_th                  = fuel_oil_barrel * 6054050.276;
        var gigajoule               = fuel_oil_barrel * 6.3830879084;
        var megajoule               = fuel_oil_barrel * 6383.0879084;
        var millijoule              = fuel_oil_barrel * 6383087908351;
        var microjoule              = fuel_oil_barrel * 6383087908350898;
        var nanojoule               = fuel_oil_barrel * 6383087908350897000;
        var attojoule               = fuel_oil_barrel * 6.383087908E+27;
        var megaelectron_volt       = fuel_oil_barrel * 3.984008379E+22;
        var kiloelectron_volt       = fuel_oil_barrel * 3.984008379E+25;
        var electron_volt           = fuel_oil_barrel * 3.984008379E+28;
        var erg                     = fuel_oil_barrel * 63830879083508970;
        var gigawatt_hour           = fuel_oil_barrel * 0.00177308;
    
        var megawatt_hour           = fuel_oil_barrel * 1.7730799745;
        var kilowatt_second         = fuel_oil_barrel * 6383087.9084;
        var watt_second             = fuel_oil_barrel * 6383087908.4;
        var newton_meter            = fuel_oil_barrel * 6383087908.4;
        var horsepower_hour         = fuel_oil_barrel * 2377.7394132;
        var kilocalorie_it          = fuel_oil_barrel * 1524574.3547;
        var kilocalorie_th          = fuel_oil_barrel * 1525594.6244;
        var calorie_it              = fuel_oil_barrel * 1524574354.7;
        var calorie_th              = fuel_oil_barrel * 1525594624.4;
        var mega_Btu                = fuel_oil_barrel * 6.05;
        var ton_hour                = fuel_oil_barrel * 504.16666667;
        var fuel_oil_kiloliter         = fuel_oil_barrel * 0.1587926509;
    
        var gigaton                 = fuel_oil_barrel * 1.525594624E-9;
        var megaton                 = fuel_oil_barrel * 0.0000015256;
        var kiloton                 = fuel_oil_barrel * 0.0015255946;
    
        var ton_explosives          = fuel_oil_barrel * 1.5255946244;
        var dyne_centimeter         = fuel_oil_barrel * 63830879083508970;
        var gram_force_meter        = fuel_oil_barrel * 650893822921;
        var gram_force_cm           = fuel_oil_barrel * 65089382292097;
        var kilogram_force_cm       = fuel_oil_barrel * 65089382292;
        var kilogram_force_meter    = fuel_oil_barrel * 650893822.92;
    
        var kilopond_meter          = fuel_oil_barrel * 650893822.92;
        var pound_force_foot        = fuel_oil_barrel * 4707924036.9;
        var pound_force_inch        = fuel_oil_barrel * 56495088442;
        var ounce_force_inch        = fuel_oil_barrel * 903921415076;
        var foot_pound              = fuel_oil_barrel * 4707924036.9;
    
        var inch_pound              = fuel_oil_barrel * 56495088442;
        var inch_ounce              = fuel_oil_barrel * 903921415076;
        var poundal_foot            = fuel_oil_barrel * 151472976895;
        var therm                   = fuel_oil_barrel * 60.499991549;
        var therm_EC                = fuel_oil_barrel * 60.499991549;
        var therm_US                = fuel_oil_barrel * 60.514445417;
        var hartree_energy          = fuel_oil_barrel * 1.464095543E+27;
        var rydberg_constant        = fuel_oil_barrel * 2.928191086E+27;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromGigaton() {

        var gigaton = parseFloat(document.getElementById("gigaton").value);
    
        var joule                   = gigaton * 4183999999999953000;
        var kilojoule               = gigaton * 4183999999999952;        
        var kilowatt_hour           = gigaton * 1162222222222;
        var watt_hour               = gigaton * 1162222222222218;
        var calorie                 = gigaton * 999331231489449;
        var horsepower              = gigaton * 1580182457444;
        var btu_IT                  = gigaton * 3965666831390886;
        var btu_th                  = gigaton * 3968321714896755;
        var gigajoule               = gigaton * 4184000000;
        var megajoule               = gigaton * 4184000000000;
    
        var millijoule              = gigaton * 4.183999999E+21;
        var microjoule              = gigaton * 4.183999999E+24;
        var nanojoule               = gigaton * 4.183999999E+27;
        var attojoule               = gigaton * 4.183999999E+36;
    
        var megaelectron_volt       = gigaton * 2.611446262E+31;
        var kiloelectron_volt       = gigaton * 2.611446262E+34;
        var electron_volt           = gigaton * 2.611446262E+37;
        var erg                     = gigaton * 4.183999999E+25;
        var gigawatt_hour           = gigaton * 1162222.2222;
    
        var megawatt_hour           = gigaton * 1162222222.2;
        var kilowatt_second         = gigaton * 4183999999999952;
        var watt_second             = gigaton * 4183999999999953000;
        var newton_meter            = gigaton * 4183999999999953000;
        var horsepower_hour         = gigaton * 1558565673489;
    
        var kilocalorie_it          = gigaton * 999331231489449;
        var kilocalorie_th          = gigaton * 1000000000000000;
        var calorie_it              = gigaton * 999331231489448600;
        var calorie_th              = gigaton * 999999999999999900;
        var mega_Btu                = gigaton * 3965666831.4;
        var ton_hour                = gigaton * 330472235949;
        var fuel_oil_kiloliter      = gigaton * 104085743.61;
    
        var fuel_oil_barrel         = gigaton * 655482120.89;
        var megaton                 = gigaton * 1000;
        var kiloton                 = gigaton * 1000000;
    
        var ton_explosives          = gigaton * 1000000000;
        var dyne_centimeter         = gigaton * 4.183999999E+25;
    
        var gram_force_meter        = gigaton * 426649263523128100000;
        var gram_force_cm           = gigaton * 4.266492635E+22;
        var kilogram_force_cm       = gigaton * 42664926352312810000;
        var kilogram_force_meter    = gigaton * 426649263523128100;
    
        var kilopond_meter          = gigaton * 426649263523128100;
        var pound_force_foot        = gigaton * 3085960032671165000;
        var pound_force_inch        = gigaton * 37031520392053980000;
        var ounce_force_inch        = gigaton * 592504326272863700000;
        var foot_pound              = gigaton * 3085960032671165000;
    
        var inch_pound              = gigaton * 37031520392053980000;
        var inch_ounce              = gigaton * 592504326272863700000;
        var poundal_foot            = gigaton * 99287828152505270000;
        var therm                   = gigaton * 39656662774;
        var therm_EC                = gigaton * 39656662774;
        var therm_US                = gigaton * 39666137026;
        var hartree_energy          = gigaton * 9.596884517E+35;
        var rydberg_constant        = gigaton * 1.919376903E+36;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromMegaton() {

        var megaton = parseFloat(document.getElementById("megaton").value);
    
        var joule                   = megaton * 4183999999999954;
        var kilojoule               = megaton * 4184000000000;        
        var kilowatt_hour           = megaton * 1162222222.2;
        var watt_hour               = megaton * 1162222222222;
        var calorie                 = megaton * 999331231489;
        var horsepower              = megaton * 1580182457.4;
        var btu_IT                  = megaton * 3965666831391;
        var btu_th                  = megaton * 3968321714897;
        var gigajoule               = megaton * 4184000;
        var megajoule               = megaton * 4184000000;
    
        var millijoule              = megaton * 4183999999999953000;
        var microjoule              = megaton * 4.183999999E+21;
        var nanojoule               = megaton * 4.183999999E+24;
        var attojoule               = megaton * 4.183999999E+33;
    
        var megaelectron_volt       = megaton * 2.611446262E+28;
        var kiloelectron_volt       = megaton * 2.611446262E+31;
        var electron_volt           = megaton * 2.611446262E+34;
        var erg                     = megaton * 4.183999999E+22;
        var gigawatt_hour           = megaton * 1162.2222222;
    
        var megawatt_hour           = megaton * 1162222.2222;
        var kilowatt_second         = megaton * 4184000000000;
        var watt_second             = megaton * 4183999999999954;
        var newton_meter            = megaton * 4183999999999954;
        var horsepower_hour         = megaton * 1558565673.5;
    
        var kilocalorie_it          = megaton * 999331231489;
        var kilocalorie_th          = megaton * 1000000000000;
        var calorie_it              = megaton * 999331231489449;
        var calorie_th              = megaton * 1000000000000000;
        var mega_Btu                = megaton * 3965666.8314;
        var ton_hour                = megaton * 330472235.95;
        var fuel_oil_kiloliter      = megaton * 104085.74361;
    
        var fuel_oil_barrel         = megaton * 655482.12089;
        var gigaton                 = megaton * 0.001;
        var kiloton                 = megaton * 1000;
    
        var ton_explosives          = megaton * 1000000;
        var dyne_centimeter         = megaton * 4.183999999E+22;
    
        var gram_force_meter        = megaton * 426649263523128200;
        var gram_force_cm           = megaton * 42664926352312810000;
        var kilogram_force_cm       = megaton * 42664926352312820;
        var kilogram_force_meter    = megaton * 426649263523128;
    
        var kilopond_meter          = megaton * 426649263523128;
        var pound_force_foot        = megaton * 3085960032671166;
        var pound_force_inch        = megaton * 37031520392053980;
        var ounce_force_inch        = megaton * 592504326272863700;
        var foot_pound              = megaton * 3085960032671166;
    
        var inch_pound              = megaton * 37031520392053980;
        var inch_ounce              = megaton * 592504326272863700;
        var poundal_foot            = megaton * 99287828152505280;
        var therm                   = megaton * 39656662.774;
        var therm_EC                = megaton * 39656662.774;
        var therm_US                = megaton * 39666137.026;
        var hartree_energy          = megaton * 9.596884517E+32;
        var rydberg_constant        = megaton * 1.919376903E+33;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = megaton;
        document.getElementById("gigaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromkiloton() {

        var kiloton = parseFloat(document.getElementById("kiloton").value);
    
        var joule                   = kiloton * 4183999999999954;
        var kilojoule               = kiloton * 4184000000;        
        var kilowatt_hour           = kiloton * 1162222.2222;
        var watt_hour               = kiloton * 1162222222.2;
        var calorie                 = kiloton * 999331231.49;
        var horsepower              = kiloton * 1580182.4574;
        var btu_IT                  = kiloton * 3965666831.4;
        var btu_th                  = kiloton * 3968321714.9;
        var gigajoule               = kiloton * 4184;
        var megajoule               = kiloton * 4184000;
    
        var millijoule              = kiloton * 4183999999999953;
        var microjoule              = kiloton * 4183999999999953000;
        var nanojoule               = kiloton * 4.183999999E+21;
        var attojoule               = kiloton * 4.183999999E+30;
    
        var megaelectron_volt       = kiloton * 2.611446262E+25;
        var kiloelectron_volt       = kiloton * 2.611446262E+28;
        var electron_volt           = kiloton * 2.611446262E+31;
        var erg                     = kiloton * 41839999999999525000;
        var gigawatt_hour           = kiloton * 1.1622222222;
    
        var megawatt_hour           = kiloton * 1162.2222222;
        var kilowatt_second         = kiloton * 4184000000;
        var watt_second             = kiloton * 4184000000000;
        var newton_meter            = kiloton * 4184000000000;
        var horsepower_hour         = kiloton * 1558565.6735;
    
        var kilocalorie_it          = kiloton * 999331231.49;
        var kilocalorie_th          = kiloton * 1000000000;
        var calorie_it              = kiloton * 999331231489;
        var calorie_th              = kiloton * 1000000000000;
        var mega_Btu                = kiloton * 3965.6668314;
        var ton_hour                = kiloton * 330472.23595;
        var fuel_oil_kiloliter      = kiloton * 104.08574361;
    
        var fuel_oil_barrel         = kiloton * 655.48212089;
        var gigaton                 = kiloton * 0.000001;
        var megaton                 = kiloton * 0.001;
    
        var ton_explosives          = kiloton * 1000;
        var dyne_centimeter         = kiloton * 41839999999999525000;
    
        var gram_force_meter        = kiloton * 426649263523128;
        var gram_force_cm           = kiloton * 42664926352312820;
        var kilogram_force_cm       = kiloton * 42664926352313;
        var kilogram_force_meter    = kiloton * 426649263523;
    
        var kilopond_meter          = kiloton * 426649263523;
        var pound_force_foot        = kiloton * 3085960032671;
        var pound_force_inch        = kiloton * 37031520392054;
        var ounce_force_inch        = kiloton * 592504326272864;
        var foot_pound              = kiloton * 3085960032671;
    
        var inch_pound              = kiloton * 37031520392054;
        var inch_ounce              = kiloton * 592504326272864;
        var poundal_foot            = kiloton * 99287828152505;
        var therm                   = kiloton * 39656662.774;
        var therm_EC                = kiloton * 39656.662774;
        var therm_US                = kiloton * 39666.137026;
        var hartree_energy          = kiloton * 9.596884517E+29;
        var rydberg_constant        = kiloton * 1.919376903E+30;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = kiloton;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromTonExplosives() {

        var ton_explosives = parseFloat(document.getElementById("ton_explosives").value);
    
        var joule                   = ton_explosives * 4184000000;
        var kilojoule               = ton_explosives * 4184000;        
        var kilowatt_hour           = ton_explosives * 1162.2222222;
        var watt_hour               = ton_explosives * 1162222.2222;
        var calorie                 = ton_explosives * 999331.23149;
        var horsepower              = ton_explosives * 1580.1824574;
        var btu_IT                  = ton_explosives * 3965666.8314;
        var btu_th                  = ton_explosives * 3968321.7149;
        var gigajoule               = ton_explosives * 4.184;
        var megajoule               = ton_explosives * 4184;
    
        var millijoule              = ton_explosives * 4184000000000;
        var microjoule              = ton_explosives * 4183999999999953;
        var nanojoule               = ton_explosives * 4183999999999953000;
        var attojoule               = ton_explosives * 4.183999999E+27;
    
        var megaelectron_volt       = ton_explosives * 2.611446262E+22;
        var kiloelectron_volt       = ton_explosives * 2.611446262E+25;
        var electron_volt           = ton_explosives * 2.611446262E+28;
        var erg                     = ton_explosives * 41839999999999530;
        var gigawatt_hour           = ton_explosives * 0.0011622222;
    
        var megawatt_hour           = ton_explosives * 1.1622222222;
        var kilowatt_second         = ton_explosives * 41841840004000000;
        var watt_second             = ton_explosives * 4184000000;
        var newton_meter            = ton_explosives * 4184000000;
        var horsepower_hour         = ton_explosives * 1558.5656735;
    
        var kilocalorie_it          = ton_explosives * 999331.23149;
        var kilocalorie_th          = ton_explosives * 1000000;
        var calorie_it              = ton_explosives * 999331231.49;
        var calorie_th              = ton_explosives * 1000000000;
        var mega_Btu                = ton_explosives * 3.9656668314;
        var ton_hour                = ton_explosives * 330.47223595;
        var fuel_oil_kiloliter      = ton_explosives * 0.1040857436;
    
        var fuel_oil_barrel         = ton_explosives * 0.6554821209;
        var gigaton                 = ton_explosives * 1.E-9;
        var megaton                 = ton_explosives * 0.000001;
    
        var kiloton          = ton_explosives * 0.001;
        var dyne_centimeter         = ton_explosives * 41839999999999530;
    
        var gram_force_meter        = ton_explosives * 426649263523;
        var gram_force_cm           = ton_explosives * 42664926352313;
        var kilogram_force_cm       = ton_explosives * 42664926352;
        var kilogram_force_meter    = ton_explosives * 426649263.52;
    
        var kilopond_meter          = ton_explosives * 426649263.52;
        var pound_force_foot        = ton_explosives * 3085960032;
        var pound_force_inch        = ton_explosives * 37031520392;
        var ounce_force_inch        = ton_explosives * 592504326273;
        var foot_pound              = ton_explosives * 3085960032.7;
    
        var inch_pound              = ton_explosives * 37031520392;
        var inch_ounce              = ton_explosives * 592504326273;
        var poundal_foot            = ton_explosives * 99287828153;
        var therm                   = ton_explosives * 39.656662774;
        var therm_EC                = ton_explosives * 39.656662774;
        var therm_US                = ton_explosives * 39.666137026;
        var hartree_energy          = ton_explosives * 9.596884517E+26;
        var rydberg_constant        = ton_explosives * 1.919376903E+27;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromDyneCentimeter() {

    var dyne_centimeter = parseFloat(document.getElementById("dyne_centimeter").value);

    var joule                   = dyne_centimeter * 1.E-7;
    var kilojoule               = dyne_centimeter * 9.999999999E-11;        
    var kilowatt_hour           = dyne_centimeter * 2.777777777E-14;
    var watt_hour               = dyne_centimeter * 2.777777777E-11;
    var calorie                 = dyne_centimeter * 2.388458966E-11;
    var horsepower              = dyne_centimeter * 3.776726714E-14;
    var btu_IT                  = dyne_centimeter * 9.478171203E-11;
    var btu_th                  = dyne_centimeter * 9.484516527E-11;
    var gigajoule               = dyne_centimeter * 1.E-16;
    var megajoule               = dyne_centimeter * 1.E-13;

    var millijoule              = dyne_centimeter * 0.0001;
    var microjoule              = dyne_centimeter * 0.1;
    var nanojoule               = dyne_centimeter * 100;
    var attojoule               = dyne_centimeter * 100000000000;

    var megaelectron_volt       = dyne_centimeter * 624150.63631;
    var kiloelectron_volt       = dyne_centimeter * 624150636.31;
    var electron_volt           = dyne_centimeter * 624150636309;
    var erg                     = dyne_centimeter * 1;
    var gigawatt_hour           = dyne_centimeter * 2.777777777E-20;

    var megawatt_hour           = dyne_centimeter * 2.777777777E-17;
    var kilowatt_second         = dyne_centimeter * 9.999999999E-11;
    var watt_second             = dyne_centimeter * 1.E-7;
    var newton_meter            = dyne_centimeter * 1.E-7;
    var horsepower_hour         = dyne_centimeter * 3.725061361E-14;

    var kilocalorie_it          = dyne_centimeter * 2.388458966E-11;
    var kilocalorie_th          = dyne_centimeter * 2.390057361E-11;
    var calorie_it              = dyne_centimeter * 2.388458966E-8;
    var calorie_th              = dyne_centimeter * 2.390057361E-8;
    var mega_Btu                = dyne_centimeter * 9.478171203E-17;
    var ton_hour                = dyne_centimeter * 7.898476002E-15;
    var fuel_oil_kiloliter      = dyne_centimeter * 2.487708977E-18;

    var fuel_oil_barrel         = dyne_centimeter * 1.566639868E-17;
    var gigaton                 = dyne_centimeter * 2.390057361E-26;
    var megaton                 = dyne_centimeter * 2.390057361E-23;

    var kiloton                 = dyne_centimeter * 2.390057361E-20;
    var ton_explosives         = dyne_centimeter * 2.390057361E-17;

    var gram_force_meter        = dyne_centimeter * 0.0000101972;
    var gram_force_cm           = dyne_centimeter * 0.0010197162;
    var kilogram_force_cm       = dyne_centimeter * 0.0000010197;
    var kilogram_force_meter    = dyne_centimeter * 1.019716213E-8;

    var kilopond_meter          = dyne_centimeter * 1.019716213E-8;
    var pound_force_foot        = dyne_centimeter * 7.375621493E-8;
    var pound_force_inch        = dyne_centimeter * 8.850745791E-7;
    var ounce_force_inch        = dyne_centimeter * 0.0000141612;
    var foot_pound              = dyne_centimeter * 7.375621493E-8;

    var inch_pound              = dyne_centimeter * 8.850745791E-7;
    var inch_ounce              = dyne_centimeter * 0.0000141612;
    var poundal_foot            = dyne_centimeter * 0.000002373;
    var therm                   = dyne_centimeter * 9.478169879E-16;
    var therm_EC                = dyne_centimeter * 9.478169879E-16;
    var therm_US                = dyne_centimeter * 9.480434279E-16;
    var hartree_energy          = dyne_centimeter * 22937104487;
    var rydberg_constant        = dyne_centimeter * 45874208974;
   

    document.getElementById("joule").value = joule;
    document.getElementById("kilojoule").value = kilojoule;
    document.getElementById("kilowatt_hour").value = kilowatt_hour;
    document.getElementById("watt_hour").value = watt_hour;
    document.getElementById("calorie").value = calorie;
    document.getElementById("horsepower").value = horsepower;
    document.getElementById("btu_IT").value = btu_IT;
    document.getElementById("btu_th").value = btu_th;
    document.getElementById("gigajoule").value = gigajoule;
    document.getElementById("megajoule").value = megajoule;
    document.getElementById("millijoule").value = millijoule;
    document.getElementById("microjoule").value = microjoule;
    document.getElementById("nanojoule").value = nanojoule;
    document.getElementById("attojoule").value = attojoule;
    document.getElementById("megaelectron_volt").value = megaelectron_volt;
    document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
    document.getElementById("electron_volt").value = electron_volt;
    document.getElementById("erg").value = erg;
    document.getElementById("gigawatt_hour").value = gigawatt_hour;

    document.getElementById("megawatt_hour").value = megawatt_hour;
    document.getElementById("kilowatt_second").value = kilowatt_second;
    document.getElementById("watt_second").value = watt_second;
    document.getElementById("newton_meter").value = newton_meter;
    document.getElementById("horsepower_hour").value = horsepower_hour;
    document.getElementById("kilocalorie_it").value = kilocalorie_it;
    document.getElementById("kilocalorie_th").value = kilocalorie_th;
    document.getElementById("calorie_it").value = calorie_it;
    document.getElementById("calorie_th").value = calorie_th;
    document.getElementById("mega_Btu").value = mega_Btu;
    document.getElementById("ton_hour").value = ton_hour;
    document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
    document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
    document.getElementById("gigaton").value = gigaton;
    document.getElementById("megaton").value = megaton;
    document.getElementById("kiloton").value = kiloton;
    document.getElementById("ton_explosives").value = ton_explosives;
    document.getElementById("gram_force_meter").value = gram_force_meter;
    document.getElementById("gram_force_cm").value = gram_force_cm;

    document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
    document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
    document.getElementById("kilopond_meter").value = kilopond_meter;
    document.getElementById("pound_force_foot").value = pound_force_foot;
    document.getElementById("pound_force_inch").value = pound_force_inch;
    document.getElementById("ounce_force_inch").value = ounce_force_inch;
    document.getElementById("foot_pound").value = foot_pound;
    document.getElementById("inch_pound").value = inch_pound;
    document.getElementById("inch_ounce").value = inch_ounce;
    document.getElementById("poundal_foot").value = poundal_foot;
    document.getElementById("therm").value = therm;
    document.getElementById("therm_EC").value = therm_EC;
    document.getElementById("therm_US").value = therm_US;
    document.getElementById("hartree_energy").value = hartree_energy;
    document.getElementById("rydberg_constant").value = rydberg_constant;
}

function ConvertFromDyneCentimeter() {

        var dyne_centimeter = parseFloat(document.getElementById("dyne_centimeter").value);
    
        var joule                   = dyne_centimeter * 1.E-7;
        var kilojoule               = dyne_centimeter * 9.999999999E-11;        
        var kilowatt_hour           = dyne_centimeter * 2.777777777E-14;
        var watt_hour               = dyne_centimeter * 2.777777777E-11;
        var calorie                 = dyne_centimeter * 2.388458966E-11;
        var horsepower              = dyne_centimeter * 3.776726714E-14;
        var btu_IT                  = dyne_centimeter * 9.478171203E-11;
        var btu_th                  = dyne_centimeter * 9.484516527E-11;
        var gigajoule               = dyne_centimeter * 1.E-16;
        var megajoule               = dyne_centimeter * 1.E-13;
    
        var millijoule              = dyne_centimeter * 0.0001;
        var microjoule              = dyne_centimeter * 0.1;
        var nanojoule               = dyne_centimeter * 100;
        var attojoule               = dyne_centimeter * 100000000000;
    
        var megaelectron_volt       = dyne_centimeter * 624150.63631;
        var kiloelectron_volt       = dyne_centimeter * 624150636.31;
        var electron_volt           = dyne_centimeter * 624150636309;
        var erg                     = dyne_centimeter * 1;
        var gigawatt_hour           = dyne_centimeter * 2.777777777E-20;
    
        var megawatt_hour           = dyne_centimeter * 2.777777777E-17;
        var kilowatt_second         = dyne_centimeter * 9.999999999E-11;
        var watt_second             = dyne_centimeter * 1.E-7;
        var newton_meter            = dyne_centimeter * 1.E-7;
        var horsepower_hour         = dyne_centimeter * 3.725061361E-14;
    
        var kilocalorie_it          = dyne_centimeter * 2.388458966E-11;
        var kilocalorie_th          = dyne_centimeter * 2.390057361E-11;
        var calorie_it              = dyne_centimeter * 2.388458966E-8;
        var calorie_th              = dyne_centimeter * 2.390057361E-8;
        var mega_Btu                = dyne_centimeter * 9.478171203E-17;
        var ton_hour                = dyne_centimeter * 7.898476002E-15;
        var fuel_oil_kiloliter      = dyne_centimeter * 2.487708977E-18;
    
        var fuel_oil_barrel         = dyne_centimeter * 1.566639868E-17;
        var gigaton                 = dyne_centimeter * 2.390057361E-26;
        var megaton                 = dyne_centimeter * 2.390057361E-23;
    
        var kiloton                 = dyne_centimeter * 2.390057361E-20;
        var ton_explosives         = dyne_centimeter * 2.390057361E-17;
    
        var gram_force_meter        = dyne_centimeter * 0.0000101972;
        var gram_force_cm           = dyne_centimeter * 0.0010197162;
        var kilogram_force_cm       = dyne_centimeter * 0.0000010197;
        var kilogram_force_meter    = dyne_centimeter * 1.019716213E-8;
    
        var kilopond_meter          = dyne_centimeter * 1.019716213E-8;
        var pound_force_foot        = dyne_centimeter * 7.375621493E-8;
        var pound_force_inch        = dyne_centimeter * 8.850745791E-7;
        var ounce_force_inch        = dyne_centimeter * 0.0000141612;
        var foot_pound              = dyne_centimeter * 7.375621493E-8;
    
        var inch_pound              = dyne_centimeter * 8.850745791E-7;
        var inch_ounce              = dyne_centimeter * 0.0000141612;
        var poundal_foot            = dyne_centimeter * 0.000002373;
        var therm                   = dyne_centimeter * 9.478169879E-16;
        var therm_EC                = dyne_centimeter * 9.478169879E-16;
        var therm_US                = dyne_centimeter * 9.480434279E-16;
        var hartree_energy          = dyne_centimeter * 22937104487;
        var rydberg_constant        = dyne_centimeter * 45874208974;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromGramForceMeter() {

        var gram_force_meter = parseFloat(document.getElementById("gram_force_meter").value);
    
        var joule                   = gram_force_meter * 0.00980665;
        var kilojoule               = gram_force_meter * 0.0000098066;        
        var kilowatt_hour           = gram_force_meter * 2.724069444E-9;
        var watt_hour               = gram_force_meter * 0.0000027241;
        var calorie                 = gram_force_meter * 0.0000023423;
        var horsepower              = gram_force_meter * 3.703703703E-9;
        var btu_IT                  = gram_force_meter * 0.0000092949;
        var btu_th                  = gram_force_meter * 0.0000093011;
        var gigajoule               = gram_force_meter * 9.806649999E-12;
        var megajoule               = gram_force_meter * 9.806649999E-9;
    
        var millijoule              = gram_force_meter * 9.8066499997;
        var microjoule              = gram_force_meter * 9806.6499997;
        var nanojoule               = gram_force_meter * 9806649.9997;
        var attojoule               = gram_force_meter * 9806649999697336;
    
        var megaelectron_volt       = gram_force_meter * 61208268374;
        var kiloelectron_volt       = gram_force_meter * 61208268373747;
        var electron_volt           = gram_force_meter * 61208268373746690;
        var erg                     = gram_force_meter * 98066.499997;
        var gigawatt_hour           = gram_force_meter * 2.724069444E-15;
    
        var megawatt_hour           = gram_force_meter * 2.724069444E-12;
        var kilowatt_second         = gram_force_meter * 0.0000098066;
        var watt_second             = gram_force_meter * 0.00980665;
        var newton_meter            = gram_force_meter * 0.00980665;
        var horsepower_hour         = gram_force_meter * 3.653037299E-9;
    
        var kilocalorie_it          = gram_force_meter * 0.0000023423;
        var kilocalorie_th          = gram_force_meter * 0.0000023438;
        var calorie_it              = gram_force_meter * 0.0023422781;
        var calorie_th              = gram_force_meter * 0.0023438456;
        var mega_Btu                = gram_force_meter * 9.294910762E-12;
        var ton_hour                = gram_force_meter * 7.745758968E-10;
        var fuel_oil_kiloliter      = gram_force_meter * 2.439609124E-13;
    
        var fuel_oil_barrel         = gram_force_meter * 1.536348886E-12;
        var gigaton                 = gram_force_meter * 2.343845602E-21;
        var megaton                 = gram_force_meter * 2.343845602E-18;
    
        var kiloton                 = gram_force_meter * 2.343845602E-15;
        var ton_explosives         = gram_force_meter * 2.343845602E-12;
    
        var dyne_centimeter        = gram_force_meter * 98066.499997;
        var gram_force_cm           = gram_force_meter * 100;
        var kilogram_force_cm       = gram_force_meter * 0.1;
        var kilogram_force_meter    = gram_force_meter * 0.001;
    
        var kilopond_meter          = gram_force_meter * 0.001;
        var pound_force_foot        = gram_force_meter * 0.0072330139;
        var pound_force_inch        = gram_force_meter * 0.0867961662;
        var ounce_force_inch        = gram_force_meter * 1.3887386594;
        var foot_pound              = gram_force_meter * 0.0072330139;
    
        var inch_pound              = gram_force_meter * 0.0867961662;
        var inch_ounce              = gram_force_meter * 1.3887386594;
        var poundal_foot            = gram_force_meter * 0.2327153394;
        var therm                   = gram_force_meter * 9.294909464E-11;
        var therm_EC                = gram_force_meter * 9.294909464E-11;
        var therm_US                = gram_force_meter * 9.297130082E-11;
        var hartree_energy          = gram_force_meter * 2249361557095745;
        var rydberg_constant        = gram_force_meter * 4498723114191489;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }

function ConvertFromGramForceCm() {

        var gram_force_cm = parseFloat(document.getElementById("gram_force_cm").value);
    
        var joule                   = gram_force_cm * 0.0000980665;
        var kilojoule               = gram_force_cm * 9.806649999E-8;        
        var kilowatt_hour           = gram_force_cm * 2.724069444E-11;
        var watt_hour               = gram_force_cm * 2.724069444E-8;
    
        var calorie                 = gram_force_cm * 2.342278112E-8;
        var horsepower              = gram_force_cm * 3.703703703E-11;
        var btu_IT                  = gram_force_cm * 9.294910762E-8;
        var btu_th                  = gram_force_cm * 9.301133399E-8;
    
        var gigajoule               = gram_force_cm * 9.806649999E-14;
        var megajoule               = gram_force_cm * 9.806649999E-11;
    
        var millijoule              = gram_force_cm * 0.0980665;
        var microjoule              = gram_force_cm * 98.066499997;
    
        var nanojoule               = gram_force_cm * 98066.499997;
        var attojoule               = gram_force_cm * 98066499996973;
    
        var megaelectron_volt       = gram_force_cm * 612082683.74;
        var kiloelectron_volt       = gram_force_cm * 612082683737;
    
        var electron_volt           = gram_force_cm * 612082683737467;
        var erg                     = gram_force_cm * 980.66499997;
        var gigawatt_hour           = gram_force_cm * 2.724069444E-17;
    
        var megawatt_hour           = gram_force_cm * 2.724069444E-14;
        var kilowatt_second         = gram_force_cm * 9.806649999E-8;
        var watt_second             = gram_force_cm * 0.0000980665;
        var newton_meter            = gram_force_cm * 0.0000980665;
        var horsepower_hour         = gram_force_cm * 3.653037299E-11;
    
        var kilocalorie_it          = gram_force_cm * 2.342278112E-8;
        var kilocalorie_th          = gram_force_cm * 2.343845602E-8;
        var calorie_it              = gram_force_cm * 0.0000234228;
        var calorie_th              = gram_force_cm * 0.0000234385;
    
        var mega_Btu                = gram_force_cm * 9.294910762E-14;
        var ton_hour                = gram_force_cm * 7.745758968E-12;
        var fuel_oil_kiloliter      = gram_force_cm * 2.439609124E-15;
    
        var fuel_oil_barrel         = gram_force_cm * 1.536348886E-14;
        var gigaton                 = gram_force_cm * 2.343845602E-23;
        var megaton                 = gram_force_cm * 2.343845602E-20;
    
        var kiloton                 = gram_force_cm * 2.343845602E-17;
        var ton_explosives         = gram_force_cm * 2.343845602E-14;
    
        var dyne_centimeter        = gram_force_cm * 980.66499997;
        var gram_force_meter           = gram_force_cm * 0.01;
        var kilogram_force_cm       = gram_force_cm * 0.001;
        var kilogram_force_meter    = gram_force_cm * 0.00001;
    
        var kilopond_meter          = gram_force_cm * 0.00001;
        var pound_force_foot        = gram_force_cm * 0.0000723301;
        var pound_force_inch        = gram_force_cm * 0.0008679617;
        var ounce_force_inch        = gram_force_cm * 0.0138873866;
        var foot_pound              = gram_force_cm * 0.0000723301;
    
        var inch_pound              = gram_force_cm * 0.0008679617;
        var inch_ounce              = gram_force_cm * 0.0138873866;
        var poundal_foot            = gram_force_cm * 0.0023271534;
        var therm                   = gram_force_cm * 9.294909464E-13;
    
        var therm_EC                = gram_force_cm * 9.294909464E-13;
        var therm_US                = gram_force_cm * 9.297130082E-13;
        var hartree_energy          = gram_force_cm * 22493615570957;
        var rydberg_constant        = gram_force_cm * 44987231141915;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
    
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
/******12April2022 */
/*****13April2022 */
function ConvertFromkilogramForceMeter() {

        var kilogram_force_meter = parseFloat(document.getElementById("kilogram_force_meter").value);
    
        var joule                   = kilogram_force_meter * 1;
        var kilojoule               = kilogram_force_meter * 0.001;        
        var kilowatt_hour           = kilogram_force_meter * 2.777777777E-7;
        var watt_hour               = kilogram_force_meter * 0.0002777778;
    
        var calorie                 = kilogram_force_meter * 0.0002388459;
        var horsepower              = kilogram_force_meter * 3.776726714E-7;
        var btu_IT                  = kilogram_force_meter * 0.0009478171;
        var btu_th                  = kilogram_force_meter * 0.0009484517;
    
        var gigajoule               = kilogram_force_meter * 9.999999999E-10;
        var megajoule               = kilogram_force_meter * 0.000001;
    
        var millijoule              = kilogram_force_meter * 1000;
        var microjoule              = kilogram_force_meter * 1000000;
    
        var nanojoule               = kilogram_force_meter * 1000000000;
        var attojoule               = kilogram_force_meter * 1000000000000000000;
    
        var megaelectron_volt       = kilogram_force_meter * 6241506363094;
        var kiloelectron_volt       = kilogram_force_meter * 6241506363094000;
    
        var electron_volt           = kilogram_force_meter * 6241506363094000000;
        var erg                     = kilogram_force_meter * 10000000;
        var gigawatt_hour           = kilogram_force_meter * 2.777777777E-13;
    
        var megawatt_hour           = kilogram_force_meter * 2.777777777E-10;
        var kilowatt_second         = kilogram_force_meter * 0.001;
        var watt_second             = kilogram_force_meter * 1;
        var newton_meter            = kilogram_force_meter * 1;
        var horsepower_hour         = kilogram_force_meter * 3.725061361E-7;
    
        var kilocalorie_it          = kilogram_force_meter * 0.0002388459;
        var kilocalorie_th          = kilogram_force_meter * 0.0002390057;
        var calorie_it              = kilogram_force_meter * 0.2388458966;
        var calorie_th              = kilogram_force_meter * 0.2390057361;
    
        var mega_Btu                = kilogram_force_meter * 9.478171203E-10;
        var ton_hour                = kilogram_force_meter * 7.898476002E-8;
        var fuel_oil_kiloliter      = kilogram_force_meter * 2.487708977E-11;
    
        var fuel_oil_barrel         = kilogram_force_meter * 1.566639868E-10;
        var gigaton                 = kilogram_force_meter * 2.390057361E-19;
        var megaton                 = kilogram_force_meter * 2.390057361E-16;
    
        var kiloton                 = kilogram_force_meter * 2.390057361E-13;
        var ton_explosives         = kilogram_force_meter * 2.390057361E-10;
    
        var dyne_centimeter        = kilogram_force_meter * 10000000;
    
        var gram_force_meter       = kilogram_force_meter * 101.9716213;
        var gram_force_cm          = kilogram_force_meter * 10197.16213;
    
        var kilogram_force_cm       = kilogram_force_meter * 10.19716213;
    
        var kilogram_force_meter    = kilogram_force_meter * 0.1019716213;
    
        var kilopond_meter          = kilogram_force_meter * 0.1019716213;
    
        var pound_force_foot        = kilogram_force_meter * 0.7375621493;
        var pound_force_inch        = kilogram_force_meter * 8.8507457916;
        var ounce_force_inch        = kilogram_force_meter * 141.61193267;
        var foot_pound              = kilogram_force_meter * 0.7375621493;
    
        var inch_pound              = kilogram_force_meter * 8.8507457916;
        var inch_ounce              = kilogram_force_meter * 141.61193267;
        var poundal_foot            = kilogram_force_meter * 23.730360457;
        var therm                   = kilogram_force_meter * 9.478169879E-9;
    
        var therm_EC                = kilogram_force_meter * 9.478169879E-9;
        var therm_US                = kilogram_force_meter * 9.480434279E-9;
        var hartree_energy          = kilogram_force_meter * 229371044869059970;
        var rydberg_constant        = kilogram_force_meter * 458742089738119940;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromkilopondMeter() {

        var kilopond_meter = parseFloat(document.getElementById("kilopond_meter").value);
    
        var joule                   = kilopond_meter * 9.8066499997;
        var kilojoule               = kilopond_meter * 0.00980665;        
        var kilowatt_hour           = kilopond_meter * 0.0000027241;
        var watt_hour               = kilopond_meter * 0.0027240694;
    
        var calorie                 = kilopond_meter * 0.0023422781;
        var horsepower              = kilopond_meter * 0.0000037037;
        var btu_IT                  = kilopond_meter * 0.0092949108;
        var btu_th                  = kilopond_meter * 0.0093011334;
    
        var gigajoule               = kilopond_meter * 9.806649999E-9;
        var megajoule               = kilopond_meter * 0.0000098066;
    
        var millijoule              = kilopond_meter * 9806.6499997;
        var microjoule              = kilopond_meter * 9806649.9997;
    
        var nanojoule               = kilopond_meter * 9806649999.7;
        var attojoule               = kilopond_meter * 9806649999697334000;
    
        var megaelectron_volt       = kilopond_meter * 61208268373747;
        var kiloelectron_volt       = kilopond_meter * 61208268373746690;
    
        var electron_volt           = kilopond_meter * 61208268373746690000;
        var erg                     = kilopond_meter * 98066499.997;
        var gigawatt_hour           = kilopond_meter * 2.724069444E-12;
    
        var megawatt_hour           = kilopond_meter * 2.724069444E-9;
        var kilowatt_second         = kilopond_meter * 0.00980665;
        var watt_second             = kilopond_meter * 9.8066499997;
        var newton_meter            = kilopond_meter * 9.8066499997;
        var horsepower_hour         = kilopond_meter * 0.000003653;
    
        var kilocalorie_it          = kilopond_meter * 0.0023422781;
        var kilocalorie_th          = kilopond_meter * 0.0023438456;
        var calorie_it              = kilopond_meter * 2.3422781121;
        var calorie_th              = kilopond_meter * 2.3438456022;
    
        var mega_Btu                = kilopond_meter * 9.294910762E-9;
        var ton_hour                = kilopond_meter * 7.745758968E-7;
        var fuel_oil_kiloliter      = kilopond_meter * 2.439609124E-10;
    
        var fuel_oil_barrel         = kilopond_meter * 1.536348886E-9;
        var gigaton                 = kilopond_meter * 2.343845602E-18;
        var megaton                 = kilopond_meter * 2.343845602E-15;
    
        var kiloton                 = kilopond_meter * 2.343845602E-12;
        var ton_explosives         = kilopond_meter * 2.343845602E-9;
    
        var dyne_centimeter        = kilopond_meter * 98066499.997;
    
        var gram_force_meter       = kilopond_meter * 1000;
        var gram_force_cm          = kilopond_meter * 100000;
    
        var kilogram_force_cm       = kilopond_meter * 100;
    
        var kilogram_force_meter    = kilopond_meter * 1;
    
        var pound_force_foot        = kilopond_meter * 7.2330138512;
        var pound_force_inch        = kilopond_meter * 86.796166215;
        var ounce_force_inch        = kilopond_meter * 1388.7386594;
        var foot_pound              = kilopond_meter * 7.2330138512;
    
        var inch_pound              = kilopond_meter * 86.796166215;
        var inch_ounce              = kilopond_meter * 1388.7386594;
        var poundal_foot            = kilopond_meter * 232.71533937;
        var therm                   = kilopond_meter * 9.294909464E-8;
    
        var therm_EC                = kilopond_meter * 9.294909464E-8;
        var therm_US                = kilopond_meter * 9.297130082E-8;
        var hartree_energy          = kilopond_meter * 2249361557095744300;
        var rydberg_constant        = kilopond_meter * 4498723114191488500;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromPoundForceFoot() {

        var pound_force_foot = parseFloat(document.getElementById("pound_force_foot").value);
    
        var joule                   = pound_force_foot * 1.3558179483;
        var kilojoule               = pound_force_foot * 0.0013558179;        
        var kilowatt_hour           = pound_force_foot * 3.766160967E-7;
        var watt_hour               = pound_force_foot * 0.0003766161;
    
        var calorie                 = pound_force_foot * 0.0003238316;
        var horsepower              = pound_force_foot * 5.120553865E-7;
        var btu_IT                  = pound_force_foot * 0.0012850675;
        var btu_th                  = pound_force_foot * 0.0012859278;
    
        var gigajoule               = pound_force_foot * 1.355817948E-9;
        var megajoule               = pound_force_foot * 0.0000013558;
    
        var millijoule              = pound_force_foot * 1355.8179483;
        var microjoule              = pound_force_foot * 1355817.9483;
    
        var nanojoule               = pound_force_foot * 1355817948.3;
        var attojoule               = pound_force_foot * 1355817948289608700;
    
        var megaelectron_volt       = pound_force_foot * 8462346351447;
        var kiloelectron_volt       = pound_force_foot * 8462346351446646;
    
        var electron_volt           = pound_force_foot * 8462346351446645000;
        var erg                     = pound_force_foot * 13558179.483;
        var gigawatt_hour           = pound_force_foot * 3.766160967E-13;
    
        var megawatt_hour           = pound_force_foot * 3.766160967E-10;
        var kilowatt_second         = pound_force_foot * 0.0013558179;
        var watt_second             = pound_force_foot * 1.3558179483;
        var newton_meter            = pound_force_foot * 1.3558179483;
        var horsepower_hour         = pound_force_foot * 5.050505051E-7;
    
        var kilocalorie_it          = pound_force_foot * 0.0003238316;
        var kilocalorie_th          = pound_force_foot * 0.0003240483;
        var calorie_it              = pound_force_foot * 0.3238315535;
        var calorie_th              = pound_force_foot * 0.3240482668;
    
        var mega_Btu                = pound_force_foot * 1.285067463E-9;
        var ton_hour                = pound_force_foot * 1.070889552E-7;
        var fuel_oil_kiloliter      = pound_force_foot * 3.372880481E-11;
    
        var fuel_oil_barrel         = pound_force_foot * 2.124078451E-10;
        var gigaton                 = pound_force_foot * 3.240482667E-19;
        var megaton                 = pound_force_foot * 3.240482667E-16;
    
        var kiloton                 = pound_force_foot * 3.240482667E-13;
        var ton_explosives         = pound_force_foot * 3.240482667E-10;
    
        var dyne_centimeter        = pound_force_foot * 13558179.483;
    
        var gram_force_meter       = pound_force_foot * 138.25495438;
        var gram_force_cm          = pound_force_foot * 13825.495438;
    
        var kilogram_force_cm       = pound_force_foot * 13.825495438;
    
        var kilogram_force_meter    = pound_force_foot * 0.1382549544;
    
        var kilopond_meter        = pound_force_foot * 0.1382549544;
        var pound_force_inch        = pound_force_foot * 12;
        var ounce_force_inch        = pound_force_foot * 192;
        var foot_pound              = pound_force_foot * 1;
    
        var inch_pound              = pound_force_foot * 12;
        var inch_ounce              = pound_force_foot * 192;
        var poundal_foot            = pound_force_foot * 32.174048627;
        var therm                   = pound_force_foot * 1.285067283E-8;
    
        var therm_EC                = pound_force_foot * 1.285067283E-8;
        var therm_US                = pound_force_foot * 1.285374295E-8;
        var hartree_energy          = pound_force_foot * 310985379451412700;
        var rydberg_constant        = pound_force_foot * 621970758902825300;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromPoundForceInch() {

        var pound_force_inch = parseFloat(document.getElementById("pound_force_inch").value);
    
        var joule                   = pound_force_inch * 0.112984829;
        var kilojoule               = pound_force_inch * 0.0001129848;        
        var kilowatt_hour           = pound_force_inch * 3.138467472E-8;
        var watt_hour               = pound_force_inch * 0.0000313847;
    
        var calorie                 = pound_force_inch * 0.000026986;
        var horsepower              = pound_force_inch * 4.267128221E-8;
        var btu_IT                  = pound_force_inch * 0.000107089;
        var btu_th                  = pound_force_inch * 0.0001071606;
    
        var gigajoule               = pound_force_inch * 1.12984829E-10;
        var megajoule               = pound_force_inch * 1.12984829E-7;
    
        var millijoule              = pound_force_inch * 112.98482902;
        var microjoule              = pound_force_inch * 112984.82902;
    
        var nanojoule               = pound_force_inch * 112984829.02;
        var attojoule               = pound_force_inch * 112984829024134060;
    
        var megaelectron_volt       = pound_force_inch * 705195529287;
        var kiloelectron_volt       = pound_force_inch * 705195529287220;
    
        var electron_volt           = pound_force_inch * 705195529287220400;
        var erg                     = pound_force_inch * 1129848.2902;
        var gigawatt_hour           = pound_force_inch * 3.138467472E-14;
    
        var megawatt_hour           = pound_force_inch * 3.138467472E-11;
        var kilowatt_second         = pound_force_inch * 0.0001129848;
        var watt_second             = pound_force_inch * 0.112984829;
        var newton_meter            = pound_force_inch * 0.112984829;
        var horsepower_hour         = pound_force_inch * 4.208754209E-8;
    
        var kilocalorie_it          = pound_force_inch * 0.000026986;
        var kilocalorie_th          = pound_force_inch * 0.000027004;
        var calorie_it              = pound_force_inch * 0.0269859628;
        var calorie_th              = pound_force_inch * 0.0270040222;
    
        var mega_Btu                = pound_force_inch * 1.070889552E-10;
        var ton_hour                = pound_force_inch * 8.924079607E-9;
        var fuel_oil_kiloliter      = pound_force_inch * 2.810733734E-12;
    
        var fuel_oil_barrel         = pound_force_inch * 1.770065376E-11;
        var gigaton                 = pound_force_inch * 2.700402223E-20;
        var megaton                 = pound_force_inch * 2.700402223E-17;
    
        var kiloton                 = pound_force_inch * 2.700402223E-14;
        var ton_explosives         = pound_force_inch * 2.700402223E-11;
    
        var dyne_centimeter        = pound_force_inch * 1129848.2902;
    
        var gram_force_meter       = pound_force_inch * 11.521246198;
        var gram_force_cm          = pound_force_inch * 1152.1246198;
    
        var kilogram_force_cm       = pound_force_inch * 1.1521246198;
    
        var kilogram_force_meter    = pound_force_inch * 0.0115212462;
    
        var kilopond_meter        = pound_force_inch * 0.0115212462;
        var pound_force_foot        = pound_force_inch * 0.0833333333;
        var ounce_force_inch        = pound_force_inch * 16;
        var foot_pound              = pound_force_inch * 0.0833333333;
    
        var inch_pound              = pound_force_inch * 1;
        var inch_ounce              = pound_force_inch * 16;
        var poundal_foot            = pound_force_inch * 2.6811707189;
        var therm                   = pound_force_inch * 1.070889403E-9;
    
        var therm_EC                = pound_force_inch * 1.070889403E-9;
        var therm_US                = pound_force_inch * 1.071145246E-9;
        var hartree_energy          = pound_force_inch * 25915448287617724;
        var rydberg_constant        = pound_force_inch * 51830896575235450;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromOunceForceInch() {

        var ounce_force_inch = parseFloat(document.getElementById("ounce_force_inch").value);
    
        var joule                   = ounce_force_inch * 0.0070615518;
        var kilojoule               = ounce_force_inch * 0.0000070616;        
        var kilowatt_hour           = ounce_force_inch * 1.96154217E-9;
        var watt_hour               = ounce_force_inch * 0.0000019615;
    
        var calorie                 = ounce_force_inch * 0.0000016866;
        var horsepower              = ounce_force_inch * 2.666955138E-9;
        var btu_IT                  = ounce_force_inch * 0.0000066931;
        var btu_th                  = ounce_force_inch * 0.0000066975;
    
        var gigajoule               = ounce_force_inch * 7.061551814E-12;
        var megajoule               = ounce_force_inch * 7.061551814E-9;
    
        var millijoule              = ounce_force_inch * 7.061551814;
        var microjoule              = ounce_force_inch * 7061.551814;
    
        var nanojoule               = ounce_force_inch * 7061551.814;
        var attojoule               = ounce_force_inch * 7061551814008380;
    
        var megaelectron_volt       = ounce_force_inch * 44074720580;
        var kiloelectron_volt       = ounce_force_inch * 44074720580451;
    
        var electron_volt           = ounce_force_inch * 44074720580451270;
        var erg                     = ounce_force_inch * 70615.51814;
        var gigawatt_hour           = ounce_force_inch * 1.96154217E-15;
    
        var megawatt_hour           = ounce_force_inch * 1.96154217E-12;
        var kilowatt_second         = ounce_force_inch * 0.0000070616;
        var watt_second             = ounce_force_inch * 0.0070615518;
        var newton_meter            = ounce_force_inch * 0.0070615518;
        var horsepower_hour         = ounce_force_inch * 2.630471381E-9;
    
        var kilocalorie_it          = ounce_force_inch * 0.0000016866;
        var kilocalorie_th          = ounce_force_inch * 0.0000016878;
        var calorie_it              = ounce_force_inch * 0.0016866227;
        var calorie_th              = ounce_force_inch * 0.0016877514;
    
        var mega_Btu                = ounce_force_inch * 6.693059705E-12;
        var ton_hour                = ounce_force_inch * 5.577549754E-10;
        var fuel_oil_kiloliter      = ounce_force_inch * 1.756708584E-13;
    
        var fuel_oil_barrel         = ounce_force_inch * 1.10629086E-12;
        var gigaton                 = ounce_force_inch * 1.687751389E-21;
        var megaton                 = ounce_force_inch * 1.687751389E-18;
    
        var kiloton                 = ounce_force_inch * 1.687751389E-15;
        var ton_explosives         = ounce_force_inch * 1.687751389E-12;
    
        var dyne_centimeter        = ounce_force_inch * 70615.51814;
    
        var gram_force_meter       = ounce_force_inch * 0.7200778874;
        var gram_force_cm          = ounce_force_inch * 72.007788738;
    
        var kilogram_force_cm       = ounce_force_inch * 0.0720077887;
    
        var kilogram_force_meter    = ounce_force_inch * 0.0007200779;
    
        var kilopond_meter          = ounce_force_inch * 0.0007200779;
        var pound_force_foot        = ounce_force_inch * 0.0052083333;
        var pound_force_inch        = ounce_force_inch * 0.0625;
        var foot_pound              = ounce_force_inch * 0.0052083333;
    
        var inch_pound              = ounce_force_inch * 0.0625;
        var inch_ounce              = ounce_force_inch * 1;
        var poundal_foot            = ounce_force_inch * 0.1675731699;
        var therm                   = ounce_force_inch * 6.69305877E-11;
    
        var therm_EC                = ounce_force_inch * 6.69305877E-11;
        var therm_US                = ounce_force_inch * 6.694657788E-11;
        var hartree_energy          = ounce_force_inch * 1619715517976108;
        var rydberg_constant        = ounce_force_inch * 3239431035952216;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromFootPound() {

        var foot_pound = parseFloat(document.getElementById("foot_pound").value);
    
        var joule                   = foot_pound * 1.3558179483;
        var kilojoule               = foot_pound * 0.0013558179;        
        var kilowatt_hour           = foot_pound * 3.766160967E-7;
        var watt_hour               = foot_pound * 0.0003766161;
    
        var calorie                 = foot_pound * 0.0003238316;
        var horsepower              = foot_pound * 5.120553865E-7;
        var btu_IT                  = foot_pound * 0.0012850675;
        var btu_th                  = foot_pound * 0.0012859278;
    
        var gigajoule               = foot_pound * 1.355817948E-9;
        var megajoule               = foot_pound * 0.0000013558;
    
        var millijoule              = foot_pound * 1355.8179483;
        var microjoule              = foot_pound * 1355817.9483;
    
        var nanojoule               = foot_pound * 1355817948.3;
        var attojoule               = foot_pound * 1355817948289608700;
    
        var megaelectron_volt       = foot_pound * 8462346351447;
        var kiloelectron_volt       = foot_pound * 8462346351446646;
    
        var electron_volt           = foot_pound * 8462346351446645000;
        var erg                     = foot_pound * 13558179.483;
        var gigawatt_hour           = foot_pound * 3.766160967E-13;
    
        var megawatt_hour           = foot_pound * 3.766160967E-10;
        var kilowatt_second         = foot_pound * 0.0013558179;
        var watt_second             = foot_pound * 1.3558179483;
        var newton_meter            = foot_pound * 1.3558179483;
        var horsepower_hour         = foot_pound * 5.050505051E-7;
    
        var kilocalorie_it          = foot_pound * 0.0003238316;
        var kilocalorie_th          = foot_pound * 0.0003240483;
        var calorie_it              = foot_pound * 0.3238315535;
        var calorie_th              = foot_pound * 0.3240482668;
    
        var mega_Btu                = foot_pound * 1.285067463E-9;
        var ton_hour                = foot_pound * 1.070889552E-7;
        var fuel_oil_kiloliter      = foot_pound * 3.372880481E-11;
    
        var fuel_oil_barrel         = foot_pound * 2.124078451E-10;
        var gigaton                 = foot_pound * 3.240482667E-19;
        var megaton                 = foot_pound * 3.240482667E-16;
    
        var kiloton                 = foot_pound * 3.240482667E-13;
        var ton_explosives         = foot_pound * 3.240482667E-10;
    
        var dyne_centimeter        = foot_pound * 13558179.483;
    
        var gram_force_meter       = foot_pound * 138.25495438;
        var gram_force_cm          = foot_pound * 13825.495438;
    
        var kilogram_force_cm       = foot_pound * 13.825495438;
    
        var kilogram_force_meter    = foot_pound * 0.1382549544;
    
        var kilopond_meter          = foot_pound * 0.1382549544;
        var pound_force_foot        = foot_pound * 1;
        var pound_force_inch        = foot_pound * 12;
        var ounce_force_inch        = foot_pound * 192;
    
        var inch_pound              = foot_pound * 12;
        var inch_ounce              = foot_pound * 192;
        var poundal_foot            = foot_pound * 32.174048627;
        var therm                   = foot_pound * 1.285067283E-8;
    
        var therm_EC                = foot_pound * 1.285067283E-8;
        var therm_US                = foot_pound * 1.285374295E-8;
        var hartree_energy          = foot_pound * 310985379451412700;
        var rydberg_constant        = foot_pound * 621970758902825300;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromInchPound() {

        var inch_pound = parseFloat(document.getElementById("inch_pound").value);
    
        var joule                   = inch_pound * 0.112984829;
        var kilojoule               = inch_pound * 0.0001129848;        
        var kilowatt_hour           = inch_pound * 3.138467472E-8;
        var watt_hour               = inch_pound * 0.0000313847;
    
        var calorie                 = inch_pound * 0.000026986;
        var horsepower              = inch_pound * 4.267128221E-8;
        var btu_IT                  = inch_pound * 0.000107089;
        var btu_th                  = inch_pound * 0.0001071606;
    
        var gigajoule               = inch_pound * 1.12984829E-10;
        var megajoule               = inch_pound * 1.12984829E-7;
    
        var millijoule              = inch_pound * 112.98482902;
        var microjoule              = inch_pound * 112984.82902;
    
        var nanojoule               = inch_pound * 112984829.02;
        var attojoule               = inch_pound * 112984829024134060;
    
        var megaelectron_volt       = inch_pound * 705195529287;
        var kiloelectron_volt       = inch_pound * 705195529287220;
    
        var electron_volt           = inch_pound * 705195529287220400;
        var erg                     = inch_pound * 1129848.2902;
        var gigawatt_hour           = inch_pound * 3.138467472E-14;
    
        var megawatt_hour           = inch_pound * 3.138467472E-14;
        var kilowatt_second         = inch_pound * 3.138467472E-11;
        var watt_second             = inch_pound * 0.0001129848;
        var newton_meter            = inch_pound * 0.112984829;
        var horsepower_hour         = inch_pound * 4.208754209E-8;
    
        var kilocalorie_it          = inch_pound * 0.000026986;
        var kilocalorie_th          = inch_pound * 0.000027004;
        var calorie_it              = inch_pound * 0.0269859628;
        var calorie_th              = inch_pound * 0.0270040222;
    
        var mega_Btu                = inch_pound * 1.070889552E-10;
        var ton_hour                = inch_pound * 8.924079607E-9;
        var fuel_oil_kiloliter      = inch_pound * 2.810733734E-12;
    
        var fuel_oil_barrel         = inch_pound * 1.770065376E-11;
        var gigaton                 = inch_pound * 2.700402223E-20;
        var megaton                 = inch_pound * 2.700402223E-17;
    
        var kiloton                 = inch_pound * 2.700402223E-14;
        var ton_explosives         = inch_pound * 2.700402223E-11;
    
        var dyne_centimeter        = inch_pound * 1129848.2902;
    
        var gram_force_meter       = inch_pound * 11.521246198;
        var gram_force_cm          = inch_pound * 1152.1246198;
    
        var kilogram_force_cm       = inch_pound * 1.1521246198;
    
        var kilogram_force_meter    = inch_pound * 0.0115212462;
    
        var kilopond_meter          = inch_pound * 0.0115212462;
        var pound_force_foot        = inch_pound * 0.0833333333;
        var pound_force_inch        = inch_pound * 1;
        var ounce_force_inch        = inch_pound * 16;
    
        var foot_pound              = inch_pound * 0.0833333333;
        var inch_ounce              = inch_pound * 16;
        var poundal_foot            = inch_pound * 2.6811707189;
        var therm                   = inch_pound * 1.070889403E-9;
    
        var therm_EC                = inch_pound * 1.070889403E-9;
        var therm_US                = inch_pound * 1.071145246E-9;
        var hartree_energy          = inch_pound * 25915448287617724;
        var rydberg_constant        = inch_pound * 51830896575235450;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromInchOunce() {

        var inch_ounce = parseFloat(document.getElementById("inch_ounce").value);
    
        var joule                   = inch_ounce * 0.0070615518;
        var kilojoule               = inch_ounce * 0.0000070616;        
        var kilowatt_hour           = inch_ounce * 1.96154217E-9;
        var watt_hour               = inch_ounce * 0.0000019615;
    
        var calorie                 = inch_ounce * 0.0000016866;
        var horsepower              = inch_ounce * 2.666955138E-9;
        var btu_IT                  = inch_ounce * 0.0000066931;
        var btu_th                  = inch_ounce * 0.0000066975;
    
        var gigajoule               = inch_ounce * 7.061551814E-12;
        var megajoule               = inch_ounce * 7.061551814E-9;
    
        var millijoule              = inch_ounce * 7.061551814;
        var microjoule              = inch_ounce * 7061.551814;
    
        var nanojoule               = inch_ounce * 7061551.814;
        var attojoule               = inch_ounce * 7061551814008380;
    
        var megaelectron_volt       = inch_ounce * 44074720580;
        var kiloelectron_volt       = inch_ounce * 44074720580451;
    
        var electron_volt           = inch_ounce * 44074720580451270;
        var erg                     = inch_ounce * 70615.51814;
        var gigawatt_hour           = inch_ounce * 1.96154217E-15;
        var megawatt_hour           = inch_ounce * 1.96154217E-12;
    
    
        var kilowatt_second         = inch_ounce * 0.0000070616;
        var watt_second             = inch_ounce * 0.0070615518;
        var newton_meter            = inch_ounce * 0.0070615518;
        var horsepower_hour         = inch_ounce * 2.630471381E-9;
    
        var kilocalorie_it          = inch_ounce * 0.0000016866;
        var kilocalorie_th          = inch_ounce * 0.0000016878;
        var calorie_it              = inch_ounce * 0.0016866227;
        var calorie_th              = inch_ounce * 0.0016877514;
    
        var mega_Btu                = inch_ounce * 6.693059705E-12;
        var ton_hour                = inch_ounce * 5.577549754E-10;
        var fuel_oil_kiloliter      = inch_ounce * 1.756708584E-13;
    
        var fuel_oil_barrel         = inch_ounce * 1.10629086E-12;
        var gigaton                 = inch_ounce * 1.687751389E-21;
        var megaton                 = inch_ounce * 1.687751389E-18;
    
        var kiloton                 = inch_ounce * 1.687751389E-15;
        var ton_explosives         = inch_ounce * 1.687751389E-12;
    
        var dyne_centimeter        = inch_ounce * 70615.51814;
    
        var gram_force_meter       = inch_ounce * 0.7200778874;
        var gram_force_cm          = inch_ounce * 72.007788738;
    
        var kilogram_force_cm       = inch_ounce * 0.0720077887;
    
        var kilogram_force_meter    = inch_ounce * 0.0007200779;
    
        var kilopond_meter          = inch_ounce * 0.0007200779;
        var pound_force_foot        = inch_ounce * 0.0052083333;
        var pound_force_inch        = inch_ounce * 0.0625;
        var ounce_force_inch        = inch_ounce * 1;
    
        var foot_pound              = inch_ounce * 0.0052083333;
        var inch_pound              = inch_ounce * 0.0625;
        var poundal_foot            = inch_ounce * 0.1675731699;
        var therm                   = inch_ounce * 6.69305877E-11;
    
        var therm_EC                = inch_ounce * 6.69305877E-11;
        var therm_US                = inch_ounce * 6.694657788E-11;
        var hartree_energy          = inch_ounce * 1619715517976108;
        var rydberg_constant        = inch_ounce * 3239431035952216;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromPoundalFoot() {

    var poundal_foot = parseFloat(document.getElementById("poundal_foot").value);

    var joule                   = poundal_foot * 0.04214011;
    var kilojoule               = poundal_foot * 0.0000421401;        
    var kilowatt_hour           = poundal_foot * 1.170558611E-8;
    var watt_hour               = poundal_foot * 0.0000117056;

    var calorie                 = poundal_foot * 0.000010065;
    var horsepower              = poundal_foot * 1.591516791E-8;
    var btu_IT                  = poundal_foot * 0.0000399411;
    var btu_th                  = poundal_foot * 0.0000399679;

    var gigajoule               = poundal_foot * 4.214010999E-11;
    var megajoule               = poundal_foot * 4.214010999E-8;

    var millijoule              = poundal_foot * 42.14011;
    var microjoule              = poundal_foot * 42140.11;

    var nanojoule               = poundal_foot * 42140110;
    var attojoule               = poundal_foot * 42140109999922290;

    var megaelectron_volt       = poundal_foot * 263017764706;
    var kiloelectron_volt       = poundal_foot * 263017764705996;

    var electron_volt           = poundal_foot * 263017764705996030;
    var erg                     = poundal_foot * 421401.1;
    var gigawatt_hour           = poundal_foot * 1.170558611E-14;
    var megawatt_hour           = poundal_foot * 1.170558611E-11;


    var kilowatt_second         = poundal_foot * 0.0000421401;
    var watt_second             = poundal_foot * 0.04214011;
    var newton_meter            = poundal_foot * 0.04214011;
    var horsepower_hour         = poundal_foot * 1.569744955E-8;

    var kilocalorie_it          = poundal_foot * 0.000010065;
    var kilocalorie_th          = poundal_foot * 0.0000100717;
    var calorie_it              = poundal_foot * 0.0100649924;
    var calorie_th              = poundal_foot * 0.010071728;

    var mega_Btu                = poundal_foot * 3.99411177E-11;
    var ton_hour                = poundal_foot * 3.328426475E-9;
    var fuel_oil_kiloliter      = poundal_foot * 1.048323299E-12;

    var fuel_oil_barrel         = poundal_foot * 6.601837637E-12;
    var gigaton                 = poundal_foot * 1.007172801E-20;
    var megaton                 = poundal_foot * 1.007172801E-17;

    var kiloton                 = poundal_foot * 1.007172801E-14;
    var ton_explosives         = poundal_foot * 1.007172801E-11;

    var dyne_centimeter        = poundal_foot * 421401.1;

    var gram_force_meter       = poundal_foot * 4.2970953385;
    var gram_force_cm          = poundal_foot * 429.70953385;

    var kilogram_force_cm       = poundal_foot * 0.4297095338;

    var kilogram_force_meter    = poundal_foot * 0.0042970953;

    var kilopond_meter          = poundal_foot * 0.0042970953;
    var pound_force_foot        = poundal_foot * 0.0310809501;
    var pound_force_inch        = poundal_foot * 0.3729714012;
    var ounce_force_inch        = poundal_foot * 5.9675424198;

    var foot_pound              = poundal_foot * 0.0310809501;
    var inch_pound              = poundal_foot * 0.3729714012;
    var inch_ounce            = poundal_foot * 5.9675424198;
    var therm                   = poundal_foot * 3.994111213E-10;

    var therm_EC                = poundal_foot * 3.994111213E-10;
    var therm_US                = poundal_foot * 3.995065433E-10;
    var hartree_energy          = poundal_foot * 9665721061579298;
    var rydberg_constant        = poundal_foot * 19331442123158596;
   

    document.getElementById("joule").value = joule;
    document.getElementById("kilojoule").value = kilojoule;
    document.getElementById("kilowatt_hour").value = kilowatt_hour;
    document.getElementById("watt_hour").value = watt_hour;
    document.getElementById("calorie").value = calorie;
    document.getElementById("horsepower").value = horsepower;
    document.getElementById("btu_IT").value = btu_IT;
    document.getElementById("btu_th").value = btu_th;
    document.getElementById("gigajoule").value = gigajoule;
    document.getElementById("megajoule").value = megajoule;
    document.getElementById("millijoule").value = millijoule;
    document.getElementById("microjoule").value = microjoule;
    document.getElementById("nanojoule").value = nanojoule;
    document.getElementById("attojoule").value = attojoule;
    document.getElementById("megaelectron_volt").value = megaelectron_volt;
    document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
    document.getElementById("electron_volt").value = electron_volt;
    document.getElementById("erg").value = erg;
    document.getElementById("gigawatt_hour").value = gigawatt_hour;

    document.getElementById("megawatt_hour").value = megawatt_hour;
    document.getElementById("kilowatt_second").value = kilowatt_second;
    document.getElementById("watt_second").value = watt_second;
    document.getElementById("newton_meter").value = newton_meter;
    document.getElementById("horsepower_hour").value = horsepower_hour;
    document.getElementById("kilocalorie_it").value = kilocalorie_it;
    document.getElementById("kilocalorie_th").value = kilocalorie_th;
    document.getElementById("calorie_it").value = calorie_it;
    document.getElementById("calorie_th").value = calorie_th;
    document.getElementById("mega_Btu").value = mega_Btu;
    document.getElementById("ton_hour").value = ton_hour;
    document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
    document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
    document.getElementById("gigaton").value = gigaton;
    document.getElementById("megaton").value = megaton;
    document.getElementById("kiloton").value = kiloton;
    document.getElementById("ton_explosives").value = ton_explosives;
    document.getElementById("dyne_centimeter").value = dyne_centimeter;
    document.getElementById("gram_force_meter").value = gram_force_meter;
    document.getElementById("gram_force_cm").value = gram_force_cm;
    document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
    document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
    document.getElementById("kilopond_meter").value = kilopond_meter;
    document.getElementById("pound_force_foot").value = pound_force_foot;
    document.getElementById("pound_force_inch").value = pound_force_inch;
    document.getElementById("ounce_force_inch").value = ounce_force_inch;
    document.getElementById("inch_pound").value = inch_pound;
    document.getElementById("foot_pound").value = foot_pound;
    document.getElementById("inch_ounce").value = inch_ounce;
    document.getElementById("therm").value = therm;
    document.getElementById("therm_EC").value = therm_EC;
    document.getElementById("therm_US").value = therm_US;
    document.getElementById("hartree_energy").value = hartree_energy;
    document.getElementById("rydberg_constant").value = rydberg_constant;
}
function ConvertFromThrem() {

        var therm = parseFloat(document.getElementById("therm").value);
    
        var joule                   = therm * 105505600;
        var kilojoule               = therm * 105505.6;        
        var kilowatt_hour           = therm * 29.307111111;
        var watt_hour               = therm * 29307.111111;
    
        var calorie                 = therm * 25199.579631;
        var horsepower              = therm * 39.846581807;
        var btu_IT                  = therm * 100000.01397;
        var btu_th                  = therm * 100066.96069;
    
        var gigajoule               = therm * 0.1055056;
        var megajoule               = therm * 105.5056;
    
        var millijoule              = therm * 105505600000;
        var microjoule              = therm * 105505600000000;
    
        var nanojoule               = therm * 105505599999999740;
        var attojoule               = therm * 1.055055999E+26;
    
        var megaelectron_volt       = therm * 658513873742048800000;
        var kiloelectron_volt       = therm * 6.585138737E+23;
    
        var electron_volt           = therm * 6.585138737E+26;
        var erg                     = therm * 1055055999999998;
        var gigawatt_hour           = therm * 0.0000293071;
        var megawatt_hour           = therm *0.0293071111;
    
    
        var kilowatt_second         = therm * 105505.6;
        var watt_second             = therm * 105505600;
        var newton_meter            = therm * 105505600;
        var horsepower_hour         = therm * 39.301483394;
    
        var kilocalorie_it          = therm * 25199.579631;
        var kilocalorie_th          = therm * 25216.443595;
        var calorie_it              = therm * 25199579.631;
        var calorie_th              = therm * 25216443.595;
    
        var mega_Btu                = therm * 0.100000014;
        var ton_hour                = therm * 8.3333344974;
        var fuel_oil_kiloliter      = therm * 0.0026246723;
    
        var fuel_oil_barrel         = therm * 0.0165289279;
        var gigaton                 = therm * 2.521644359E-11;
        var megaton                 = therm * 2.521644359E-8;
    
        var kiloton                 = therm * 0.0000252164;
        var ton_explosives         = therm * 0.0252164436;
    
        var dyne_centimeter        = therm * 1055055999999998;
    
        var gram_force_meter       = therm * 10758577088;
        var gram_force_cm          = therm * 1075857708833;
    
        var kilogram_force_cm       = therm * 1075857708.8;
    
        var kilogram_force_meter    = therm * 10758577.088;
    
        var kilopond_meter          = therm * 10758577.088;
        var pound_force_foot        = therm * 77816937.099;
        var pound_force_inch        = therm * 933803245.19;
        var ounce_force_inch        = therm * 14940851923;
    
        var foot_pound              = therm * 77816937.099;
        var inch_pound              = therm * 933803245.19;
        var inch_ounce            = therm * 14940851923;
        var poundal_foot                   = therm * 2503685918.2;
    
        var therm_EC                = therm * 1;
        var therm_US                = therm * 1.0002389069;
        var hartree_energy          = therm * 2.419992971E+25;
        var rydberg_constant        = therm * 14.839985942E+25;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromThremEC() {

        var therm_EC = parseFloat(document.getElementById("therm_EC").value);
    
        var joule                   = therm_EC * 105505600;
        var kilojoule               = therm_EC * 105505.6;        
        var kilowatt_hour           = therm_EC * 29.307111111;
        var watt_hour               = therm_EC * 29307.111111;
    
        var calorie                 = therm_EC * 25199.579631;
        var horsepower              = therm_EC * 39.846581807;
        var btu_IT                  = therm_EC * 100000.01397;
        var btu_th                  = therm_EC * 100066.96069;
    
        var gigajoule               = therm_EC * 0.1055056;
        var megajoule               = therm_EC * 105.5056;
    
        var millijoule              = therm_EC * 105505600000;
        var microjoule              = therm_EC * 105505600000000;
    
        var nanojoule               = therm_EC * 105505599999999740;
        var attojoule               = therm_EC * 1.055055999E+26;
    
        var megaelectron_volt       = therm_EC * 658513873742048800000;
        var kiloelectron_volt       = therm_EC * 6.585138737E+23;
    
        var electron_volt           = therm_EC * 6.585138737E+26;
        var erg                     = therm_EC * 1055055999999998;
        var gigawatt_hour           = therm_EC * 0.0000293071;
        var megawatt_hour           = therm_EC *0.0293071111;
    
    
        var kilowatt_second         = therm_EC * 105505.6;
        var watt_second             = therm_EC * 105505600;
        var newton_meter            = therm_EC * 105505600;
        var horsepower_hour         = therm_EC * 39.301483394;
    
        var kilocalorie_it          = therm_EC * 25199.579631;
        var kilocalorie_th          = therm_EC * 25216.443595;
        var calorie_it              = therm_EC * 25199579.631;
        var calorie_th              = therm_EC * 25216443.595;
    
        var mega_Btu                = therm_EC * 0.100000014;
        var ton_hour                = therm_EC * 8.3333344974;
        var fuel_oil_kiloliter      = therm_EC * 0.0026246723;
    
        var fuel_oil_barrel         = therm_EC * 0.0165289279;
        var gigaton                 = therm_EC * 2.521644359E-11;
        var megaton                 = therm_EC * 2.521644359E-8;
    
        var kiloton                 = therm_EC * 0.0000252164;
        var ton_explosives         = therm_EC * 0.0252164436;
    
        var dyne_centimeter        = therm_EC * 1055055999999998;
    
        var gram_force_meter       = therm_EC * 10758577088;
        var gram_force_cm          = therm_EC * 1075857708833;
    
        var kilogram_force_cm       = therm_EC * 1075857708.8;
    
        var kilogram_force_meter    = therm_EC * 10758577.088;
    
        var kilopond_meter          = therm_EC * 10758577.088;
        var pound_force_foot        = therm_EC * 77816937.099;
        var pound_force_inch        = therm_EC * 933803245.19;
        var ounce_force_inch        = therm_EC * 14940851923;
    
        var foot_pound              = therm_EC * 77816937.099;
        var inch_pound              = therm_EC * 933803245.19;
        var inch_ounce            = therm_EC * 14940851923;
        var poundal_foot                   = therm_EC * 2503685918.2;
    
        var therm                       = therm_EC * 1;
        var therm_US                = therm_EC * 1.0002389069;
        var hartree_energy          = therm_EC * 2.419992971E+25;
        var rydberg_constant        = therm_EC * 4.839985942E+25;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromThremUS() {

        var therm_US = parseFloat(document.getElementById("therm_US").value);
    
        var joule                   = therm_US * 105480400;
        var kilojoule               = therm_US * 105480.4;        
        var kilowatt_hour           = therm_US * 29.300111111;
        var watt_hour               = therm_US * 29300.111111;
    
        var calorie                 = therm_US * 25193.560715;
        var horsepower              = therm_US * 39.837064456;
        var btu_IT                  = therm_US * 99976.128977;
        var btu_th                  = therm_US * 100043.05971;
    
        var gigajoule               = therm_US * 0.1054804;
        var megajoule               = therm_US * 105.4804;
    
        var millijoule              = therm_US * 105480400000;
        var microjoule              = therm_US * 105480399999999;
    
        var nanojoule               = therm_US * 105480399999998740;
        var attojoule               = therm_US * 1.054803999E+26;
    
        var megaelectron_volt       = therm_US * 658356587781692500000;
        var kiloelectron_volt       = therm_US * 6.583565877E+23;
    
        var electron_volt           = therm_US * 6.583565877E+26;
        var erg                     = therm_US * 1054803999999987;
        var gigawatt_hour           = therm_US * 0.0000293001;
        var megawatt_hour           = therm_US * 0.0293001111;
    
    
        var kilowatt_second         = therm_US * 105480.4;
        var watt_second             = therm_US * 105480400;
        var newton_meter            = therm_US * 105480400;
        var horsepower_hour         = therm_US * 39.292096239;
    
        var kilocalorie_it          = therm_US * 25193.560715;
        var kilocalorie_th          = therm_US * 25210.42065;
        var calorie_it              = therm_US * 25193560.715;
        var calorie_th              = therm_US * 25210420.65;
    
        var mega_Btu                = therm_US * 0.099976129;
        var ton_hour                = therm_US * 8.3313440815;
        var fuel_oil_kiloliter      = therm_US * 0.0026240454;
    
        var fuel_oil_barrel         = therm_US * 0.01652498;
        var gigaton                 = therm_US * 2.521042065E-11;
        var megaton                 = therm_US * 2.521042065E-8;
    
        var kiloton                 = therm_US * 0.0000252104;
        var ton_explosives         = therm_US * 0.0252104207;
    
        var dyne_centimeter        = therm_US * 1054803999999987;
    
        var gram_force_meter       = therm_US * 10756007403;
        var gram_force_cm          = therm_US * 1075600740347;
    
        var kilogram_force_cm       = therm_US * 1075600740.3;
    
        var kilogram_force_meter    = therm_US * 10756007.403;
    
        var kilopond_meter          = therm_US * 10756007.403;
        var pound_force_foot        = therm_US * 77798350.533;
        var pound_force_inch        = therm_US * 933580206.4;
        var ounce_force_inch        = therm_US * 14937283302;
    
        var foot_pound              = therm_US * 77798350.533;
        var inch_pound              = therm_US * 933580206.4;
        var inch_ounce            = therm_US * 14937283302;
        var poundal_foot          = therm_US * 2503087913.2;
    
        var therm                       = therm_US * 0.9997611501;
        var therm_EC                = therm_US * 0.9997611501;
        var hartree_energy          = therm_US * 2.419414956E+25;
        var rydberg_constant        = therm_US * 4.838829912E+25;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("hartree_energy").value = hartree_energy;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromHartreeEnergy() {

        var hartree_energy = parseFloat(document.getElementById("hartree_energy").value);
    
        var joule                   = hartree_energy * 4.359748199E-18;
        var kilojoule               = hartree_energy * 4.359748199E-21;        
        var kilowatt_hour           = hartree_energy * 1.211041166E-24;
        var watt_hour               = hartree_energy * 1.211041166E-21;
    
        var calorie                 = hartree_energy * 1.041307967E-21;
        var horsepower              = hartree_energy * 1.646557749E-24;
        var btu_IT                  = hartree_energy * 4.132243984E-21;
        var btu_th                  = hartree_energy * 4.135010385E-21;
    
        var gigajoule               = hartree_energy * 4.359748199E-27;
        var megajoule               = hartree_energy * 4.359748199E-24;
    
        var millijoule              = hartree_energy * 4.359748199E-15;
        var microjoule              = hartree_energy * 4.359748199E-12;
    
        var nanojoule               = hartree_energy * 4.359748199E-9;
        var attojoule               = hartree_energy * 4.3597482;
    
        var megaelectron_volt       = hartree_energy * 0.0000272114;
        var kiloelectron_volt       = hartree_energy * 0.0272113961;
    
        var electron_volt           = hartree_energy * 27.211396132;
        var erg                     = hartree_energy * 4.359748199E-11;
        var gigawatt_hour           = hartree_energy * 1.211041166E-30;
        var megawatt_hour           = hartree_energy * 1.211041166E-27;
    
    
        var kilowatt_second         = hartree_energy * 4.359748199E-21;
        var watt_second             = hartree_energy * 4.359748199E-18;
        var newton_meter            = hartree_energy * 4.359748199E-18;
        var horsepower_hour         = hartree_energy * 1.624032956E-24;
    
        var kilocalorie_it          = hartree_energy * 1.041307967E-21;
        var kilocalorie_th          = hartree_energy * 1.042004827E-21;
        var calorie_it              = hartree_energy * 1.041307967E-18;
        var calorie_th              = hartree_energy * 1.042004827E-18;
    
        var mega_Btu                = hartree_energy * 4.132243984E-27;
        var ton_hour                = hartree_energy * 3.443536653E-25;
        var fuel_oil_kiloliter      = hartree_energy * 1.084578473E-28;
    
        var fuel_oil_barrel         = hartree_energy * 6.830155345E-28;
        var gigaton                 = hartree_energy * 1.042004827E-36;
        var megaton                 = hartree_energy * 1.042004827E-33;
    
        var kiloton                 = hartree_energy * 1.042004827E-30;
        var ton_explosives         = hartree_energy * 1.042004827E-27;
    
        var dyne_centimeter        = hartree_energy * 4.359748199E-11;
    
        var gram_force_meter       = hartree_energy * 4.445705924E-16;
        var gram_force_cm          = hartree_energy * 4.445705924E-14;
    
        var kilogram_force_cm       = hartree_energy * 4.445705924E-17;
    
        var kilogram_force_meter    = hartree_energy * 4.445705924E-19;
    
        var kilopond_meter          = hartree_energy * 4.445705924E-19;
        var pound_force_foot        = hartree_energy * 3.215585252E-18;
        var pound_force_inch        = hartree_energy * 3.858702303E-17;
        var ounce_force_inch        = hartree_energy * 6.173923685E-16;
    
        var foot_pound              = hartree_energy * 3.215585252E-18;
        var inch_pound              = hartree_energy * 3.858702303E-17;
        var inch_ounce            = hartree_energy * 6.173923685E-16;
        var poundal_foot          = hartree_energy * 1.034583962E-16;
    
        var therm                       = hartree_energy * 4.132243406E-26;
        var therm_EC                = hartree_energy * 4.132243406E-26;
        var therm_US          = hartree_energy * 4.133230628E-26;
        var rydberg_constant        = hartree_energy * 2;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("rydberg_constant").value = rydberg_constant;
    }
    function ConvertFromRydbergConstant() {

        var rydberg_constant = parseFloat(document.getElementById("rydberg_constant").value);
    
        var joule                   = rydberg_constant * 2.179874099E-18;
        var kilojoule               = rydberg_constant * 2.179874099E-21;        
        var kilowatt_hour           = rydberg_constant * 6.055205833E-25;
        var watt_hour               = rydberg_constant * 6.055205833E-22;
    
        var calorie                 = rydberg_constant * 5.206539839E-22;
        var horsepower              = rydberg_constant * 8.232788748E-25;
        var btu_IT                  = rydberg_constant * 2.066121992E-21;
        var btu_th                  = rydberg_constant * 2.067505192E-21;
    
        var gigajoule               = rydberg_constant * 2.179874099E-27;
        var megajoule               = rydberg_constant * 2.179874099E-24;
    
        var millijoule              = rydberg_constant * 2.179874099E-15;
        var microjoule              = rydberg_constant * 2.179874099E-12;
    
        var nanojoule               = rydberg_constant * 2.179874099E-9;
        var attojoule               = rydberg_constant * 2.1798741;
    
        var megaelectron_volt       = rydberg_constant * 0.0000136057;
        var kiloelectron_volt       = rydberg_constant * 0.0136056981;
    
        var electron_volt           = rydberg_constant * 13.605698066;
        var erg                     = rydberg_constant * 2.179874099E-11;
        var gigawatt_hour           = rydberg_constant * 6.055205833E-31;
        var megawatt_hour           = rydberg_constant * 6.055205833E-28;
    
    
        var kilowatt_second         = rydberg_constant * 2.179874099E-21;
        var watt_second             = rydberg_constant * 2.179874099E-18;
        var newton_meter            = rydberg_constant * 2.179874099E-18;
        var horsepower_hour         = rydberg_constant * 8.120164781E-25;
    
        var kilocalorie_it          = rydberg_constant * 5.206539839E-22;
        var kilocalorie_th          = rydberg_constant * 5.210024139E-22;
        var calorie_it              = rydberg_constant * 5.206539839E-19;
        var calorie_th              = rydberg_constant * 5.210024139E-19;
    
        var mega_Btu                = rydberg_constant * 2.066121992E-27;
        var ton_hour                = rydberg_constant * 1.721768326E-25;
        var fuel_oil_kiloliter      = rydberg_constant * 5.422892367E-29;
    
        var fuel_oil_barrel         = rydberg_constant * 3.415077672E-28;
        var gigaton                 = rydberg_constant * 5.210024139E-37;
        var megaton                 = rydberg_constant * 5.210024139E-34;
    
        var kiloton                 = rydberg_constant * 5.210024139E-31;
        var ton_explosives         = rydberg_constant * 5.210024139E-28;
    
        var dyne_centimeter        = rydberg_constant * 2.179874099E-11;
    
        var gram_force_meter       = rydberg_constant * 2.222852962E-16;
        var gram_force_cm          = rydberg_constant * 2.222852962E-14;
    
        var kilogram_force_cm       = rydberg_constant * 2.222852962E-17;
    
        var kilogram_force_meter    = rydberg_constant * 2.222852962E-19;
    
        var kilopond_meter          = rydberg_constant * 2.222852962E-19;
        var pound_force_foot        = rydberg_constant * 1.607792626E-18;
        var pound_force_inch        = rydberg_constant * 1.929351151E-17;
        var ounce_force_inch        = rydberg_constant * 3.086961842E-16;
    
        var foot_pound              = rydberg_constant * 1.607792626E-18;
        var inch_pound              = rydberg_constant * 1.929351151E-17;
        var inch_ounce            = rydberg_constant * 3.086961842E-16;
        var poundal_foot          = rydberg_constant * 5.172919814E-17;
    
        var therm                       = rydberg_constant * 2.066121703E-26;
        var therm_EC                = rydberg_constant * 2.066121703E-26;
        var therm_US          = rydberg_constant * 2.066615314E-26;
        var hartree_energy        = rydberg_constant * 0.5;
       
    
        document.getElementById("joule").value = joule;
        document.getElementById("kilojoule").value = kilojoule;
        document.getElementById("kilowatt_hour").value = kilowatt_hour;
        document.getElementById("watt_hour").value = watt_hour;
        document.getElementById("calorie").value = calorie;
        document.getElementById("horsepower").value = horsepower;
        document.getElementById("btu_IT").value = btu_IT;
        document.getElementById("btu_th").value = btu_th;
        document.getElementById("gigajoule").value = gigajoule;
        document.getElementById("megajoule").value = megajoule;
        document.getElementById("millijoule").value = millijoule;
        document.getElementById("microjoule").value = microjoule;
        document.getElementById("nanojoule").value = nanojoule;
        document.getElementById("attojoule").value = attojoule;
        document.getElementById("megaelectron_volt").value = megaelectron_volt;
        document.getElementById("kiloelectron_volt").value = kiloelectron_volt;
        document.getElementById("electron_volt").value = electron_volt;
        document.getElementById("erg").value = erg;
        document.getElementById("gigawatt_hour").value = gigawatt_hour;
    
        document.getElementById("megawatt_hour").value = megawatt_hour;
        document.getElementById("kilowatt_second").value = kilowatt_second;
        document.getElementById("watt_second").value = watt_second;
        document.getElementById("newton_meter").value = newton_meter;
        document.getElementById("horsepower_hour").value = horsepower_hour;
        document.getElementById("kilocalorie_it").value = kilocalorie_it;
        document.getElementById("kilocalorie_th").value = kilocalorie_th;
        document.getElementById("calorie_it").value = calorie_it;
        document.getElementById("calorie_th").value = calorie_th;
        document.getElementById("mega_Btu").value = mega_Btu;
        document.getElementById("ton_hour").value = ton_hour;
        document.getElementById("fuel_oil_kiloliter").value = fuel_oil_kiloliter;
        document.getElementById("fuel_oil_barrel").value = fuel_oil_barrel;
        document.getElementById("gigaton").value = gigaton;
        document.getElementById("megaton").value = megaton;
        document.getElementById("kiloton").value = kiloton;
        document.getElementById("ton_explosives").value = ton_explosives;
        document.getElementById("dyne_centimeter").value = dyne_centimeter;
        document.getElementById("gram_force_meter").value = gram_force_meter;
        document.getElementById("gram_force_cm").value = gram_force_cm;
        document.getElementById("kilogram_force_cm").value = kilogram_force_cm;
        document.getElementById("kilogram_force_meter").value = kilogram_force_meter;
        document.getElementById("kilopond_meter").value = kilopond_meter;
        document.getElementById("pound_force_foot").value = pound_force_foot;
        document.getElementById("pound_force_inch").value = pound_force_inch;
        document.getElementById("ounce_force_inch").value = ounce_force_inch;
        document.getElementById("inch_pound").value = inch_pound;
        document.getElementById("foot_pound").value = foot_pound;
        document.getElementById("inch_ounce").value = inch_ounce;
        document.getElementById("poundal_foot").value = poundal_foot;
        document.getElementById("therm").value = therm;
        document.getElementById("therm_EC").value = therm_EC;
        document.getElementById("therm_US").value = therm_US;
        document.getElementById("hartree_energy").value = hartree_energy;
    }
/*****13April2022*/

function reset(){
        document.getElementById("joule").value = '';
        document.getElementById("kilojoule").value = '';
        document.getElementById("kilowatt_hour").value = '';
        document.getElementById("watt_hour").value = '';
        document.getElementById("calorie").value = '';
        document.getElementById("horsepower").value = '';
        document.getElementById("btu_IT").value = '';
        document.getElementById("btu_th").value = '';
        document.getElementById("gigajoule").value = '';
        document.getElementById("megajoule").value = '';
        document.getElementById("millijoule").value = '';
        document.getElementById("microjoule").value = '';
        document.getElementById("nanojoule").value = '';
        document.getElementById("attojoule").value = '';
        document.getElementById("megaelectron_volt").value = '';
        document.getElementById("kiloelectron_volt").value = '';
        document.getElementById("electron_volt").value = '';
        document.getElementById("erg").value = '';
        document.getElementById("gigawatt_hour").value = '';
    
        document.getElementById("megawatt_hour").value = '';
        document.getElementById("kilowatt_second").value = '';
        document.getElementById("watt_second").value = '';
        document.getElementById("newton_meter").value = '';
        document.getElementById("horsepower_hour").value = '';
        document.getElementById("kilocalorie_it").value = '';
        document.getElementById("kilocalorie_th").value = '';
        document.getElementById("calorie_it").value = '';
        document.getElementById("calorie_th").value = '';
        document.getElementById("mega_Btu").value = '';
        document.getElementById("ton_hour").value = '';
        document.getElementById("fuel_oil_kiloliter").value = '';
        document.getElementById("fuel_oil_barrel").value = '';
        document.getElementById("gigaton").value = '';
        document.getElementById("megaton").value = '';
        document.getElementById("kiloton").value = '';
        document.getElementById("ton_explosives").value = '';
        document.getElementById("dyne_centimeter").value = '';
        document.getElementById("gram_force_meter").value = '';
        document.getElementById("gram_force_cm").value = '';
        document.getElementById("kilogram_force_cm").value = '';
        document.getElementById("kilogram_force_meter").value = '';
        document.getElementById("kilopond_meter").value = '';
        document.getElementById("pound_force_foot").value = '';
        document.getElementById("pound_force_inch").value = '';
        document.getElementById("ounce_force_inch").value = '';
        document.getElementById("inch_pound").value = '';
        document.getElementById("foot_pound").value = '';
        document.getElementById("inch_ounce").value = '';
        document.getElementById("poundal_foot").value = '';
        document.getElementById("therm").value = '';
        document.getElementById("therm_EC").value = '';
        document.getElementById("therm_US").value = '';
        document.getElementById("hartree_energy").value = '';
        document.getElementById("rydberg_constant").value = '';
}