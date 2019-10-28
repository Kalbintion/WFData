<?PHP
	if(isset($_GET['file'])) {
		echo file_get_contents("mobile_export.json");
	} else {
		$json_data = file_get_contents("http://content.warframe.com/MobileExport/Manifest/ExportManifest.json");
		if(isset($_GET['ret'])) {
			echo $json_data;
		}
		if(isset($_GET['ret']) && isset($_GET['only'])) {
			
		} else {
			file_put_contents("mobile_export.json", $json_data);
		}
	}
?>