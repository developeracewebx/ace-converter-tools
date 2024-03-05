<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

wp_enqueue_script( $this->plugin_name."-color", ACE_CONVERTER_TOOLS_URL . 'public/js/tool-dms.js', array( 'jquery' ), time(), false );

$dms_converter_text = get_option("acex_dms_converter"); ?>

<div class="acex-public">
<div class="outer">
    <div class="box1">
        <h5><?php echo esc_html($dms_converter_text['decimal-degrees']);?></h5> 
        <div class="field-wrapper">
            <div class="lati">                   
                <label for="LatVal1"><?php echo esc_html($dms_converter_text['box-one-latitude']);?></label>
                <input type="number" class="form-control" id="LatVal1" value="40.689247" required>
            </div>
            <div class="logi">
                <label for="finalVal1"><?php echo esc_html($dms_converter_text['box-one-longitude']);?></label>            
                <input type="number" class="form-control" id="LongVal1" value="-74.044502" required>                
            </div>
            <div class="right-btns">
                <button id="dmsResetLatLong">Reset</button>
                <button id="acex_transfertoDeg" class="arrow-btn">>>></button>
            </div>
        </div>
    </div>
    <div class="box2">
    <h5><?php echo esc_html($dms_converter_text['degrees']);?> / <?php echo esc_html($dms_converter_text['minutes']);?> / <?php echo esc_html($dms_converter_text['seconds']);?></h5>
        <div class="field-wrapper">
            <table cellpadding="2" cellspacing="0" id="table-dgree" border="0">
                <tbody>
                    <tr>
                        <th></th>
                        
                        <th> <?php echo esc_html($dms_converter_text['degrees']);?></th>
                        <th> <?php echo esc_html($dms_converter_text['minutes']);?></th>
                        <th> <?php echo esc_html($dms_converter_text['seconds']);?></th>
                        <th></th>                    
                    </tr>
                    <tr>
                        <td><?php echo esc_html($dms_converter_text['box-two-latitude']);?></td>
                        <td><input class="numberlong" type="text" size="3" id="dms_lat_deg"></td>
                        <td><input class="numberlong" type="text" size="3" id="dms_lat_min"></td>
                        <td><input class="numberlong" type="text" size="3" id="dms_lat_sec"></td>
                        <td>
                            <select id="dms_lat_hem">
                                <option value="N">N</option>
                                <option value="S">S</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><?php echo esc_html($dms_converter_text['box-two-longitude']);?></td>
                        <td><input class="numberlong" type="text" size="3" id="dms_long_deg" required></td>
                        <td><input class="numberlong" type="text" size="3" id="dms_long_min" required></td>
                        <td><input class="numberlong" type="text" size="3" id="dms_long_sec" required></td>
                        <td>
                            <select id="dms_long_hem">
                                <option value="E">E</option>
                                <option value="W">W</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button id="acexTransfertoDecimal" class="arrow-btn"><<<</button>
            <button id="dmsReset">Reset</button>
        </div>
    </div>
</div>
</div>

