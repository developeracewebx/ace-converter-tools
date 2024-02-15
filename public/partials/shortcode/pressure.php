<?php wp_enqueue_script( $this->plugin_name."-color", acePluginBaseURL() . 'public/js/tool-pressure.js', array( 'jquery' ), $this->version, false );  ?>

<?php $pressure_converter_text = get_option("pressure-converter"); ?>
<div class="tool-container">
<!-- Pascal -->
<div class="field-wrapper">
    <label for="pascal"><?php echo $pressure_converter_text['pascal']; ?></label>
    <input class="form-control" type="number" name="pascal" id="pascal" value="">
    <button class="btn btn-danger" id="f-convert" onclick="ConvertFromPascal()">Convert</button>
</div>

<!-- Kilopascal -->
<div class="field-wrapper">
    <label for="kilopascal"><?php echo $pressure_converter_text['kilopascal']; ?></label>
    <input class="form-control" type="number" name="kilopascal" id="kilopascal" value="">
    <button class="btn btn-danger" onclick="ConvertFromKilopascal()">Convert</button>
</div>

<!-- Megapascal -->
<div class="field-wrapper">
    <label for="megapascal"><?php echo $pressure_converter_text['megapascal']; ?></label>
    <input class="form-control" type="number" name="megapascal" id="megapascal" value="">
    <button class="btn btn-danger" onclick="ConvertFromMegapascal()">Convert</button>
</div>

<!-- Hectopascal -->
<div class="field-wrapper">
    <label for="hectopascal"><?php echo $pressure_converter_text['hectopascal']; ?></label>
    <input class="form-control" type="number" name="hectopascal" id="hectopascal" value="">
    <button class="btn btn-danger" onclick="ConvertFromHectopascal()">Convert</button>
</div>

<!-- Bar -->
<div class="field-wrapper">
    <label for="bar"><?php echo $pressure_converter_text['bar']; ?></label>
    <input class="form-control" type="number" name="bar" id="bar" value="">
    <button class="btn btn-danger" onclick="ConvertFromBar()">Convert</button>
</div>

<!-- Torr -->
<div class="field-wrapper">
    <label for="torr"><?php echo $pressure_converter_text['torr']; ?></label>
    <input class="form-control" type="number" name="torr" id="torr" value="">
    <button class="btn btn-danger" onclick="ConvertFromTorr()">Convert</button>
</div>

<!-- Pound per square inch -->
<div class="field-wrapper">
    <label for="pound"><?php echo $pressure_converter_text['pound-per-square']; ?></label>
    <input class="form-control" type="number" name="pound" id="pound" value="">
    <button class="btn btn-danger" onclick="ConvertFromPound()">Convert</button>
</div>

<!-- Kilopound per square inch -->
<div class="field-wrapper">
    <label for="kilopound"><?php echo $pressure_converter_text['kilopound-per-square-inch']; ?></label>
    <input class="form-control" type="number" name="kilopound" id="kilopound" value="">
    <button class="btn btn-danger" onclick="ConvertFromKilopound()">Convert</button>
</div>

<div class="field-wrapper end">
    <button class="btn btn-danger" onclick="reset()">Reset</button>
</div>
</div>