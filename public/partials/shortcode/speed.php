<?php wp_enqueue_script( $this->plugin_name."-color", acePluginBaseURL() . 'public/js/tool-speed.js', array( 'jquery' ), $this->version, false );  ?>
<?php $speed_converter_text = get_option("speed-converter"); ?>

<div class="tool-container">
    <!-- centimeter/second -->
    <div class="field-wrapper">
        <label for="centiSec"><?php echo $speed_converter_text['centimeter-second'];?></label>
        <input class="form-control" type="number" name="centiSec" id="centiSec" value="">
        <button class="btn btn-danger" id="f-convert" onclick="ConvertCentiSec()">Convert</button>
    </div>

    <!-- foot/second -->
    <div class="field-wrapper">
        <label for="footSec"><?php echo $speed_converter_text['foot-second'];?></label>
        <input class="form-control" type="number" name="footSec" id="footSec" value="">
        <button class="btn btn-danger" onclick="ConvertfootSec()">Convert</button>
    </div>

    <!-- inch/second -->
    <div class="field-wrapper">
        <label for="inchSec"><?php echo $speed_converter_text['inch-second'];?></label>
        <input class="form-control" type="number" name="inchSec" id="inchSec" value="">
        <button class="btn btn-danger" onclick="ConvertInchSec()">Convert</button>
    </div>

    <!-- kilometer/hour -->
    <div class="field-wrapper">
        <label for="inchSec"><?php echo $speed_converter_text['kilometer-hour'];?></label>
        <input class="form-control" type="number" name="kilometerHour" id="kilometerHour" value="">
        <button class="btn btn-danger" onclick="ConvertKilometerHour()">Convert</button>
    </div>

    <!-- kilometer/second -->
    <div class="field-wrapper">
        <label for="kilometerSec"><?php echo $speed_converter_text['kilometer-second'];?></label>
        <input class="form-control" type="number" name="kilometerSec" id="kilometerSec" value="">
        <button class="btn btn-danger" onclick="ConvertKilometerSec()">Convert</button>
    </div>

    <!-- knot -->
    <div class="field-wrapper">
        <label for="knot"><?php echo $speed_converter_text['knot'];?></label>
        <input class="form-control" type="number" name="knot" id="knot" value="">
        <button class="btn btn-danger" onclick="ConvertKnot()">Convert</button>
    </div>

    <!-- mach -->
    <div class="field-wrapper">
        <label for="mach"><?php echo $speed_converter_text['mach'];?></label>
        <input class="form-control" type="number" name="mach" id="mach" value="">
        <button class="btn btn-danger" onclick="ConvertMach()">Convert</button>
    </div>

    <!-- meter/second -->
    <div class="field-wrapper">
        <label for="meterSec"><?php echo $speed_converter_text['meter-second'];?></label>
        <input class="form-control" type="number" name="meterSec" id="meterSec" value="">
        <button class="btn btn-danger" onclick="ConvertMeterSec()">Convert</button>
    </div>

    <!-- mile/hour -->
    <div class="field-wrapper">
        <label for="mileHour"><?php echo $speed_converter_text['mile-hour'];?> </label>
        <input class="form-control" type="number" name="mileHour" id="mileHour" value="">
        <button class="btn btn-danger" onclick="ConvertMileHour()">Convert</button>
    </div>

    <!-- mile/second -->
    <div class="field-wrapper">
        <label for="mileSec"><?php echo $speed_converter_text['mile-second'];?> </label>
        <input class="form-control" type="number" name="mileSec" id="mileSec" value="">
        <button class="btn btn-danger" onclick="ConvertMileSec()">Convert</button>
    </div>

    <!-- millimeter/second -->
    <div class="field-wrapper">
        <label for="millimeterSec"><?php echo $speed_converter_text['millimeter-second'];?> </label>
        <input class="form-control" type="number" name="millimeterSec" id="millimeterSec" value="">
        <button class="btn btn-danger" onclick="ConvertMillimeterSec()">Convert</button>
    </div>

    <!-- speed of light -->
    <div class="field-wrapper">
        <label for="speedVaccum"><?php echo $speed_converter_text['speed-of-light'];?></label>
        <input class="form-control" type="number" name="speedVaccum" id="speedVaccum" value="">
        <button class="btn btn-danger" onclick="ConvertSpeedVaccum()">Convert</button>
    </div>

    <!-- speed of sound -->
    <div class="field-wrapper">
        <label for="speedSound"><?php echo $speed_converter_text['speed-of-sound'];?></label>
        <input class="form-control" type="number" name="speedSound" id="speedSound" value="">
        <button class="btn btn-danger" onclick="ConvertSpeedSound()">Convert</button>
    </div>

    <div class="field-wrapper end">
        <button class="btn btn-danger" onclick="reset()">Reset</button>
    </div>
</div>