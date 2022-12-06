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
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let count = 0;
for(let i=0; i<arr.length; i++){
if(arr[i]%2== 0){count++;}
}
for(let i=0; i<arr.length; i++){
    if(arr[i]%2!= 0){count++;}
}
console.log("" + count)
</script>
</body>
</html>