;
(function($){
	
	/*
	 * 简单的分页对象
	 * 
	 * */
	$.fn.simplePage = function(os){
		
		var options = {
				url: '/education/findByPage',//发送请求的地址
		        currentPage: 1,//当前页
		        pageSize: 2,//每页记录数	
		        pageShow:7,//,显示页码个数
		        totalPage:1000,//总页数
		        totalElements:1000,//总记录数
		        
		        complete:null//数据加载成功后，执行替换数据
		        
		};
		
		var o = $.extend({},options, os);
		/*$.page.loadData(o);
		$.page.jump(o);*/
		
	};
	
	/*
	 * 
	 * 
	 * */
	$.page = {
			
		
		
	
	
		
		
		/*
		 * 为上一页添加监听
		 * */
	
			
	};
	
	/*function Page()
	{
		this.init=init;
		this.jump=jump;
	}*/
	//$.page.loadData(o);
	
	
	
	
})(jQuery);


/*
 * 加载请求的页面数据
 * */	
function loadData(o){
	$.ajax({
		url:o.url,
		data:JSON.stringify({'number':o.currentPage,'size':o.pageSize,'param':o.param}),
		dataType:'json',
		type:'post',
		contentType:"application/json",
		success:function(data){
			var dataJson = eval(data);
			//console.info(dataJson);
			var page = dataJson.responseBody.number;
			var totalPage = dataJson.responseBody.totalPages;
			var totalElements = dataJson.responseBody.totalElements;
			o.currentPage = page;
			o.totalPage = totalPage;
			o.totalElements = totalElements;
			$("#page").val(page);
			$("#totalPage").val(totalPage);
			replacePageNum(o);
			createNum(o);
			handler(o);
			isCan(o);
			//$.page.jump(o);
			o.complete(dataJson);
		}
	});
}


/*
 * 替换左侧显示的总记录数，以及总页数
 * */
function replacePageNum(o){
	$(".darkred").text(o.totalElements);//把总页数替换
	$(".totalPage").text(o.totalPage);//把总页数替换
}

/*
 * 动态创建右侧的页码,根据当前页为第一个页码
 * */
function createNum(o){
	var ul = $(".pagination");
	ul.html();//清空分页
	limit(o);
	var html = '<li><a aria-label="Previous" href="#" id="pre"><b aria-hidden="true">&lt;&lt;</b></a></li>';
	var cur = o.currentPage;
	/*if((o.totalPage - o.currentPage)> o.pageShow){
		for(var i = 0 ; i < o.pageShow ; i++){
			var li = '<li><a href="#">'+(cur + i + 1)+'</a></li>';
			html += li;
		}
	}else{
		for(var i = 0 ; i < (o.totalPage - o.currentPage) ; i++){
			var li = '<li><a href="#">'+(cur + i + 1)+'</a></li>';
			html += li;
		}
	}*/
	
	for(var i = o.start ; i <= o.end ; i++){
		var li = '';
		if(i ==( o.currentPage + 1)){
			li = '<li class="active"><a href="#">'+i+'</a></li>';
		}else{
			li = '<li><a href="#">'+i+'</a></li>';
		}
		
		html += li;
	}
	
	html += '<li><a aria-label="Next" href="#" id="next"><b aria-hidden="true">&gt;&gt;</b></a></li>';
	ul.html(html);
	/*if(cur == 0){
		cur += 1;
	}else{
		cur = 1;
	}
	//alert(cur);
	$("ul.pagination li:eq("+cur+")").addClass("active");*/
	
}


/*
 * 
 * 页码添加click处理事件
 * 
 * */
function handler(o){
	var ul = $("ul.pagination > li > a");
	
	ul.each(function(i,item){
		if(i!=0 && i!=ul.length){
			$(this).unbind("click").bind("click",function(){
				o.currentPage = ($(this).text()-1);
				loadData(o);
				return false;
			});
		}
		
		if(i == 0){
			$(this).unbind("click").bind("click",function(){
				o.currentPage = (parseInt($("li.active > a").text()) - 2);
				if((o.currentPage - 1) < 0){
					o.currentPage = 0;
				}
				loadData(o);
				return false;
			});
		}
		
		if(i == ul.length-1){
			$(this).unbind("click").bind("click",function(){
				o.currentPage = parseInt($("li.active > a").text()) ;
				if(o.currentPage >= o.totalPage){
					o.currentPage = o.totalPage - 1;
				}
				loadData(o);
				return false;
			});
		}
		
	});
}

/*
 * 计算开始起止位置
 * */
function limit(o){
	//当前页小于1，则当前页为1
	o.currentPage = o.currentPage < 0 ? 1 : o.currentPage;
	//当前页大于总页数，则当前页为总页数
	o.currentPage = o.currentPage > o.totalPage ? o.totalPage : o.currentPage;
	
	//计算开始位置
	var start = o.currentPage - Math.floor(o.pageShow / 2);
	start = start < 1 ? 1 : start;
	
	//计算结束位置
	var end = o.currentPage + Math.floor(o.pageShow / 2);
	end = end > o.totalPage ? o.totalPage : end;
	
	//当前显示的页码个数不够最大页码个数，进行左右调整
	var cur = end - start + 1;
	//进行左调整
	if(cur < o.pageShow && start > 1){
		start = start - (o.pageShow - cur);
		start = start < 1 ? 1 : start ;
		cur = end - start + 1;
	}
	
	//进行右调整
	if(cur < o.pageShow && end < o.totalPage){
		end = end + (o.pageShow - cur);
		end = end > o.totalPage ? o.totalPage : end;
	}
	
	//开始位置，结束位置
	o.start = start;
	o.end = end;
	
}

/*
 * 判断前一页，后一页可用不可用
 * 
 * */
function isCan(o){
	var curPage = o.currentPage;
	var totalPage = o.totalPage;
	var first = $("ul.pagination").children(":first");
	var last = $("ul.pagination").children(":last");
	if(curPage <= 0){
		o.currentPage = 0;
		first.attr("class","disabled");
	}else{
		first.attr("class","");
	}
	
	if(curPage>=(totalPage-1)){
		o.currentPage = totalPage;
		last.attr("class","disabled");
	}else{
		last.attr("class","");
	}
}

/*
 * 
 * 跳转框处理函数
 * */
function jump(o){
	
	$("#jump").bind('keypress',function(event){
		if(event.keyCode==13){
			var p = parseInt($("#jump").val());
			var total = o.totalPage - 1;
			if(p >= total){
				o.currentPage = total;
			}else if(p <= 0){
				o.currentPage = 0;
			}else{
				o.currentPage = p;
			}
			loadData(o);
			return false;
		}
	});
}//,

function init(os){
	/*
	 * 执行ajax请求，加载数据，测试ajax请求
	 * */
	var options = {
			url: '/education/searchByPage', //发送请求的地址
	        currentPage: 0,     			//当前页
	        pageSize: 2,					//每页数量
	        pageShow:5,						//页码个数
	        totalPage:1000,     			//总页数
	        totalElements:1000,				//总记录数
	        start:0,						//页码开始位置
	        end:5,							//页码结束位置
	        param:{'number':0,'size':2},	//需要提交的参数，number:当前页,size:每页记录数
	        
	        complete:table					//填充数据的函数
		};
	var o = $.extend({},options, os);
	jump(o);
	loadData(o);
	return false;
}









