<?php

$emphs = json_encode($_POST['emphs']);
$headings = json_encode($_POST['headings']);
$subHeadings = json_encode($_POST['subHeadings']);
$paras = json_encode($_POST['paras']);

$path1= "../pages/pageSubHeaders.js";
$path2= "../pages/pageParas.js";
$path3= "../pages/pageHeaders.js";
$path4= "../pages/pageEmphs.js";

$name1= "subHeadings";
$name2= "pageParas";
$name3= "pageHeadings";
$name4= "pageEmphs";

makeScript($subHeadings,$path1,$name1);
makeScript($paras,$path2,$name2);
makeScript($headings,$path3,$name3);
makeScript($emphs,$path4,$name4);


function makeScript($x,$p,$n){
    if(!file_exists("../pages")){
      mkdir("../pages", 0777, true);
    };   
      fopen($p,"w");
      file_put_contents($p,"let ".$n."=".$x.";");
  }











?>