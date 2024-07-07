<?php
	if(isset($_GET['p'])) $page = $_GET['p'];
	if(isset($_GET['b'])) $brands = $_GET['b'];

	if($page) {
		if($page == 'main') header( "location: /quratedfashionshow2020" );
		else header( "location: /quratedfashionshow2020/look/?l=$page" );
		exit(0);
	}
	if($brands) {
		header( "location: /brand/?l=$brands" );
		exit(0);
	}
?>