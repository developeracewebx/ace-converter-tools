<?php
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://acewebx.com
 * @since      1.0.0
 *
 * @package    Ace_Converter_Tools
 * @subpackage Ace_Converter_Tools/admin/partials
 */ 

$dms_converter_text = get_option("dms-converter");
$energy_converter_text = get_option("energy-converter");
$color_converter_text = get_option("color-converter");
$speed_converter_text = get_option("speed-converter");
$pressure_converter_text = get_option("pressure-converter");
$charger_converter_text = get_option("charger-converter");

?>
<div class="ace-tools">
    <div id="logo">
        <span><?php echo get_admin_page_title(); ?></span>
    </div>
    <div class="outer-box">
        <div id="left-menu">
            <ul>
                <li class="active" id="colorMenuItem"><a href="#">
                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/colour.png' ?>" class="tool-icon">
                    <span>Color Converter</span>
                </a></li>
                <li id="energyMenuItem"><a href="#">
                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/energy.png' ?>" class="tool-icon">
                    <span>Energy Converter</span>
                </a></li>
                <li id="speedMenuItem"><a href="#">
                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/speed.png' ?>" class="tool-icon">
                    <span>Speed Converter</span>
                </a></li>
                <li id="pressureMenuItem"><a href="#">
                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/pressure.png' ?>" class="tool-icon">
                    <span>Pressure Converter</span>
                </a></li>
                <li id="dmsMenuItem"><a href="#">
                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/dms.png' ?>" class="tool-icon">
                    <span>DMS Converter</span>
                </a></li>
                <li id="chargeMenuItem"><a href="#">
                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/charge.png' ?>" class="tool-icon">
                    <span>Charge Converter</span>
                </a></li>
            </ul>
        </div>
        <div id="main-content">
            <div id="page-container">
                <div class="card" id="colorConverter" style="display:block;">
                    <div class="title">Color Converter</div>
                    <div class="content-ace">
                        <ul>
                            <li>
                                <div class="label-heading">
                                    <p>
                                        <label>Shortcode</label><br>
                                        <span><i>Use this shortcode anywhere on website</i></span>
                                    </p>
                                </div>
                                <div class="content-box">
                                    <code>[ace-converter-tool tool=color]</code>
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copy.png' ?>" class="tool-icon" id="copy">
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copying.png' ?>" class="tool-icon copied" style="display:none;">
                                </div>
                            </li> 
                            <form action="#colorMenuItem" method="POST" class="color-convert"> 
                            <?php wp_nonce_field('my_delete_action'); ?>
                                    <?php
                                        foreach ($color_converter_text as $key => $label): ?>
                                                <li>
                                                    <div class="label-heading">
                                                        <p>
                                                            <label for="<?php echo $key; ?>"><?php echo str_replace('-', ' ', ucfirst($key)); ?> </label><br>
                                                        </p>
                                                    </div>
                                                    <div class="content-box">
                                                        <input type="text" id="<?php echo $key; ?>-title" name="<?php echo $key; ?>" value="<?php echo $color_converter_text[$key]; ?>">
                                                    </div>
                                                </li>
                                        <?php endforeach; ?>

                                        <li>
                                        <input type="submit" name="color-converter-submit" class="color-converters" value="Save">
                                        </li>
                                        

                                        <li>
                                            <div class="label-heading">
                                                <p>
                                                    <label>Preview</label><br>
                                                    <span><i>Check How Tool looks</i></span>
                                                </p>
                                            </div>
                                            <div class="content-box">
                                                <div class="prview-image"><img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/preview/color-converter-preview.png' ?>" class="preview-img"></div>
                                            </div>
                                        </li>
                           
                            </form>
                        </ul>                      
                    </div>
                </div>
                <div class="card" id="energyConverter" style="display:none;">
                    <div class="title">Energy Converter</div>
                    <div class="content-ace">
                        <ul>
                            <li>
                                <div class="label-heading">
                                    <p>
                                        <label>Shortcode</label><br>
                                        <span><i>Use this shortcode anywhere on website</i></span>
                                    </p>
                                </div>
                                <div class="content-box">
                                    <code>[ace-converter-tool tool=energy]</code>
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copy.png' ?>" class="tool-icon" id="copy">
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copying.png' ?>" class="tool-icon copied" style="display:none;">
                                </div>
                            </li>  
                            <form action="#energyMenuItem" method="POST" class="energy-convert">
                            <?php wp_nonce_field('my_delete_action'); ?>
                                    <?php $count_energy=1;
                                    foreach ($energy_converter_text as $key => $label): 
                                        if ($count_energy % 2 != 0){
                                        ?>
                                                <li>
                                                    <div class="label-heading">
                                                        <p>
                                                            <label for="<?php echo $key; ?>"><?php echo str_replace('-', ' ', ucfirst($key)); ?> Title</label><br>
                                                        </p>
                                                    </div>
                                                    <div class="content-box">
                                                        <input type="text" id="<?php echo $key; ?>-title" name="<?php echo $key; ?>" value="<?php echo $energy_converter_text[$key]; ?>">
                                                   
                                                <?php } else { ?>
                                                        <input type="checkbox" id="<?php echo $key; ?>" name="<?php echo $key; ?>" class="checkboxes" value=""<?php echo (!$energy_converter_text[$key] ? "checked" :'' ) ?>>
                                                        <label for="<?php echo $key; ?>" class="checkboxes"> Check to Hide </label>
                                                        
                                                    </div>
                                                </li> 
                                            
                                        <?php } ?>   
                                            
                                    <?php 
                                        $count_energy++;
                                    endforeach; 
                                    ?>
                                    <li>
                                       <input type="submit" name="energy-converter-submit" class="energy-converters" value="Save">
                                    </li>
                                    <li>
                                        <div class="label-heading">
                                            <p>
                                                <label>Preview</label><br>
                                                <span><i>Check How Tool looks</i></span>
                                            </p>
                                        </div>
                                        <div class="content-box">
                                            <div class="prview-image"><img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/preview/energy-converter-preview.png' ?>" class="preview-img"></div>
                                        </div>
                                    </li>

                            </form>
                        </ul>
                    </div>
                </div>
                <div class="card" id="speedConverter" style="display:none;">
                    <div class="title">Speed Converter</div>
                    <div class="content-ace">
                        <ul>
                            <form action="#speedMenuItem" method="POST" class="speed-convert">
                                 <?php wp_nonce_field('my_delete_action'); ?>
                                 <li>
                                        <div class="label-heading">
                                            <p>
                                                <label>Shortcode</label><br>
                                                <span><i>Use this shortcode anywhere on website</i></span>
                                            </p>
                                        </div>
                                        <div class="content-box">
                                            <code>[ace-converter-tool tool=speed]</code>
                                            <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copy.png' ?>" class="tool-icon" id="copy">
                                            <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copying.png' ?>" class="tool-icon copied" style="display:none;">
                                        </div>
                                    </li>   
                                
                                    <?php
                                    foreach ($speed_converter_text as $key => $label): ?>
                                            <li>
                                                <div class="label-heading">
                                                    <p>
                                                        <label for="<?php echo $key; ?>"><?php echo str_replace('-', ' ', ucfirst($key)); ?> </label><br>
                                                    </p>
                                                </div>
                                                <div class="content-box">
                                                    <input type="text" id="<?php echo $key; ?>-title" name="<?php echo $key; ?>" value="<?php echo $speed_converter_text[$key]; ?>">
                                                </div>
                                            </li>
                                    <?php endforeach; ?>
                                    <li>
                                        <input type="submit" name="speed-converter-submit" class="speed-converters" value="Save">
                                    </li>
                                    <li>
                                        <div class="label-heading">
                                            <p>
                                                <label>Preview</label><br>
                                                <span><i>Check How Tool looks</i></span>
                                            </p>
                                        </div>
                                        <div class="content-box">
                                            <div class="prview-image"><img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/preview/speed-converter-preview.png' ?>" class="preview-img"></div>
                                        </div>
                                    </li>
                                
                            </form>
                        </ul>  
                    </div>
                </div>
                <div class="card" id="pressureConverter" style="display:none;">
                    <div class="title">Pressure Converter</div>
                    <div class="content-ace">
                        <ul>
                            <li>
                                <div class="label-heading">
                                    <p>
                                        <label>Shortcode</label><br>
                                        <span><i>Use this shortcode anywhere on website</i></span>
                                    </p>
                                </div>
                                <div class="content-box">
                                    <code>[ace-converter-tool tool=pressure]</code>
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copy.png' ?>" class="tool-icon" id="copy">
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copying.png' ?>" class="tool-icon copied" style="display:none;">
                                </div>
                            </li> 
                            
                            <form action="#pressureMenuItem" method="POST" class="pressure-convert">
                                <?php wp_nonce_field('my_delete_action'); ?>

                                <?php  foreach ($pressure_converter_text as $key => $label): ?>
                                            <li>
                                                <div class="label-heading">
                                                    <p>
                                                        <label for="<?php echo $key; ?>"><?php echo str_replace('-', ' ', ucfirst($key)); ?> </label><br>
                                                    </p>
                                                </div>
                                                <div class="content-box">
                                                    <input type="text" id="<?php echo $key; ?>-title" name="<?php echo $key; ?>" value="<?php echo $pressure_converter_text[$key]; ?>">
                                                </div>
                                            </li>
                                    <?php endforeach; ?>
                                    <li>
                                       <input type="submit" name="pressure-converter-submit" class="pressure-converters" value="Save">
                                    </li>
                                    <li>
                                        <div class="label-heading">
                                            <p>
                                                <label>Preview</label><br>
                                                <span><i>Check How Tool looks</i></span>
                                            </p>
                                        </div>
                                        <div class="content-box">
                                            <div class="prview-image"><img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/preview/pressure-converter-preview.png' ?>" class="preview-img"></div>
                                        </div>
                                    </li>
                                    
                            </form>
                        </ul>   
                    </div>
                </div>
                <div class="card" id="dmsConverter" style="display:none;">
                    <div class="title">DMS Converter</div>
                    <div class="content-ace">
                        <ul>
                            <li>
                                <div class="label-heading">
                                    <p>
                                        <label>Shortcode</label><br>
                                        <span><i>Use this shortcode anywhere on website</i></span>
                                    </p>
                                </div>
                               
                                <div class="content-box">
                                    <code>[ace-converter-tool tool=dms]</code>
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copy.png' ?>" class="tool-icon" id="copy">
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copying.png' ?>" class="tool-icon copied" style="display:none;">
                                </div>
                            </li> 
                            <form action="#dmsMenuItem" method="POST" id="myform"> 
                               <?php wp_nonce_field('my_delete_action'); ?>
                                <?php foreach ($dms_converter_text as $key => $label): ?>
                                            <li>
                                                <div class="label-heading">
                                                    <p>
                                                        <label for="<?php echo $key; ?>"><?php echo str_replace('-', ' ', ucfirst($key)); ?> Title</label><br>
                                                    </p>
                                                </div>
                                                <div class="content-box">
                                                    <input type="text" id="<?php echo $key; ?>-title" name="<?php echo $key; ?>" value="<?php echo $dms_converter_text[$key]; ?>">
                                                </div>
                                            </li>
                                    <?php endforeach; ?>   
                                    <li>
                                       <input type="submit" name="dms-converter-submit" class="input-submit" value="Save">
                                    </li>           
                                    <li>
                                        <div class="label-heading">
                                            <p>
                                                <label>Preview</label><br>
                                                <span><i>Check How Tool looks</i></span>
                                            </p>
                                        </div>
                                        <div class="content-box">
                                            <div class="prview-image"><img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/preview/dms-converter-preview.png' ?>" class="preview-img"></div>
                                        </div>
                                    </li>
                                   
                            </form>
                        </ul>  
                    </div>
                </div>
                <div class="card" id="chargeConverter" style="display:none;">
                    <div class="title">Charge Converter</div>
                    <div class="content-ace">
                        <ul>
                            <li>
                                <div class="label-heading">
                                    <p>
                                        <label>Shortcode</label><br>
                                        <span><i>Use this shortcode anywhere on website</i></span>
                                    </p>
                                </div>
                                <div class="content-box">
                                    <code>[ace-converter-tool tool=charge]</code>
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copy.png' ?>" class="tool-icon" id="copy">
                                    <img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/tools/copying.png' ?>" class="tool-icon copied" style="display:none;">
                                </div>
                            </li>  
                            <form action="#chargeMenuItem" method="POST" id="myform"> 
                            <?php wp_nonce_field('my_delete_action'); ?>
                                <?php
                            // print_r($charger_converter_text);
                                
                                foreach ($charger_converter_text as $key => $label): ?>
                                        <li>
                                            <div class="label-heading">
                                                <p>
                                                    <label for="<?php echo $key; ?>"><?php echo str_replace('-', ' ', ucfirst($key)); ?> Title</label><br>
                                                </p>
                                            </div>
                                            <div class="content-box">
                                                <input type="text" id="<?php echo $key; ?>-title" name="<?php echo $key; ?>" value="<?php echo $charger_converter_text[$key]; ?>">
                                            </div>
                                        </li>
                                <?php endforeach; ?>

                                <li>
                                    <input type="submit" name="charger-converter-submit" class="input-submit" value="Save">
                                </li>

                                <li>
                                    <div class="label-heading">
                                        <p>
                                            <label>Preview</label><br>
                                            <span><i>Check How Tool looks</i></span>
                                        </p>
                                    </div>
                                    <div class="content-box">
                                        <div class="prview-image"><img src="<?php echo plugin_dir_url( __FILE__ ) . 'images/preview/charge-converter-preview.png' ?>" class="preview-img"></div>
                                    </div>
                                </li>
                             
                            </form>
                        </ul>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>