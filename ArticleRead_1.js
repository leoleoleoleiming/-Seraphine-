/*
时间：2020/11/19
功能：阅读第一篇文章
原理：寻找文字点击控件，寻找播放控件，获取坐标计算点击
声明：代码仅供交流使用
*/
sleep(3000);
//排除系统自动刷新干扰
click("综合");
//滑到"综合"
sleep(4000);
var target = className("android.widget.TextView").text("播报").findOnce(0);
click(target.bounds().centerX(), target.bounds().centerY()-70);
//点击第一篇文章
sleep(2000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);
//反系统作弊检测
sleep(1000);
setScreenMetrics(1080, 2340);
swipe(530, 1990, 575, 420, 2000);
//反系统作弊检测
sleep(1000);
toast("正在收藏");
var star = className("android.widget.FrameLayout").clickable(true).findOne();
click(star.bounds().centerX()+150,star.bounds().centerY());
//收藏文章并提示进度

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

sleep(2000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);
//反作弊检测

var sendButton = text("欢迎发表你的观点").findOne();
sendButton.click();
//寻找文本输入控件
setText("团结合作，共创辉煌");
//在控件中输入"团结合作，共创辉煌"
var sendButton = text("发布").findOne();
sendButton.click();
//寻找发布控件并执行发布

sleep(5000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);
//反系统作弊检测

sleep(35000);
setScreenMetrics(1080, 2340);
click(75, 175);
//执行返回主页

setTimeout(function(){ engines.execScriptFile("ArticleRead_2.js");}, 3000);
//调用第二个脚本
toast("正在进行第二篇文章阅读");
//程序进度提醒

