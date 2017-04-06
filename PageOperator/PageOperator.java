package cn.ld.cpc.common.model.sys;

import java.util.Map;

import org.springframework.data.domain.Page;

/**
 * 
 * 生成分页页码html
 * 
 * @author Administrator
 */
public class PageOperator {
	
	private int curPage;//当前页
	private long totalRecords;//总记录数
	private int totalPage;//总页数
	private int pageSize;//每页记录数
	
	private int pageShow = 5;//导航页码个数
	private Integer[] pageShowNums ;//存储导航页码 

	private boolean isFirstPage = false;//是否为第一页
	private boolean isLastPage = false;//是否是最后一页
	private boolean havePreviousPage = false;//是否有上一页
	private boolean haveNextPage = false;//是否有下一页
	
	/*public static String getPager(String url,int sum,int currnum,int length, String condtion,String language)  {
		
		return null;
	}*/
	
	public String getPager(String url,/*Page<T> page*/Map<String,Object> page, String condtion,String language) throws Exception {
		try {
			curPage = (int)page.get("number");									//curpage
			totalRecords = (int)page.get("totalElements");						//totalRecords
			totalPage = (int)page.get("totalPages");							//(totalRecords -1)/pageSize+1
			pageSize = (int)page.get("size");									//pageSize
			
			judgePageBoudary();										//判断边界
			
			limit();                                                    //计算页码起始结束位置
			
			//生成html代码
			StringBuffer pageFoot = new StringBuffer();
			pageFoot.append("<div class=\"pagNumber fl\">");
			pageFoot.append("共<span class=\"darkred\">");
			pageFoot.append(totalRecords);
			pageFoot.append("</span>条记录，共<span class=\"totalPage darkred\">"+totalPage);
			pageFoot.append("</span>页<input type=\"text\" value=\"\" name=\"\" class=\"inputNumber\" id=\"jump\" />跳转</div><ul class=\"pagination ri\">");
			
			//是否有前一页按钮
			if(havePreviousPage){
				pageFoot.append("<li><a aria-label=\"Previous\" href=\"#\" id=\"pre\"><b aria-hidden=\"true\">&lt;&lt;</b></a></li>");
			}
			
			for(int i = 0;i < pageShowNums.length ; i++){
				if(curPage == (pageShowNums[i] - 1)){
					pageFoot.append("<li class=\"active\"><a href=\"#\">"+pageShowNums[i]+"</a></li>");
				}else{
					pageFoot.append("<li ><a href=\"#\">"+pageShowNums[i]+"</a></li>");
				}
			}
			
			//是否有下一页按钮
			if(haveNextPage){
				pageFoot.append("<li><a aria-label=\"Next\" href=\"#\" id=\"next\"><b aria-hidden=\"true\">&gt;&gt;</b></a></li>");
			}
			
			//补充完整html标签
			pageFoot.append("</ul><input type=\"hidden\" id=\"page\" name=\"number\" value=\""+curPage+"\" />");
			
			return pageFoot.toString();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/*
	 * 判定页面边界
	 * 
	 * */
	private void judgePageBoudary(/*Page<T> page*/){
		isFirstPage = curPage == 0 ;               								 // page.isFirst();
		isLastPage = curPage == (totalPage - 1) && (curPage != 0) ;              // page.isLast();
		havePreviousPage = curPage > 0;     									 //	page.hasPrevious();
		haveNextPage = curPage < (totalPage - 1);            					 // page.hasNext();
	}
	
	/*
	 * 计算页码起始位置
	 * */
	private void limit(){
				
		// 当前页小于0，则当前页为0
		curPage = curPage < 0 ? 0 : curPage;
		// 当前页大于总页数，则当前页为总页数
		curPage = curPage > totalPage ?totalPage : curPage;
		
		// 计算开始位置
		int start = curPage - (pageShow / 2);
		start = start < 0 ? 0 : start;
		
		// 计算结束位置
		int end = curPage + (pageShow / 2);
		end = end > totalPage ?totalPage : end;
		
		// 当前显示的页码个数不够最大页码个数，进行左右调整
		int cur = end - start ;
		
		// 进行左调整
		if(cur < pageShow && start > 0){
			start = start - (pageShow - cur);
			start = start < 0 ? 0 : start;
			cur = end - start ;
		}
		
		// 进行右调整
		if(cur < pageShow && end < totalPage ){
			end = end + (pageShow - cur);
			end = end > totalPage ?totalPage : end;
		}
		pageShowNums = new Integer[end - start];
		for(int i = 0 ; i < pageShowNums.length ;i++){
			pageShowNums[i] = ++start;
		}
		
	}

	public int getCurPage() {
		return curPage;
	}

	public void setCurPage(int curPage) {
		this.curPage = curPage;
	}

	public long getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(long totalRecords) {
		this.totalRecords = totalRecords;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageShow() {
		return pageShow;
	}

	public void setPageShow(int pageShow) {
		this.pageShow = pageShow;
	}

	public Integer[] getPageShowNums() {
		return pageShowNums;
	}

	public void setPageShowNums(Integer[] pageShowNums) {
		this.pageShowNums = pageShowNums;
	}

	public boolean isFirstPage() {
		return isFirstPage;
	}

	public void setFirstPage(boolean isFirstPage) {
		this.isFirstPage = isFirstPage;
	}

	public boolean isLastPage() {
		return isLastPage;
	}

	public void setLastPage(boolean isLastPage) {
		this.isLastPage = isLastPage;
	}

	public boolean isHavePreviousPage() {
		return havePreviousPage;
	}

	public void setHavePreviousPage(boolean havePreviousPage) {
		this.havePreviousPage = havePreviousPage;
	}

	public boolean isHaveNextPage() {
		return haveNextPage;
	}

	public void setHaveNextPage(boolean haveNextPage) {
		this.haveNextPage = haveNextPage;
	}
	
	
}
