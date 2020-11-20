/*
时间：2020/11/19
功能：阅读第六篇文章
原理：寻找文字点击控件，寻找播放控件，获取坐标计算点击
声明：代码仅供交流使用
*/
sleep(2000);
//排除系统自动刷新干扰
var target = className("android.widget.TextView").text("播报").findOnce(1);
click(target.bounds().centerX(), target.bounds().centerY()-70);
//点击第六篇文章
sleep(2000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);
//反系统作弊检测
sleep(1000);
setScreenMetrics(1080, 2340);
swipe(530, 1990, 575, 420, 2000);
//反系统作弊检测

/*
sleep(1000);
toast("正在分享");
var star = className("android.widget.FrameLayout").clickable(true).findOne();
click(star.bounds().centerX()+300,star.bounds().centerY());
//点击分享
sleep(1500);
click("分享到");
//点击分享到学习强国
sleep(1500);
var share_part = id("enterprise_session_icon").findOne();
click(share_part.bounds().centerX(),share_part.bounds().centerY());
//选择组织群群聊
sleep(1500);
click("发送",1);
//点击发生，完成分享
*/

sleep(1000);
setScreenMetrics(1080, 2340);
swipe(575, 420, 530, 1990,  2000);
//反系统作弊检测

sleep(5000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);
//反系统作弊检测

sleep(40000);
setScreenMetrics(1080, 2340);
click(75, 175);
//执行返回主页

setTimeout(function(){ engines.execScriptFile("ArticleRead_7.js");}, 3000);
//调用第七个脚本
toast("正在进行备用文章阅读");
//程序进度提醒

