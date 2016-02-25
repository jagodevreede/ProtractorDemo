package org.demo.protractor.security.impl;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

import org.apache.felix.dm.annotation.api.Component;
import org.apache.felix.dm.annotation.api.ServiceDependency;
import org.demo.protractor.security.api.LoginService;
import org.demo.protractor.security.api.User;

@Component
@Path("/login")
public class LoginResource {
	
	@Context
    private HttpServletRequest request;
	
	@ServiceDependency
	private volatile LoginService loginService;

	@POST
	public Response login(User user) {
		String token = loginService.login(user.username, user.password);
		return Response.ok().cookie(new NewCookie(LoginService.COOKIE_NAME, token)).build();
	}

	@DELETE
	public Response logout() {
		return Response.ok().cookie(new NewCookie(LoginService.COOKIE_NAME, null)).build();
	}
	
	public void register(User user) {
		// Prevent users to bypass stuff
		user.verified = false;
		user.token = null;
		loginService.createUser(user);
	}
}
