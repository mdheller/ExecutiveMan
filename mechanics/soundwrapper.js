createjs.Sound.registerSound("sounds/jumpland.wav", "jumpland");
createjs.Sound.registerSound("sounds/shotbounce.wav", "shotbounce");
createjs.Sound.registerSound("sounds/pauseopen.wav", "pauseopen");
createjs.Sound.registerSound("sounds/pauseclose.wav", "pauseclose");
createjs.Sound.registerSound("sounds/playerdamaged.wav", "playerdamaged");
createjs.Sound.registerSound("sounds/shoot.wav", "shoot");
createjs.Sound.registerSound("sounds/shotexplode.wav", "shotexplode");
createjs.Sound.registerSound("sounds/shotexplode.wav", "shotexplode");
createjs.Sound.registerSound("sounds/error.wav", "error");
createjs.Sound.registerSound("sounds/papershot.wav", "papershot");
createjs.Sound.registerSound("sounds/health.wav", "health");
createjs.Sound.registerSound("sounds/death.wav", "death");
createjs.Sound.registerSound("sounds/extralife.wav", "extralife");

createjs.Sound.registerSound("sounds/warehousemanshoot.wav", "warehousemanshoot");
createjs.Sound.registerSound("sounds/warehousemanshothit.wav", "warehousemanshothit");
createjs.Sound.registerSound("sounds/warehousemanshothitsmall.wav", "warehousemanshothitsmall");

createjs.Sound.registerSound("songs/intro.mp3", "intro");
createjs.Sound.registerSound("songs/title.mp3", "title");
createjs.Sound.registerSound("songs/wasteman.mp3", "wastemansong");
createjs.Sound.registerSound("songs/accountingman.mp3", "accountingmansong");
createjs.Sound.registerSound("songs/warehouseman.mp3", "warehousemansong");
createjs.Sound.registerSound("songs/materialman.mp3", "materialmansong");
createjs.Sound.registerSound("songs/visionaryman.mp3", "visionarymansong");

loader.installPlugin(createjs.SoundJS);

function playSound(sound) {
	if (soundOff) { return; }
    var fx = createjs.Sound.play(sound);
    fx.volume = 0.25;
}

function playSoundTwice(sound) {
	if (soundOff) { return; }
	var loop = createjs.Sound.play(sound, {loop:1});
	loop.volume = 0.25;
}

function playSoundLoop(sound) {
	if (musicOff || soundOff) { return; }

	var loop = createjs.Sound.play(sound, {loop:-1});
	loop.volume = 0.15;
}

function stopMusic() {
	createjs.Sound.stop();
}

(function() {
	if (getParameterByName("soundoff") === "true") {
		musicOff = true;
		soundOff = true;
	}

	if (getParameterByName("musicoff") === "true") {
		musicOff = true;
	}
})();