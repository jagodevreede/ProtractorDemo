# Luminis DevCon 2016 - Automated Testing of your Angular Front-end

* org.demo.protractor.security - Java project for authentication
* org.demo.protractor.ui - Angular 1 frontend with e2e tests
* org.demo.protractor.ui.ng2 - Angular 2 frontend with e2e tests
* org.demo.protractor.upload - Java project for file upload functionality

Required software:
* NodeJS
* npm
* bower

Initial setup:
* cd run/config
* copy email.xml.example email.xml
* nano email.xml (fill in smtp-user and smtp-password values)
* cd ../../org.demo.protractor.ui
* npm install
* bower install
* cd ..

Launching the backend:
* ./start-backend.sh

Launching the Todo application:
* cd org.demo.protractor.ui
* gulp

Launching the complete e2e test suite:
* cd org.demo.protractor.ui
* gulp e2e

Launching a single e2e test spec:
* cd org.demo.protractor.ui
* gulp e2e --spec=4
