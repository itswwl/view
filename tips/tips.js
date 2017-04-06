;

(function($){
	$.checkInfo = function(tipArr){
		var flag = true;
		/*
		 * 判断某个字符串是否为空
		 * 
		 * */
		$.isBlank = function(obj){
		    return(!obj || $.trim(obj) === "");
		 };
		
		var tip = {
			side:3,  //1,2,3,4 分别代表 上右下左
			msg:'请填写证书类型',//'上方弹出消息，3秒后自动消失，鼠标悬浮时，自动延时',//tips的文本内容
			color:'#FFF',//文字颜色，默认为白色
			bg:'#FD9720',//背景色，默认为红色
			time:2,//默认为2 自动关闭时间 单位为秒 0为不关闭 （点击提示也可以关闭）
			x:0,// 默认为0 横向偏移 正数向右偏移 负数向左偏移
			y:0 // 默认为0 纵向偏移 正数向下偏移 负数向上偏移	
		};
		
		$.each(tipArr,function(i,item){
			var t = $.extend({},tip,item[2]);
			var tip = " " ;
			var value = $("#"+item[0]+"").val();
			if($.isBlank(value)){
				tip = t.msg + tip;
				
				flag = false;
			}
			
			if(item[1].length!=0){
				//console.info(item[1]);
				$.each(item[1],function(k,data){
					//console.info(data.reg+"=="+data.tip);
					var regExp = new RegExp(data.reg,"gi");
					if(regExp.test(value)==false){
						tip += data.tip+",";
						flag = false;
					}
				});
			}
			t.msg = tip.substring(0,tip.length-1);
			if(flag == false){
				$("#"+item[0]+"").tips(t);
			}

		});
		return flag;
	}

	})(jQuery);
	
	表单中要求非空不能提交，切提示错误信息
	
	html页面中引入此文件，，之前引入jquery-1.7.js,jquery.tips.js，，
	
	参数说明，第二维第二个参数可选，第二维第三个参数验证非空
	var tipArr = [[
		"id"
	],[{
		reg:,'正则表达式1'
		tip :'提示1'
	},{
		reg:,'正则表达式1'
		tip :'提示1'
	}],[{
		side:3,//显示位置1,2,3,4上下左右，可选
		msg:'提示信息'
	}]];
	
	
	var tipArr = [
              ["add_rspersonalUserID",[],{
            	  side:3,
            	  msg:'用户名不能为空'
              }]
              ,["add_qualification",[],{
            	  side:3,
            	  msg:'学历不能为空'
              }]
              ,["add_degree",[],{
            	  msg:'学位不能为空'
              }]
              ,["add_qualificationType",[],{
            	  msg:'学历类型不能为空'
              }]
              ,["add_startTime",[],{
            	  msg:'入学时间不能为空' 
              }]
              ,["add_endTime",[],{
            	  msg:'毕业时间不能为空'
              }]
              ,["add_leavlTime",[],{
            	  msg:'离校时间不能为空'
              }]
              ,["add_schoolID",[],{
            	  msg:'学校不能为空'
              }]
              ,["add_collegeID",[],{
            	  msg:'学院不能为空'
              }]
              ,["add_departMentID",[],{
            	  msg:'系不能为空'
              }]
              ,["add_scienceID",[],{
            	  msg:'专业不能为空'
              }]
              ,["add_duty",[],{
            	  msg:'职位不能为空'
              }]
              ,["add_classReview",[],{
            	  msg:'班评不能为空'
              }]
              ,["add_schoolReview",[],{
            	  msg:'校评不能为空'
              }]
              ,["add_reterence",[],{
            	  msg:'证明人不能为空'
              }]
              ,["add_reterencePhone",[
					{
						reg:/^((0\d{2,3}\d{7,8})|(1[3584]\d{9}))$/,
						tip:"电话号码格式不正确"
					}                    
                  ],{
            	  msg:'证明人电话不能为空'
              }]
		];
	使用方式$.checkInfo(tipArr);
	传入一个数组，