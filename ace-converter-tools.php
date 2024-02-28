<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://acewebx.com
 * @since             1.0.0
 * @package           Ace_Converter_Tools
 *
 * @wordpress-plugin
 * Plugin Name:       Ace Converter Tools
 * Plugin URI:        https://wordpress.org/plugins/ace-converter-tools
 * Description:       This plugin contain multiple converter tools, which can be access via simple shortcodes.
 * Version:           1.0.0
 * Author:            AceWebx Team
 * Author URI:        https://acewebx.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ace-converter-tools
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'ACE_CONVERTER_TOOLS_VERSION', '1.0.0' );
define( 'ACE_CONVERTER_TOOLS_URL', plugin_dir_url( __FILE__ ) );
define( 'ACE_CONVERTER_TOOLS_PATH', plugin_dir_path( __FILE__ ) );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-ace-converter-tools-activator.php
 */
if (!function_exists('acex_activate_ace_converter_tools')) {
	function acex_activate_ace_converter_tools() {
		require_once plugin_dir_path( __FILE__ ) . 'includes/class-ace-converter-tools-activator.php';
		Ace_Converter_Tools_Activator::activate();
	}
}
/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-ace-converter-tools-deactivator.php
 */
if (!function_exists('acex_deactivate_ace_converter_tools')) {
	function acex_deactivate_ace_converter_tools() {
		require_once plugin_dir_path( __FILE__ ) . 'includes/class-ace-converter-tools-deactivator.php';
		Ace_Converter_Tools_Deactivator::deactivate();
	}
}

register_activation_hook( __FILE__, 'acex_activate_ace_converter_tools' );
register_deactivation_hook( __FILE__, 'acex_deactivate_ace_converter_tools' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */

require plugin_dir_path( __FILE__ ) . 'includes/class-ace-converter-tools.php';
//require plugin_dir_path( __FILE__ ) . 'includes/class-ace-converter-tools-helper.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
if (!function_exists('acex_run_ace_converter_tools')) {
	function acex_run_ace_converter_tools() {

		$plugin = new Ace_Converter_Tools();
		$plugin->run();

	}
}
acex_run_ace_converter_tools();
