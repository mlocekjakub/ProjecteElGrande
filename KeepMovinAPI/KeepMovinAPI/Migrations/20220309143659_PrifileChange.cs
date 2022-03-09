using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class PrifileChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("4c1208c4-b613-4d7c-b459-c9eb4b3be39a"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("9f69722c-cf90-4d11-aceb-1e227307cce1"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("9610dc2b-ce90-4461-98e7-6cb32c5713b6"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("af8a5e0c-16c9-4c93-80bc-d68a465a0b37"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("fe6d00ce-7e1c-4937-a641-745fe4d4656c"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("13084689-5f83-428e-a713-78fd8795e628"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("90f12136-e814-45cb-947a-64a6911825fd"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("b682d3d8-9828-4532-8972-97a5cd4c03c2"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("f6aa71e4-b87b-4545-8173-0d7f25ea65b8"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("084ee798-aa7d-4173-841e-b00ea6ef48a1"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("0dba86d3-b00e-49b7-b84b-d5891da26d9d"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("0ef9bf1c-c8ae-4dfd-a2d7-a099cfc64c90"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("417e1819-fc18-4bf5-b4ff-b5175ecb39f1"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("469109e4-0b75-4da5-9dc8-9617d4fd5266"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("4b84a62e-3c00-4aa6-bd62-df938404cd81"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("4fc7ba2a-6dc6-4f1c-a253-7f5761c4ee12"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("52007a33-3fc8-491f-9dc2-7e9262fe7f56"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("71771681-3296-465a-a109-0b79060ae6e6"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("f30582c6-764b-4d2b-bf58-a73c0533dcba"));

            migrationBuilder.DropColumn(
                name: "Age",
                table: "UserProfile");

            migrationBuilder.AlterColumn<string>(
                name: "Surname",
                table: "UserProfile",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "UserProfile",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20);

            migrationBuilder.AddColumn<DateTime>(
                name: "BirthDate",
                table: "UserProfile",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<string>(
                name: "IsVerify",
                table: "Organisation",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Event",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20);

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("043d6b28-457b-4bff-9b39-bb25c40bd10c"), "Professional" },
                    { new Guid("e5ab82b6-742f-4852-b78c-987cf8c8cf32"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("594879d3-9d34-4366-b61c-df4fd247e280"), "Beginner" },
                    { new Guid("38af71e8-be10-4224-a99d-afdca4ed943f"), "Intermediate" },
                    { new Guid("bd24cf1f-c5d3-4f7a-a8bb-2190c09b4a94"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("086f16a1-02e2-46e7-ae73-dd890cd61eb7"), "Krakow", "Poland", "30-389" },
                    { new Guid("0339784e-1344-47c5-8b7a-ec1b9640a6c3"), "Warszawa", "Poland", "30-389" },
                    { new Guid("7fcd6ebb-891f-41ec-8802-dbfcb019c9a9"), "Gdansk", "Poland", "30-389" },
                    { new Guid("80a7caca-0887-4088-9eed-8d846d7abaae"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("28c5142f-b05d-4d4d-b712-a5da051e99b6"), "Volleyball" },
                    { new Guid("f389edfc-1b6d-4270-b579-4e8a391d8040"), "Running" },
                    { new Guid("088c8571-6f2d-47c1-a115-f97095436064"), "Fishing" },
                    { new Guid("db69ac42-6da5-4d76-bd02-e6106a7cd795"), "Climbing" },
                    { new Guid("d14f9779-1ac7-425e-8dba-1c637626ff71"), "Baseball" },
                    { new Guid("c905946b-0429-4c39-888c-f79e1d39945d"), "Cycling" },
                    { new Guid("aa54c08d-a305-4e62-a27a-c32a6dd8c7f9"), "Football" },
                    { new Guid("d85731cf-a4c8-44f9-a2eb-d1cc5b77bec3"), "Basketball" },
                    { new Guid("6a33789b-7e44-41c8-897d-5fa01b837bdb"), "HandBall" },
                    { new Guid("d8f36640-9cb0-4f2d-a962-347640ac847d"), "Nordic Walking" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("043d6b28-457b-4bff-9b39-bb25c40bd10c"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("e5ab82b6-742f-4852-b78c-987cf8c8cf32"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("38af71e8-be10-4224-a99d-afdca4ed943f"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("594879d3-9d34-4366-b61c-df4fd247e280"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("bd24cf1f-c5d3-4f7a-a8bb-2190c09b4a94"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("0339784e-1344-47c5-8b7a-ec1b9640a6c3"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("086f16a1-02e2-46e7-ae73-dd890cd61eb7"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("7fcd6ebb-891f-41ec-8802-dbfcb019c9a9"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("80a7caca-0887-4088-9eed-8d846d7abaae"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("088c8571-6f2d-47c1-a115-f97095436064"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("28c5142f-b05d-4d4d-b712-a5da051e99b6"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("6a33789b-7e44-41c8-897d-5fa01b837bdb"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("aa54c08d-a305-4e62-a27a-c32a6dd8c7f9"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("c905946b-0429-4c39-888c-f79e1d39945d"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("d14f9779-1ac7-425e-8dba-1c637626ff71"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("d85731cf-a4c8-44f9-a2eb-d1cc5b77bec3"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("d8f36640-9cb0-4f2d-a962-347640ac847d"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("db69ac42-6da5-4d76-bd02-e6106a7cd795"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("f389edfc-1b6d-4270-b579-4e8a391d8040"));

            migrationBuilder.DropColumn(
                name: "BirthDate",
                table: "UserProfile");

            migrationBuilder.AlterColumn<string>(
                name: "Surname",
                table: "UserProfile",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "UserProfile",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20,
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "UserProfile",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<bool>(
                name: "IsVerify",
                table: "Organisation",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Event",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50);

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("9f69722c-cf90-4d11-aceb-1e227307cce1"), "Professional" },
                    { new Guid("4c1208c4-b613-4d7c-b459-c9eb4b3be39a"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("9610dc2b-ce90-4461-98e7-6cb32c5713b6"), "Beginner" },
                    { new Guid("fe6d00ce-7e1c-4937-a641-745fe4d4656c"), "Intermediate" },
                    { new Guid("af8a5e0c-16c9-4c93-80bc-d68a465a0b37"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("90f12136-e814-45cb-947a-64a6911825fd"), "Krakow", "Poland", "30-389" },
                    { new Guid("13084689-5f83-428e-a713-78fd8795e628"), "Warszawa", "Poland", "30-389" },
                    { new Guid("f6aa71e4-b87b-4545-8173-0d7f25ea65b8"), "Gdansk", "Poland", "30-389" },
                    { new Guid("b682d3d8-9828-4532-8972-97a5cd4c03c2"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("71771681-3296-465a-a109-0b79060ae6e6"), "Volleyball" },
                    { new Guid("084ee798-aa7d-4173-841e-b00ea6ef48a1"), "Running" },
                    { new Guid("0ef9bf1c-c8ae-4dfd-a2d7-a099cfc64c90"), "Fishing" },
                    { new Guid("417e1819-fc18-4bf5-b4ff-b5175ecb39f1"), "Climbing" },
                    { new Guid("52007a33-3fc8-491f-9dc2-7e9262fe7f56"), "Baseball" },
                    { new Guid("0dba86d3-b00e-49b7-b84b-d5891da26d9d"), "Cycling" },
                    { new Guid("f30582c6-764b-4d2b-bf58-a73c0533dcba"), "Football" },
                    { new Guid("469109e4-0b75-4da5-9dc8-9617d4fd5266"), "Basketball" },
                    { new Guid("4b84a62e-3c00-4aa6-bd62-df938404cd81"), "HandBall" },
                    { new Guid("4fc7ba2a-6dc6-4f1c-a253-7f5761c4ee12"), "Nordic Walking" }
                });
        }
    }
}
