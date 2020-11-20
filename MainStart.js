/*
时间：2020/11/09
功能：开始确认界面
原理：弹窗提示用户注意事项，确认则开始调用脚本，取消则退出脚本
声明：代码仅供交流使用
*/
if(auto.waitFor())
    {
        sleep(1000);
        toast("请打开软件的无障碍权限");
        
    }
//判断是否打开无障碍授权，否则弹到设置页面

events.observeKey();
//启用按键监听,按下音量下键关闭所有脚本运行
events.onKeyDown("volume_down", function(event){
    toast("正在结束运行")
    //文本进度反馈
    engines.stopAllAndToast()
    //停止运行所以脚本并显示停止脚本数量
});


var start = confirm("注意事项\n①使用该应用前确保网络通畅\n②使用该应用前请暂时关闭QQ或者微信的弹窗通知\n③按下音量下键可停止脚本运行");
if(start){  //用户确认则
    toast("正在启动学习强国") ;
}else{
    exit()   //反之退出脚本
}

var appName = ("学习强国");
if(appName){
    launchApp(appName);
    //启动学习强国
}
else{
    exit()
    toast("未找到学习强国APP，请下载安装后重试")
}
sleep(2000);
toast("每日首次登陆");
sleep(1500);
toast("正在进行第一篇文章阅读");
//输出进度提示
setTimeout(function(){ engines.execScriptFile("ArticleRead_1.js");},3000);
//3秒后调用第一个脚本
