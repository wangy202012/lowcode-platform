FROM openjdk:8u342-jdk
ARG JAR_FILE
ADD ${JAR_FILE} app.jar
EXPOSE 18000
ENTRYPOINT ["java","-jar","/app.jar"]