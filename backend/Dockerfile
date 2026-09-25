# ---------- Build ----------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Restore first (cached layer) — only project files.
COPY Directory.Build.props global.json Axpense.sln ./
COPY src/Axpense.Domain/Axpense.Domain.csproj src/Axpense.Domain/
COPY src/Axpense.Core/Axpense.Core.csproj src/Axpense.Core/
COPY src/Axpense.Infrastructure/Axpense.Infrastructure.csproj src/Axpense.Infrastructure/
COPY src/Axpense.Api/Axpense.Api.csproj src/Axpense.Api/
COPY tests/Axpense.Tests/Axpense.Tests.csproj tests/Axpense.Tests/
RUN dotnet restore Axpense.sln

COPY src/ src/
COPY tests/ tests/

# ---------- Test (docker build --target test .) ----------
FROM build AS test
RUN dotnet test tests/Axpense.Tests/Axpense.Tests.csproj --no-restore -c Release

# ---------- Publish ----------
FROM build AS publish
RUN dotnet publish src/Axpense.Api/Axpense.Api.csproj --no-restore -c Release -o /app/publish /p:UseAppHost=false

# ---------- Runtime ----------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:8080 \
    ASPNETCORE_ENVIRONMENT=Production \
    DOTNET_RUNNING_IN_CONTAINER=true
EXPOSE 8080
COPY --from=publish /app/publish .
# Non-root user shipped with the .NET 8 images
USER $APP_UID
ENTRYPOINT ["dotnet", "Axpense.Api.dll"]
