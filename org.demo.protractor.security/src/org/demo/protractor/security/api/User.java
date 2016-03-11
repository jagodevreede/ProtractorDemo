package org.demo.protractor.security.api;

public class User {
	public String username;
	public String password;
	public String email;
	public boolean active;
	public String activationToken;
	public String token;
	
	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", email=" + email + ", active=" + active
				+ ", activationToken=" + activationToken + ", token=" + token + "]";
	}
}
