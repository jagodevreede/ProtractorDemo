package org.demo.protractor.security.api;

public interface EmailService {
	void sendEmail(String address, String subject, String body);
}
