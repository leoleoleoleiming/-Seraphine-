sleep(2000);
id("comm_head_xuexi_mine").findOne().click();
sleep(1500);
//点击订阅栏目
id("my_subscribe_tv").findOne().click();
sleep(1500);
//点击添加栏目
className("android.widget.TextView").text("添加").findOne().click();
sleep(1500);
/*
var target = className("android.widget.TextView").text("学习平台").findOnce(0);
click(target.bounds().centerX(), target.bounds().centerY());
*/
setScreenMetrics(1080, 2340);
while(className("android.widget.ImageView").depth(15).desc("订阅").findOnce(0)==null)
{
swipe(582, 2020, 582, 1307, 1000);
sleep(500);
  if(click("你已经看到我的底线了")!=false)
  {
  toastLog("已经全部订阅完毕,无可用订阅");
  sleep(1000);
  back();
  sleep(500);
  back();
  sleep(500);
  back();
  engines.execScriptFile("VideoWatch.js");
  sleep(600000000);
  }
}   
var button1 = className("android.widget.ImageView").depth(15).desc("订阅").findOnce(0);
click(button1.bounds().centerX(), button1.bounds().centerY());
toastLog("已订阅1/2");
sleep(1000);
back();
sleep(1000);
className("android.widget.TextView").text("添加").findOne().click();
/*
var target1 = className("android.widget.TextView").text("学习平台").findOnce(0);
click(target1.bounds().centerX(), target1.bounds().centerY());
*/
sleep(1000);
setScreenMetrics(1080, 2340);
while(className("android.widget.ImageView").depth(15).desc("订阅").findOnce(0)==null)
{ 
  swipe(582, 2020, 582, 1307, 1000);
  sleep(500);
  if(click("你已经看到我的底线了")!=false)
  {
  toastLog("已经全部订阅完毕,无可用订阅");
  sleep(1000);
  back();
  sleep(500);
  back();
  sleep(500);
  back();
  engines.execScriptFile("VideoWatch.js");
  sleep(600000000);
  }
}   
var button2 = className("android.widget.ImageView").depth(15).desc("订阅").findOnce(0);
setScreenMetrics(1080, 2340);
if(button2.bounds().centerX()>device.width || button2.bounds().centerY()>device.height)
{
  swipe(582, 2020, 582, 1435, 1000);
  sleep(1000);
}
sleep(700);
var button3 = className("android.widget.ImageView").depth(15).desc("订阅").findOnce(0);
click(button3.bounds().centerX(), button3.bounds().centerY());
toastLog("已订阅2/2");
sleep(1000);

sleep(1000);
back();
sleep(500);
back();
sleep(500);
back();
engines.execScriptFile("ArticleRead_1.js");
//3秒后调用第4个脚本
toastLog("正在进行文章阅读任务");
//输出文本进度