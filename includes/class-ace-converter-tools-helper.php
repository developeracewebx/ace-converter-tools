<?php
if( ! function_exists('pr') ){

    function pr( $arr, $die = false ){
        echo "<pre>";
        print_r($arr);
        echo "</pre>";
        if( $die ) wp_die();
    }
}

if( ! function_exists('acePluginBaseURL') ){

    function acePluginBaseURL(){
        return plugins_url( '/', __DIR__ );
    }

}