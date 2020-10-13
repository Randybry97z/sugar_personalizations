<?php
require_once('modules/Administration/QuickRepairAndRebuild.php');
$repair = new RepairAndClear();
$repair->show_output = false;
$repair->module_list = array();
$repair->clearAdditionalCaches();
//	sugar_cache_reset_full();
?>