# Use the appropriate base image for your application
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the project file and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the remaining source code files
COPY . .

# Build the application
RUN dotnet publish -c Release -o out

# Use the appropriate base image for hosting your application
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime

# Set the working directory inside the container
WORKDIR /app

# Copy the published output from the build stage
COPY --from=build /app/out .

# Expose the port on which your application listens
EXPOSE 80

# Set the entry point for the container
ENTRYPOINT ["dotnet", "api.dll"]
