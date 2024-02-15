<?php wp_enqueue_script( $this->plugin_name."-color", acePluginBaseURL() . 'public/js/tool-dms.js', array( 'jquery' ), $this->version, false );  ?>
<?php  $dms_converter_text=get_option("dms-converter");    ?>
<div class="outer">
    <div class="box1">
        <h5><?php echo $dms_converter_text['decimal-degrees'];?></h5> 
        <div class="field-wrapper">
            <div class="lati">                   
                <label for="LatVal1"><?php echo $dms_converter_text['box-one-latitude'];?></label>
                <input type="number" class="form-control" id="LatVal1" value="40.689247" required>
            </div>
            <div class="logi">
                <label for="finalVal1"><?php echo $dms_converter_text['box-one-longitude'];?></label>            
                <input type="number" class="form-control" id="LongVal1" value="-74.044502" required>                
            </div>
            <div class="right-btns">
                <button id="reset1">Reset</button>
                <button id="transfertoDeg" class="arrow-btn">>>></button>
            </div>
        </div>
    </div>
    <div class="box2">
        <h5><?php echo $dms_converter_text['dms-converter-box2-title'];?></h5>
        <div class="field-wrapper">
            <table cellpadding="2" cellspacing="0" id="table-dgree" border="0">
           <?php $degrees = $dms_converter_text['degrees-minutes-seconds'] ; 
           function dmsToArray($coordinate) {
            // Split the input string into degrees, minutes, and seconds
            $parts = explode('/', $coordinate);
        
            // Return a numeric indexed array with all values as strings
            return [
                (string) $parts[0],
                (string) $parts[1],
                (string) $parts[2],
            ];
        }
        
        // Example usage
      
        $degress = dmsToArray($degrees);
        
        // Print the result
        
        
      
           
           ?>
                <tbody>

                    <tr>
                        <th></th>
                        
                        <th> <?php echo $dms_converter_text['degrees'];?></th>
                        <th> <?php echo $dms_converter_text['minutes'];?></th>
                        <th> <?php echo $dms_converter_text['seconds'];?></th>
                        <th></th>                    
                    </tr>
                    <tr>
                        <td><?php echo $dms_converter_text['box-two-latitude'];?></td>
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
                        <td><?php echo $dms_converter_text['box-two-longitude'];?></td>
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
            <button id="transfertoDecimal" class="arrow-btn"><<<</button>
            <button id="reset2">Reset</button>
        </div>
    </div>
</div>


