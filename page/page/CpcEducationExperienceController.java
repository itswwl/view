package cn.ld.cpc.bk;


import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import cn.ld.cpc.common.model.CpcEducationExperience;
import cn.ld.cpc.common.model.example.UserExample;
import cn.ld.cpc.common.model.sys.RestClient;
import cn.ld.cpc.common.model.sys.RestJpaPage;
import cn.ld.cpc.common.model.sys.ResultHandle;
import cn.ld.cpc.common.model.sys.ResultHandleImpl;

/**
 * 
 * {"id":350,"degree":"复旦大学","endtime":"2016-04-18","starttime":"2016-04-18"}
 * 
 * @author Administrator
 *
 */
@RequestMapping("/education/exper")
@RestController
public class CpcEducationExperienceController {
	
	private static Logger logger = Logger.getLogger(CpcEducationExperienceController.class);
	
	@RequestMapping("/save")
	public ResultHandle<CpcEducationExperience> save(@RequestBody CpcEducationExperience cpcEducationExperience) throws JsonParseException, JsonMappingException, IOException{
		logger.info("================"+cpcEducationExperience.getDuty()+"+++++"+cpcEducationExperience.getReterence());
		RestClient restClient=new RestClient();
		ResultHandle<CpcEducationExperience> resultHandle=restClient.postObject("/education/experience/save", cpcEducationExperience);
		return resultHandle;
	}
	
	
	@RequestMapping(value = "findById/{id}")
	public ResultHandle<CpcEducationExperience> findById( @PathVariable("id")/*@RequestParam(name="id",required=true,defaultValue="50")*/Long id){
		RestClient restClient=new RestClient();
		ResultHandle<CpcEducationExperience> resultHandle=restClient.getObject("/education/experience/findById/{id}", id);
		return resultHandle;
	}
	
	@RequestMapping("/update")
	public ResultHandle<CpcEducationExperience> update(@RequestBody CpcEducationExperience cpcEducationExperience) {
		logger.info("================"+cpcEducationExperience.getDuty()+"+++++"+cpcEducationExperience.getReterence()+"===="+cpcEducationExperience.getStarttime()+"++++++"+cpcEducationExperience.getId());
		RestClient restClient=new RestClient();
		ResultHandle<CpcEducationExperience> resultHandle=restClient.postObject("/education/experience/update", cpcEducationExperience);
		return resultHandle;
	}
	
	@RequestMapping("/delete/{id}")
	public ResultHandle<String> delete(@PathVariable("id") Long id){
		RestClient restClient=new RestClient();
		ResultHandle<String> resultHandle = restClient.delete("/education/experience/delete/{id}", id);
		return resultHandle;
	}
	
	@RequestMapping("/findByPage")
	public ResultHandle<RestJpaPage<CpcEducationExperience>>  findByPage(/*@RequestParam(defaultValue="1")long number,@RequestParam(defaultValue="2")long size*/@RequestBody RestJpaPage<CpcEducationExperience> restJpaPage){
		
		//logger.info("============================="+restJpaPage.getNumber()+"++++++"+restJpaPage.getSize());
		
		RestClient restClient=new RestClient();
		
        ResultHandle<RestJpaPage<CpcEducationExperience>> resultHandle=restClient.postObject("/education/experience/findByPage", restJpaPage);
		return resultHandle;
	}
	
	@RequestMapping(value = "/searchByPage" , method = RequestMethod.POST)
	public ResultHandle<Map<String,Object>> searchByPage(@RequestBody String jsonData) throws JsonParseException, JsonMappingException, IOException{
		//logger.info("======="+jsonData);
		ObjectMapper objectMapper = new ObjectMapper();
		Map<String,Object> map = objectMapper.readValue(jsonData, Map.class);
		
		
		
		RestClient restClient=new RestClient();
		
		ResultHandle<Map<String,Object>> resultHandle=restClient.postObject("/education/experience/searchByPage", map);
		//logger.info(map.get("number")+"======="+map.get("size")+"==="+map.get("param"));
		
		return resultHandle;
	}
	
}
