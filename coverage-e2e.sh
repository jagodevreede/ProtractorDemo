cd org.demo.protractor.ui
gulp e2e
cd ..
echo "Kill the app"
read
ant
open jacoco-report/site/jacoco/index.html
