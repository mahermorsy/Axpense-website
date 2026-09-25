#!/usr/bin/env bash
# Creates an EF Core migration in Axpense.Infrastructure/Persistence/Migrations.
# Usage: ./scripts/add-migration.sh InitialCreate
set -euo pipefail
cd "$(dirname "$0")/.."
dotnet tool restore >/dev/null 2>&1 || dotnet tool install --global dotnet-ef --version 8.0.10
dotnet ef migrations add "${1:?migration name}" \
  --project src/Axpense.Infrastructure \
  --startup-project src/Axpense.Api \
  --output-dir Persistence/Migrations
