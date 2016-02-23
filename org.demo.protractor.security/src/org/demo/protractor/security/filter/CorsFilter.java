package org.demo.protractor.security.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.felix.dm.annotation.api.Component;
import org.apache.felix.dm.annotation.api.Property;

@Component(properties=@Property(name="pattern", values=".*"))
public class CorsFilter implements Filter{

	@Override
	public void destroy() {
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException,
			ServletException {
		HttpServletRequest request = (HttpServletRequest)req;
		HttpServletResponse response = (HttpServletResponse)res;
		
		
		if(!request.getPathInfo().contains("atmosphere")) {
			response.addHeader("Access-Control-Allow-Origin", "http://localhost:63340");
			
		}
		
		response.addHeader("Access-Control-Expose-Headers", "X-Cache-Date, X-Atmosphere-tracking-id");
		response.addHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Atmosphere-Framework, X-Cache-Date, X-Atmosphere-tracking-id, X-Atmosphere-Transport");
        response.setHeader("Access-Control-Allow-Credentials","true");
        response.setHeader("Access-Control-Allow-Methods",
            "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        
        chain.doFilter(req, response);
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

}
