function translateFaction(faction) {
	switch(faction) {
		case "FC_GRINEER":
			return "Grineer";
		case "FC_CORPUS":
			return "Corpus";
		case "FC_INFESTATION":
			return "Infested";
		default:
			var res = faction.split("_");
			return res[res.length - 1];
	}
}

function translateModifier(modifier) {
	switch(modifier) {
		case "SORTIE_MODIFIER_HAZARD_COLD":
			return "Extreme Cold";
		case "SORTIE_MODIFIER_LOW_ENERGY":
			return "Energy Reduction";
		case "SORTIE_MODIFIER_IMPACT":
			return "Enemy Physical Enhancement (Impact)";
		case "SORTIE_MODIFIER_ARMOR":
			return "Enhanced Enemy Armor";
		case "SORTIE_MODIFIER_HAZARD_RADIATION":
			return "Radiation Hazard";
		case "SORTIE_MODIFIER_SLASH":
			return "Enemy Physical Enhancement (Slash)";
		case "SORTIE_MODIFIER_PUNCTURE":
			return "Enemy Physical Enhancement (Puncture)";
		case "SORTIE_MODIFIER_SHIELDS":
			return "Enhanced Enemy Shields";
		case "SORTIE_MODIFIER_BOW_ONLY":
			return "Bow Only";
		case "SORTIE_MODIFIER_EXIMUS":
			return "Eximus Stronghold";
		case "SORTIE_MODIFIER_FREEZE":
			return "Enemy Elemental Enhancement (Cold)";
		case "SORTIE_MODIFIER_VIRAL":
			return "Enemy Elemental Enhancement (Viral)";
		case "SORTIE_MODIFIER_MELEE_ONLY":
			return "Melee Only";
		case "SORTIE_MODIFIER_POISON":
			return "Enemy Elemental Enhancement (Toxin)";
		case "SORTIE_MODIFIER_RADIATION":
			return "Enemy Elemental Enhancement (Radiation)";
		case "SORTIE_MODIFIER_HAZARD_FIRE":
			return "Fire Hazard";
		case "SORTIE_MODIFIER_SNIPER_ONLY":
			return "Sniper Only";
		case "SORTIE_MODIFIER_ELECTRICITY":
			return "Enemy Elemental Enhancement (Electric)";
		case "SORTIE_MODIFIER_SECONDARY_ONLY":
			return "Secondary Only";
		case "SORTIE_MODIFIER_RIFLE_ONLY":
			return "Rifle Only";
		case "SORTIE_MODIFIER_EXPLOSION":
			return "Enemy Elemental Enhancement (Blast)";
		case "SORTIE_MODIFIER_SHOTGUN_ONLY":
			return "Shotgun Only";
		case "SORTIE_MODIFIER_HAZARD_FOG":
			return "Dense Fog";
		case "SORTIE_MODIFIER_CORROSIVE":
			return "Enemy Elemental Enhancement (Corrosive)";
		default:
			return modifier;
	}
}

function translateBoss(boss) {
	switch(boss) {
		case "SORTIE_BOSS_ALAD":
			return "Alad V";
		case "SORTIE_BOSS_VOR":
			return "Vor";
		case "SORTIE_BOSS_PHORID":
			return "Phorid";
		case "SORTIE_BOSS_HYENA":
			return "Hyena Pack";
		case "SORTIE_BOSS_KELA":
			return "Kela";
		case "SORTIE_BOSS_JACKAL":
			return "Jackal";
		case "SORTIE_BOSS_INFALAD":
			return "Inf. Alad";
		case "SORTIE_BOSS_CORRUPTED_VOR":
			return "Corrupted Vor";
		case "SORTIE_BOSS_AMBULAS":
			return "Ambulas";
		case "SORTIE_BOSS_KRIL":
			return "Lech Kril";
		case "SORTIE_BOSS_RAPTOR":
			return "Raptor";
		case "SORTIE_BOSS_TYL":
			return "Tyl Regor";
		case "SORTIE_BOSS_NEF":
			return "Nef Anyo";
		case "SORTIE_BOSS_LEPHANTIS":
			return "Lephantis";
		default:
			return boss;
	}
}

function translateMissionType(type) {
	switch(type) {
		case "MT_RETRIEVAL":
			return "Hijack";
		case "MT_TERRITORY":
			return "Interception";
		case "MT_ASSASSINATION":
			return "Assassination";
		case "MT_SABOTAGE":
			return "Sabotage";
		case "MT_SURVIVAL":
			return "Survival";
		case "MT_CAPTURE":
			return "Capture";
		case "MT_DEFENSE":
			return "Defense";
		case "MT_INTEL":
			return "Spy";
		case "MT_MOBILE_DEFENSE":
			return "Mobile Defense";
		case "MT_EXTERMINATION":
			return "Exterminate";
		case "MT_HIVE":
			return "Hive";
		case "MT_EXCAVATE":
			return "Excavation";
		case "MT_RESCUE":
			return "Rescue";
		case "MT_ARTIFACT":
			return "Disruption";
		default:
			return type;
	}
}

function translateFissureTier(tier) {
	switch(tier) {
		case "VoidT1":
			return "Lith";
		case "VoidT2":
			return "Meso";
		case "VoidT3":
			return "Neo";
		case "VoidT4":
			return "Axi";
		default:
			return tier; // If we hit this, then they did something weird
	}
}

function translateNWChallenge(challenge) {
	switch(challenge) {
		// DAILY
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyCompleteMission": // 1
			return "Complete a Mission";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemies": // 200
			return "Kill 200 Enemies";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithPoison": // 150
			return "Kill 150 Enemies With Toxin";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithViral": // 150
			return "Kill 150 Enemies With Viral";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyPlayEmote": // 1
			return "Play 1 Emote";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyPlaceMarker": // 5
			return "Mark 5 Mods or Resources";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithSecondary": // 150
			return "Kill 150 Enemeis With Secondary";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithMelee": // 150
			return "Kill 150 Enemies With Melee";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithHeadshots": // 40
			return "Kill 40 Enemies With Headshots";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithRadiation": // 150
			return "Kill 150 Enemies With Radiation";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithPrimary": // 150
			return "Kill 150 Enemies With Primary";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithFinishers": // 10
			return "Kill 10 Enemies With Finishers";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithMagnetic": // 150
			return "Kill 150 Enemies With Magnetic";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithAbilities": //150
			return "Kill 150 Enemies With Abilities";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyDeployGlyph": // 1
			return "Deploy a Glyph while in a mission";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyCodexScan": // 25
			return "Scan 25 Objects or Enemies";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyOpenLockers": // 20
			return "Open 20 Lockers";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithBlast": // 150
			return "Kill 150 Enemies With Blast";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithCorrosive": // 150
			return "Kill 150 Enemies With Corrosive";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailySolveCiphers": // 8
			return "Hack 8 Consoles";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithFreeze": // 150
			return "Kill 150 Enemies With Cold";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyCollectCredits":
			return "Pick up 15000 Credits";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyBulletJump":
			return "Bullet Jump 150 Times";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithGas":
			return "Kill 150 Enemies with Gas";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyPickUpMods":
			return "Pick Up 8 Mods";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithElectricity":
			return "Kill 150 Enemies With Electricity";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyPickUpEnergy":
			return "Pick up 20 Energy Orbs";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyKillEnemiesWithFire":
			return "Kill 150 Enemies With Heat";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailyAimGlide":
			return "Kill 20 Enemies while Aim Gliding";
		case "/Lotus/Types/Challenges/Seasons/Daily/SeasonDailySlideKills":
			return "Kill 20 Enemies while Sliding";
			
		// WEEKLY
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteSpy": // 3
			return "Complete 3 Spy Missions";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteRescue": // 3
			return "Complete 3 Rescue Missions";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteExterminate": // 3
			return "Complete 3 Exterminate Missions";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteMobileDefense": // 3
			return "Complete 3 Mobile Defense Missions";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyUseForma": // 3
			return "Use Forma 3 Times";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCatchRarePlainsFish": // 6
			return "Catch 6 Rare Fish in the Plains of Eidolon";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyGildModular": // 1
			return "Gild 1 Modular Items";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklySabotageCaches": // 3
			return "Find all caches in 3 Sabotage missions";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteNightmareMissions": // 3
			return "Complete 3 Nightmare missions of any type";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklySimarisScan": // 5
			return "Complete 5 Scans for Cephalon Simaris";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklySanctuaryOnslaught":
			return "Complete 3 Waves of Sanctuary Onslaught";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteSyndicateMissions": // 10
			return "Complete 10 Syndicate missions";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteSortie": // 1
			return "Complete 1 Sorties";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyUnlockDragonVaults": // 4
			return "Unlock 4 Orokin Derelict Vaults";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyPlainsBounties": // 8
			return "Complete 5 different Bounties in the Plains of Eidolon";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteAssassination": // 3
			return "Complete 3 Assassination Missions";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyKillEnemies": // 500
			return "Kill 500 Enemies";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteInvasionMissions": // 9
			return "Complete 9 Invasion missions of any type";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCatchRareVenusFish": // 6
			return "Catch 6 Rare Servofish in the Orb Vallis";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteCapture": // 3
			return "Complete 3 Capture Missions";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyMineRareVenusResources": // 6
			return "Mine 6 Rare Gems or Ores in the Orb Vallis";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyPickUpRareMods": // 8
			return "Pick up 8 Rare Mods";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteTreasures": // 3
			return "Fully socket 3 Ayatan Sculptures";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteSabotage": // 3
			return "Complete 3 Sabotage Missions";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyVenusBounties": // ?
			return "Complete 8 bounties in the Orb Vallis";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyKillEximus": //
			return "Kill 30 Eximus";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyUnlockRelics": //
			return "Unlock 3 Relics";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyMineRarePlainsResources":
			return "Mine 6 Rare Gems or Ore in the Plains of Eidolon";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyPerfectAnimalCapture":
			return "Complete 10 Perfect Animal captures in Orb Vallis";
		case "/Lotus/Types/Challenges/Seasons/Weekly/SeasonWeeklyCompleteClemMission":
			return "Help Clem with his weekly mission";
			
		// WEEKLY - ELITE
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardFriendsProfitTaker": // 1
			return "Kill Profit-Taker while playing with a friend or clanmate";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardKillEnemies": // 1500
			return "Kill 1500 Enemies";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardUnlockRelics": // 10
			return "Unlock 10 Relics";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardKillSilverGroveSpecters": // 3
			return "Kill 3 Silver Grove Specters";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardFriendsDefense": // 1
			return "Complete a Defense mission reaching at least wave 40, with a friend or clanmate";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardIndexWinStreak": // 3
			return "Win 3 Wagers in a row without letting the enemy score in one match of The Index";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardKillEximus": // 100
			return "Kill 100 Eximus";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardCompleteNightmareMissions": // 10
			return "Complete 10 Nightmare missions of any type";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardLuaPuzzles": // 4
			return "Complete 4 Halls of Ascension on Lua";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardEliteSanctuaryOnslaught": // 3
			return "Complete 3 rounds of Elite Sancutary Onslaught";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardCompleteSortie": // 3
			return "Complete 3 Sorties";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardKuvaSurvivalNoCapsules":
			return "Survive for over 60 minutes without using Life Support Capsules in Kuva Survival";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardFriendsSurvival":
			return "Complete a Survival mission reaching at least 60 minutes, while playing with a friend or clanmate";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardExterminateNoAlarm":
			return "Complete an Extermination misison with level 30 or higher enemies without being detected";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardFriendsSortie":
			return "Complete a Sortie while playing with a friend or clanmate";
		case "/Lotus/Types/Challenges/Seasons/WeeklyHard/SeasonWeeklyHardKillOrCaptureRainalyst":
			return "Kill or capture an Eidolon Hydrolyst";
			
		default:
			return challenge;
	}
}

