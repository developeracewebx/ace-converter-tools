<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://acewebx.com
 * @since      1.0.0
 *
 * @package    Ace_Converter_Tools
 * @subpackage Ace_Converter_Tools/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Ace_Converter_Tools
 * @subpackage Ace_Converter_Tools/public
 * @author      AceWebx Team <developer@acewebx.com>
 */
class Ace_Converter_Tools_Public {

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
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
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

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/ace-converter-tools-public.css', array(), time(), 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
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

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/ace-converter-tools-public.js', array( 'jquery' ), $this->version, false );
		
		// Tool Scripts
		// wp_enqueue_script( $this->plugin_name."-color", plugin_dir_url( __FILE__ ) . 'js/tool-color.js', array( 'jquery' ), $this->version, false );

	}

	public function aceOnReadyHandler(){
		add_shortcode('ace-converter-tool', [$this, 'aceShortCodeCallback']);
	}

	public function aceShortCodeCallback( $atts ){
		
		$shortcodeAtts = shortcode_atts( array(
			'tool' => 'color'
		), $atts );

		$file = plugin_dir_path( __FILE__ ) . "partials/shortcode/" . $shortcodeAtts['tool'] . ".php";
		if( ! file_exists($file) ) $file = plugin_dir_path( __FILE__ ) . "partials/shortcode/color.php";

		ob_start();
			include( $file );
		return ob_get_clean();
	}

}
