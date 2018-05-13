# Beacon - angular解决方案

**说明**

1 该项目前端主要使用Angular框架,自主改造,使结构上更适合大型项目开发;

2 项目构建使用gulp,实现：
- 项目初始化
	- 浏览器自动刷新
	- css预编译
	- 代码压缩合并版本号
	- 自动引入bower资源
	- angular缓存等
- 本地mock数据
- js语法检测
- jsdoc文档
- deploy脚本

3 本地联调线上API接口 - 通过nginx实现接口转发

## 一 本地环境(mock假数据)

### 1 软件安装

- 安装 Node.js
- 安装 tnpm
- 安装 n
- 安装 gulp + bower

#### 安装 Node.js

	// Mac 系统
	// 安装 homebrew
	见 : https://brew.sh/index_zh-cn.html
	// 安装Node.js
	brew install node
	
	// Windows系统
	见 : https://nodejs.org/en/

#### 安装 tnpm

	// 全局安装
	npm install tnpm -g --registry=http://r.npm.alibaba-inc.com

参考 : [tnpm](http://gitlab.alibaba-inc.com/node/tnpm)

#### 安装 n

	// 安装 n
	tnpm install -g n
	
	// 安装并使用 Node.js LTS 版本
	n lts
	n 回车
	选择 LTS 版本

参考 : [n](https://github.com/tj/n)

#### 安装 gulp + bower

	// 全局安装
	tnpm install -g gulp bower


### 2 配置

#### 安装依赖 gulp + bower

	// 在项目目录下
	tnpm install
	bower install

#### js语法检测

复制”error-center\src\main\frontend\assets\githook”

粘贴覆盖到”error-center/.git/hooks”

### 3 启动

#### 用WebStorm启动gulp任务

![](https://img.alicdn.com/tfs/TB1VsbNXZLJ8KJjy0FnXXcFDpXa-374-579.png)

![](https://img.alicdn.com/tfs/TB1I6fWX4rI8KJjy0FpXXb5hVXa-1092-702.png)

![](https://img.alicdn.com/tfs/TB1KjHVX8fH8KJjy1XbXXbLdXXa-500-242.png)

*如上图显示失效,见assets/readme/gulp_configuration_add.png、assets/readme/gulp_configuration_mock.png以及assets/readme/gulp_run_mock.png*

#### 或用命令行启动gulp任务

	PORT=3500 MOCK=true HTML5MODEL=true gulp serve-dev(使用本地假数据)

### 4 项目说明
#### mock数据

mock文件夹为本地假数据;

api.js为总入文件, 用来配置 “请求url” 与 “假数据文件路径”.

![](https://gw.alicdn.com/tfs/TB1DpwWinlYBeNjSszcXXbwhFXa-1330-711.png)

*如上图显示失效, 见assets/readme/local_mock_method.png*



## 二 本地环境(联调真实数据)

### 1 软件安装

#### 安装 nginx (1.10.1)

	// mac 安装
	brew install nginx
	
	// 其他系统
	http://nginx.org/en/download.html

### 2 配置

#### 配置 nginx
##### 1.frontend nginx配置

    server {
    	listen 80;
    	server_name dev.pc-error-center-pre.aliyun.com;
    
    
    	location / {
    		try_files $uri $uri/ /index.html;	# angular html5Model 模式
    		proxy_buffering off;
    		proxy_pass http://127.0.0.1:3500;
    	}
    	location ~ .*\.(json|gif|jpg|png|htm|html|css|js|flv|ico|swf|eot|svg|ttf|woff|pdf)(.*) {
    		proxy_buffering off;
    		proxy_pass http://127.0.0.1:3500;
    	}
    	location /error-center/ {
    		proxy_buffering off;
    		proxy_pass https://error-center-pre.aliyun.com/error-center/;
    		proxy_set_header NC-PASS "true";
    	}
    }
##### 2.frontend-lite(iframe嵌入)
      server {
	    listen 80;
	    server_name dev.pc-lite-error-center-pre.aliyun.com;
	    location / {
		   try_files $uri $uri/ /index.html;	# angular html5Model 模式
		   proxy_buffering off;
		   proxy_pass http://127.0.0.1:3600;
	   }
	   location ~ .*\.(json|gif|jpg|png|htm|html|css|js|flv|ico|swf|eot|svg|ttf|woff|pdf)(.*) {
		   proxy_buffering off;
		   proxy_pass http://127.0.0.1:3600;
	   }
	   location /error-center/ {
		   proxy_buffering off;
		   proxy_pass https://error-center-pre.aliyun.com/error-center/;
		   proxy_set_header NC-PASS "true";
	   }
     }


#### 配置 hosts

    ##### error-center
		127.0.0.1  dev.pc-error-center-pre.aliyun.com
		127.0.0.1  dev.pc-lite-error-center-pre.aliyun.com

#### 引入nginx配置文件
	include servers/dev.pc-error-center-pre.aliyun.com.conf;
	include servers/dev.pc-lite-error-center-pre.aliyun.com.conf;

### 3 启动

#### 用WebStorm启动gulp任务

![](https://img.alicdn.com/tfs/TB1VsbNXZLJ8KJjy0FnXXcFDpXa-374-579.png)

![](https://gw.alicdn.com/tfs/TB1kZlviDJYBeNjy1zeXXahzVXa-1099-707.png)

![](https://img.alicdn.com/tfs/TB1bOfQX3vD8KJjy0FlXXagBFXa-532-249.png)

*如上图显示失效,见assets/readme/gulp_configuration_add.png、assets/readme/gulp_configuration.png以及assets/readme/gulp_run.png*

#### 或用命令行启动gulp任务

	PORT=3500 MOCK=false gulp serve-dev

#### 启动nginx

	// mac 版本
	nginx
	nginx -s stop
	nginx -s reload
	
	// 命令文档见
	http://nginx.org/en/docs/switches.html


## 三 部署验收(测试+预发+线上环境)

- Aone操作
- 发布流程

### 1.新建aone变更
#### a.红框为需要填写部分(聆听PC 所属项目：阿里云错误中心 所属应用：error-center)
![aone新建变更](https://gw.alicdn.com/tfs/TB1w6nuikyWBuNjy0FpXXassXXa-1230-700.png)
#### b.刷新页面，提交待发布，进入aone发布
![完成aone新建变更](https://gw.alicdn.com/tfs/TB1wVTVib9YBuNjy0FgXXcxcXXa-1426-202.png)

### 2.aone发布(日常和预发)
#### a.提交发布
![提交发布](https://gw.alicdn.com/tfs/TB1mBLniaSWBuNjSsrbXXa0mVXa-1418-587.png)
#### b.部署中（不可退出）
![部署中](https://img.alicdn.com/tfs/TB1y9.aihGYBuNjy0FnXXX5lpXa-1412-432.png)
#### c.部署完成
![部署完成](https://gw.alicdn.com/tfs/TB1zm7YimtYBeNjSspaXXaOOFXa-1403-437.png)
##### <font color=#aaa>注：此时可验证成</font>

### 3.cdn发布
####a. FE-CDN项目下 pull最新代码
####b. 将静态资源拷贝到fe-cdn-build下
![静态资源替换](https://gw.alicdn.com/tfs/TB1_5TLib5YBuNjSspoXXbeNFXa-1597-371.png)
#### c.提交(add commit)
#### d.查看当前版本号(git tag)</font>
#### e.发布到日常环境(git push origin master:daily/版本号)</font>
#### f.发布到线上环境(git tag publish/版本号  git push origin publish/版本号)，先打tag再push
#### g.验证(http://assets.alibaba-inc.com/)
#### h.访问地址(https://g.alicdn.com/AliyunCompetitor/FE-CDN/<font color=#f00>3.4.7</font>/<font color=#f00>error-center</font>/rev-manifest.json)
*红色部分需改成对应版本号和项目名*
##### 注：步骤h时可以访问任意文件，当访问正常时表面发布成功

### 4.引用地址替换
#### 将WEB-INF中的index.html中的css及js引用地址前加“//g.alicdn.com/AliyunCompetitor/FE-CDN/<font color=#f00>版本号</font>/<font color=#f00>项目名</font>/”
![添加css地址](https://gw.alicdn.com/tfs/TB1OyAhioR1BeNjy0FmXXb0wVXa-1239-121.png)
![添加js地址](https://gw.alicdn.com/tfs/TB1LR8oiDJYBeNjy1zeXXahzVXa-1051-122.png)


### 5.提交并部署代码
#### 部署成功后在Network中验证引用是否为cdn地址
### 6.正式发布
#### a.提交审核、日常验证、代码审核(点击查看可以看到审核单，长时间未回复时可将链接发给审核人)
![提交审核](https://gw.alicdn.com/tfs/TB1LtvKih1YBuNjy1zcXXbNcXXa-1427-251.png)
##### 提交安全审核
![安全审核](https://img.alicdn.com/tfs/TB1TrkESFXXXXXVXVXXXXXXXXXX-1259-634.png)
#### b.审核都通过后，进入正式
![正式部署](https://img.alicdn.com/tfs/TB12WkQSFXXXXX6XXXXXXXXXXXX-1280-777.png)
#### c.部署暂停后确认无误，恢复部署
![正式部署](https://img.alicdn.com/tfs/TB1FpkISFXXXXXbXpXXXXXXXXXX-1002-624.jpg)

### 7.finish release
#### a.pull最新代码(其中包括master和develop，because release会合到这两个分支上)
#### b.finish release（直接留版本号）
#### c.push develop（because gitflow只是把分支合到本地了，要推到线上）
#### d.push origin tag 版本号
#### e.push master（because 同2）
#### f.清理分支（git branch -D 分支 --- 删除本地分支；git push origin --delete 分支 --- 删除远端分支）

## 四 开发相关资料

### 1.需求相关
- [Demo中心地址](https://udemo.alibaba-inc.com/projects/26742?spm=a1zdx.8526377.0.0.2a1b29d90gUUEQ)
- [需求地址](https://workitem.aone.alibaba-inc.com/project/673442/req?akProjectId=673442)

### 2.测试相关 
- [测试环境](http://error-center.aliyun.test)
- [测试环境 - iframe嵌入](http://error-center-lite.aliyun.test/status/search?Keyword=err)
- [预发环境](https://error-center-pre.aliyun.com)
- [预发环境 - iframe嵌入](https://error-center-lite-pre.aliyun.com/status/search?Keyword=err)
- [线上环境](https://error-center.aliyun.com)
- [线上环境 - iframe嵌入](https://error-center-lite.aliyun.com/status/search?Keyword=err)

### 3.[Bug提交地址](https://workitem.aone.alibaba-inc.com/project/673442/issue)


## 五 架构说明

- 目录说明
- 配置说明
	- bootstrap自定义样式
	- A+埋点配置
	- 聆听配置项
	- 官网登录配置项
	- debug 模式

### 1 目录说明

![](https://img.alicdn.com/tfs/TB1bs24X4TI8KJjSspiXXbM4FXa-414-715.png)

*如上图显示失效, 见assets/readme/structure.png*

### 2 配置说明

#### 2.1 bootstrap自定义样式

解压 assets/bootstrap/bootstrap.zip

将生成的css、js、fonts文件夹copy到 src/client/bower_components/bootstrap/dist下

#### 2.2 A+埋点配置

见 utils.js - aplus部分

[埋点方法](http://log.alibaba-inc.com/log/info.htm?type=2395&id=19)

#### 2.3	 错误中心配置项

见 utils.js - configErrorCenter部分

#### 2.4 官网登录配置项

见 utils.js - configAliyun部分

#### 2.5 debug 模式

开关 - config.js -> debug: true
会控制 logger.js -> logger.info()的显隐


## 六 todo

- 单元测试
- 持续集成
- 优化
    - 初始化 hideSplash 遮罩层
    - layout/shell.js, vm.isCurrent()性能问题
