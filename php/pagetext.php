<?php
//print_r ($_POST);

foreach ($_POST['headings'] as $key => $value) {
    echo $value."\n";
}





// if(!file_exists("posts")){
//     mkdir("posts", 0777, true);
//   }
//   if(!file_exists("posts/posts.js")){
//     fopen("posts/posts.js","w");
//     file_put_contents("posts/posts.js","var postData =[\n".$jsonData.",\n];");
//   }else{
  
//     $handle = fopen("posts/posts.js", "r+") or die("Unable to open file!");
//     fseek($handle,-4,SEEK_END);
//     fwrite($handle,",\r\n".$jsonData."\r\n];");
//     rewind($handle);
//     fclose($handle);
//   }










?>