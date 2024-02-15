<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://acewebx.com
 * @since      1.0.0
 *
 * @package    Ace_Converter_Tools
 * @subpackage Ace_Converter_Tools/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Ace_Converter_Tools
 * @subpackage Ace_Converter_Tools/admin
 * @author     AceWebx Team <developer@acewebx.com>
 */
class Ace_Converter_Tools_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Ace_Converter_Tools_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Ace_Converter_Tools_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/ace-converter-tools-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Ace_Converter_Tools_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Ace_Converter_Tools_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/ace-converter-tools-admin.js', array( 'jquery' ), $this->version, false );

	}

	// Add sub menu for setting and start scraping 
	public function aceAdminMenuHandler(){
		
		add_menu_page( 
			__( 'Ace Converter Tools', 'ace-converter-tools' ), // Page Title
			__( 'Ace Tools', 'ace-converter-tools' ), // Menu Title
			'manage_options', // Accessibility
			'ace-converter-tools', // Pags Slug
			[$this,'aceConverterToolsSettingsCallback'], // Callback Function
			'dashicons-admin-tools', // Menu Icon
			40 // Menu Order
		);

	}

	public function aceConverterToolsSettingsCallback(){
		
		if( isset( $_POST ) ){
			$retrieved_nonce = isset($_REQUEST['_wpnonce']) ? sanitize_key($_REQUEST['_wpnonce']) : '';

			if (!wp_verify_nonce($retrieved_nonce, 'delete_my_action' ) )
			$dms_converter_text = get_option("dms-converter");
			$energy_converter_text = get_option("energy-converter");
			$color_converter_text = get_option("color-converter");
			$speed_converter_text = get_option("speed-converter");
			$pressure_converter_text = get_option("pressure-converter");
			$charger_converter_text = get_option("charger-converter");
		
		}
		//DMS converter
		$retrieved_nonce = isset($_REQUEST['_wpnonce']) ? sanitize_key($_REQUEST['_wpnonce']) : '';

	 if (!wp_verify_nonce($retrieved_nonce, 'delete_my_action' ) ){
		if (isset(($_POST['dms-converter-submit']))){
			$arr_dms=array();
			foreach ($dms_converter_text as $key => $label) $arr_dms[$key] = $_POST[$key];
			update_option("dms-converter", $arr_dms);
		}

		//energy
		if (isset($_POST['energy-converter-submit'])){
			$arr_energy=array();
			$c=1;
			foreach ($energy_converter_text as $key => $label){
				if ($c % 2 != 0) {
					$energy_point = $_POST[$key];
				}else{
					$e = false;
					if (!isset($_POST[$key])) $e = true;
				}

				$arr_energy[$key] = $e;
				if($c % 2 != 0) {
					$arr_energy[$key]=$energy_point;
				}
				$c++;
			}
			update_option("energy-converter", $arr_energy);
		}

		//color
		if (isset($_POST['color-converter-submit'])){
			$arr_color = array();
			foreach ($color_converter_text as $key => $label) $arr_color[$key] = $_POST[$key];
			update_option("color-converter", $arr_color);
		}

		//speed-convert
		if (isset($_POST['speed-converter-submit'])){
			$arr_speed = array();
			foreach ($speed_converter_text as $key => $label) $arr_speed[$key] = $_POST[$key];
			update_option("speed-converter", $arr_speed);
		}

		//pressure 
		if (isset($_POST['pressure-converter-submit'])){
			$arr_pressure = array();
			foreach ($pressure_converter_text as $key => $label) $arr_pressure[$key] = $_POST[$key];
			update_option("pressure-converter", $arr_pressure);
		}

		// charger  charger-converter-submit
		if (isset($_POST['charger-converter-submit'])){
			$arr_energy = array();
			foreach ($charger_converter_text as $key => $label) $arr_charger[$key] = $_POST[$key];
			update_option("charger-converter", $arr_charger);
		}
	}
		include( plugin_dir_path( __FILE__ ) . 'partials/ace-converter-tools-admin-display.php');
	}

}
