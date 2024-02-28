<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

wp_enqueue_script( $this->plugin_name."-color", ACE_CONVERTER_TOOLS_URL . 'public/js/tool-color.js', array( 'jquery' ),time(), false );

$color_converter_text = get_option("acex_color_converter"); ?>

<div class="acex-public">
    <div class="tool-container">
        <form class="aceColorTool forms" method="POST">
            <div class="field-wrapper">
                <label for="colors"><strong><?php echo esc_html($color_converter_text['color-title']); ?></strong></label>
                <input type="text" class="form-input" name="acex_colors" placeholder="Name, HEX, RGB, HSL, HSV, CMYK" id="colors">
            </div>

            <!-- name -->
            <div class="field-wrapper">
                <span class="input-label-text" id="name"><?php echo esc_html($color_converter_text['Name']); ?></span>
                <input type="text" disabled="disabled" name="name" class="form-input" placeholder="" aria-label="name" aria-describedby="name">
            </div>

            <!-- hex -->
            <div class="field-wrapper">
                <span class="input-label-text" id="hex"><?php echo esc_html($color_converter_text['Hex']); ?></span>
                <input type="text" disabled="disabled" class="form-input" name="hex" placeholder="#" aria-label="hex" aria-describedby="hex">
            </div>

            <!-- RGB -->
            <div class="field-wrapper">
                <span class="input-label-text" id="rgb"><?php echo esc_html($color_converter_text['RGB']); ?></span>
                <input type="text" disabled="disabled" class="form-input" name="rgb" placeholder="" aria-label="rgb" aria-describedby="rgb">
            </div>

            <!-- HSV -->
            <div class="field-wrapper">
                <span class="input-label-text" id="hsv"><?php echo esc_html($color_converter_text['HSV']); ?></span>
                <input type="text" disabled="disabled" name="hsv" class="form-input hsv" placeholder="" aria-label="hsv" aria-describedby="hsv">
            </div>

            <!-- HSL -->
            <div class="field-wrapper">
                <span class="input-label-text" id="hsl"><?php echo esc_html($color_converter_text['HSL']); ?></span>
                <input type="text" disabled="disabled" name="hsl" class="form-input hsl" placeholder="" aria-label="hsl" aria-describedby="hsl">
            </div>

            <!-- HSB -->
            <div class="field-wrapper">
                <span class="input-label-text" id="hwb"><?php echo esc_html($color_converter_text['HWB']); ?></span>
                <input type="text" disabled="disabled" name="hwb" class="form-input hwb" placeholder="" aria-label="hwb" aria-describedby="hwb">
            </div>

            <!-- cymk -->
            <div class="field-wrapper">
                <span class="input-label-text" id="cymk"><?php echo esc_html($color_converter_text['CMYK']); ?></span>
                <input type="text" disabled="disabled" name="cymk" class="form-input cymk" placeholder="" aria-label="cymk" aria-describedby="cymk">
            </div>

            <!-- color -->
            <div class="field-wrapper">
                <span class="input-label-text" id="color"><?php echo esc_html($color_converter_text['COLOR']); ?></span>
                <input type="text" disabled="disabled" class="form-input color" placeholder="" aria-label="color" aria-describedby="color">
            </div>
            </form>
        </div>
</div>    