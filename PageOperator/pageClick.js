function userexampe_page_event()
{
var ul = $("ul.pagination > li > a");

/* $("#next").click(function(){
	loadData(parseInt($("li.active > a").text()));
	return false;
});
$("#pre").click(function(){
	loadData(parseInt($("li.active > a").text())-2);
	return false;
});
ul.not("#pre").not("#next").each(function(){
	$(this).click(function(){
		loadData(parseInt($(this).text())-1);
		return false;
	});
	
});
$("#searchBtn").click(function(){
	loadData(parseInt($("li.active > a").text())-1);
	return false;
}); */

$("#jump").bind("keypress",function(event){
	if(event.keyCode == 13){
		var p = parseInt($("#jump").val())-1;
		var totalPage = parseInt($($("span.totalPage")[0]).text());
		console.info(totalPage);
		if(p < 0){
			p = 0;
		}else if(p >= totalPage){
			p = totalPage-1;
		}
		userexampe_loadPageData(p);
		return false;
	}
});
ul.each(function(i,item){
	//console.info($(this).text());
	switch($(this).text()){
		case "\<\<":
			$(this).unbind("click").bind("click",function(){
				//console.info($(this).text()+"\<\<\<\<"+$("li.active > a").text());
				userexampe_loadPageData(parseInt($("li.active > a").text())-2);
				return false;
			})
		break;
		case "\>\>":
			$(this).unbind("click").bind("click",function(){
				//console.info($(this).text()+"\>\>\>\>\>"+$("li.active > a").text());
				userexampe_loadPageData(parseInt($("li.active > a").text()));
				return false;
			})
		break;
		default :
			$(this).unbind("click").bind("click",function(){
				//console.info($(this).text()+"++"+$("li.active > a").text());
				userexampe_loadPageData(parseInt($(this).text())-1);
				return false;
			});
		
	};
}); 
	
}
