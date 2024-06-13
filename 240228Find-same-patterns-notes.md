---
title: Find-same-patterns-notes
date: 2024-02-28 19:54:35
tags: [study]
---
目标：
1.理解翻牌游戏的内在逻辑
2.学习建立html游戏的基本思路，实践基本流程

## 1. 关于Element.classList
<https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList>
它是一个只读属性，可以返回一个元素的动态DOMTokenList集合，可用于操作class集合。
可以用add()，remove()，replace()，toggle()方法修改DOMTokenList：
示例：
const div = document.createElement("div");
div.className = "foo";
console.log(div.outerHTML); //< div class="foo"></ div>
//使用classList API
div.classList.remove("foo");
div.classList.add("anotherclass");
//…class="anotherclass"…
div.classList.toggle("visible"); //toggle切换；如果该类值已存在则移除它，否则添加它。
>[toggle(class, true|false)	在元素中切换类名。
第一个参数为要在元素中移除的类名，并返回 false。
如果该类名不存在则会在元素中添加类名，并返回 true。
第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存 在。例如：

移除一个 class: element.classList.toggle("classToRemove", false);
添加一个 class: element.classList.toggle("classToAdd", true);

注意： Internet Explorer 或 Opera 12 及其更早版本不支持第二个参数。]
div.classList.toggle("visible",i<10);
console.log(dic.classList.contains("foo"))
//添加删除多个类值
div.classListadd/remove("foo","bar",…);
//使用展开语法添加或移除多个类值
const cls = ["foo","bar"];
div.classList.add(…cls);
div.classList.remove(…cls);
div.classList.replace("foo","bar");

翻牌游戏的js代码中主要就是通过classList这个API添加删除类值，改变卡牌的状态。

## 2.关于API 应用程序编程接口
API(Application Programming Interface)程序之间的接口，程序之间的合约。
可以理解为：服务商通过API提供服务，进行利益交换/互助。

## 3.Node.appendChild()方法
<https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild>
将一个结点附加到指定父节点的子节点列表的末尾处；如有该结点本身存在，只会移动而非新建（不用事先删除要移动的结点）
若要保留原有结点，可通过Node.cloneNode()方法创造副本（即复制），再对副本操作。
如果给定的子节点是 DocumentFragment，那么 DocumentFragment 的全部内容将转移到指定父节点的子节点列表中。
备注： 有更加新的 API 可供使用！ > ParentNode.append() (en-US) 方法支持多个参数，接受字符串作为参数，会将字符串转换为文本节点再附加。
语法
element.appendChild(aChild)
参数
aChild
要追加给父节点（通常为一个元素）的节点。
返回值
返回追加后的子节点（aChild），除非 aChild 是一个文档片段（DocumentFragment），这种情况下将返回空文档片段（DocumentFragment）。

对数组有push、pop操作。

使板块背面为字母，就是改变.deck .card背后的background元素，给每个type单独赋值一个，但是为了满足字母位置不变的需求，应当让背面的字母与类数组的下标对应。
appendChild会移除原对象，需要使用cloneNode()等方法复制原对象后对副本操作。但对于本项目的需求，复制cards数组对三个独立的“cards”数组操作更为便捷。
经过实践，复制cards数组的过程中还是需要使用cloneNode()复制DOM结点，否则数组内都是同个DOM结点，只是存有指针的顺序不同，仍然只有最后一个有效。为此我添加了initial()函数用于在页面加载时复制结点到两个target-card数组中。

## 4.slice()和concat() 在JS中复制数组时的常用方法
slice()方法：array.slice(start,end)
slice返回一个新数组，从start位置到end位置（不包括end）的元素；若省略end参数则会一直复制到数组的末尾。
示例：
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 3); // 返回 [2, 3]
concat()方法：array.concat(value1,value2,…,valueN)
concat用于合并两个或多个数组，并返回一个新数组。
示例：
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2); // 返回 [1, 2, 3, 4, 5, 6]

逗号分隔元素单元：
#target-card1 .card,#target-card2 .card
同时执行多个函数的方法：
document.body.onload = function(){initial();startGame();}

removeChild()与appendChild()相对。主要使用这两个方法增添减少deck中的card。
firstChild DOM中的方法，获取该元素的第一个孩子结点，没有孩子则返回null。

类似于appendChild的属性有：

insertBefore: 这个方法将一个节点插入到指定节点之前的位置。
replaceChild: 这个方法替换指定父节点的子节点。
append: 这是一个比较新的方法，它允许将一个或多个节点追加到父节点的子节点列表的末尾。
prepend: 与append类似，但是它会将节点插入到父节点的子节点列表的开头。
insertAdjacentElement: 这个方法允许在指定元素的相对位置插入一个HTML元素节点。
这些方法都用于动态地向文档中添加新的节点或对现有节点进行操作。

原有样例的翻面是由“原本字体大小为0”+“反转动画”+“对class::open的字体样式进行设置，即设置font-size: 33px”完成的。因此，要使卡牌”正面显示“，只需要设置font-size的大小。（注意：ID选择器优先级高于类选择器，注意覆盖问题）

在替换图标时，由于之前使用的是字体，可以直接对字体大小font-size操作；而使用svg后要对width和height操作，因此要重新设定样式。
经过不断地尝试，我利用id选择器优先级高的特点，利用后代选择器为#card-deck里面的svg图像设置样式。
#card-deck .open .icon可以在翻开卡片时被使用；
而#card-deck .card:not(.open) .icon会在卡片没被翻开时使用。
其余部分都只用直接展示，使用svg标签选择。
接下来就是用自选的图案svg机械替换原有文本。（当然SVG标签也可以选择卡片背面的字母）
在测试的过程中，unmatched时的红把红色图案融入其中，无法观察，因此修改了unmatched状态下的background-color。
废弃了一个图案。指纹的svg代码太长了，给GPT转url都要continue两次……

关于需要找的图案上的标识，debug了半天，发现问题在于：使用……::after{positon: absolute}时，其包含块即父元素（此处是card）的定位属性必须设置为非 static 属性，比如 relative、absolute 或者 fixed。否则，它会继续往父元素的父元素寻找（作为包含块），直到定位到具有非static定位属性的元素（或者到达根元素html）。当到达根元素html伪元素的位置属性top、right、bottom、left都是相对于html网页的。当你的位置属性给出个负值，很有可能会移除视口（viewport）之外，导致无法看见这个元素。

unmatched的动画现在匹配不到targetcard数组
学习html内嵌博客的不同方法。。。。。。
设置起始位置下拉选项框
设置介绍游戏规则的按钮及浮窗
难度的切换？（可以另做，最好内嵌）
新增next标识，修改代码
为了更加贴合原游戏的设定，添加了游戏规则按钮与两色next标识。需要寻找的图案为next标识对应的图案。因此，match相关的一系列代码传参都要改成cur+1，游戏结束判定条件也有所更改。
考虑到游戏后期5秒的显示时间可能过长，我添加了设置显示时间的设置。并发现已知性能问题：若保存设置，content2会过一小段时间再消失。
问题：保存设置时，content2会过一小段时间再消失

## 5.设置下拉框dropdown并获取选中项
示例：
< select id="myDropdown">
  < option value="option1">Option 1</ option>
  < option value="option2">Option 2</ option>
  < option value="option3">Option 3</ option>
</ select>

< button onclick="getSelectedOption()">Get Selected Option</ button>

< script>
function getSelectedOption() {
  var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  console.log("Selected option:", selectedOption);
  // 在这里你可以使用 selectedOption 的值进行其他操作
}
< /script>

dropdown的方法：
selectedIndex： 获取或设置下拉框中当前选中项的索引值。
var selectedIndex = dropdown.selectedIndex; // 获取当前选中项的索引值
dropdown.selectedIndex = 2; // 设置选中索引为第3个选项
value： 获取或设置下拉框中当前选中项的值。
var selectedValue = dropdown.value; // 获取当前选中项的值
dropdown.value = "option2"; // 设置选中值为 "option2"
options： 获取下拉框中所有选项的集合。
var options = dropdown.options; // 获取所有选项的集合
var firstOptionValue = options[0].value; // 获取第一个选项的值
add() 和 remove()： 向下拉框中添加或移除选项。
// 向下拉框中添加新选项
dropdown.add(new Option("Option 4", "option4"));
// 从下拉框中移除指定索引的选项
dropdown.remove(1); // 移除第2个选项
onchange 事件： 当下拉框的选中项发生变化时触发。
dropdown.onchange = function() {
    console.log("选中项发生变化");
};

6.使用iframe标签在博客中嵌套html页面
< iframe width="100%" height="100%"  src=".\Find_same_patterns.html"></ iframe>
iframe标签中scrolling属性默认为"yes"，即允许滚动，当高度不足以展示页面内容时显示滚动条。
博客嵌套html页面主要的问题是height="100%"这个属性不使用于博客页面。博客里面有其它元素，直接设置百分比只会填充预留区域（此时如在matery中下方会有“文章作者”等内容会挤占页面空间，导致height值实际上很小，如下图hegiht=154）
<img src="001.png" alt="示例图片" width = 50%>
因此，在博客中内嵌html，height值不能使用百分比设置，只要设定足够的、能够展示完整页面的height就行了。例如针对图中示例，height=910px时就能展示完全，此时滚动条也消失了。（但是这无法自适应浏览器尺寸变化导致的html高度的变化。）
<img src="002.png" alt="示例图片" width = 50%>
但是，可以看到现在iframe界面有边框，不够美观，经检测可以发现这是源自user agent stylesheet，也就是浏览器默认样式（见下图）。手动设置边框样式就可以覆盖掉默认样式，如使用style="border: 0px"加上内联样式。也可以使用到html属性frameborder，即frameborder="0"。但这里用到了外部CSS文件设置样式，所以更推荐后者。
<img src="003.png" alt="示例图片" width = 80%>
至于参考文章<https://www.haoyizebo.com/posts/e9071e74/>中的获取高度的函数，没看懂。测试了下会让iframe的height比设置时多50像素，在手机中显示不完全。但我的理解是这个函数要获取到嵌套的html的高度，但好像没有实现。所以我为了显示全部内容干脆scrolling = yes了。

24/03/01
修改的基本原理是：所有展示的卡牌改为cloneNode()产生的复制品；在废弃后借助JavaScript引擎的垃圾回收机制自行删除。initial()时进行复制。
首先，在设置中添加切换难度的单选框。若成功切换难度要重置card-deck与两个target-card，并立刻重启游戏。
 ```
    var setversion = document.getElementById("setversion").value;
    if(setversion != version){
        version = setversion;
        initial(version);
        startGame();
   }
   ```
接下来更改initial()与startGame()函数。
更改时，将cards命名为空数组，用total_cards装有全部图案。

```
document.body.onload = function(){initial(0);}
//主要作用：复制cards数组
function initial(version){
    //先删除cards中原有内容
    cards.forEach(function(item){
        item.remove();
    });
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
        console.log("Test3");
    });
    startGame();
}
```
在实现过程中，曾错误地使用DOM方法remove来清空数组。这里的targetedcard并非DOM对象，remove无法清除。因此会出现每使用一次targetcard中原有元素不消失的错误。正确方法使用数组方法清除，如targetedCards1 = [];
另外，发现version一开始是num类型，由于setversion是str类型，version也变为str类型，导致version===0/1的判断式失效。

## 6.从HTML中获取值时，javaScript都会将它们解析为字符串
如果想要更改类型，可以使用js内置函数parseInt()或parseFloat()

