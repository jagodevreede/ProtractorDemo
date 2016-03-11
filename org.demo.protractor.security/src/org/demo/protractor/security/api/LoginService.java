package org.demo.protractor.security.api;

public interface LoginService {
	String COOKIE_NAME = "ptoken";
	/** Return a token for the user */
	String login(String username, String password);
	/** Throws a web exception unauthorized if the token is invalid */
	void verify(String token);
	void createUser(User user);
	void logout(String token);
	User getLoggedInUser(String token);
	String activate(String username, String activationtoken);
}
