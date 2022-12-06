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
const inputValue = prompt('Введите число')
const value = +inputValue;
 
if(typeof value == "number" && !isNaN(value)){
  if(value == 0) {
    console.log('ноль')
  } else if (value % 2 == 0){
    console.log('чётное')
  } else {
    console.log('нечётное')
  }
} else {
  console.log('Упс, кажется, вы ошиблись')
}
</script>
</body>
</html>