/*
 * cookiemanager.js v1.0
 *
 * Copyright (c) 2016 Steffen U Scharmacher (NIU Founders Memorial Library)
 *
 * A collection of javascript functions that simplies creating, retrieving and changing cookies.
 *
 */

function setCookie(cname, cvalue, exdays) {
  //var d = new Date();
  //d.setTime(d.getTime() + (exdays*24*60*60*1000));
  //var expires = "expires=" + d.toGMTString();
  var expires = "expires=0";
  var path = "path=/";
  var domain = "domain=.niu.edu";
  document.cookie =
    cname + "=" + cvalue + ";" + expires + ";" + domain + ";" + path;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
