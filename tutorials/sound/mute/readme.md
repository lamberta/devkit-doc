## Muting sounds

This file shows how mute sounds and effects

Import device to get the width of the screen, import the Sound class to play music and effects.
Import View and TextView to display elements.

~~~
import device as device;
import Sound as Sound;
import ui.View as View;
import ui.TextView as TextView;
~~~

Create a view which will call a mute callback when clicked:

~~~
var SoundView = Class(View, function(supr) {
    this.init = function(opts) {
        supr(this, "init", [opts]);

        this._callback = opts.callback;
        this._sound = opts.sound;

        this.muted = false;
    };

    this.onInputSelect = function() {
        this.muted = !this.muted;
~~~

Call the mute function

~~~
        this._callback(this.muted);
        this.updateOpts({backgroundColor: this.muted ? "#FF0000" : "#00FF00"});
        this.publish("Change");
    };
});
~~~

Create an application and set the default properties...

~~~
exports = Class(GC.Application, function () {

    this._settings = {
        logsEnabled: window.DEV_MODE,
        showFPS: window.DEV_MODE,
        clearEachFrame: true,
        alwaysRepaint: true,
        preload: []
    };

    this.initUI = function () {
        this._textView = new TextView({
            superview: this.view,
            color: "#FFFFFF"
        });
        this._paused = false;

        this._sound = new Sound({
            path: 'resources/audio/',
            files: {
~~~

This index is the name of the file,
the extension is depending on the system.
If you run this demo in Chromium the file
will be "resources/audio/background.ogg"
else the file will be "resources/audio/background.mp3"

~~~
                background: {
                    volume: 0.8,
                    loop: true,
                    background: true
                },
                sound1: {
                    volume: 0.5
                }
            }
        });
        this._sound.play("background", {loop: true});

        var w = device.width / 2;
        var func = ["setMusicMuted", "setEffectsMuted"];
        for (var i = 0; i < 2; i++) {
            new SoundView({
                superview: this.view,
                x: i * w + 10,
                y: 10,
                width: w - 20,
                height: 100,
                callback: bind(this._sound, func[i]),
                backgroundColor: "#00FF00",
                func: func[i]
            }).subscribe("Change", this, "onChangeMute");
        }

        this.onChangeMute();

        setInterval(bind(this._sound, "play", "sound1"), 1500);
    };

    this.onChangeMute = function() {
        var text = "Click the left view to mute the music,\n" +
                   "the right view to mute the effects\n";

        text += "Music is " + (this.view.getSubviews()[1].muted ? "" : "not ") + "muted\n";
        text += "Effects are " + (this.view.getSubviews()[2].muted ? "" : "not ") + "muted\n";

        this._textView.setText(text);
    };

    this.launchUI = function () {};
});
~~~