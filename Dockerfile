# Imagen base con Maven y JDK
FROM maven:3.8-openjdk-17 AS build

# Copiar el código fuente
WORKDIR /app
COPY . .

# Construir la aplicación
RUN mvn clean package -DskipTests

# Imagen final
FROM openjdk:17-jdk-slim

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Variables de ambiente por defecto
ENV SPRING_DATASOURCE_URL=jdbc:postgresql://host.docker.internal:5432/administracion_usuarios
ENV SPRING_DATASOURCE_USERNAME=postgres
ENV SPRING_DATASOURCE_PASSWORD=Contra12345

ENTRYPOINT ["java", "-jar", "app.jar"]