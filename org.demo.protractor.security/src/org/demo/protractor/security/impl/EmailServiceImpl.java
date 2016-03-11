package org.demo.protractor.security.impl;

import org.apache.felix.dm.annotation.api.Component;
import org.demo.protractor.security.api.EmailService;

@Component
public class EmailServiceImpl implements EmailService {
	@Override
	public void sendEmail(String address, String subject, String body) {
		System.out.println("\nSending email to: " + address);
		System.out.println("Subject: " + subject);
		System.out.println("Body:\n" + body);
	}
}
