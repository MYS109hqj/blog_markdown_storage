---
title: responder game 抢答游戏
date: 2024-02-14 19:18:57
tags: [game]
categories: [game]
img: "https://tse4-mm.cn.bing.net/th/id/OIP-C.aDihbste13nLpC3Ac_ffjgAAAA?rs=1&pid=ImgDetMain"
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .image-container {
            width: 240px; /* 设置图片容器宽度 */
            height: 320px; /* 设置图片容器高度 */
            overflow: hidden; /* 隐藏溢出部分 */
        }
        .image-container img {
            width: 240px; /* 设置图片宽度为容器宽度 */
            height: 320px; /* 设置图片高度为容器高度 */
            object-fit: fill; /* 填充满容器，不保持宽高比 */
            object-position: center; /* 图片居中 */
        }
          /* 遮罩层 */
  .overlay {
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
    max-width: 80%;
    min-width: 50%;
    height: auto;
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
    height: 80%;
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
  抢答游戏</br>
  注：点击每道题的音频开始计时，按下选项按钮停止计时；点击查看答案按钮后该题数据会汇总到最后的表格。</br>
  一旦按下按钮，即锁定答案，同时时间也会暂停，该组按钮也不能再次使用。请慎重选择按下按钮的时机。完成游戏后可以分享汇总表格。（实在误触，刷新后按钮会重置，做过的题点查看答案可以恢复记录；但你重做可能题目的记录就会重置）<button onclick="clearLocalStorage()">清除记录</button>清除记录按钮就是清除缓存从而清除时间记录</br>
    <p>游戏规则：
      这里有十一张有关恐怖游戏的海报，以及为它们作出的歌词，但是它们被弄混了。
      首先，你会看一段视频，接着回答八道题目。每一道题目都会三张备选的游戏海报，
      你必须找出所听到的歌词描述的那张海报。一旦你确定答案，立刻进行抢答，
      最快答对的玩家可以获得一分，累计分数最高的玩家获胜。
      但是请注意，对于特定的游戏海报，为其而作出的曲子未必只有一首。
      在此之前，我会展示主题为“恐怖游戏的冰山一角”的短片，
      它将介绍所有海报上的游戏。</p></br>
      短片及海报栏：</br>
<iframe src="//player.bilibili.com/player.html?aid=1051059492&bvid=BV1EH4y177DN&cid=1450590252&p=1" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"> </iframe>
            <table>
                <tr>
                    <td><img src="002Amnesia.jpg" alt="Amnesia" height="320" width="240"></td>
                    <td><img src="003FNAF02.jpg" alt="FNAF" height="320" width="240"> </td>
                    <td><img src="004Outlast.jpg" alt="Outlast" height="320px" width="240px"></td>
                    <td><img src="005the last of us.jpeg" alt="The Last Of Us" height="320" width="240"></td>
                </tr>
                <tr>
                    <td><img src="007bioshock.jpg" alt="Bioshock" height="320px" width="240px"></td>
                    <td><img src="008slient hill.jpg" alt="Slient Hill" height="320px" width="240px"></td>
                    <td><img src="009heavy rain.jpg" alt="Heavy Rain" height="320px" width="240px"></td>
                    <td><img src="010earth bound.jpg" alt="Earth Bound" height="320px" width="240px"></td>
                </tr>
                <tr>
                    <td><img src="011Majora's mask.jpg" alt="Majora's Mask" height="320px" width="240px"></td>
                    <td><img src="012UntilDawn.jpg" alt="UntilDawn" height="320px" width="240px"></td>
                    <td><img src="013dying light.jpg" alt="Dying Light" height="320px" width="240px"></td>
                    <td></td>
                </tr>
            </table>
    </br>
    Q1:
    <audio controls>
      <source src="012.wav">
      您的浏览器不支持 audio 元素。
    </audio></br>
    <table>
      <tr class="image-container">
        <td><img src="012UntilDawn.jpg" alt="" width="30%"></td>
        <td><img src="008slient hill.jpg" alt="" width="30%"></td>
        <td><img src="003FNAF02.jpg" alt="" width="30%"></td>
      </tr>
      <tr>
        <td><button class="Q1" onclick="selectOption('Q1', 'A')">A</button></td>
        <td><button class="Q1" onclick="selectOption('Q1', 'B')">B</button></td>
        <td><button class="Q1" onclick="selectOption('Q1', 'C')">C</button></td>
      </tr>
    </table>
    <button id="showPopup1" onclick="showPopup('popup1');showSelection('Q1')">查看答案1</button>
    </br>
    <div id="overlay1" class="overlay">
      <div id="popup1" class="popup">
        <p class="popup_title">歌词原文及答案</p>
        <p class="popup_content" align="left">
          <img src="012UntilDawn.jpg" alt="UntilDawn" align="right" width="30%">
        Story and atmosphere, 80s serial killer's reign,</br>
        College kids on a mountain, where dangers remain,</br></br>
        Survive or die trying, their fate intertwines,</br>
        On this vacation, terror creeps and confines.</br></br>
        Decisions weigh heavy, escape death's might,</br>
        Survival's uncertain, in the face of the night.</br></br>
        In this gripping tale, life hangs by a thread,</br>
        Until the dawn breaks, hope clings to their breath.</br></br>
        <div id="answerQ1"></div>
        <div>正确答案是：A</div>
        <div id="timerQ1"></div>
</p>
        <div class="popup_btn">
          <button class="confirmBtn" onclick="hidePopup('popup1')">确认</button>
        </div>
      </div>
    </div>
  </br>
    Q2:
    <audio controls>
      <source src="004.wav">
      您的浏览器不支持 audio 元素。
    </audio>
    <table>
      <tr  class="image-container">
        <td><img src="011Majora's mask.jpg" alt="" width="30%"></td>
        <td><img src="005the last of us.jpeg" alt="" width="30%"></td>
        <td><img src="004Outlast.jpg" alt="" width="30%"></td>
      </tr>
      <tr>
          <td><button class="Q2" onclick="selectOption('Q2', 'A')">A</button></td>
          <td><button class="Q2" onclick="selectOption('Q2', 'B')">B</button></td>
          <td><button class="Q2" onclick="selectOption('Q2', 'C')">C</button></td>
        </form>
      </tr>
    </table>
    </br>
    <div id="overlay2" class="overlay">
      <div id="popup2" class="popup">
        <p class="popup_title">歌词原文及答案</p>
        <p class="popup_content" align="left">
          <img src="004Outlast.jpg" alt="Outlast" align="right" width="30%">
          No way to fight, just helpless prey,</br>
          Facing the attacker, at the end of each day.</br></br>
          Investigate through pages, journal unfolds,</br>
          Mental hospital's secrets, stories untold,</br></br>
          Another journey, to find his lost wife,</br>
          Surviving the madness, an unyielding strife.</br></br>
          A new trial awaits, escape is the aim,</br>
          Outlast's sequel, a test of survival's flame.</br></br> 
          <div id="answerQ2"></div>
          <div>正确答案是：C</div>
          <div id="timerQ2"></div>
</p>
        <div class="popup_btn">
          <button class="confirmBtn" onclick="hidePopup('popup2')">确认</button>
        </div>
      </div>
    </div>
    <button id="showPopup2" onclick="showPopup('popup2');showSelection('Q2')">查看答案2</button>
</br>
Q3:
<audio controls>
  <source src="010.wav">
  您的浏览器不支持 audio 元素。
</audio></br>
<table>
  <tr class="image-container">
    <td><img src="013dying light.jpg" alt="" width="30%"></td>
    <td><img src="010earth bound.jpg" alt="" width="30%"></td>
    <td><img src="002Amnesia.jpg" alt="" width="30%"></td>
  </tr>
  <tr>
    <td><button class="Q3" onclick="selectOption('Q3', 'A')">A</button></td>
    <td><button class="Q3" onclick="selectOption('Q3', 'B')">B</button></td>
    <td><button class="Q3" onclick="selectOption('Q3', 'C')">C</button></td>
  </tr>
</table>
</br>
<div id="overlay3" class="overlay">
  <div id="popup3" class="popup">
    <p class="popup_title">歌词原文及答案</p>
    <p class="popup_content" align="left">
      <img src="010earth bound.jpg" alt="Earth Bound" align="right" width="30%">
    A classic RPG tale, a journey begins,</br>
    Unveiling a world where darkness and light thins,</br></br>
    From childhood's torment, a masterpiece arose,</br>
    Inspiring countless games, where fear overflows,</br></br>
    In a wrong turn theater, a scene so raw,</br>
    Bloody horror's grip, an unsettling awe.</br></br>
    In a world unknown, darkness sends its signs,</br>
     Final boss Giygas, Earthbound's epic final binds.</br></br>
     <div id="answerQ3"></div>
     <div>正确答案是：B</div>
     <div id="timerQ3"></div>
</p>
    <div class="popup_btn">
      <button class="confirmBtn" onclick="hidePopup('popup3')">确认</button>
    </div>
  </div>
</div>
<button id="showPopup3" onclick="showPopup('popup3');showSelection('Q3')">查看答案3</button>
</br>
</br>
Q4:
<audio controls>
  <source src="007.wav">
  您的浏览器不支持 audio 元素。
</audio></br>
<table>
  <tr class="image-container">
    <td><img src="009heavy rain.jpg" alt="" width="30%"></td>
    <td><img src="008slient hill.jpg" alt="" width="30%"></td>
    <td><img src="007bioshock.jpg" alt="" width="30%"></td>
  </tr>
  <tr>
    <td><button class="Q4" onclick="selectOption('Q4', 'A')">A</button></td>
    <td><button class="Q4" onclick="selectOption('Q4', 'B')">B</button></td>
    <td><button class="Q4" onclick="selectOption('Q4', 'C')">C</button></td>
  </tr>
</table>
</br>
<div id="overlay4" class="overlay">
  <div id="popup4" class="popup">
    <p class="popup_title">歌词原文及答案</p>
    <p class="popup_content" align="left">
      <img src="007bioshock.jpg" alt="Bioshock" align="right" width="30%">
      Jack on a plane, crashes through ocean tide,</br>
      Lost in the waves, secrets stirring inside,</br></br>
      Plasmids empower, superhuman might prevails,</br>
      In this underwater city, an epic tale unveils.</br></br>
      Little sisters, Big daddies, a haunting scene,</br>
      Survival in Rapture, where nightmares convene.</br></br>
      In this subaquatic world, darkness takes its toll,</br>
      Bioshock's legend, forever etched in soul.</br></br>
     <div id="answerQ4"></div>
     <div>正确答案是：C</div>
     <div id="timerQ4"></div>
</p>
    <div class="popup_btn">
      <button class="confirmBtn" onclick="hidePopup('popup4')">确认</button>
    </div>
  </div>
</div>
<button id="showPopup4" onclick="showPopup('popup4');showSelection('Q4')">查看答案4</button>
</br>
</br>
Q5:
<audio controls>
  <source src="008.wav">
  您的浏览器不支持 audio 元素。
</audio></br>
<table>
  <tr class="image-container">
    <td><img src="008slient hill.jpg" alt="" width="30%"></td>
    <td><img src="004Outlast.jpg" alt="" width="30%"></td>
    <td><img src="013dying light.jpg" alt="" width="30%"></td>
  </tr>
  <tr>
    <td><button class="Q5" onclick="selectOption('Q5', 'A')">A</button></td>
    <td><button class="Q5" onclick="selectOption('Q5', 'B')">B</button></td>
    <td><button class="Q5" onclick="selectOption('Q5', 'C')">C</button></td>
  </tr>
</table>
</br>
<div id="overlay5" class="overlay">
  <div id="popup5" class="popup">
    <p class="popup_title">歌词原文及答案</p>
    <p class="popup_content" align="left">
      <img src="008slient hill.jpg" alt="Slient Hill" align="right" width="30%">
      Here come an iconic survival series,</br>
      Where psychological horror pierces and freezes,</br></br>
      Enter the second game, a journey through despair,</br>
      Depression and frustration, emotions laid bare,</br></br>
      Pyramid Head, an iconic figure emerges,</br>
      Symbolic of guilt, torment never purges,</br></br>
      Surviving the psychological abyss, we remain,</br>
      Forever gripped by Silent Hill's chilling reign.</br></br>
     <div id="answerQ5"></div>
     <div>正确答案是：A</div>
     <div id="timerQ5"></div>
</p>
    <div class="popup_btn">
      <button class="confirmBtn" onclick="hidePopup('popup5')">确认</button>
    </div>
  </div>
</div>
<button id="showPopup5" onclick="showPopup('popup5');showSelection('Q5')">查看答案5</button>
</br>
</br>
Q6:
<audio controls>
  <source src="005.wav">
  您的浏览器不支持 audio 元素。
</audio></br>
<table>
  <tr class="image-container">
    <td><img src="005the last of us.jpeg" alt="" width="30%"></td>
    <td><img src="013dying light.jpg" alt="" width="30%"></td>
    <td><img src="012UntilDawn.jpg" alt="" width="30%"></td>
  </tr>
  <tr>
    <td><button class="Q6" onclick="selectOption('Q6', 'A')">A</button></td>
    <td><button class="Q6" onclick="selectOption('Q6', 'B')">B</button></td>
    <td><button class="Q6" onclick="selectOption('Q6', 'C')">C</button></td>
  </tr>
</table>
</br>
<div id="overlay6" class="overlay">
  <div id="popup6" class="popup">
    <p class="popup_title">歌词原文及答案</p>
    <p class="popup_content" align="left">
      <img src="005the last of us.jpeg" alt="The Last Of Us" align="right" width="30%">
      A fungus-born plague, infecting all around,</br>
      Survival is the game, in this post-apocalyptic ground.</br></br>
      Zombie apocalypse, relentless storm,</br>
      Joel and Ellie, thriving through reform.</br></br>
      Fungal parasitism, darkness takes hold,</br>
      Their legacy unfolds, as stories are retold.</br></br>
      Game reset, a version anew,</br>
      The Last of Us, reborn for me and you.</br></br>
     <div id="answerQ6"></div>
     <div>正确答案是：A</div>
     <div id="timerQ6"></div>
</p>
    <div class="popup_btn">
      <button class="confirmBtn" onclick="hidePopup('popup6')">确认</button>
    </div>
  </div>
</div>
<button id="showPopup6" onclick="showPopup('popup6');showSelection('Q6')">查看答案6</button>
</br>
</br>
Q7:
<audio controls>
  <source src="003.wav">
  您的浏览器不支持 audio 元素。
</audio></br>
<table>
  <tr class="image-container">
    <td><img src="003FNAF02.jpg" alt="" width="30%"></td>
    <td><img src="007bioshock.jpg" alt="" width="30%"></td>
    <td><img src="011Majora's mask.jpg" alt="" width="30%"></td>
  </tr>
  <tr>
    <td><button class="Q7" onclick="selectOption('Q7', 'A')">A</button></td>
    <td><button class="Q7" onclick="selectOption('Q7', 'B')">B</button></td>
    <td><button class="Q7" onclick="selectOption('Q7', 'C')">C</button></td>
  </tr>
</table>
</br>
<div id="overlay7" class="overlay">
  <div id="popup7" class="popup">
    <p class="popup_title">歌词原文及答案</p>
    <p class="popup_content" align="left">
      <img src="003FNAF02.jpg" alt="Five Nights At Freddy's" align="right" width="30%">
      Scott Cawthon's fright, a hop takes flight,</br>
      Previous game characters, reborn in fright.</br></br>
      Jump scares in pizzeria, dread fills the air,</br>
      From zero to six, scares beyond compare.</br></br>
      Locked in the pizzeria, cameras reveal,</br>
      Freddy, Chica, Foxy, horrors that are real.</br></br>
      Survive till dawn, facing nightmares untold,</br>
      Five Nights at Freddy's, where fear takes hold.</br></br>
     <div id="answerQ7"></div>
     <div>正确答案是：A</div>
     <div id="timerQ7"></div>
</p>
    <div class="popup_btn">
      <button class="confirmBtn" onclick="hidePopup('popup7')">确认</button>
    </div>
  </div>
</div>
<button id="showPopup7" onclick="showPopup('popup7');showSelection('Q7')">查看答案7</button>
</br>
</br>
Q8:
<audio controls>
  <source src="011.wav">
  您的浏览器不支持 audio 元素。
</audio></br>
<table>
  <tr class="image-container">
    <td><img src="011Majora's mask.jpg" alt="" width="30%"></td>
    <td><img src="002Amnesia.jpg" alt="" width="30%"></td>
    <td><img src="009heavy rain.jpg" alt="" width="30%"></td>
  </tr>
  <tr>
    <td><button class="Q8" onclick="selectOption('Q8', 'A')">A</button></td>
    <td><button class="Q8" onclick="selectOption('Q8', 'B')">B</button></td>
    <td><button class="Q8" onclick="selectOption('Q8', 'C')">C</button></td>
  </tr>
</table>
</br>
<div id="overlay8" class="overlay">
  <div id="popup8" class="popup">
    <p class="popup_title">歌词原文及答案</p>
    <p class="popup_content" align="left">
      <img src="011Majora's mask.jpg" alt="Majora's Mask" align="right" width="30%">
      In a countdown's grasp, time's running low,</br>
      Complete tasks in three days, before shadows grow.</br></br>
      Flute of Time, months pass, secrets unfold,</br>
      Find the mask, power untold.</br></br>
      Dark and disturbing elements take flight,</br>
      Ben Prowned's presence haunts, through day and night.</br></br>
      Haunting echoes linger, in each twisted turn,</br>
      Majora's Mark weaves nightmares, a world to discern.</br></br>
     <div id="answerQ8"></div>
     <div>正确答案是：A</div>
     <div id="timerQ8"></div>
</p>
    <div class="popup_btn">
      <button class="confirmBtn" onclick="hidePopup('popup8')">确认</button>
    </div>
  </div>
</div>
<button id="showPopup8" onclick="showPopup('popup8');showSelection('Q8')">查看答案8</button>
<div>答题情况汇总：（Q_绿色答对，红色误答；时间项红色为超时或误答）</div>
<table border="1">
  <tr>
    <td id="sumcfQ1">Q1</td>
    <td id="sumcfQ2">Q2</td>
    <td id="sumcfQ3">Q3</td>
    <td id="sumcfQ4">Q4</td>
  </tr>
  <tr>
    <td id="sumtimerQ1"></td>
    <td id="sumtimerQ2"></td>
    <td id="sumtimerQ3"></td>
    <td id="sumtimerQ4"></td>
  </tr>
  <tr>
    <td id="sumcfQ5">Q5</td>
    <td id="sumcfQ6">Q6</td>
    <td id="sumcfQ7">Q7</td>
    <td id="sumcfQ8">Q8</td>
  </tr>
  <tr>
    <td id="sumtimerQ5"></td>
    <td id="sumtimerQ6"></td>
    <td id="sumtimerQ7"></td>
    <td id="sumtimerQ8"></td>
  </tr>
</table>
    <script>
      function showPopup(popupId) {
          var overlay = document.getElementById("overlay" + popupId.substring(5));
          overlay.style.display = "block";
      }
      function hidePopup(popupId) {
          var overlay = document.getElementById("overlay" + popupId.substring(5));
          overlay.style.display = "none";
      }
      function selectOption(questionId, option) {
          // 禁用其他两个按钮
          var buttons = document.getElementsByClassName(questionId);
          var buttonsArray = Array.from(buttons);
          buttonsArray.forEach(function(button) {
              button.disabled = true;
          });
          // 在这里执行获取选项信息的操作
          localStorage.setItem(questionId, option);
          alert("您选择了问题 " + questionId + " 的选项 " + option);
          //按钮点击后禁用对应计时器
          //document.getElementById(audioId).removeEventListener('play', startTimer);
          //stopTimer();
          //计算时间间隔，即计时
          if(startTime==0) return;
          var endTime = new Date();
          var elapsedTime = endTime - startTime;
          startTime = 0;
          localStorage.setItem(questionId + "_time",elapsedTime); //存储时间
      }
    function showSelection(questionId) {
    var selectedOption = localStorage.getItem(questionId);
    var answerDiv = document.getElementById("answer" + questionId);
    if (selectedOption) {
        answerDiv.innerText = "您选择的选项是：" + selectedOption;
    } else {
        answerDiv.innerText = "您尚未选择任何选项！";
    }
    // 显示时间间隔 暂且log
    var elapsedTime = localStorage.getItem(questionId + "_time");
    var timerDiv = document.getElementById("timer" + questionId);
    //test:
    //console.log(elapsedTime);
    let sumtimer = document.getElementById('sumtimer'+questionId);
    if(elapsedTime==null || elapsedTime==NaN){
        timerDiv.innerText = "您并未播放过音频！";
        sumtimer.innerText = "--:--";
    }
    else if(elapsedTime > 30000){
        if(timerDiv.innerText.startsWith("用时")) {console.log("出现错误按键");return;}
        timerDiv.innerText = "已超时（超过30秒）；未播放音频直接点击选项也会出现这段文字";
        localStorage.setItem(questionId + "finaltimer",30000);
        sumtimer.innerText = "30:00";
        sumtimer.style.color="red";
    }
    else{
        let seconds =Math.floor(elapsedTime/1000);
        let miliseconds = Math.floor(elapsedTime/10%100);
        timerDiv.innerText = "用时："+seconds+":"+miliseconds;
        localStorage.setItem(questionId + "finaltimer",elapsedTime);
        sumtimer.innerText =seconds+":"+miliseconds;
        sumtimer.style.color="black";
    }
    check(questionId);
    //test:
    console.log("从点击播放按钮到点击答案按钮的时间间隔：" + elapsedTime + "毫秒");
  }
  function clearLocalStorage() {
    localStorage.clear();
    alert("成功清除缓存")
  }
    var timer;
    var startTime;
    function startTimer(){
        startTime = new Date();
        //timer = setInterval(updatetimer,1000);
        //test:
        //console.log(startTime);
    }
    function stopTimer(){
        //clearInterval(timer);
    }
    //监听器，播放按钮被点击时触发
    document.querySelectorAll('audio').forEach(function(audio) {
        audio.addEventListener('play', startTimer);
    });
    function check(questionId){
      var AnswerLot = ['D','A','C','B','C','A','A','A','A'];
      let answer = localStorage.getItem(questionId);
      let sumtimer = document.getElementById('sumtimer'+questionId);
      var sumcf = document.getElementById('sumcf'+questionId);
      if(answer!=AnswerLot[questionId.substring(1,2)]) 
      {
        sumcf.style.color = "red";
        sumtimer.style.color = "red";
      }
      else{
        sumcf.style.color = "green";
      }
      return;
    }
      </script>
</body>

