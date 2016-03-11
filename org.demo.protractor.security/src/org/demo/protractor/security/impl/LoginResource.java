package org.demo.protractor.security.impl;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

import org.apache.felix.dm.annotation.api.Component;
import org.apache.felix.dm.annotation.api.ServiceDependency;
import org.demo.protractor.security.api.LoginService;
import org.demo.protractor.security.api.User;

@Component(provides=Object.class)
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
	
	@GET
	@Produces("application/json")
	public User getLoggedInUser() {
		return loginService.getLoggedInUser(request.getParameter(LoginService.COOKIE_NAME));
	}
	
	@PUT
	public void register(User user) {
		// Prevent users from injecting stuff
		user.verified = false;
		user.token = null;
		
		loginService.createUser(user);
	}
}
