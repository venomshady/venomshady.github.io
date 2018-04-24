document.write("BROWSER: ")
document.write(navigator.appName + "<br>")
document.write("BROWSERVERSION: ")
document.write(navigator.appVersion + "<br>")
document.write("CODE: ")
document.write(navigator.appCodeName + "<br>")
document.write("PLATFORM: ")
document.write(navigator.platform + "<br>")
document.write("SCREEN RESOLUTION: ")
document.write(screen.width + "*")
document.write(screen.height + "<br>")
document.write("AVAILABLE VIEW AREA: ")
document.write(window.screen.availWidth + "*")
document.write(window.screen.availHeight + "<br>")
document.write("COLOR DEPTH: ")
document.write(window.screen.colorDepth + "<br>")

var flash2Installed = false;    // boolean. true if flash 2 is installed
var flash3Installed = false;    // boolean. true if flash 3 is installed
var flash4Installed = false;    // boolean. true if flash 4 is installed
var flash5Installed = false;    // boolean. true if flash 5 is installed
var flash6Installed = false;    // boolean. true if flash 6 is installed
var flash7Installed = false;    // boolean. true if flash 7 is installed
var flash8Installed = false;    // boolean. true if flash 8 is installed
var flash9Installed = false;    // boolean. true if flash 9 is installed
var flash10Installed = false;    // boolean. true if flash 9 is installed
var maxVersion = 12;
var actualVersion = 0;          // version the user really has
var jsVersion = 1.0;            // the version of javascript supported

// Check the browser...we're looking for ie/win, but not aol
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;    // true if we're on ie
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false; // true if we're on windows

// This is a js1.1 code block, so make note that js1.1 is supported.
jsVersion = 1.1;


//document.write("Comcast flash_detection script loaded.<br>")

// Write vbscript detection on ie win. IE on Windows doesn't support regular
// JavaScript plugins array detection.
if(isIE && isWin) {
    document.write('<SCR' + 'IPT LANGUAGE="VBScript"\> \n');
    document.write('on error resume next \n');
    document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
    document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
    document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
    document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');
    document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');
    document.write('flash7Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))) \n');
    document.write('flash8Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.8"))) \n');
   // document.write('flash85Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.8.5"))) \n');
    document.write('flash9Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.9"))) \n');
	document.write('flash10Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.10"))) \n');
    document.write('<\/SCR' + 'IPT\> \n'); // break up end tag so it doesn't end our script
}


function detectFlash() {
    // If navigator.plugins exists...
    if (navigator.plugins) {
        // ...then check for flash 2 or flash 3+.
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
          var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
          var flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description;
          var flashVersion = parseInt(flashDescription.substring(16));

          flash2Installed = flashVersion == 2;
          flash3Installed = flashVersion == 3;
          flash4Installed = flashVersion == 4;
          flash5Installed = flashVersion == 5;
          flash6Installed = flashVersion == 6;
          flash7Installed = flashVersion == 7;
          flash8Installed = flashVersion == 8;
         // flash85Installed = (flashVersion == 8) && (parseInt(flashDescription.substring(18)) == 5);
          flash9Installed = flashVersion >= 9;
		   flash9Installed = flashVersion >= 10;
        }
    }
    
    if (flash10Installed) actualVersion = 10;
    //else if (flash85Installed) actualVersion = 8.5;
	    else if (flash9Installed) actualVersion = 9;
    else if (flash8Installed) actualVersion = 8;
    else if (flash7Installed) actualVersion = 7;
    else if (flash6Installed) actualVersion = 6;
    else if (flash5Installed) actualVersion = 5;
    else if (flash4Installed) actualVersion = 4;
    else if (flash3Installed) actualVersion = 3;
    else if (flash2Installed) actualVersion = 2;
		
   //document.write("<br><b>Flash Player Version (Detection 2) = " +actualVersion+"<b>"); 
    }

detectFlash();

if(isIE && isWin) {
if(flashVer != actualVersion){
document.write("<br> <font color='#FF0000'><b>ERROR: JavaScript/VBScript detection inconsistency </b></font>");
}
}
