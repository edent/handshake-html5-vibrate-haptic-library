# HandShake

Handshake is a Haptic Effects Library which uses HTML5's Vibrate API.

We encourage you to submit interesting and useful vibration patterns as pull requests.

The vibrate API works by defining how long the phone or tablet's vibration motor is on or off.

`navigator.vibrate([200, 100, 500]);` means vibrate for 200ms, pause for 100ms, vibrate for 500ms.

For example

```
function countdown()	//	A 3 second countdown timer, suitable for a racing game.
{
	//                 3       2       1       Go!
	navigator.vibrate([300,700,300,700,300,700,1000]);
}
```
