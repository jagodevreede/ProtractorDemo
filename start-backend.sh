./gradlew clean build export
mkdir run/generated/distributions/executable/config
cp run/config/*.xml run/generated/distributions/executable/config/
cd run/generated/distributions/executable/
java -javaagent:../../../../cnf/jacoco/jacocoagent.jar=destfile=../../../../jacoco-it.exec,append=false -jar local.jar
