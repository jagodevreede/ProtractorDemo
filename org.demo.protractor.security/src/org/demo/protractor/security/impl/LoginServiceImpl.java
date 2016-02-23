package org.demo.protractor.security.impl;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response.Status;

import org.apache.felix.dm.annotation.api.Component;
import org.demo.protractor.security.api.LoginService;
import org.demo.protractor.security.api.User;

@Component
public class LoginServiceImpl implements LoginService {
	
	private Map<String, User> users = new HashMap<>();
	
	@Override
	public String login(String username, String password) {
		if (users.containsKey(username.toLowerCase())) {
			User user = users.get(username.toLowerCase());
			if (password.equals(user.password)) {
				if (user.token == null) {
					user.token = "T" + System.currentTimeMillis();
				}
				return user.token;
			}
		}
		throw new WebApplicationException(Status.FORBIDDEN);
	}

	@Override
	public void verify(String token) {
		throw new WebApplicationException(Status.FORBIDDEN);
	}

	@Override
	public void createUser(User user) {
		users.put(user.username.toLowerCase(), user);
	}

}
