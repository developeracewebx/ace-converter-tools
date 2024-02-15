<?php

/**
 * Fired during plugin activation
 *
 * @link       https://acewebx.com
 * @since      1.0.0
 *
 * @package    Ace_Converter_Tools
 * @subpackage Ace_Converter_Tools/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Ace_Converter_Tools
 * @subpackage Ace_Converter_Tools/includes
 * @author     AceWebx Team <developer@acewebx.com>
 */
class Ace_Converter_Tools_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {

		// DMS Converter
		$arr_dms = array(
			'decimal-degrees' => "Decimal Degrees",
			'box-one-latitude' => "Latitude",
			'box-one-longitude' => "Longitude",
			'degrees' => "Degrees",
			'minutes' => "Minutes",
			'seconds'   =>"Seconds",
			'box-two-latitude' => "Latitude",
			'box-two-longitude' => "Longitude"
			
		);
		if (get_option("dms-converter") === false) update_option("dms-converter", $arr_dms);

		//Energy Converter
		$arr_energy = array(
			'joule' => "joule [J]:",
			'joule_show' => true,
			'kilojoules' => "kilojoules [kJ]:",
			'kilojoules_show' => true,
			'kilowatt-hour' => "kilowatt-hour [kW*h]:",
			'kilowatt-hour_show' => true,
			'watt-hour' => "watt-hour [W*h]:",
			'watt-hour_show' => true,
			'calorie' => "calorie (nutritional):",
			'calorie_show' => true,
			'horsepower-hour' => "horsepower (metric) hour:",
			'horsepower-hour_show' => true,
			'btu-it' => "Btu (IT) [Btu (IT), Btu]:",
			'btu-it_show' => true,
			'btu-th' => "Btu (th) [Btu (th)]:",
			'btu-th_show' => true,
			'gigajoule' => "gigajoule [GJ]:",
			'gigajoule_show' => true,
			'megajoule' => "megajoule [MJ]:",
			'megajoule_show' => true,
			'millijoule' => "millijoule [mJ]:",
			'millijoule_show' => true,
			'microjoule' => "microjoule [µJ]:",
			'microjoule_show' => true,
			'nanojoule' => "nanojoule [nJ]:",
			'nanojoule_show' => true,
			'attojoule' => "attojoule [aJ]:",
			'attojoule_show' => true,
			'megaelectron-volt' => "megaelectron-volt [MeV]:",
			'megaelectron-volt_show' => true,
			'kiloelectron-volts' => "kiloelectron volts [keV]:",
			'kiloelectron-volts_show' => true,
			'electron-volt' => "electron-volt [eV]:",
			'electron-volt_show' => true,
			'erg' => "erg:",
			'erg_show' => true,
			'gigawatt-hour' => "gigawatt-hour [GW*h]:",
			'gigawatt-hour_show' => true,
			'megawatt-hour' => "megawatt-hour [MW*h]:",
			'megawatt-hour_show' => true,
			'kilowatt-second' => "kilowatt-second [kW*s]:",
			'kilowatt-second_show' => true,
			'watt-second' => "watt-second [W*s]:",
			'watt-second_show' => true,
			'newton-meter' => "newton meter [N*m]:",
			'newton-meter_show' => true,
			'horsepower-hour' => "horsepower hour [hp*h]:",
			'horsepower-hour_show' => true,
			'kilocalorie-it' => "kilocalorie (IT) [kcal (IT)]:",
			'kilocalorie-it_show' => true,
			'kilocalorie-th' => "kilocalorie (th) [kcal (th)]:",
			'kilocalorie-th_show' => true,
			'calorie-it' => "calorie (IT) [cal (IT), cal]:",
			'calorie-it_show' => true,
			'calorie-th' => "calorie (th) [cal (th)]:",
			'calorie-th_show' => true,
			'mega-btu-it' => "mega Btu (IT) [MBtu (IT)]:",
			'mega-btu-it_show' => true,
			'ton-hour-refrigeration' => "ton-hour (refrigeration):",
			'ton-hour-refrigeration_show' => true,
			'fuel-oil-kiloliter' => "fuel oil equivalent @kiloliter:",
			'fuel-oil-kiloliter_show' => true,
			'fuel-oil-barrel' => "fuel oil equivalent @barrel (US):",
			'fuel-oil-barrel_show' => true,
			'gigaton' => "gigaton [Gton]:",
			'gigaton_show' => true,
			'megaton' => "megaton [Mton]:",
			'megaton_show' => true,
			'kiloton' => "kiloton [kton]:",
			'kiloton_show' => true,
			'ton-explosives' => "ton (explosives):",
			'ton-explosives_show' => true,
			'dyne-centimeter' => "dyne centimeter [dyn*cm]:",
			'dyne-centimeter_show' => true,
			'gram-force-meter' => "gram-force meter [gf*m]:",
			'gram-force-meter_show' => true,
			'gram-force-centimeter' => "gram-force centimeter:",
			'gram-force-centimeter_show' => true,
			'kilogram-force-centimeter' => "kilogram-force centimeter:",
			'kilogram-force-centimeter_show' => true,
			'kilogram-force-meter' => "kilogram-force meter:",
			'kilogram-force-meter_show' => true,
			'kilopond-meter' => "kilopond meter [kp*m]:",
			'kilopond-meter_show' => true,
			'pound-force-foot' => "pound-force foot [lbf*ft]:",
			'pound-force-foot_show' => true,
			'pound-force-inch' => "pound-force inch [lbf*in]:",
			'pound-force-inch_show' => true,
			'ounce-force-inch' => "ounce-force inch [ozf*in]:",
			'ounce-force-inch_show' => true,
			'foot-pound' => "foot-pound [ft*lbf]:",
			'foot-pound_show' => true,
			'inch-pound' => "inch-pound [in*lbf]:",
			'inch-pound_show' => true,
			'inch-ounce' => "inch-ounce [in*ozf]:",
			'inch-ounce_show' => true,
			'poundal-foot' => "poundal foot [pdl*ft]:",
			'poundal-foot_show' => true,
			'therm' => "therm:",
			'therm_show' => true,
			'therm-ec' => "therm (EC):",
			'therm-ec_show' => true,
			'therm-us' => "therm (US):",
			'therm-us_show' => true,
			'hartree-energy' => "Hartree energy:",
			'hartree-energy_show' => true,
			'rydberg-constant' => "Rydberg constant:",
			'rydberg-constant_show' => true
		);
		
		if (get_option("energy-converter") === false) update_option("energy-converter", $arr_energy);

		$arr_color = array(
			'color-title' => "Enter a color from any format below:",
			'Name' => "Name",
			'Hex' => "HEX",
			'RGB' => "RGB",
			'HSV' => "HSV",
			'HSL' => "HSL",
			'HWB' => "HWB",
			'CMYK' => "CMYK",
			'COLOR' => "COLOR"
			
		);
		if (get_option("color-converter") === false) update_option("color-converter", $arr_color);
		
		$arr_speed = array(
			'centimeter-second' => "centimeter/second:",
			'foot-second' => "foot/second:",
			'inch-second' => "inch/second:",
			'kilometer-hour' => "kilometer/hour:",
			'kilometer-second' => "kilometer/second:",
			'knot' => "knot:",
			'mach' => "mach:",
			'meter-second' => "meter/second:",
			'mile-hour' => "mile/hour (mph):",
			'mile-second' => "mile/second:",
			'millimeter-second' => "millimeter/second:",
			'speed-of-light' => "speed of light [vacuum]:",
			'speed-of-sound' => "speed of sound [air]:"
		);
		if (get_option("speed-converter") === false) update_option("speed-converter", $arr_speed);


		$arr_pressure = array(
			'pascal' => "Pascal (Pa):",
			'kilopascal' => "Kilopascal (kPa):",
			'megapascal' => "Megapascal (MPa):",
			'hectopascal' => "Hectopascal (hPa):",
			'bar' => "Bar (bar):",
			'torr' => "Torr (torr):",
			'pound-per-square' => "Pound per square inch (psi):",
			'kilopound-per-square-inch' => "Kilopound per square inch (ksi):"
		);
		if (get_option("pressure-converter") === false) update_option("pressure-converter", $arr_pressure);

		$arr_charger = array(
			'coulomb' => "Coulomb (C):",
			'megacoulomb' => "Megacoulomb (MC):",
			'kilocoulomb' => "Kilocoulomb (kC):",
			'millicoulomb' => "Millicoulomb (mC):",
			'microcoulomb' => "Microcoulomb (µC):",
			'nanocoulomb' => "Nanocoulomb (nC):",
			'picocoulomb' => "Picocoulomb (pC):",
			'abcoulomb' => "abcoulomb (abC):",
			'emu' => "EMU of charge:",
			'statcoulomb' => "Statcoulomb (stC):",
			'esu' => "ESU of charge:",
			'franklin' => "Franklin (Fr):",
			'ampere-hour' => "Ampere-hour (A*h):",
			'ampere-minute' => "Ampere-minute (A*min):",
			'ampere-second' => "Ampere-second (A*s):",
			'faraday' => "Faraday (based on carbon 12):",
			'elementary' => "Elementary charge (e):"
			

		);
		if(get_option("charger-converter") === false) update_option("charger-converter", $arr_charger);
	}

}
