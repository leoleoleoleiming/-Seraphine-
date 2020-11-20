"ui";

var color = "#009688";

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="Seraphine"/>   
                <tabs id="tabs"/>
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    <vertical h = "800dp">
                        
                        <text textSize = "28sp" textStyle ="bold">前提须知</text>
                        <text textColor = "#FF0000" textSize="16sp">1-请手动给软件悬浮窗权限（一次永久权限）</text> 
                        <text textColor = "#FF0000" textSize="16sp">2-使用时给与软件无障碍权限（需要每次手动打开）</text> 
                        <text textColor = "#FF0000" textSize="16sp">3-使用软件功能前确保后台未运行学习强国，如果运行了关闭即可</text> 
                        <text textSize = "28sp" textStyle ="bold">注意事项</text>
                        <text text="1-使用该软件尽量确保关闭QQ等软件的弹窗" textColor="black" textSize="16sp"/> 
                        <text text="2-检查更新软件功能没写，更新需要手动更新" textColor="black" textSize="16sp"/>                         
                        <text text="3-按下音量下键可以中途退出脚本运行" textColor="red" textSize="16sp"/>
                        <text textSize = "28sp" textStyle ="bold">软件功能</text>
                        <text text="1-现在基本上一套流程下来是28分（大概18min，我没计算过）+ （你需要做的）加上手动答题差不很轻松40分+（大概5min）" textColor="black" textSize="16sp"/>
                        <text text="2-后续完善30分精准刷，然后就是完全版大概40分+" textColor="black" textSize="16sp"/>
                        <text text="3-精准版起码也得等我考完试，完全版怎么也得寒假才可能写出来" textColor="black" textSize="16sp"/>
                        <text text="4-软件启动在左侧栏第一个项目" textColor="red" textSize="16sp"/>
                        <text textSize = "28sp" textStyle ="bold">声明</text>
                        <text text="1-有BUG可以反馈给我，我看看我头发多不多" textColor="black" textSize="16sp"/>
                        <text text="2-软件仅供学习交流使用，后续源码会发布到Git上面进行开源" textColor="black" textSize="16sp"/>
                        <text text="3-如果你拿到该资源，请于24小时内卸载，软件仅学习交流使用，如果利用该软件进行非法牟利等活动，本人概不负责" textColor="red" textSize="16sp"/>

                    </vertical>
                </frame>
                 
                <frame>
                    <vertical h = "800dp">
                    <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>   
                        <text text="无障碍服务打开教程" textColor="red" textSize="30sp"/>
                        <img w="360" h="500" scaleType="fitXY" src="file://2.png"/>
                        
                    </vertical> 

                </frame>
                <frame>
                    <text text="博客位置" textColor="green" textSize="16sp"/>
                    <webview w="360" id="myweb" h="650"/>
                
                </frame>
            </viewpager>
        </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="420" scaleType="fitXY" src="file://1.png"/>
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
                </horizontal>
            </list>
        </vertical>
    </drawer>
);

ui.autoService.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if(checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if(!checked && auto.service != null){
        auto.service.disableSelf();
    }
});

ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.myweb.loadUrl("http://leoleiming.cn");
//网址栏

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    menu.add("联系作者");
    menu.add("优化说明");
    menu.add("软件关于");
    menu.add("退出软件");
    
});
//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        
        case "联系作者":
            toast("本人精通C# unity3D 3Dmax Aegisub PS PR AE的单词的拼写，精通window开关机和硬件的暴力安装");
            var qq号 = "738232585";
            app.startActivity({
            action: "android.intent.action.VIEW",
            data: "mqq://im/chat?chat_type=wpa&version=1&src_type=web&uin=" + qq号,
            packageName: "com.tencent.mobileqq",
            })
            break;
        case "优化说明":
            alert("优化说明:\n更改点击方式为文字识别+控件识别，单线程全自动\n1-重写底层架构，现在基本上是28分全\n2-优化UI交互\n3-功能拓展,新增无障碍开启按钮\n4-修复功能不可多次运行\n5-修复需要手动开启学习强国非wifi视频自动播放\n补充：\n近期可能会安排增加“随机评论”“定时任务”“自动答题");
            break;
        case "软件关于":
            alert("关于：\n这差不就是这个UI不会再改了，可能后续版本加悬浮窗控制，暂时停止更新，目前将就着能用，因为我要考试了，考神保佑，后面我再慢慢优化\n软件版本："+app.versionName+"\n版本类型: " + app.versionCode);
            break;
        case "退出软件":
            ui.finish();
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["软件说明", "无障碍说明", "作者博客"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
  {
      title: "启动科技强国",
      icon: "@drawable/ic_android_black_48dp"
  },
  {
      title: "设置定时任务",
      icon: "@drawable/ic_settings_black_48dp"
  },
  {
      title: "检查更新",
      icon: "@drawable/ic_favorite_black_48dp"
  },
  {
      title: "退出",
      icon: "@drawable/ic_exit_to_app_black_48dp"
  }
]);

ui.menu.on("item_click", item => {
    switch(item.title){
        case "启动科技强国":
            toast(" 正在启动科技强国 ")
            setTimeout(function(){ engines.execScriptFile("MainStart.js");}, 1000);
            break;
        
        case "设置定时任务":
            toast("别点了，这个功能在计划，还没开发呢")
            break;
        
        case "检查更新":
            toast("等我考完试了，再写，考神保佑，不挂科")
            break;
        
        case "退出":
            ui.finish();
            break;
    }
})