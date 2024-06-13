---
title: Find same patterns
date: 2024-02-26 22:43:18
tags: [game]
categories: [game]
---
2403021056更新版本
注：已知问题:关闭各窗口后0-5秒后才完全关闭，在此期间窗口覆盖部分可能暂时无法点击
设置可以调卡牌正面显示时间与难度；切换难度自动重新开始游戏。
<script type="text/javascript">
function SetCwinHeight(){
  var iframeid = document.getElementById("iframeid"); //iframe id
  if (document.getElementById) {
    if (iframeid && !window.opera) {
      if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight) {
        iframeid.height = iframeid.contentDocument.body.offsetHeight + 50;
      } else if (iframeid.Document && iframeid.Document.body.scrollHeight) {
        iframeid.height = iframeid.Document.body.scrollHeight + 50;
      }
    }
  }
}
</script>

<iframe width="100%" id="iframeid" onload="Javascript:SetCwinHeight()" scrolling=yes height="1300" frameborder="0" src=".\Find_same_patterns.html"></iframe>
