<?php

	$manifest = array(
		'acceptable_sugar_flavors' => array (),
		'acceptable_sugar_versions' => array ('regex_matches' => array (0 => "10\.*\.*",),),
		'is_uninstallable' => true,
		'name' => 'sq-data-account-v1',
		'description' => 'Resumen de información de la cuenta',
		'author' => 'Saul Sandoval',
		'published_date' => '2020-10-13',
		'version' => 'v1.0.0',
		'type' => 'module',
		'icon' => ''
	);

	$installdefs = array(
		'id'=> 'Inbox25',
		'copy'=> array(
				array('from' => '<basepath>/scripts/modules/Accounts/clients/base/views/record/record.hbs','to'   => 'custom/modules/Accounts/clients/base/views/record/record.hbs',),
				array('from' => '<basepath>/scripts/modules/Accounts/clients/base/views/record/record.js','to'   => 'custom/modules/Accounts/clients/base/views/record/record.js',),
		),
		'custom_fields' => array (),
		'logic_hooks'	=> array(),
	);
?>