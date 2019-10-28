var worldStateURL = "updateMobileExport.php?file=yes";
var me;
var meget = $.getJSON(worldStateURL, function(data) { me = data; });

function getNewContents() {
	meget = $.getJSON(worldStateURL, function(data) { me = data; });
}

function loadImages() {
	var div = $("#mobile-export-imgs")[0];
	var weapons = [];
	var frames = [];
	var abilities = [];
	var grineer = [];
	var corpus = [];
	var infested = [];
	var orokin = [];
	var other = [];
	var mods = [];

	$(me.Manifest).each(function(k, v) {
		if(v.uniqueName.startsWith("/Lotus/Weapons")) {
			weapons.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Types/Sentinels/SentinelWeapons/")) {
			weapons.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Upgrades/Mods")) {
			mods.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Types/Sentinels/SentinelPrecepts/")) {
			mods.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Types/Friendly/Pets/KubrowPetPrecepts/")) {
			mods.push(v);
		} else if(~v.uniqueName.indexOf("AugmentCard")) {
			mods.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Powersuits/Archwing/ArchwingAbilities")) {
			abilities.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Powersuits/PowersuitAbilities/")) {
			abilities.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Types/Enemies/Corpus")) {
			corpus.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Types/Enemies/CorpusChampions")) {
			corpus.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Types/Enemies/Grineer")) {
			grineer.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Types/Enemies/Infested")) {
			infested.push(v);
		} else if(v.uniqueName.startsWith("/Lotus/Types/Enemies/Orokin/")) {
			orokin.push(v);
		} else {
			other.push(v);
		}
	});
	
	addHeader("Uncategorized Images");
	showImages(other);
	
	addHeader("Weapon Related Images");
	showImages(weapons);
	
	addHeader("Ability Related Images");
	showImages(abilities);
	
	addHeader("Mod Related Images");
	showImages(mods);
	
	addHeader("Grineer Related Images");
	showImages(grineer);
	
	addHeader("Corpus Related Images");
	showImages(corpus);

	addHeader("Infested Related Images");
	showImages(infested);
	
	addHeader("Orokin Related Images");
	showImages(orokin);
}

function addHeader(text) {
	$("#mobile-export-imgs").append("<h3 style=\"clear: both;\">" + text + "</h3>");
}

function showImages(arr) {
	$(arr).each(function(k, v) {
		$("#mobile-export-imgs").append("<img title=\"" + v.uniqueName + "\" style=\"float: left; display: inline-block; width: 150px; height: 100px;\" src=\"http://content.warframe.com/MobileExport/" + v.textureLocation + "\">");
	});
}