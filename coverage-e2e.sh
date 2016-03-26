cd org.demo.protractor.ui
gulp e2e --spec=3
cd ..
echo "Kill the app"
read
ant
open jacoco-report/site/jacoco/index.html
