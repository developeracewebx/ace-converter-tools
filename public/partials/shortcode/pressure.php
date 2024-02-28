<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

wp_enqueue_script( $this->plugin_name."-color", ACE_CONVERTER_TOOLS_URL . 'public/js/tool-pressure.js', array( 'jquery' ), time(), false ); 

$pressure_converter_text = get_option("acex_pressure_converter"); ?>
<div class="acex-public">
<div class="tool-container">
<!-- Pascal -->
<div class="field-wrapper">
    <label for="pascal"><?php echo esc_html($pressure_converter_text['pascal']); ?></label>
    <input class="form-control" type="number" name="pascal" id="pascal" value="">
    <button class="btn btn-danger" id="f-convert" onclick="aceConvertFromPascal()">Convert</button>
</div>

<!-- Kilopascal -->
<div class="field-wrapper">
    <label for="kilopascal"><?php echo esc_html($pressure_converter_text['kilopascal']); ?></label>
    <input class="form-control" type="number" name="kilopascal" id="kilopascal" value="">
    <button class="btn btn-danger" onclick="aceConvertFromKilopascal()">Convert</button>
</div>

<!-- Megapascal -->
<div class="field-wrapper">
    <label for="megapascal"><?php echo esc_html($pressure_converter_text['megapascal']); ?></label>
    <input class="form-control" type="number" name="megapascal" id="megapascal" value="">
    <button class="btn btn-danger" onclick="aceConvertFromMegapascal()">Convert</button>
</div>

<!-- Hectopascal -->
<div class="field-wrapper">
    <label for="hectopascal"><?php echo esc_html($pressure_converter_text['hectopascal']); ?></label>
    <input class="form-control" type="number" name="hectopascal" id="hectopascal" value="">
    <button class="btn btn-danger" onclick="aceConvertFromHectopascal()">Convert</button>
</div>

<!-- Bar -->
<div class="field-wrapper">
    <label for="bar"><?php echo esc_html($pressure_converter_text['bar']); ?></label>
    <input class="form-control" type="number" name="bar" id="bar" value="">
    <button class="btn btn-danger" onclick="aceConvertFromBar()">Convert</button>
</div>

<!-- Torr -->
<div class="field-wrapper">
    <label for="torr"><?php echo esc_html($pressure_converter_text['torr']); ?></label>
    <input class="form-control" type="number" name="torr" id="torr" value="">
    <button class="btn btn-danger" onclick="aceConvertFromTorr()">Convert</button>
</div>

<!-- Pound per square inch -->
<div class="field-wrapper">
    <label for="pound"><?php echo esc_html($pressure_converter_text['pound-per-square']); ?></label>
    <input class="form-control" type="number" name="pound" id="pound" value="">
    <button class="btn btn-danger" onclick="aceConvertFromPound()">Convert</button>
</div>

<!-- Kilopound per square inch -->
<div class="field-wrapper">
    <label for="kilopound"><?php echo esc_html($pressure_converter_text['kilopound-per-square-inch']); ?></label>
    <input class="form-control" type="number" name="kilopound" id="kilopound" value="">
    <button class="btn btn-danger" onclick="aceConvertFromKilopound()">Convert</button>
</div>

<div class="field-wrapper end">
    <button class="btn btn-danger" onclick="acePressureReset()">Reset</button>
</div>
</div>
</div>