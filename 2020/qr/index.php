<?php
	if(isset($_GET['p'])) $page = $_GET['p'];
	if(isset($_GET['b'])) $brands = $_GET['b'];

	if($page) {
		if($page == 'main') header( "location: /quratedfashionshow2020" );
		else header( "location: /quratedfashionshow2020/look/?l=$page" );
		exit(0);
	}
	if($brands) {
		if ($brands != "main") {
			$arr_brands = array( "", "a2012", "akara", "amanah-intertrade", "ahuroj", "artty-groups", "baisri-creation", "bangkokcos", "bd-handicraft", "boontham", "bwild", "by-boon", "c-m-cotton", "capheny", "chaiyaphum-otop", "chokpaiboom", "compas", "creeper8", "fai-pluek-mai", "folkcharm", "happybirthday", "head-de", "impami", "jiratcha", "joe-house", "junior", "kanjigoods", "kh-editions", "khun-jack", "khwanta", "maligood", "marayat", "mata", "mue-bhukram", "nakamol", "naturel-project", "ndk-edu", "oriental-motifs", "oriental88", "p-p-p-creations", "passara", "patphapon", "paul-b-clothing", "phornthip", "podulan", "prasobkarn", "ring", "sabai-d", "simonssister", "skj", "suntree", "tai-fah-si-khram", "thai-batik", "thai-craftman", "thais-ecoleathers", "thanasin", "thanisorn-a", "the-best", "thongrew", "threesilp", "yano", "9mahaboom" );

			header( "location: /q_brand.html?b=$arr_brands[$brands]" );
		} else {
			header( "location: /" );
		}

		exit(0);
	}
?>