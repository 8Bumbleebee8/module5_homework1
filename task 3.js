<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2022 by anonymous (http://jsbin.com/tedufuzuni/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
function reverseString(str) {
  console.log("" + str);
  let arr;
  arr = str.split("");
  console.log("");
  console.log(arr);
  arr.reverse();
  console.log("");
  console.log(arr);
  let neWstr;
  neWstr = arr.join("");
  console.log("");
  console.log(neWstr);
  return str;
}

reverseString("Hello");
</script>
</body>
</html>