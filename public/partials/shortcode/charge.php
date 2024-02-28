<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

wp_enqueue_script( $this->plugin_name."-color", ACE_CONVERTER_TOOLS_URL . 'public/js/tool-charge.js', array( 'jquery' ), time(), false );

$charger = get_option("acex_charger_converter"); 
$f = 0; ?>
<div class="acex-public">
    <div class="tool-container">
        <!-- all charger unit -->
        <?php foreach ($charger as $key => $label): ?>
        <div class="field-wrapper">
            <label for="<?php echo wp_kses_post($key) ; ?>"><?php echo wp_kses_post($label)  ?></label>
            <input class="form-control" type="number" name="<?php echo wp_kses_post(str_replace("-", "_",$key)) ; ?>" id="<?php echo wp_kses_post(str_replace("-", "_",$key)) ; ?>" value="">
            <button class="btn btn-danger" <?php if($f==0){ echo "id='f-convert'"; $f=1;}   ?> onclick="acexConvertFrom<?php echo wp_kses_post($this->aceConvertToTitleCase($key)); ?>()">Convert</button>
        </div>
        <?php endforeach; ?>
    
        <div class="field-wrapper end">
            <button class="btn btn-danger" onclick="acexChargeReset()">Reset</button>
        </div>
    </div>
</div>