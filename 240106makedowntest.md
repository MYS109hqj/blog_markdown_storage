---
title: markdown语法练习测试
tags: [study]
categories: [major]
date: 2024-1-6 15:08:99
---
引用操作
>学习内容参考文章：<http://t.csdnimg.cn/hj0lV>
>数学公式部分参考文章：<https://zhuanlan.zhihu.com/p/138532124>

~~任务：1.用所学知识完成下面内容的博文的排版~~
（vscode表示：你用快捷键怎么能不经过我的同意？参考文章所说的快捷键适用于github的在线编辑器）
功能        快捷键
加粗        Ctrl+B
斜体        Ctrl+I 
引用        Ctrl+Q
插入链接    Ctrl+L
插入代码    Ctrl+K
插入图片    Ctrl+G
提升标题    Ctrl+H
有序列表    Ctrl+O
无序列表    Ctrl+U
横线        Ctrl+R
撤销        Ctrl+Z
重做        Ctrl+Y

斜体：  *test* _test_
粗体：  **test**
倾斜加粗：  ***test***
下划线：    ~~test~~

---

分级标题

#一级标题
##二级标题
###三级标题
####四级标题
#####五级标题
######六级标题

一级标题
===
二级标题
---

链接：
插入本地图片链接
![图片描述]()
hexo能够使用img标签，参数有src(链接地址)、alt(文本说明)、width height等属性
<img src="001.png" width="50%" hegiht="auto">

超链接就用html的a标签咯，可以连接文件如pdf，扔文件夹里，跟图片差不多
<a href="https://mys109hqj.github.io/">这是跳转到博客首页的链接</a>
[博客首页](https://mys109hqj.github.io/ "博客首页")

<video width="480" height="320" controls>
<source src="part01-02版修正.mp4">
</video>

播放音频示例：使用标签audio controls标识表示控制播放暂停
<audio controls>
  <source src="002.wav">
  您的浏览器不支持 audio 元素。
</audio>
<audio controls src="003.wav">您的浏览器不支持 audio 元素。</audio>

要注意的是，如果你用html格式写，必须要紧邻，不能隔行。否则hexo转html时会自动分段，导致标签出错。
html制作弹出框（使用javascript）
>参考CSDN文章<https://blog.csdn.net/qq_35727582/article/details/114868023>
<head>

  <style>
  /* 遮罩层 */
  #overlay {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    font-size: 16px;
    /* IE9以下不支持rgba模式 */
    background-color: rgba(0, 0, 0, 0.5);
    /* 兼容IE8及以下 */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7f000000,endColorstr=#7f000000);
    display: none;
  }
  /* 弹出框主体 */
  .popup {
    background-color: #ffffff;
    max-width: 400px;
    min-width: 200px;
    height: 240px;
    border-radius: 5px;
    margin: 100px auto;
    text-align: center;
  }
  /* 弹出框的标题 */
  .popup_title {
    height: 60px;
    line-height: 60px;
    border-bottom: solid 1px #cccccc;
  }
  /* 弹出框的内容 */
  .popup_content {
    height: 50px;
    line-height: 50px;
    padding: 15px 20px;
  }
  /* 弹出框的按钮栏 */
  .popup_btn {
    padding-bottom: 10px;
  }
  /* 弹出框的按钮 */
  .popup_btn button {
    color: #778899;
    width: 40%;
    height: 40px;
    cursor: pointer;
    border: solid 1px #cccccc;
    border-radius: 5px;
    margin: 5px 10px;
    color: #ffffff;
    background-color: #337ab7;
  }
  </style>
</head>
<body>
  <button id="showPopup" onclick="showPopup()">弹出</button>
  <div id="overlay">
    <div class="popup">
      <p class="popup_title">提示</p>
      <p class="popup_content">学会制作弹出框了吗？</p>
      <div class="popup_btn">
        <button class="cancelBtn" onclick="hidePopup()">取消</button>
        <button class="confirmBtn" onclick="hidePopup()">确认</button>
      </div>
    </div>
  </div>
<script>
  function showPopup(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  }
  function hidePopup(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
  </script>
</body>