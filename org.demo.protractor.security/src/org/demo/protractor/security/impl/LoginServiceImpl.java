package org.demo.protractor.security.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response.Status;

import org.amdatu.email.EmailService;
import org.amdatu.email.Message;
import org.apache.felix.dm.annotation.api.Component;
import org.apache.felix.dm.annotation.api.ServiceDependency;
import org.demo.protractor.security.api.LoginService;
import org.demo.protractor.security.api.User;

@Component
public class LoginServiceImpl implements LoginService {
	@ServiceDependency
	private volatile EmailService emailService;
	
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
		getLoggedInUser(token);
	}
	
	@Override
	public void logout(String token) {
		User user = getLoggedInUser(token);
		user.token = null;
	}
	
	@Override
	public void createUser(User user) {
		// Prevent users from injecting stuff
		user.active = false;
		user.token = null;
	
		user.activationToken = UUID.randomUUID().toString();

		users.put(user.username.toLowerCase(), user);
		
		Message message = Message.Builder.create()
				.from("protractor@demo.org")
				.recipient(user.email)
				.subject("Please activate your account")
				.htmlBody("Thanks for signing up! Please go to the following link to activate your account:<br/><br/>"
						+ "<a id='activation-link-protractor-demo' href='http://127.0.0.1:8080/login/activate?username=" + user.username + "&activationtoken=" + user.activationToken + "'>Activate</a><br/><br/>"
						+ "If you did not sign up, please ignore this email.").build();
		
		emailService.send(message);
	}

	@Override
	public User getLoggedInUser(String token) {
		if(token == null) {
			throw new WebApplicationException(Status.BAD_REQUEST);
		}
			
		return users.values().stream().filter(u -> token.equals(u.token)).findAny().orElseThrow(() -> new WebApplicationException(Status.NOT_FOUND));
	}

	@Override
	public String activate(String username, String activationToken) {
		User user = users.get(username.toLowerCase());
		if (activationToken.equals(user.activationToken)) {
			user.active = true;
			user.activationToken = null;
			if (user.token == null) {
				user.token = "T" + System.currentTimeMillis();
			}
			return user.token;
		}
		throw new WebApplicationException(Status.UNAUTHORIZED);
	}

}
