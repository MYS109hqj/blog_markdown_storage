//卡牌数组包含所有卡片
let card = document.getElementsByClassName("card");
//cards中只含有游戏中使用的16个卡片
let cards = [];
//total_cards含有全部的卡片
let total_cards = [...card];

//使用的ul标签，即放置卡牌的区域
const deck = document.getElementById("card-deck");
//声明 moves 变量
let moves = 0;
let counter = document.querySelector(".moves");
//声明星形图标的变量
const stars = document.querySelectorAll(".fa-star");
//声明 matchedCard 的变量
let matchedCard = document.getElementsByClassName("match");
//模板中的关闭图标
let closeicon = document.getElementById("close1");
let closerulesicon = document.getElementById("close2");
let closesetsicon = document.getElementById("close3");

//声明 modal
let modal = document.getElementById("popup1");
let modal2 = document.getElementById("popup2");
let modal3 = document.getElementById("popup3");
//打开卡片的数组
var openedCards = [];

//存储待寻找图案的序列
var target1 = document.getElementById("target-card1");
var target2 = document.getElementById("target-card2");
var targetedCards1 = [];
var targetedCards2 = [];
//声明两个目标数组的哈希数组
var targetedHash1 = new Array(16);
var targetedHash2 = new Array(16);
var redcur = 8;
var bluecur = 8;//均从第九张卡牌开始
//声明增加新的卡牌使的两个下标变量
var temp1 = 1;
var temp2 = 1;

//设置卡牌翻开时间
var lastingtime = 5000;
//设置难度
let version = 0;


//展示现在是哪方行动的div
var round = 0;//0表示红方，1表示蓝方
var whoseaction = document.getElementById("condition");
//默认设置为简单难度
document.body.onload = function(){initial(version);}

//主要作用：复制cards数组
function initial(version){
    //先删除cards中原有内容
    cards=[];

    //洗牌，确定使用图案的顺序
    let usedImages = shuffle([0,1,2,3,4,5,6,7]);
    if(version === 0)
    {//普通难度直接使用前四种图案，用i遍历usedImages；j用于遍历选中的图案(偏移量)
        for(let i = 0;i < 4;i++)
        {
            for(let j = 0;j < 4;j++)
            {
                cards.push(total_cards[usedImages[i]*4+j]);
            }
        }
    }else if(version === 1){
        for(let i = 0;i < 4;i++)
        {
            cards.push(total_cards[usedImages[i]*4 + i%4]);
            cards.push(total_cards[usedImages[i]*4 + (i+1)%4]);
            cards.push(total_cards[usedImages[i+4]*4 + (i+2)%4]);
            cards.push(total_cards[usedImages[i+4]*4 + (i+3)%4]);
        }
    }

    //目标栏删除全部元素后复制
    targetedCards1 = [];
    targetedCards2 = [];

    [].forEach.call(cards,function(item){
        let clone1 = item.cloneNode(true);
        let clone2 = item.cloneNode(true);
        targetedCards1.push(clone1);
        targetedCards2.push(clone2);
    });

    startGame();
}

//重新开始/开始游戏
function startGame(){
    console.log("start game!");

    //清空onpenCards
    openedCards=[];

    //洗牌
    cards = shuffle(cards);
    deck.innerHTML = "";
    targetedCards1 = shuffle(targetedCards1);
    target1.innerHTML = "";
    targetedCards2 = shuffle(targetedCards2);
    target2.innerHTML = "";

    //将洗完的牌从cards放入deck中
    [].forEach.call(cards,function(item){
        deck.appendChild(item); 
    });
    [].forEach.call(targetedCards1,function(item){
        target1.appendChild(item); 
    });
    [].forEach.call(targetedCards2,function(item){
        target2.appendChild(item); 
    });

    //从每张卡片中删除所有现有的类
    for(var i = 0;i < cards.length; i++){
        cards[i].classList.remove("show","open","match","disabled");
        cards[i].classList.remove("D","O","N","A","J","G","T","P","U","B","I","K","Q","R","S","M");
        targetedCards1[i].classList.remove("eliminate","redcurrent","finish","rednext");
        targetedCards2[i].classList.remove("eliminate","bluecurrent","finish","bluenext");
    }
    //重置添加目标卡牌的哈希记录表
    for(let i = 0;i < 16;i++)
    {
        targetedHash1[i]=0;
        targetedHash2[i]=0;
    }

    //add：为每张卡牌按顺序增加字母标识类
    cards[0].classList.add("D");
    cards[1].classList.add("O");
    cards[2].classList.add("N");
    cards[3].classList.add("A");
    cards[4].classList.add("J");
    cards[5].classList.add("G");
    cards[6].classList.add("T");
    cards[7].classList.add("P");
    cards[8].classList.add("U");
    cards[9].classList.add("B");
    cards[10].classList.add("I");
    cards[11].classList.add("K");
    cards[12].classList.add("Q");
    cards[13].classList.add("R");
    cards[14].classList.add("S");
    cards[15].classList.add("M");

    //把卡牌补齐到20张
    for(let i = 0; i < 4;i++){
        appendCard(1);
        appendCard(2);
    }
    target1 = document.getElementById("target-card1");
    target2 = document.getElementById("target-card2");
    //设置current、eliminate和finish
    redcur = 8;
    bluecur = 8;
    targetedCards1[redcur].classList.add("redcurrent");
    targetedCards2[bluecur].classList.add("bluecurrent");
    targetedCards1[redcur+1].classList.add("rednext");
    targetedCards2[bluecur+1].classList.add("bluenext");
    targetedCards1[0].classList.add("eliminate");
    targetedCards2[0].classList.add("eliminate");
    target1.children[19].classList.add("finish");
    target2.children[19].classList.add("finish");

    //重置文本及顺序标记及边框颜色
    round = 0;whoseaction.innerText="轮到红方玩家翻开卡牌";
    deck.classList.remove("blueaction");
    deck.classList.add("redaction");
    //重置moves
    moves = 0;
    counter.innerHTML = moves;
    //重置timer
    second = 0;
    minute = 0 ;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 分 0 秒";
    clearInterval(interval);


};

//洗牌功能
function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        //与实时下标最大的牌随机互换，之后最大下标减一
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


//增删目标卡牌组的基本模块
function appendCard(target){
    let index = 0;
    if(target===1){
        for(let i = 0;i < 16;i++)
        {
            if(targetedHash1[i]===temp1) {targetedHash1[i]=0;break;}
        }
        do{
            index = Math.floor(Math.random()*16);
            //console.log("index:"+index);
            if(!targetedHash1[index]){
                targetedHash1[index] = temp1;
                let tempNode = targetedCards1[index].cloneNode(true);
                tempNode.classList.remove("eliminate","redcurrent","finish","rednext");//复制的同时前面的元素带eliminate等会带到复制品上，因此类似标签都要删
                target1.appendChild(tempNode);
                //console.log("test1");
            }
            //console.log("test2");
        }while(targetedHash1[index]!==temp1);
        if(temp1!==9) temp1++;
        else temp1 = 1;
    }
    else if(target===2){
        for(let i = 0;i < 16;i++)
        {
            if(targetedHash2[i]===temp2) {targetedHash2[i]=0;break;}
        }
        do{
            index = Math.floor(Math.random()*16);
            //console.log("index:"+index);
            if(!targetedHash2[index]){
                targetedHash2[index] = temp2;
                let tempNode = targetedCards2[index].cloneNode(true);
                tempNode.classList.remove("eliminate","bluecurrent","finish","bluenext");
                target2.appendChild(tempNode);
                //console.log("test2");
            }
            //console.log("test2");
        }while(targetedHash2[index]!==temp2);
        if(temp2!==9) temp2++;
        else temp2 = 1;
    }
    else{console.log("error!传入target错误!");}
    // console.log("index:"+index);
    // for(let i = 0;i < 16;i++)
    // {
    //     console.log("第"+i+"个");
    //     console.log(targetedHash1[i]);
    // }
    // console.log("That's all");
}
function deleteCard(target){
    if(target===1){
        if(target1.firstChild != null)
        target1.removeChild(target1.firstChild);
        else console.log("Error! target1 is empty");
    }
    else if(target===2){
        if(target2.firstChild != null)
        target2.removeChild(target2.firstChild);
        else console.log("Error! target2 is empty");
    }
    else{
        console.log("In function deleteCard, target is not 1 or 2!");
    }
}
//当前目标移动的基本模块
function Moveforward(target){
    if(target===1){
    target1.children[redcur].classList.remove("redcurrent");
    if(redcur!==19)
    target1.children[redcur+1].classList.remove("rednext");
    if(redcur === 18) {
        //游戏结束
        target1.children[redcur+1].classList.add("redcurrent");
        document.getElementById("brief").innerText = "红方成功前进到终点，红方获胜！";
        congratulations()
        //console.log("end of game");
    }
    else{
    redcur++;
    //console.log(target1.children[redcur].outerHTML);
    target1.children[redcur].classList.add("redcurrent");
    if(redcur!==19)
    target1.children[redcur+1].classList.add("rednext");
    }
    }
    else if(target===2){
    target2.children[bluecur].classList.remove("bluecurrent");
    if(bluecur!==19)
    target2.children[bluecur+1].classList.remove("bluenext");
    if(bluecur === 18) {
        //游戏结束
        target2.children[bluecur+1].classList.add("bluecurrent");
        document.getElementById("brief").innerText = "蓝方成功前进到终点，蓝方获胜！";
        congratulations()
        //console.log("end of game");
    }
    else{
    bluecur++;
    //console.log(target2.children[bluecur].outerHTML);
    target2.children[bluecur].classList.add("bluecurrent");
    if(bluecur!==19)
    target2.children[bluecur+1].classList.add("bluenext");
    }
    }
}
function Movebackward(target){
    if(target===1){
        target1.children[0].classList.remove("eliminate");
        deleteCard(1);//删除卡牌
        target1.children[0].classList.add("eliminate");
        target1.children[18].classList.remove("finish");
        appendCard(1);//添加卡牌
        target1.children[19].classList.add("finish");
        redcur--;
        //console.log(target1.children[redcur].outerHTML);

        if(redcur === -1) {
            //游戏结束
            document.getElementById("brief").innerText= "红方由于后退到淘汰区失败，蓝方获胜！";
            congratulations()
            //console.log("end of game");
        }
        }
        else if(target===2){
        target2.children[0].classList.remove("eliminate");
        deleteCard(2);//删除卡牌
        target2.children[0].classList.add("eliminate");
        target2.children[18].classList.remove("finish");
        appendCard(2);//添加卡牌
        target2.children[19].classList.add("finish");
        bluecur--;
        //console.log(target2.children[bluecur].outerHTML);

        if(bluecur === -1) {
            //游戏结束
            document.getElementById("brief").innerText = "蓝方由于后退到淘汰区失败，红方获胜！";
            congratulations()
            //console.log("end of game");
        }
        }
}

//显示卡片
var displayCard = function(){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

//检测是否相同
function cardOpen(){
    openedCards.push(this);
    moveCounter();
    openedCards[0].classList.add("show");
    if(round===0){//红方
        if(openedCards[0].type === target1.children[redcur+1].type){
            matched();
        }else{
            unmatched();
        }
    }else if(round===1){//蓝方
        if(openedCards[0].type === target2.children[bluecur+1].type){
            matched();
        }else{
            unmatched();
        }
    }

}

function matched(){
    openedCards[0].classList.add("match","disabled");
    if(round===0){
        target1.children[redcur+1].classList.add("match");
    }else if(round===1){
        target2.children[bluecur+1].classList.add("match");
    }
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show","open","no-event","disabled","match");
        enable();
        openedCards = [];
        // console.log("test!");
        if(round===0){
            target1.children[redcur+1].classList.remove("match");
            Moveforward(1);
        }else if(round===1){
            target2.children[bluecur+1].classList.remove("match");
            Moveforward(2);
        }
    },lastingtime)
}

function unmatched(){
    openedCards[0].classList.add("unmatched");
    if(round===0){
        target1.children[redcur+1].classList.add("unmatched");
    }else if(round===1){
        target2.children[bluecur+1].classList.add("unmatched");
    }
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show","open","no-event","unmatched");
        if(round===0){
            target1.children[redcur+1].classList.remove("unmatched");
            Movebackward(1);
        }else if(round===1){
            target2.children[bluecur+1].classList.remove("unmatched");
            Movebackward(2);
        }
        enable();
        openedCards = [];
        if(round===0) {
            round = 1;whoseaction.innerText="轮到蓝方玩家翻开卡牌";
            deck.classList.remove("redaction");
            deck.classList.add("blueaction");
        }
        else if(round===1) {
            round = 0;whoseaction.innerText="轮到红方玩家翻开卡牌";
            deck.classList.remove("blueaction");
            deck.classList.add("redaction");
        }
    },lastingtime);
}

function disable(){
    Array.prototype.filter.call(cards,function(card){
        card.classList.add('disabled');
    });
}

function enable(){
    Array.prototype.filter.call(cards,function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length;i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}

//计算玩家动作的功能
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    //第一次点击时启动计时器
    if(moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

//显示游戏的时间
var second = 0, minute = 0, hour = 0;
var timer = document.querySelector(".timer");
var interval;
//计时功能
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+" 分"+second+" 秒";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

//结算界面
function congratulations(){

    clearInterval(interval);
    finalTime = timer.innerHTML;

    //显示祝贺界面
    modal.classList.add("show");

    //显示移动、评级、时间
    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("totalTime").innerHTML = finalTime;

    //界面上的关闭图标
    closeModal();
}

//界面上的关闭图标
function closeModal(){
    closeicon.addEventListener("click",function(e){
        modal.classList.remove("show");
        playAgain();
    });
}

//再次游戏功能
function playAgain(){
    modal.classList.remove("show");
    document.getElementById("condition").innerText = document.getElementById("brief").innerText;
    showdeck();
}
//另增展示终局界面，重新开始只能通过按钮实现
function showdeck(){
    modal.classList.remove("show");
    for(let i = 0; i < 16;i++)
    {
        deck.children[i].classList.add("open","disabled");
    }
}

//显示规则部分
function Showrules(){
    modal2.classList.add("show");
    Closerules()
}
function Closerules(){
    closerulesicon.addEventListener("click",function(e){
        modal2.classList.remove("show");
    });
}

//调整设置部分
function Showsets(){
    modal3.classList.add("show");
    Closesets()
}
function Closesets(){
    closesetsicon.addEventListener("click",function(e){
        modal3.classList.remove("show");
    });
}
function getSetsOption() {
    var settime = document.getElementById("settime");
    lastingtime = settime.value;
    let setversion = parseInt(document.getElementById("setversion").value);
    console.log(typeof version);
    console.log(typeof setversion);
    if(setversion !== version){
        version = setversion;
        initial(version);
        console.log(version);
        if(version===1) document.getElementById("version").innerText="困难难度(8图案各随机2色)";
        else if(version===0) document.getElementById("version").innerText="普通难度(4图案4色)";
    }

    modal3.classList.remove("show");
    //console.log("目前持续时间:", lastingtime);
    // 在这里你可以使用 selectedOption 的值进行其他操作
  }

//将事件侦听器添加到每张卡片
for(var i = 0; i < total_cards.length; i++){
    card = total_cards[i];
    card.addEventListener("click",displayCard);
    card.addEventListener("click",cardOpen);
}