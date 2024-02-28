<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://acewebx.com
 * @since      1.0.0
 *
 * @package    Ace_Converter_Tools
 * @subpackage Ace_Converter_Tools/public/partials
 */


    $file = ACE_CONVERTER_TOOLS_PATH . "public/partials/shortcode/" . $shortCodeAtts['tool'] . ".php";
    if( ! file_exists($file) ) $file = ACE_CONVERTER_TOOLS_PATH . "public/partials/shortcode/color.php";

    include( $file );
