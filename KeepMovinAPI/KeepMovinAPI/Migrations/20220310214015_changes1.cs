using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class changes1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("69f04b15-491c-445d-aefa-1fe3fd6807e1"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("9d027442-74c1-4667-aa6f-aa37909aaff9"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("43ae5130-e24b-4717-94da-43a219a9291b"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("45892b26-587b-4020-b971-96dbf17eadd6"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("dc750e09-9bf4-4706-b244-1e7e0b7b8a91"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("2ca8c5a7-0518-4aca-8765-d63c96accb8f"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("3d0ed395-1579-4e6d-9377-209c1a92faf6"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("4bf6c8f3-8b1c-459b-9516-eccbe188f386"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("8d4e3197-9aea-441b-9971-4f8cfb52cf30"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("07ca4a94-86ea-40e6-a90d-cf8a382bb07c"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("08623cd6-f90a-4bc2-9a4f-fda9a975f77d"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("1b4a6fa9-61a8-439b-adf2-a42c2cfb31c1"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("2119d905-1d96-42cc-81f9-0ab5b2f0184f"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("2ace9493-b1cd-40f2-8faa-dec6c547a4c3"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("9cf3da12-caeb-430a-b669-0a126f4babd5"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("a23da8e7-750f-4f14-91d1-906da1a509da"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("bf6ba2f9-d8bf-48bb-97bf-515c666c06ba"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("c47b697b-5d22-4825-ae33-dba2fe88d9f5"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("dee8d71a-d525-4d1e-9d8b-72774adc0e83"));

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "User",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "User",
                type: "nvarchar(60)",
                maxLength: 60,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20);

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("e4ecbd0d-7982-4fb3-b881-46d23d7eeb8a"), "Professional" },
                    { new Guid("fc71e529-dabc-4697-9f98-ac4dbcc925a7"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("a6e0b2fa-18db-4931-b87a-e3b6cf48f0c2"), "Beginner" },
                    { new Guid("634c2032-198f-469d-b6c0-e3d09c2ecf06"), "Intermediate" },
                    { new Guid("cca30aaf-0f7f-4976-a62b-ca5a22b24a7c"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("aa1580bc-aba6-4b6d-8f0b-46d8de8afe26"), "Krakow", "Poland", "30-389" },
                    { new Guid("afae0a11-cb54-4e88-bb57-68db9636e0bc"), "Warszawa", "Poland", "30-389" },
                    { new Guid("4114c874-e72e-4854-815a-fd120eaa236a"), "Gdansk", "Poland", "30-389" },
                    { new Guid("5748862f-c8ab-4af2-a775-84633607285d"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("080bb22c-65a5-4073-8095-2c3902531df6"), "Volleyball" },
                    { new Guid("cd8c6936-92dd-4fdb-accd-01c294fb56c6"), "Running" },
                    { new Guid("c0e3e634-898c-4585-8526-f544d130beb7"), "Fishing" },
                    { new Guid("e9065179-d343-432a-8df1-a099d1e4996d"), "Climbing" },
                    { new Guid("4ebb308a-c6cd-4a98-9ffc-8246fd4f9b0b"), "Baseball" },
                    { new Guid("88edef09-d57a-4583-8ecb-0dae73670554"), "Cycling" },
                    { new Guid("2717e83d-ce6d-4758-94ee-bfe46af35004"), "Football" },
                    { new Guid("968c2efb-1831-4d54-ba5a-e52c6aac4c96"), "Basketball" },
                    { new Guid("9464076c-adbe-4d64-9e52-54e8e4098700"), "HandBall" },
                    { new Guid("a925e599-b322-43b5-8bab-366d7a7826d2"), "Nordic Walking" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("e4ecbd0d-7982-4fb3-b881-46d23d7eeb8a"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("fc71e529-dabc-4697-9f98-ac4dbcc925a7"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("634c2032-198f-469d-b6c0-e3d09c2ecf06"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("a6e0b2fa-18db-4931-b87a-e3b6cf48f0c2"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("cca30aaf-0f7f-4976-a62b-ca5a22b24a7c"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("4114c874-e72e-4854-815a-fd120eaa236a"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("5748862f-c8ab-4af2-a775-84633607285d"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("aa1580bc-aba6-4b6d-8f0b-46d8de8afe26"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("afae0a11-cb54-4e88-bb57-68db9636e0bc"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("080bb22c-65a5-4073-8095-2c3902531df6"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("2717e83d-ce6d-4758-94ee-bfe46af35004"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("4ebb308a-c6cd-4a98-9ffc-8246fd4f9b0b"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("88edef09-d57a-4583-8ecb-0dae73670554"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("9464076c-adbe-4d64-9e52-54e8e4098700"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("968c2efb-1831-4d54-ba5a-e52c6aac4c96"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("a925e599-b322-43b5-8bab-366d7a7826d2"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("c0e3e634-898c-4585-8526-f544d130beb7"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("cd8c6936-92dd-4fdb-accd-01c294fb56c6"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("e9065179-d343-432a-8df1-a099d1e4996d"));

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "User",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "User",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(60)",
                oldMaxLength: 60);

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("69f04b15-491c-445d-aefa-1fe3fd6807e1"), "Professional" },
                    { new Guid("9d027442-74c1-4667-aa6f-aa37909aaff9"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("dc750e09-9bf4-4706-b244-1e7e0b7b8a91"), "Beginner" },
                    { new Guid("43ae5130-e24b-4717-94da-43a219a9291b"), "Intermediate" },
                    { new Guid("45892b26-587b-4020-b971-96dbf17eadd6"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("2ca8c5a7-0518-4aca-8765-d63c96accb8f"), "Krakow", "Poland", "30-389" },
                    { new Guid("8d4e3197-9aea-441b-9971-4f8cfb52cf30"), "Warszawa", "Poland", "30-389" },
                    { new Guid("3d0ed395-1579-4e6d-9377-209c1a92faf6"), "Gdansk", "Poland", "30-389" },
                    { new Guid("4bf6c8f3-8b1c-459b-9516-eccbe188f386"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("08623cd6-f90a-4bc2-9a4f-fda9a975f77d"), "Volleyball" },
                    { new Guid("dee8d71a-d525-4d1e-9d8b-72774adc0e83"), "Running" },
                    { new Guid("9cf3da12-caeb-430a-b669-0a126f4babd5"), "Fishing" },
                    { new Guid("a23da8e7-750f-4f14-91d1-906da1a509da"), "Climbing" },
                    { new Guid("07ca4a94-86ea-40e6-a90d-cf8a382bb07c"), "Baseball" },
                    { new Guid("2119d905-1d96-42cc-81f9-0ab5b2f0184f"), "Cycling" },
                    { new Guid("c47b697b-5d22-4825-ae33-dba2fe88d9f5"), "Football" },
                    { new Guid("1b4a6fa9-61a8-439b-adf2-a42c2cfb31c1"), "Basketball" },
                    { new Guid("2ace9493-b1cd-40f2-8faa-dec6c547a4c3"), "HandBall" },
                    { new Guid("bf6ba2f9-d8bf-48bb-97bf-515c666c06ba"), "Nordic Walking" }
                });
        }
    }
}
