;

(function($){
	$.checkInfo = function(tipArr){
		var flag = true;
		/*
		 * �ж�ĳ���ַ����Ƿ�Ϊ��
		 * 
		 * */
		$.isBlank = function(obj){
		    return(!obj || $.trim(obj) === "");
		 };
		
		var tip = {
			side:3,  //1,2,3,4 �ֱ���� ��������
			msg:'����д֤������',//'�Ϸ�������Ϣ��3����Զ���ʧ���������ʱ���Զ���ʱ',//tips���ı�����
			color:'#FFF',//������ɫ��Ĭ��Ϊ��ɫ
			bg:'#FD9720',//����ɫ��Ĭ��Ϊ��ɫ
			time:2,//Ĭ��Ϊ2 �Զ��ر�ʱ�� ��λΪ�� 0Ϊ���ر� �������ʾҲ���Թرգ�
			x:0,// Ĭ��Ϊ0 ����ƫ�� ��������ƫ�� ��������ƫ��
			y:0 // Ĭ��Ϊ0 ����ƫ�� ��������ƫ�� ��������ƫ��	
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
	
	����Ҫ��ǿղ����ύ������ʾ������Ϣ
	
	htmlҳ����������ļ�����֮ǰ����jquery-1.7.js,jquery.tips.js����
	
	����˵�����ڶ�ά�ڶ���������ѡ���ڶ�ά������������֤�ǿ�
	var tipArr = [[
		"id"
	],[{
		reg:,'������ʽ1'
		tip :'��ʾ1'
	},{
		reg:,'������ʽ1'
		tip :'��ʾ1'
	}],[{
		side:3,//��ʾλ��1,2,3,4�������ң���ѡ
		msg:'��ʾ��Ϣ'
	}]];
	
	
	var tipArr = [
              ["add_rspersonalUserID",[],{
            	  side:3,
            	  msg:'�û�������Ϊ��'
              }]
              ,["add_qualification",[],{
            	  side:3,
            	  msg:'ѧ������Ϊ��'
              }]
              ,["add_degree",[],{
            	  msg:'ѧλ����Ϊ��'
              }]
              ,["add_qualificationType",[],{
            	  msg:'ѧ�����Ͳ���Ϊ��'
              }]
              ,["add_startTime",[],{
            	  msg:'��ѧʱ�䲻��Ϊ��' 
              }]
              ,["add_endTime",[],{
            	  msg:'��ҵʱ�䲻��Ϊ��'
              }]
              ,["add_leavlTime",[],{
            	  msg:'��Уʱ�䲻��Ϊ��'
              }]
              ,["add_schoolID",[],{
            	  msg:'ѧУ����Ϊ��'
              }]
              ,["add_collegeID",[],{
            	  msg:'ѧԺ����Ϊ��'
              }]
              ,["add_departMentID",[],{
            	  msg:'ϵ����Ϊ��'
              }]
              ,["add_scienceID",[],{
            	  msg:'רҵ����Ϊ��'
              }]
              ,["add_duty",[],{
            	  msg:'ְλ����Ϊ��'
              }]
              ,["add_classReview",[],{
            	  msg:'��������Ϊ��'
              }]
              ,["add_schoolReview",[],{
            	  msg:'У������Ϊ��'
              }]
              ,["add_reterence",[],{
            	  msg:'֤���˲���Ϊ��'
              }]
              ,["add_reterencePhone",[
					{
						reg:/^((0\d{2,3}\d{7,8})|(1[3584]\d{9}))$/,
						tip:"�绰�����ʽ����ȷ"
					}                    
                  ],{
            	  msg:'֤���˵绰����Ϊ��'
              }]
		];
	ʹ�÷�ʽ$.checkInfo(tipArr);
	����һ�����飬