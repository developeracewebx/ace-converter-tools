<?php wp_enqueue_script( $this->plugin_name."-color", acePluginBaseURL() . 'public/js/tool-charge.js', array( 'jquery' ), $this->version, false );  ?>
<?php $charger =get_option("charger-converter"); 
$f=0;
if (!function_exists('convertToTitleCase')) {
        function convertToTitleCase($inputString) {
        $words = explode('-', $inputString);
        $capitalizedWords = array_map(function ($word) {
                return ucfirst($word);
            }, $words);
            $camelCaseString = implode('', $capitalizedWords);
            return $camelCaseString;
        }
}
?>
<div class="tool-container">
    <!-- all charger unit -->
    <?php foreach ($charger as $key => $label): ?>
    <div class="field-wrapper">
        <label for="<?php echo $key ; ?>"><?php echo $label  ?></label>
        <input class="form-control" type="number" name="<?php echo str_replace("-", "_",$key) ; ?>" id="<?php echo str_replace("-", "_",$key) ; ?>" value="">
        <button class="btn btn-danger" <?php if($f==0){ echo "id='f-convert'"; $f=1;}   ?> onclick="ConvertFrom<?php echo convertToTitleCase($key); ?>()">Convert</button>
    </div>
    <?php endforeach; ?>
  
     

    <div class="field-wrapper end">
        <button class="btn btn-danger" onclick="reset()">Reset</button>
    </div>
</div>
