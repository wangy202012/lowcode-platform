FROM openjdk:8u342-jdk
ARG JAR_FILE
ADD ${JAR_FILE} app.jar
EXPOSE 18080
ENTRYPOINT ["java","-jar","/app.jar"]