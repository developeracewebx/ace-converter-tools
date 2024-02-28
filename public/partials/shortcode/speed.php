<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

wp_enqueue_script( $this->plugin_name."-color", ACE_CONVERTER_TOOLS_URL . 'public/js/tool-speed.js', array( 'jquery' ), time(), false );

$speed_converter_text = get_option("acex_speed_converter"); ?>

<div class="acex-public">
<div class="tool-container">
    <!-- centimeter/second -->
    <div class="field-wrapper">
        <label for="centiSec"><?php echo esc_html($speed_converter_text['centimeter-second']);?></label>
        <input class="form-control" type="number" name="centiSec" id="centiSec" value="">
        <button class="btn btn-danger" id="f-convert" onclick="aceConvertCentiSec()">Convert</button>
    </div>

    <!-- foot/second -->
    <div class="field-wrapper">
        <label for="footSec"><?php echo esc_html($speed_converter_text['foot-second']);?></label>
        <input class="form-control" type="number" name="footSec" id="footSec" value="">
        <button class="btn btn-danger" onclick="aceConvertfootSec()">Convert</button>
    </div>

    <!-- inch/second -->
    <div class="field-wrapper">
        <label for="inchSec"><?php echo esc_html($speed_converter_text['inch-second']);?></label>
        <input class="form-control" type="number" name="inchSec" id="inchSec" value="">
        <button class="btn btn-danger" onclick="aceConvertInchSec()">Convert</button>
    </div>

    <!-- kilometer/hour -->
    <div class="field-wrapper">
        <label for="inchSec"><?php echo esc_html($speed_converter_text['kilometer-hour']);?></label>
        <input class="form-control" type="number" name="kilometerHour" id="kilometerHour" value="">
        <button class="btn btn-danger" onclick="aceConvertKilometerHour()">Convert</button>
    </div>

    <!-- kilometer/second -->
    <div class="field-wrapper">
        <label for="kilometerSec"><?php echo esc_html($speed_converter_text['kilometer-second']);?></label>
        <input class="form-control" type="number" name="kilometerSec" id="kilometerSec" value="">
        <button class="btn btn-danger" onclick="aceConvertKilometerSec()">Convert</button>
    </div>

    <!-- knot -->
    <div class="field-wrapper">
        <label for="knot"><?php echo esc_html($speed_converter_text['knot']);?></label>
        <input class="form-control" type="number" name="knot" id="knot" value="">
        <button class="btn btn-danger" onclick="aceConvertKnot()">Convert</button>
    </div>

    <!-- mach -->
    <div class="field-wrapper">
        <label for="mach"><?php echo esc_html($speed_converter_text['mach']);?></label>
        <input class="form-control" type="number" name="mach" id="mach" value="">
        <button class="btn btn-danger" onclick="aceConvertMach()">Convert</button>
    </div>

    <!-- meter/second -->
    <div class="field-wrapper">
        <label for="meterSec"><?php echo esc_html($speed_converter_text['meter-second']);?></label>
        <input class="form-control" type="number" name="meterSec" id="meterSec" value="">
        <button class="btn btn-danger" onclick="aceConvertMeterSec()">Convert</button>
    </div>

    <!-- mile/hour -->
    <div class="field-wrapper">
        <label for="mileHour"><?php echo esc_html($speed_converter_text['mile-hour']);?> </label>
        <input class="form-control" type="number" name="mileHour" id="mileHour" value="">
        <button class="btn btn-danger" onclick="aceConvertMileHour()">Convert</button>
    </div>

    <!-- mile/second -->
    <div class="field-wrapper">
        <label for="mileSec"><?php echo esc_html($speed_converter_text['mile-second']);?> </label>
        <input class="form-control" type="number" name="mileSec" id="mileSec" value="">
        <button class="btn btn-danger" onclick="aceConvertMileSec()">Convert</button>
    </div>

    <!-- millimeter/second -->
    <div class="field-wrapper">
        <label for="millimeterSec"><?php echo esc_html($speed_converter_text['millimeter-second']);?> </label>
        <input class="form-control" type="number" name="millimeterSec" id="millimeterSec" value="">
        <button class="btn btn-danger" onclick="aceConvertMillimeterSec()">Convert</button>
    </div>

    <!-- speed of light -->
    <div class="field-wrapper">
        <label for="speedVaccum"><?php echo esc_html($speed_converter_text['speed-of-light']);?></label>
        <input class="form-control" type="number" name="speedVaccum" id="speedVaccum" value="">
        <button class="btn btn-danger" onclick="aceConvertSpeedVaccum()">Convert</button>
    </div>

    <!-- speed of sound -->
    <div class="field-wrapper">
        <label for="speedSound"><?php echo esc_html($speed_converter_text['speed-of-sound']);?></label>
        <input class="form-control" type="number" name="speedSound" id="speedSound" value="">
        <button class="btn btn-danger" onclick="aceConvertSpeedSound()">Convert</button>
    </div>

    <div class="field-wrapper end">
        <button class="btn btn-danger" onclick="aceSpeedReset()">Reset</button>
    </div>
</div>
</div>