package org.demo.protractor.security.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
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
		HttpServletResponse response = (HttpServletResponse)res;

		response.addHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
		
		response.addHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Cache-Date");
        response.setHeader("Access-Control-Allow-Credentials","true");
        response.setHeader("Access-Control-Allow-Methods",
            "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        
        chain.doFilter(req, response);
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

}
