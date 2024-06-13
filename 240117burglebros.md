---
title: burglebros
tags: [game]
categories: [game]
date: 2024-1-17 00:03:00
img: https://coopboardgames.com/wp-content/uploads/2016/05/burgle-bros.-review.png
---

基础教学推荐bga中的教程：

bga中的规则书链接：（Eng）
<https://tesera.ru/images/items/1085040/BBRuleBook[MarkIII-v2.02]-Spreads.pdf>
Burgle Bros中文化卡表链接：（需要科学上网，繁体中文。包含角色能力介绍、事件event、赃物loot、工具tool的列表）
<https://gggjms.blogspot.com/2016/03/burgle-bros_30.html>

选定起始点
开局时，你可以知道一层警卫的初始位置，并选定起始点位。
格子位置的名称列为用字母ABCD表示，即分布为：
A1 B1 C1 D1
A2 B2 ......
![行列展示](001.png)

注：行列指示物展示打开方式
![行列指示物展示打开方式](002.png)

在玩家的第一回合，该玩家的角色出现到板块中。起始点位尽量现在路径开阔的地方。

警卫的寻路逻辑为：
目的地为巡逻卡的终点板块，如果有警报则终点改为警报位置，若有多个警报，永远先前往最近的警报，若出现等距离则由玩家选择警卫先查看的警报。
永远寻找最短路径。如果有多条等长最短路径，则从左侧开始，选择最顺时针的路径。
（原文：The Guard always takes the shortest possible path to the destination. If more than one path is equally short, the Guard takes the path that is the most clockwise, starting from the Guard's left）
一层的警卫初始为2动、二层3动、三层4动；巡逻牌耗尽重洗时基础移动速度加一，如一层警卫在一层巡逻卡耗尽重洗后变为3动。基础移动速度上限为6，速度为几则一次行动有几动。1动可以移动一个板块。若该层有警报，则在警卫原有速度基础上，每有一个警报增加1动。

角色的个人技能：（以bga无进阶版本）
鹰眼：每轮可以免费查看一个相邻的隔墙板块。（探图神技）
![侦察专家 鹰眼 THE_HAWK](THE_HAWK.png)
渡鸦：可以在两步距离内放置一个乌鸦，警卫经过该格时多消耗一个步数。放置乌鸦的操作免费，如果不移动乌鸦乌鸦将在格子停留。注意：若乌鸦与警卫起点在同一格，警卫离开该格时乌鸦不起作用。若再次经过正常起作用。（控警卫技能）
![渡鸦 THE_RAVEN](THE_RAVEN.png)
观察者：可以花费一个行动点，查看本层警卫的下一张巡逻终点牌，并选择是否将其放到牌堆底部。（控警卫技能）
![观察者 THE_SPOTTER](THE_SPOTTER.png)
杂技演员：可以免费移动到一步内的警卫所在格，此操作不扣除隐秘标记。但是如果回合结束仍在警卫所在格，仍然正常扣除隐秘标记。（跑图神技）
![杂技演员 THE_ACROBAT](THE_ACROBAT.png)
主谋（骗子）：每回合可以花费一点行动，使一个同伴移动一格。移动仍要遵循基本规则，但（移动到激光检测与门栓时）不用耗费额外点数。（跑图技能）
![骗子 THE_ROOK](THE_ROOK.png)
小偷：在自己开保险箱或者数字门锁时可以多一个骰子。（更容易完成骰子检定）
![小偷 THE_PETERMAN](THE_PETERMAN.png)
钻机安装员：开始持有炸药（可以炸毁相邻墙壁，并在所在格发出警报）。所有玩家获得道具时可以查看两个道具之后保留一个（原本是直接抽一个）。（提供道具上的优势）
![钻机安装员 THE_RIGGER](THE_RIGGER.png)
照明专家：可以免费在相邻格制造一个警报。（控警卫技能）
![照明专家 THE_JUICER](THE_JUICER.png)
黑客：不会触发指纹、激光、动作检测警报（热感应警报与物品检测器仍正常触发），队友不会在自己所在格触发警报。
![黑客 THE_HACKER](THE_HACKER.png)

玩家在自己的回合内可以选择执行以下行动：
一般情况下，玩家有4动。可以选择花1动偷看相邻板块（不能隔墙看）；花1动移动到相邻板块（并进行进入板块的相关判定）；使用角色技能；免费使用道具卡（tool）；在保险箱（safe）板块花1动掷骰子或2动增加骰子；在机房板块进行黑客行动获取相应骇客标记。
在玩家的行动回合结束后，进行事件判定。当该轮玩家只使用2动及以下时，触发事件（持有赃物邮票stamp时是3动及以下都会触发事件）。抽取事件卡。之后移动角色结束时所在楼层的警卫。

接下来是各个房间介绍：
黄色卡牌：
ATRIUM 中庭
在中庭板块，可以偷看上一层或下一层相同位置的板块。但同时可以被上一层或下一层的警卫走到对应板块发现。
FOYER 门厅
>foyer : a large open area just inside the entrance of a public building such as a theatre or a hotel, where people can wait and meet each other（剧院、宾馆等公共建筑物入口处内的）门厅

如果你在门厅板块，警卫可以从相邻板块发现你。若警卫在同一轮次从相邻板块移动到门厅，视为再次被发现，再次扣除一个隐匿标记。
<table rules="none" align="center">
	<tr>
		<td>
			<center>
				<img src="atrium.png" width="60%" />
				<br/>
				<font color="AAAAAA">atrium</font>
			</center>
		</td>
		<td>
			<center>
				<img src="foyer.png" width="60%" />
				<br/>
				<font color="AAAAAA">foyer</font>
			</center>
		</td>
	</tr>
</table>

蓝色卡牌：
LABORATORY 实验室
当板块被发现时，在板块上放置一个道具标记。第一个到达该板块的角色抽取一张道具牌。
LAVATORY 公共厕所
板块上初始有三个隐匿标记。角色在这个板块上被发现时，消耗板块上的标记。（道具：烟雾弹的效果同理）
WALKWAY 过道
如果该板块没被提前偷看，而是在行动中被揭示，则角色往下摔落一层。（若已经在最底层则无事发生）摔落到下面一层不视作正常进入板块，不进行进入板块的相关判定（不会触发警报，若该板块有警卫也不会丢失隐匿标记）。 另外，角色可以通过这个板块单向向下移动（只能从上往下，特定“事件”下能够双向）。
<table rules="none" align="center">
	<tr>
		<td>
			<center>
				<img src="laboratory.png" width="60%" />
				<br/>
				<font color="AAAAAA">laboratory</font>
			</center>
		</td>
		<td>
			<center>
				<img src="lavatory.png" width="60%" />
				<br/>
				<font color="AAAAAA">lavatory</font>
			</center>
		</td>
		<td>
			<center>
				<img src="walkway.png" width="60%" />
				<br/>
				<font color="AAAAAA">walkway</font>
			</center>
		</td>
	</tr>
</table>

棕色卡牌：
SECRET DOOR 秘密通道
在相邻板块，可以越过墙移动到该板块内。注意只能单向移动。警卫不能通过秘密通道移动。
SERVICE DUCT 服务/维修管道
在两个服务管道板块都被发现后，在该板块上可以花费一点行动移动到管道的另一端（即另一个服务管道板块上）。
若携带赃物：名画，携带的玩家无法使用上述两个板块的功能。
<table rules="none" align="center">
	<tr>
		<td>
			<center>
				<img src="secret_door.png" width="60%" />
				<br/>
				<font color="AAAAAA">secret_door</font>
			</center>
		</td>
		<td>
			<center>
				<img src="service_duct.png" width="60%" />
				<br/>
				<font color="AAAAAA">service_duct</font>
			</center>
		</td>
	</tr>
</table>

警报类卡牌：
CAMERA 摄像机
若建筑中有警卫在任一摄像机板块，角色进入摄像机板块将触发警报。
DETECTOR 探测器
携带道具或脏物(loot)时进入板块会触发警报
THERMO 热感应器
如果回合结束停留在这一板块，触发警报。（持有赃物“同位素”时只要经过就会触发警报）
FINGERPRINT 指纹检测 （有对应机房）
进入就会触发警报。可使用一个在机房进行黑客行动获得的骇客标记来取消这次警报。
LASER 激光检测
进入（1动）需要另外花费一动才能不触发警报。可以选择不消耗额外行动，直接触发警报；或使用黑客标记。
MOTION 运动检测
移入该板块后，若在该回合移动出此板块，触发警报。可以使用黑客标记；也可以通过下一回合再移动躲避警报。
注意，如果有触发警报，该层警卫的巡逻终点会立即改为警报点（警报详细介绍见上文），当前的巡逻地点卡会被废除。在适当时机触发警报也许可以营救队友于水火之中。
<table rules="none" align="center">
	<tr>
		<td>
			<center>
				<img src="camera.png" width="60%" />
				<br/>
				<font color="AAAAAA">camera</font>
			</center>
		</td>
		<td>
			<center>
				<img src="detector.png" width="60%" />
				<br/>
				<font color="AAAAAA">detector</font>
			</center>
		</td>
		<td>
			<center>
				<img src="thermo.png" width="60%" />
				<br/>
				<font color="AAAAAA">thermo</font>
			</center>
		</td>
				<td>
			<center>
				<img src="fingerprint.png" width="60%" />
				<br/>
				<font color="AAAAAA">fingerprint</font>
			</center>
		</td>
				<td>
			<center>
				<img src="laser.png" width="60%" />
				<br/>
				<font color="AAAAAA">laser</font>
			</center>
		</td>
				<td>
			<center>
				<img src="motion.png" width="60%" />
				<br/>
				<font color="AAAAAA">motion</font>
			</center>
		</td>
	</tr>
</table>
对应机房：
可以在对应机房中消耗一动获取一个对应骇客标记。注意三种标记与三种警报类型一一对应。
（标记：可以在触发对应类型警报时选择消耗一个标记，取消这次警报）
<table rules="none" align="center">
	<tr>
		<td>
			<center>
				<img src="hack_fingerprint.png" width="60%" />
				<br/>
				<font color="AAAAAA">hack_fingerprint</font>
			</center>
		</td>
		<td>
			<center>
				<img src="hack_laser.png" width="60%" />
				<br/>
				<font color="AAAAAA">hack_laser</font>
			</center>
		</td>
		<td>
			<center>
				<img src="hack_motion.png" width="60%" />
				<br/>
				<font color="AAAAAA">hack_motion</font>
			</center>
		</td>
	</tr>
</table>

楼梯与保险箱：
STAIRS 楼梯
通过该板块可以上楼。从楼上对应板块也能下楼。上楼视为进入上面一层的对应板块。在顶层时，当团队收集完赃物后（必须都在身上），可以通过楼梯逃脱（逃脱同样消耗一动）。
SAFE 保险箱
一动投骰子，两动加骰子。所处行列的房间（需要被揭示）右下角对应的数字都被摇出过一次后才能打开保险箱，获得一个道具卡（tool）和一个有特殊效果的赃物（loot）。
<table rules="none" align="center">
	<tr>
		<td>
			<center>
				<img src="stairs.png" width="60%" />
				<br/>
				<font color="AAAAAA">stairs</font>
			</center>
		</td>
		<td>
			<center>
				<img src="safe.png" width="60%" />
				<br/>
				<font color="AAAAAA">safe</font>
			</center>
		</td>
	</tr>
</table>

>赃物列表
><https://gggjms.blogspot.com/2016/03/burgle-bros-loot.html>
><img src="loot.png" height="30%">
>工具列表
><https://gggjms.blogspot.com/2016/03/tool-event-loot-tool-blueprints-crowbar.html>
><img src="tool.png" height="30%">
>事件列表
><https://gggjms.blogspot.com/2016/03/burgle-bros_30.html>
><img src="event.png" height="30%">
