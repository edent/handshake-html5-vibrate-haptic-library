/*
*	Haptic Library. Originally from The Lab - Powered by O2
*	MIT License.
*
*	This library provides a set of vibration patterns suitable for various events.
*	The HTML Vibrate API only works on devices with a built in vibrator (usually phones and tablets).
*	navigator.vibrate() currently has limited support.
*	https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate
*/

/*
*	navigator.vibrate() takes an array of positive integers.
*	Each integer represents time in milliseconds.
*	Even elements in the array represent time when vibration occurs.
*	Odd elements in the array represent time when the vibration is paused.
*	navigator.vibrate([200, 100, 500]); means vibrate for 200ms, pause for 100ms, vibrate for 500ms.
*	There is no way to control the intensity of the vibration.
*	Full specification https://w3c.github.io/vibration/
*/

//	Set up the HTML5 Vibrate API using vendor prefixes
navigator.vibrate = navigator.vibrate ||
					navigator.webkitVibrate ||
					navigator.mozVibrate ||
					navigator.msVibrate;

//	A variety of vibration patterns

function sms() 	//	Vibrate with the old style Nokia pattern; ...--... (Morse code for SMS!)
{
	pause = 100;
	dot   = pause*2;
	dash  = dot*3;
	navigator.vibrate([dot, pause, dot, pause, dot,
		               pause*2, dash, pause, dash,
		               pause*2, dot, pause, dot, pause, dot]);
}

function heartBeat(repeat, speed)	//	Simulate a beating heart
{
	//	Set a default value
	repeat = repeat || 10;
	speed  = speed  || 400;

	//	Create the array of vibration patterns
	var pattern = [];

	//	Fill the array the specified number of times
	for (var i = 0; i < repeat ; i++)
	{
		pattern.push(10);
		pattern.push(20);
		pattern.push(240);
		pattern.push(40);
		pattern.push(240);
		pattern.push(40);
		pattern.push(10);
		pattern.push(speed);
	}

	//	Start vibrating
	navigator.vibrate(pattern);
}

function clunkClick()	//	Suitable for an "error" vibration.
{
	navigator.vibrate([40,80, 100]);
}

function lite(repeat)	//	A gentle vibration. We cannot set the intensity, this is a good compromise.
{
	//	Set a default value
	repeat = repeat || 10;

	//	Create the array of vibration patterns
	var pattern = [];

	//	Fill the array the specified number of times
	for (var i = 0; i < repeat; i++)
	{
		pattern.push(5);
		pattern.push(10);
	}

	//	Start vibrating
	navigator.vibrate(pattern);
}

function medium(repeat)	//	A medium vibration. We cannot set the intensity, this is a good compromise.
{
	//	Set a default value
	repeat = repeat || 10;

	//	Create the array of vibration patterns
	var pattern = [];

	//	Fill the array the specified number of times
	for (var i = 0; i < repeat; i++)
	{
		pattern.push(50);
		pattern.push(10);
	}

	//	Start vibrating
	navigator.vibrate(pattern);
}

function shaveAndAHairCut()	//	The popular tapping rhythm
{
	//                 Shave   &       a       hair    cut     two     bits!
	navigator.vibrate([100,200,100,100,100,100,200,200,100,600,200,225,200]);
}

function starWars()	//	Imperial March (Darth Vader's Theme) by John Williams
{
	navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]);
}

function waiting(repeat)	//	Suitable for indicating that the device is waiting.
{
	//	Set a default value
	repeat = repeat || 10;

	//	Create the array of vibration patterns
	var pattern = [];

	//	Fill the array the specified number of times
	for (var i = 0; i < repeat; i++)
	{
		pattern.push(50); pattern.push(100);
		pattern.push(50); pattern.push(100);
		pattern.push(50); pattern.push(1000);
	}

	//	Start vibrating
	navigator.vibrate(pattern);
}

function countdown()	//	A 3 second countdown timer, suitable for a racing game.
{
	//                 3       2       1       Go!
	navigator.vibrate([300,700,300,700,300,700,1000]);
}
