<?php wp_enqueue_script( $this->plugin_name."-color", acePluginBaseURL() . 'public/js/tool-energy.js', array( 'jquery' ), $this->version, false );  ?>
<?php $energy_converter= get_option('energy-converter');  
$f=0;

?>
<div class="tool-container">
    <!-- joule -->
    
    <div class="field-wrapper  <?php if(!$energy_converter['joule_show']){ echo "none-energy"; } ?>">
        <label for="joule"><?php  echo $energy_converter['joule']; ?></label>
        <input class="form-control" type="number" name="joule" id="joule" value="">
        <button class="btn btn-danger" id="f-convert" onclick="ConvertFromjoule()">Convert</button>
    </div>
   
    <!-- kilojoule -->

    <div class="field-wrapper <?php if(!$energy_converter['kilojoules_show']){ echo "none-energy"; } ?>">
        <label for="kilojoule"><?php  echo $energy_converter['kilojoules']; ?></label>
        <input class="form-control" type="number" name="kilojoule" id="kilojoule" value="">
        <button class="btn btn-danger" onclick="ConvertFromKilojoule()">Convert</button>
    </div>
   
    <!-- kilowatt hour -->
   
    <div class="field-wrapper  <?php if(!$energy_converter['kilowatt-hour_show']){ echo "none-energy"; } ?>">
        <label for="kilowatt_hour"><?php  echo $energy_converter['kilowatt-hour']; ?></label>
        <input class="form-control" type="number" name="kilowatt-hour" id="kilowatt_hour" value="">
        <button class="btn btn-danger" onclick="ConvertFromKilowattHour()">Convert</button>
    </div>
  
    <!-- watt hour -->
  
    <div class="field-wrapper <?php if(!$energy_converter['watt-hour_show']){ echo "none-energy"; } ?>">
        <label for="watt_hour"><?php  echo $energy_converter['watt-hour']; ?></label>
        <input class="form-control" type="number" name="watt-hour" id="watt_hour" value="">
        <button class="btn btn-danger" onclick="ConvertFromWattHour()">Convert</button>
    </div>
   
    <!-- calorie -->
    
    <div class="field-wrapper <?php if(!$energy_converter['calorie_show']){ echo "none-energy"; } ?>">
        <label for="calorie"><?php  echo $energy_converter['calorie']; ?></label>
        <input class="form-control" type="number" name="calorie" id="calorie" value="">
        <button class="btn btn-danger" onclick="ConvertFromCalorie()">Convert</button>
    </div>
    
    <!-- horsepower -->
    
    <div class="field-wrapper <?php if(!$energy_converter['horsepower-hour_show']){ echo "none-energy"; } ?>">
        <label for="horsepower"><?php  echo $energy_converter['horsepower-hour']; ?></label>
        <input class="form-control" type="number" name="horsepower" id="horsepower" value="">
        <button class="btn btn-danger" onclick="ConvertFromHorsepower()">Convert</button>
    </div>
   
    <!-- btu IT -->
    
    <div class="field-wrapper <?php if(!$energy_converter['btu-it_show']){ echo "none-energy"; } ?>">
        <label for="btu_IT"><?php  echo $energy_converter['btu-it']; ?></label>
        <input class="form-control" type="number" name="btu-IT" id="btu_IT" value="">
        <button class="btn btn-danger" onclick="ConvertFromBtuIt()">Convert</button>
    </div>
   
    <!-- btu th -->
   
    <div class="field-wrapper <?php if(!$energy_converter['btu-th_show']){ echo "none-energy"; } ?>">
        <label for="btu_th"><?php  echo $energy_converter['btu-th']; ?></label>
        <input class="form-control" type="number" name="btu-th" id="btu_th" value="">
        <button class="btn btn-danger" onclick="ConvertFromBtuTh()">Convert</button>
    </div>
  
    <!-- gigajoule -->

    <div class="field-wrapper <?php if(!$energy_converter['gigajoule_show']){ echo "none-energy"; } ?>">
        <label for="gigajoule"><?php  echo $energy_converter['gigajoule']; ?></label>
        <input class="form-control" type="number" name="gigajoule" id="gigajoule" value="">
        <button class="btn btn-danger" onclick="ConvertFromGigajoule()">Convert</button>
    </div>
 
    <!-- megajoule -->
   
    <div class="field-wrapper <?php if(!$energy_converter['megajoule_show']){ echo "none-energy"; } ?>">
        <label for="megajoule"><?php  echo $energy_converter['megajoule']; ?></label>
        <input class="form-control" type="number" name="megajoule" id="megajoule" value="">
        <button class="btn btn-danger" onclick="ConvertFromMegajoule()">Convert</button>
    </div>
 
    <!-- millijoule -->
   
    <div class="field-wrapper <?php if(!$energy_converter['millijoule_show']){ echo "none-energy"; } ?>">
        <label for="millijoule"><?php  echo $energy_converter['millijoule']; ?></label>
        <input class="form-control" type="number" name="millijoule" id="millijoule" value="">
        <button class="btn btn-danger" onclick="ConvertFromMillijoule()">Convert</button>
    </div>
  
    <!-- microjoule -->

    <div class="field-wrapper <?php if(!$energy_converter['microjoule_show']){ echo "none-energy"; } ?>">
        <label for="microjoule"><?php  echo $energy_converter['microjoule']; ?></label>            
        <input class="form-control" type="number" name="microjoule" id="microjoule" value="">
        <button class="btn btn-danger" onclick="ConvertFromMicrojoule()">Convert</button>
    </div>
   
    <!-- nanojoule -->
   
    <div class="field-wrapper <?php if(!$energy_converter['nanojoule_show']){ echo "none-energy"; } ?>">
        <label for="nanojoule"><?php  echo $energy_converter['nanojoule']; ?></label>
        <input class="form-control" type="number" name="nanojoule" id="nanojoule" value="">
        <button class="btn btn-danger" onclick="ConvertFromNanojoule()">Convert</button>
    </div>
 
    <!-- attojoule -->
   
    <div class="field-wrapper <?php if(!$energy_converter['attojoule_show']){ echo "none-energy"; } ?>">
        <label for="attojoule"><?php  echo $energy_converter['attojoule']; ?></label>            
        <input class="form-control" type="number" name="attojoule" id="attojoule" value="">
        <button class="btn btn-danger" onclick="ConvertFromAttjoule()">Convert</button>
    </div>
   
    <!-- megaelectron volt -->
   
    <div class="field-wrapper <?php if(!$energy_converter['megaelectron-volt_show']){ echo "none-energy"; } ?>">
        <label for="megaelectron_volt"><?php  echo $energy_converter['megaelectron-volt']; ?></label>            
        <input class="form-control" type="number" name="megaelectron-volt" id="megaelectron_volt" value="">
        <button class="btn btn-danger" onclick="ConvertFromMegaelectron()">Convert</button>
    </div>
   
    <!-- kiloelectron volt -->
    
    <div class="field-wrapper <?php if(!$energy_converter['kiloelectron-volts_show']){ echo "none-energy"; } ?>">
        <label for="kiloelectron_volt"><?php  echo $energy_converter['kiloelectron-volts']; ?></label>            
        <input class="form-control" type="number" name="kiloelectron-volt" id="kiloelectron_volt" value="">
        <button class="btn btn-danger" onclick="ConvertFromKiloelectron()">Convert</button>
    </div>
  
    <!-- electron volt -->
 
    <div class="field-wrapper <?php if(!$energy_converter['electron-volt_show']){ echo "none-energy"; } ?>">
        <label for="electron_volt"><?php  echo $energy_converter['electron-volt']; ?></label>            
        <input class="form-control" type="number" name="electron-volt" id="electron_volt" value="">
        <button class="btn btn-danger" onclick="ConvertFromelectronvolt()">Convert</button>
    </div>
   
    <!-- erg -->
   
    <div class="field-wrapper <?php if(!$energy_converter['erg_show']){ echo "none-energy"; } ?>">
        <label for="erg"><?php  echo $energy_converter['erg']; ?></label>            
        <input class="form-control" type="number" name="erg" id="erg" value="">
        <button class="btn btn-danger" onclick="ConvertFromerg()">Convert</button>
    </div>
   
    <!-- gigawatt hour -->
  
    <div class="field-wrapper <?php if(!$energy_converter['gigawatt-hour_show']){ echo "none-energy"; } ?>">
        <label for="gigawatt_hour"><?php  echo $energy_converter['gigawatt-hour']; ?></label>        
        <input class="form-control" type="number" name="gigawatt-hour" id="gigawatt_hour" value="">
        <button class="btn btn-danger" onclick="ConvertFromGigawatthour()">Convert</button>
    </div>
  
    <!-- megawatt hour -->
  
    <div class="field-wrapper <?php if(!$energy_converter['megawatt-hour_show']){ echo "none-energy"; } ?>">
        <label for="megawatt_hour"><?php  echo $energy_converter['megawatt-hour']; ?></label>
        <input class="form-control" type="number" name="megawatt-hour" id="megawatt_hour" value="">
        <button class="btn btn-danger" onclick="ConvertFromMegawatthour()">Convert</button>
    </div>
 
    <!-- kilowatt second -->
   
    <div class="field-wrapper <?php if(!$energy_converter['kilowatt-second_show']){ echo "none-energy"; } ?>">
        <label for="kilowatt_second"><?php  echo $energy_converter['kilowatt-second']; ?></label>            
        <input class="form-control" type="number" name="kilowatt_second" id="kilowatt_second" value="">
        <button class="btn btn-danger" onclick="ConvertKilowattsecond()">Convert</button>
    </div>
 
    <!-- watt second -->
   
    <div class="field-wrapper <?php if(!$energy_converter['watt-second_show']){ echo "none-energy"; } ?>">
        <label for="watt_second"><?php  echo $energy_converter['watt-second']; ?></label>            
        <input class="form-control" type="number" name="watt_second" id="watt_second" value="">
        <button class="btn btn-danger" onclick="ConvertFromWattsecond()">Convert</button>
    </div>
   
    <!-- newton meter -->
    
    <div class="field-wrapper <?php if(!$energy_converter['newton-meter_show']){ echo "none-energy"; } ?>">
        <label for="newton_meter"><?php  echo $energy_converter['newton-meter']; ?></label>
        <input class="form-control" type="number" name="newton_meter" id="newton_meter" value="">
        <button class="btn btn-danger" onclick="ConvertFromNewtonmeter()">Convert</button>
    </div>
   
    <!-- horsepower hour -->
   
    <div class="field-wrapper <?php if(!$energy_converter['horsepower-hour_show']){ echo "none-energy"; } ?>">
        <label for="horsepower_hour"><?php  echo $energy_converter['horsepower-hour']; ?></label>
        <input class="form-control" type="number" name="horsepower_hour" id="horsepower_hour" value="">
        <button class="btn btn-danger" onclick="ConvertFromHorsepowerhour()">Convert</button>
    </div>
   
    <!-- kilocalorie it -->
   
    <div class="field-wrapper <?php if(!$energy_converter['kilocalorie-it_show']){ echo "none-energy"; } ?>">
        <label for="kilocalorie_it"><?php  echo $energy_converter['kilocalorie-it']; ?></label>            
        <input class="form-control" type="number" name="kilocalorie_it" id="kilocalorie_it" value="">
        <button class="btn btn-danger" onclick="ConvertFromKilocalorieIt()">Convert</button>
    </div>
    
    <!-- kilocalorie th -->
   
    <div class="field-wrapper <?php if(!$energy_converter['kilocalorie-th_show']){ echo "none-energy"; } ?>">
        <label for="kilocalorie_th"><?php  echo $energy_converter['kilocalorie-th']; ?></label>
        <input class="form-control" type="number" name="kilocalorie_th" id="kilocalorie_th" value="">
        <button class="btn btn-danger" onclick="ConvertFromKilocalorieTh()">Convert</button>
    </div>
   
    <!-- calorie it -->
   
    <div class="field-wrapper <?php if(!$energy_converter['calorie-it_show']){ echo "none-energy"; } ?>">
        <label for="calorie_it"><?php  echo $energy_converter['calorie-it']; ?></label>            
        <input class="form-control" type="number" name="calorie_it" id="calorie_it" value="">
        <button class="btn btn-danger" onclick="ConvertFromCalorieIt()">Convert</button>
    </div>
   
    <!-- calorie th -->
   
    <div class="field-wrapper <?php if(!$energy_converter['calorie-th_show']){ echo "none-energy"; } ?>">
        <label for="calorie_th"><?php  echo $energy_converter['calorie-th']; ?></label>            
        <input class="form-control" type="number" name="calorie_th" id="calorie_th" value="">
        <button class="btn btn-danger" onclick="ConvertFromCalorieTh()">Convert</button>
    </div>
   
    <!-- mega Btu -->
  
    <div class="field-wrapper <?php if(!$energy_converter['mega-btu-it_show']){ echo "none-energy"; } ?>">
        <label for="mega_Btu"><?php  echo $energy_converter['mega-btu-it']; ?></label>            
        <input class="form-control" type="number" name="mega_Btu" id="mega_Btu" value="">
        <button class="btn btn-danger" onclick="ConvertFromMegaBtu()">Convert</button>
    </div>
   
    <!-- ton hour -->
   
    <div class="field-wrapper <?php if(!$energy_converter['ton-hour-refrigeration_show']){ echo "none-energy"; } ?>">
        <label for="ton_hour"><?php  echo $energy_converter['ton-hour-refrigeration']; ?></label>            
        <input class="form-control" type="number" name="ton_hour" id="ton_hour" value="">
        <button class="btn btn-danger" onclick="ConvertFromTonHour()">Convert</button>
    </div>
    
    <!-- fuel oil kiloliter -->
 
    <div class="field-wrapper <?php if(!$energy_converter['fuel-oil-kiloliter_show']){ echo "none-energy"; } ?>">
        <label for="fuel_oil_kiloliter"><?php  echo $energy_converter['fuel-oil-kiloliter']; ?></label>            
        <input class="form-control" type="number" name="fuel_oil_kiloliter" id="fuel_oil_kiloliter" value="">
        <button class="btn btn-danger" onclick="ConvertFromFuelOilKiloliter()">Convert</button>
    </div>
    
    <!-- fuel oil barrel --> 
   
    <div class="field-wrapper <?php if(!$energy_converter['fuel-oil-barrel_show']){ echo "none-energy"; } ?>">
        <label for="fuel_oil_barrel"><?php  echo $energy_converter['fuel-oil-barrel']; ?></label>            
        <input class="form-control" type="number" name="fuel_oil_barrel" id="fuel_oil_barrel" value="">
        <button class="btn btn-danger" onclick="ConvertFromFuelOilBarrel()">Convert</button>
    </div>

    <!-- gigaton -->
  
    <div class="field-wrapper <?php if(!$energy_converter['gigaton_show']){ echo "none-energy"; } ?>">
        <label for="gigaton"><?php  echo $energy_converter['gigaton']; ?></label>            
        <input class="form-control" type="number" name="gigaton" id="gigaton" value="">
        <button class="btn btn-danger" onclick="ConvertFromGigaton()">Convert</button>
    </div>
   
    <!-- megaton -->
   
    <div class="field-wrapper <?php if(!$energy_converter['megaton_show']){ echo "none-energy"; } ?>">
        <label for="megaton"><?php  echo $energy_converter['megaton']; ?></label>            
        <input class="form-control" type="number" name="megaton" id="megaton" value="">
        <button class="btn btn-danger" onclick="ConvertFromMegaton()">Convert</button>
    </div>
   
    <!-- kiloton -->
   
    <div class="field-wrapper <?php if(!$energy_converter['kiloton_show']){ echo "none-energy"; } ?>">
        <label for="kiloton"><?php  echo $energy_converter['kiloton']; ?></label>            
        <input class="form-control" type="number" name="kiloton" id="kiloton" value="">
        <button class="btn btn-danger" onclick="ConvertFromkiloton()">Convert</button>
    </div>
    
    <!-- ton explosives -->
 
    <div class="field-wrapper <?php if(!$energy_converter['ton-explosives_show']){ echo "none-energy"; } ?>">
        <label for="ton_explosives"><?php  echo $energy_converter['ton-explosives']; ?></label>            
        <input class="form-control" type="number" name="ton_explosives" id="ton_explosives" value="">
        <button class="btn btn-danger" onclick="ConvertFromTonExplosives()">Convert</button>
    </div>
  
    <!-- dyne centimeter -->
   
    <div class="field-wrapper <?php if(!$energy_converter['dyne-centimeter_show']){ echo "none-energy"; } ?>">
        <label for="dyne_centimeter"><?php  echo $energy_converter['dyne-centimeter']; ?></label>
        <input class="form-control" type="number" name="dyne_centimeter" id="dyne_centimeter" value="">
        <button class="btn btn-danger" onclick="ConvertFromDyneCentimeter()">Convert</button>
    </div>
   
    <!-- gram force meter -->
   
    <div class="field-wrapper <?php if(!$energy_converter['gram-force-meter_show']){ echo "none-energy"; } ?>">
        <label for="gram_force_meter"><?php  echo $energy_converter['gram-force-meter']; ?></label>            
        <input class="form-control" type="number" name="gram_force_meter" id="gram_force_meter" value="">
        <button class="btn btn-danger" onclick="ConvertFromGramForceMeter()">Convert</button>
    </div>
  
    <!-- gram force cm -->
  
    <div class="field-wrapper <?php if(!$energy_converter['gram-force-centimeter_show']){ echo "none-energy"; } ?>">
        <label for="gram_force_cm"><?php  echo $energy_converter['gram-force-centimeter']; ?></label>            
        <input class="form-control" type="number" name="gram_force_cm" id="gram_force_cm" value="">
        <button class="btn btn-danger" onclick="ConvertFromGramForceCm()">Convert</button>
    </div>
  
    <!-- kilogram force cm -->
   
    <div class="field-wrapper <?php if(!$energy_converter['kilogram-force-centimeter_show']){ echo "none-energy"; } ?>">
        <label for="kilogram_force_cm"><?php  echo $energy_converter['kilogram-force-centimeter']; ?></label>            
        <input class="form-control" type="number" name="kilogram_force_cm" id="kilogram_force_cm" value="">
        <button class="btn btn-danger" onclick="ConvertkilogramForceCm()">Convert</button>
    </div>
   
    <!-- kilogram force meter -->
  
    <div class="field-wrapper <?php if(!$energy_converter['kilogram-force-meter_show']){ echo "none-energy"; } ?>">
        <label for="kilogram_force_meter"><?php  echo $energy_converter['kilogram-force-meter']; ?></label>            
        <input class="form-control" type="number" name="kilogram_force_meter" id="kilogram_force_meter" value="">
        <button class="btn btn-danger" onclick="ConvertFromkilogramForceMeter()">Convert</button>
    </div>
  
    <!-- kilopond meter -->
    
    <div class="field-wrapper <?php if(!$energy_converter['kilopond-meter_show']){ echo "none-energy"; } ?>">
        <label for="kilopond_meter"><?php  echo $energy_converter['kilopond-meter']; ?></label>
        <input class="form-control" type="number" name="kilopond_meter" id="kilopond_meter" value="">
        <button class="btn btn-danger" onclick="ConvertFromkilopondMeter()">Convert</button>
    </div>
    
    <!-- pound force foot -->
    
    <div class="field-wrapper <?php if(!$energy_converter['pound-force-foot_show']){ echo "none-energy"; } ?>">
        <label for="pound_force_foot"><?php  echo $energy_converter['pound-force-foot']; ?></label>
        <input class="form-control" type="number" name="pound_force_foot" id="pound_force_foot" value="">
        <button class="btn btn-danger" onclick="ConvertFromPoundForceFoot()">Convert</button>
    </div>
   
    <!-- pound force inch -->
 
    <div class="field-wrapper <?php if(!$energy_converter['pound-force-inch_show']){ echo "none-energy"; } ?>">
        <label for="pound_force_inch"><?php  echo $energy_converter['pound-force-inch']; ?></label>
        <input class="form-control" type="number" name="pound_force_inch" id="pound_force_inch" value="">
        <button class="btn btn-danger" onclick="ConvertFromPoundForceInch()">Convert</button>
    </div>
   
    <!-- ounce force inch -->
 
    <div class="field-wrapper <?php if(!$energy_converter['ounce-force-inch_show']){ echo "none-energy"; } ?>">
        <label for="ounce_force_inch"><?php  echo $energy_converter['ounce-force-inch']; ?></label>
        <input class="form-control" type="number" name="ounce_force_inch" id="ounce_force_inch" value="">
        <button class="btn btn-danger" onclick="ConvertFromOunceForceInch()">Convert</button>
    </div>
  
    <!-- foot pound -->
   
    <div class="field-wrapper <?php if(!$energy_converter['foot-pound_show']){ echo "none-energy"; } ?>">
        <label for="foot_pound"><?php  echo $energy_converter['foot-pound']; ?></label>
        <input class="form-control" type="number" name="foot_pound" id="foot_pound" value="">
        <button class="btn btn-danger" onclick="ConvertFromFootPound()">Convert</button>
    </div>
  
    <!-- inch pound -->
 
    <div class="field-wrapper <?php if(!$energy_converter['inch-pound_show']){ echo "none-energy"; } ?>">
        <label for="inch_pound"><?php  echo $energy_converter['inch-pound']; ?></label>
        <input class="form-control" type="number" name="inch_pound" id="inch_pound" value="">
        <button class="btn btn-danger" onclick="ConvertFromInchPound()">Convert</button>
    </div>
   
    <!-- inch ounce -->
  
    <div class="field-wrapper <?php if(!$energy_converter['inch-ounce_show']){ echo "none-energy"; } ?>">
        <label for="inch_ounce"><?php  echo $energy_converter['inch-ounce']; ?></label>
        <input class="form-control" type="number" name="inch_ounce" id="inch_ounce" value="">
        <button class="btn btn-danger" onclick="ConvertFromInchOunce()">Convert</button>
    </div>
   
    <!-- poundal foot -->
   
    <div class="field-wrapper <?php if(!$energy_converter['poundal-foot_show']){ echo "none-energy"; } ?>">
        <label for="poundal_foot"><?php  echo $energy_converter['poundal-foot']; ?></label>
        <input class="form-control" type="number" name="poundal_foot" id="poundal_foot" value="">
        <button class="btn btn-danger" onclick="ConvertFromPoundalFoot()">Convert</button>
    </div>
  
    <!-- therm -->
   
    <div class="field-wrapper <?php if(!$energy_converter['therm_show']){ echo "none-energy"; } ?>">
        <label for="therm"><?php  echo $energy_converter['therm']; ?></label>
        <input class="form-control" type="number" name="therm" id="therm" value="">
        <button class="btn btn-danger" onclick="ConvertFromThrem()">Convert</button>
    </div>
  
    <!-- therm EC -->
  
    <div class="field-wrapper <?php if(!$energy_converter['therm-ec_show']){ echo "none-energy"; } ?>">
        <label for="therm_EC"><?php  echo $energy_converter['therm-ec']; ?></label>
        <input class="form-control" type="number" name="therm_EC" id="therm_EC" value="">
        <button class="btn btn-danger" onclick="ConvertFromThremEC()">Convert</button>
    </div>
   
    <!-- therm US -->
   
    <div class="field-wrapper <?php if(!$energy_converter['therm-us_show']){ echo "none-energy"; } ?>">
        <label for="therm_US"><?php  echo $energy_converter['therm-us']; ?></label>
        <input class="form-control" type="number" name="therm_US" id="therm_US" value="">
        <button class="btn btn-danger" onclick="ConvertFromThremUS()">Convert</button>
    </div>
    
    <!-- hartree energy -->
   
    <div class="field-wrapper <?php if(!$energy_converter['hartree-energy_show']){ echo "none-energy"; } ?>">
        <label for="hartree_energy"><?php  echo $energy_converter['hartree-energy']; ?></label>
        <input class="form-control" type="number" name="hartree_energy" id="hartree_energy" value="">
        <button class="btn btn-danger" onclick="ConvertFromHartreeEnergy()">Convert</button>
    </div>
  
    <!-- rydberg constant -->
 
    <div class="field-wrapper <?php if(!$energy_converter['rydberg-constant_show']){ echo "none-energy"; } ?>">
        <label for="rydberg_constant"><?php  echo $energy_converter['rydberg-constant']; ?></label>
        <input class="form-control" type="number" name="rydberg_constant" id="rydberg_constant" value="">
        <button class="btn btn-danger" onclick="ConvertFromRydbergConstant()">Convert</button>
    </div>
  
    <div class="field-wrapper end">
        <button class="btn btn-danger" onclick="reset()">Reset</button>
    </div>
</div>