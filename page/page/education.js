/*
 * 页面加载完成后加载数据
 * */
$(document).ready(function() {

	/*page = 0;
    
    totalPage = 10000;
	
	loadData(table,"/education/findByPage",{'number':0,'size':2});*/
	//loadData(table);
	//ajax("/education/findByPage","{'page':1}");
	
	
	/*var options = {
			url:'/education/save',
			contentType: "application/json",
			type:'post',
			dataType:'json',
			beforeSubmit:function(){
				$("#editForm").serializeJson();
			},
			//data:JSON.stringify($("#editForm").serializeJson()),
			success:function(data){}
	}*/
	
	/*valiable(page ,totalPage);*/
	
	/*$("#editBtn").click(function(){
		//console.info($("#editForm").serializeJson());
		loadData(edit,'/education/update',$("#editForm").serializeJson());
		$.ajax({
			type : "post",
			url : url,
			data : JSON.stringify($("#editForm").serializeJson()),
			dataType : 'json',
			contentType:"application/json",
			success : function(data) {
				//console.info(data);
				//var dataJson = $.parseJSON(data);
				var dataJson = eval(data);
				//console.info(dataJson);
				//console.info(dataJson.responseBody);
				table(dataJson);
			}
		});
	});*/
	/*$("#pre").bind('click',function(){
		var page = parseInt($("#page").val());
		var total = parseInt($("#totalPage").val());
		page = page -1;
		valiable(page ,totalPage);
		setPage({'number':page ,'size':2});
		return false;
	});*/
	
	/*
	 * 分页
	 * 
	 * */
	/*$("#pre").click(function(){
		page = page -1;
		valiable(page ,totalPage);
		setPage({'number':page,'size':2});
		return false;
	});
	
	$("#next").click(function(){
		//console.info("----------------------"+page);
		page =page + 1;
		valiable(page  ,totalPage);
		setPage({'number':page,'size':2});
		return false;
	});*/
	/*$("#next").bind('click',function(){
		var page = parseInt($("#page").val());
		var total = parseInt($("#totalPage").val());
		page =page + 1;
		valiable(page ,totalPage);
		setPage({'number':page ,'size':2});
		return false;
	});
	
	$("#jump").bind('keypress',function(event){
		if(event.keyCode=='13'){
			var p = $("#jump").val();
			var total = $("#totalPage").val();
			if(parseInt(p) >= parseInt(total)){
				p = total;
			}
			if(p <= 0){
				p = 1;
			}
			valiable(p ,total);
			setPage({'number':(p-1),'size':2});
			return false;
		}
	});*/

});



/*
 * 修改表格数据
 * */
//function table(dataJson) {
//	$("#tr_tplid").hide();
//	var tbody = $("tbody[id='content']");
//	$("tbody[id=content] > tr[id!=tr_tplid]").remove();
//	$.each(dataJson.responseBody.content,function(i, item) {
//		var trs = $("#tr_tplid");
//		var htmls = trs.outerHTML();
//		//alert(htmls);
//		var htmlReplace = htmls.replace("degree_0",trim(item.degree))
//			.replace(/_tplid/gi,'_'+(i+1))
//			.replace('value="v0"','value="'+item.id+'"');
//		//alert(htmlReplace);
//		$(htmlReplace).appendTo(trs.parent());
//		$("#tr_"+(i+1)).show();
//		/*tbody.append("<tr><td class='taCenter'><input type='checkbox' value='' name='' /></td><td>"
//						+ trim(item.degree)
//						+ "</td><td>显示</td><td><img class='mr15' id='d"
//						+ (i + 1)
//						+ "' src='/images/magnify.png' width='16' /><img class='mr15' id='e"
//						+ (i + 2)
//						+ "' src='/images/editor.png' width='16' /><img class='mr15' src='/images/delete.png' width='16' /><input type='hidden' value='"+trim(item.id)+"' id='id"+trim(item.id)+"'/></td></tr>");*/
//		/*console.info(item.id + "====" + item.degree + "====="
//				+ item.starttime + "======" + item.endtime);*/
//		 $("#d_"+(i + 1)+"").click(function() {
//			 
//			 
//				popWin("detail");
//			});
//			$("#e_"+(i + 1)+"").click(function() {
//				
//				var url = "/education/findById/"+$("#id_"+(i + 1)).val();
//				 $.ajax({
//					 
//					 type : "get",
//						url : url,
//						data : '',
//						success : function(data) {
//							var dataJson = eval(data);
//							for(var key in dataJson.responseBody){
//								
//								if($("#"+key).length!=0){
//									//console.info($("#"+key));
//									$("#"+key).val(dataJson.responseBody[key]);
//								}
//								
//							}
//						}
//				 });
//				
//				popWin("detail2");
//			});
//			$("#de_"+(i + 1)+"").click(function(){
//				
//				var url = "/education/delete/"+$("#id"+(i + 1)).val();
//				 $.ajax({
//					 
//					 type : "post",
//						url : url,
//						data : '',
//						success : function(data) {
//							var dataJson = eval(data);
//						}
//				 });
//				
//			});
//	});
//	//$("#tr_0").remove();
//	//$("#tr_0").hide();
//}

/*
 * 去除字符串空格
 * */
/*function trim(value){
	return $.trim(value);
}*/

/*
 * 加载数据
 * */
//function loadData(fun,url,datas){
//	$.ajax({
//
//		type : "post",
//		url : url,
//		data : JSON.stringify(datas),
//		dataType : 'json',
//		contentType:"application/json",
//		success : function(data) {
//			//console.info(data);
//			//var dataJson = $.parseJSON(data);
//			var dataJson = eval(data);
//			//console.info(dataJson);
//			//console.info(dataJson.responseBody);
//			page = dataJson.responseBody.number;
//			totalPage = dataJson.responseBody.totalPages;
//			$("#page").val(page);
//			$("#totalPage").val(totalPage);
//			fun(dataJson);
//		}
//
//	});
//
//}


function edit(dataJson){
	
	//var dataJson = eval(data);
	for(var key in dataJson.responseBody){
		console.info($("#"+key));
		if(!$("#"+key)){
			$("#"+key).val(dataJson.responseBody[key]);
		}
		
	}
	/*$("#title").val(dataJson.responseBody.degree);
	$("#starttime").val(dataJson.responseBody.starttime);
	$("#endtime").val(dataJson.responseBody.endtime);
	$("#classreview").val(dataJson.responseBody.classreview);
	$("#id").val(dataJson.responseBody.id);*/
		
}

/*
 * 分页函数
 * 
 * */
//function setPage(page){
//	loadData(table,"/education/findByPage",page);
//	
//}


/*
 * 
 * 分页的pre,next可用不可用
 * 
 **/
/*function valiable(page ,totalPage){
	var firstLi = $("ul.pagination").children(":first");
	var lastLi = $("ul.pagination").children(":last");
	
	if(page <= 0){
		page = 0;
		$("#pre").unbind("click");
		firstLi.attr("class","disabled");
		
	}else{
		firstLi.attr("class","");
	}
	
	if(page >= (totalPage-1) ){
		page = totalPage;
		$("#next").unbind("click");
		lastLi.attr("class","disabled");
	}else{
		lastLi.attr("class","");
	}
}*/
 


/*
 * 执行页面替换数据
 * 
 * */
function table(dataJson) {
	$("#tr_tplid").hide();
	var tbody = $("tbody[id='content']");
	$("tbody[id=content] > tr[id!=tr_tplid]").remove();
	
	//for(var d in dataJson.responseBody){}
	
	$.each(dataJson.responseBody.content,function(i, item) {
		var trs = $("#tr_tplid");
		var htmls = trs.outerHTML();
		for(var key in item){
			//htmls = htmls.replace(new  RegExp("tpl_"+key,'gi'),item[key]);
			//alert(htmls.replace(new  RegExp("tpl_rspersonaluserid($)",'gi'),item[key]));
			
			htmls = htmls.replace(new RegExp("<td>tpl_"+key+"</td>","gi"),"<td>"+item[key]+"</td>");
		}
		var htmlReplace = htmls
			.replace(/_tplid/gi,'_'+(i+1))
			.replace('value="v0"','value="'+item.id+'"');
		
		$(htmlReplace).appendTo(trs.parent());
		$("#tr_"+(i+1)).show();
		
		$("#d_"+(i + 1)+"").click(function() {
			 
			 
			popWin("detail");
		});
		$("#e_"+(i + 1)+"").click(function() {
			
			var url = "/education/exper/findById/"+$("#id_"+(i + 1)).val();
			 $.ajax({
				 
				 type : "get",
					url : url,
					data : '',
					success : function(data) {
						var dataJson = eval(data);
						for(var key in dataJson.responseBody){
							
							if($("#edit_"+key).length!=0){
								//console.info($("#"+key));
								$("#edit_"+key).val(dataJson.responseBody[key]);
							}
							
						}
					}
			 });
			
			popWin("detail2");
		});
		$("#de_"+(i + 1)+"").click(function(){
			//console.info($("#de_"+(i + 1)));
			
			var url = "/education/exper/delete/"+$("#id_"+(i + 1)).val();
			 $.ajax({
				 
				 type : "post",
					url : url,
					data : '',
					success : function(data) {
						var dataJson = eval(data);
						init();
						//$("#de_"+(i + 1)).parents("#tr_"+(i + 1)).hide();
					}
			 	});
			
			});
		
	});
		
}


/*
 * 测试，初始化
 * */
$(document).ready(function(){
	init({
		url: '/education/exper/searchByPage',//发送请求的地址
        currentPage: 0,
        pageSize: 1,	
        pageShow:5,//,
        totalPage:1000,
        totalElements:1000,
        //param:{'number':0,'size':2},
        param:{'number':0,'size':2},
        
        complete:table
	});
	
	$("#searchBtn").click(function(){
		//console.info(JSON.stringify({'number':0,'size':1,'param':$("#search").serializeJson()}));
		init({
			url: '/education/exper/searchByPage',//发送请求的地址
	        param:$("#search").serializeJson(),
	        
		});
		return false;
	});
	
	$("#editBtn").click(function(){
		//alert($("#editForm").serializeJson());
		$.ajax({
			type : "post",
			url : '/education/exper/update',
			data : JSON.stringify($("#editForm").serializeJson()),
			dataType : 'json',
			contentType:"application/json",
			success : function(data) {
				//console.info(data);
				//var dataJson = $.parseJSON(data);
				var dataJson = eval(data);
				//console.info(dataJson);
				//console.info(dataJson.responseBody);
				//table(dataJson);
				init({
					url: '/education/exper/searchByPage',//发送请求的地址
			        param:$("#search").serializeJson(),
			        
				});
				//$("#detail2").hide();
			}
		});
	});
	
	$("#addBtn").click(function(){
		popWin("detail3");
	});
	
	$("#addBtn2").click(function(){
		$.ajax({
			type : "post",
			url : '/education/exper/save',
			data : JSON.stringify($("#addForm").serializeJson()),
			dataType : 'json',
			contentType:"application/json",
			success : function(data) {
				//console.info(data);
				//var dataJson = $.parseJSON(data);
				var dataJson = eval(data);
				//console.info(dataJson);
				//console.info(dataJson.responseBody);
				//table(dataJson);
				init({
					url: '/education/exper/searchByPage',//发送请求的地址
			        param:$("#search").serializeJson(),
			        
				});
				//$("#detail2").hide();
			}
		});
	});
	
});
