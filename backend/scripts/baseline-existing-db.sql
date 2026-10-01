-- Use ONLY on a database that was created earlier by EnsureCreated (before migrations existed).
-- 1) Adds the two pricing tables if missing.
-- 2) Marks the InitialCreate migration as already applied, so the API's MigrateAsync
--    does not try to recreate tables that already exist.
-- Safe to run more than once. Data in existing tables is not touched.
-- After running it, start the API: it seeds pricing from Seed/pricing.json because the tables are empty.

SET XACT_ABORT ON;
BEGIN TRANSACTION;

IF OBJECT_ID(N'[PricingCurrencies]') IS NULL
BEGIN
    CREATE TABLE [PricingCurrencies] (
        [Id] uniqueidentifier NOT NULL,
        [Code] nvarchar(3) NOT NULL,
        [Symbol] nvarchar(8) NOT NULL,
        [SymbolAr] nvarchar(8) NOT NULL,
        [NameEn] nvarchar(60) NOT NULL,
        [NameAr] nvarchar(60) NOT NULL,
        [Flag] nvarchar(16) NOT NULL,
        [Decimals] int NOT NULL,
        [AnnualDiscountPercent] decimal(5,2) NOT NULL,
        [IsDefault] bit NOT NULL,
        [SortOrder] int NOT NULL,
        [IsActive] bit NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [CreatedBy] nvarchar(120) NULL,
        [UpdatedAt] datetime2 NULL,
        [UpdatedBy] nvarchar(120) NULL,
        [IsDeleted] bit NOT NULL,
        [DeletedAt] datetime2 NULL,
        CONSTRAINT [PK_PricingCurrencies] PRIMARY KEY ([Id])
    );
    CREATE UNIQUE INDEX [IX_PricingCurrencies_Code] ON [PricingCurrencies] ([Code]) WHERE [IsDeleted] = 0;
    CREATE INDEX [IX_PricingCurrencies_IsDeleted] ON [PricingCurrencies] ([IsDeleted]);
END;

IF OBJECT_ID(N'[PricingTiers]') IS NULL
BEGIN
    CREATE TABLE [PricingTiers] (
        [Id] uniqueidentifier NOT NULL,
        [CurrencyCode] nvarchar(3) NOT NULL,
        [MinVehicles] int NOT NULL,
        [MaxVehicles] int NULL,
        [MonthlyPricePerVehicle] decimal(18,3) NULL,
        [ExampleVehicles] int NULL,
        [IsActive] bit NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [CreatedBy] nvarchar(120) NULL,
        [UpdatedAt] datetime2 NULL,
        [UpdatedBy] nvarchar(120) NULL,
        [IsDeleted] bit NOT NULL,
        [DeletedAt] datetime2 NULL,
        CONSTRAINT [PK_PricingTiers] PRIMARY KEY ([Id])
    );
    CREATE INDEX [IX_PricingTiers_CurrencyCode_MinVehicles] ON [PricingTiers] ([CurrencyCode], [MinVehicles]);
    CREATE INDEX [IX_PricingTiers_IsDeleted] ON [PricingTiers] ([IsDeleted]);
END;

IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );

IF NOT EXISTS (SELECT 1 FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20261001073709_InitialCreate')
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20261001073709_InitialCreate', N'8.0.10');

COMMIT;
