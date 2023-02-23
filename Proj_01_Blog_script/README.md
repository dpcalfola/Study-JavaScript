# proj_01 Blog script

## Introduction
* Trying to control Tstory blog with js script


### 1. Hide line-through tags(`<s>`) in blog ==> __Half Success__

1.1 How to use
* In skin Editor
  * Upload 'strike_through.js' to Tstory blog
  * Add `<script src="strike_through.js"></script>` to the end of the `<head>` tag in the blog's html code
  * Insert style.css code to the blog's CSS code
* In the blog post
    * Enter HTML mode
    * Insert post.html button code
  
1.2 Problem
* If I try to modify the post (Press 수정 button), button attribute of onclick=... is deleted
* So Every time I modify the post, I have to add onclick=... attribute again

  