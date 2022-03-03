using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class SportSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("682bf690-21f0-4971-8e74-55552abb1c91"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("bbd0d3c8-4c05-4cb9-98a9-603e553b7579"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("74888db1-3b6f-470c-b606-6a6b33421543"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("87801702-7f68-4857-bee6-7bda1a84fb33"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("dea75c46-6892-4598-ac90-7aae1fb5c2c6"));

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("d9211f1f-a685-4bc4-b991-3b38a51cf40a"), "Professional" },
                    { new Guid("d558ef30-9331-4cf6-beba-37a0a431e17e"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("82301b27-0b03-42b3-9058-1032a1db6db8"), "Beginner" },
                    { new Guid("9ad2ae9a-4c70-4a77-95a5-2f5de1bcc5a3"), "Intermediate" },
                    { new Guid("2ff078fa-fd3a-4c22-ba20-563ae1b93ad3"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("a19598ba-4929-4c40-91df-36e1c1e80d12"), "Baseball" },
                    { new Guid("02a7fa40-87a7-4ff4-bb7f-8415433775ed"), "Football" },
                    { new Guid("50ce371a-f99f-4449-b957-4a48add5315a"), "Cycling" },
                    { new Guid("1c4e93a4-71d4-47f3-9916-bb0401a87952"), "Handball" },
                    { new Guid("ecce2c2a-2565-425c-9cf6-64d075fea674"), "Climbing" },
                    { new Guid("c35129ae-4e30-4aff-afe6-1f8db1d8d0a5"), "Fishing" },
                    { new Guid("ac6d38f4-4304-480b-9ee6-5963e2e8440c"), "Running" },
                    { new Guid("69aafa2e-6ac8-4f38-b2cd-4252bdf3194b"), "Volleyball" },
                    { new Guid("811207bc-8787-4b8a-ad42-9696e484895c"), "Basketball" },
                    { new Guid("3161cede-fe55-4c3e-b60d-d7b7e28d4d93"), "Nordic Walking" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("d558ef30-9331-4cf6-beba-37a0a431e17e"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("d9211f1f-a685-4bc4-b991-3b38a51cf40a"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("2ff078fa-fd3a-4c22-ba20-563ae1b93ad3"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("82301b27-0b03-42b3-9058-1032a1db6db8"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("9ad2ae9a-4c70-4a77-95a5-2f5de1bcc5a3"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("02a7fa40-87a7-4ff4-bb7f-8415433775ed"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("1c4e93a4-71d4-47f3-9916-bb0401a87952"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("3161cede-fe55-4c3e-b60d-d7b7e28d4d93"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("50ce371a-f99f-4449-b957-4a48add5315a"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("69aafa2e-6ac8-4f38-b2cd-4252bdf3194b"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("811207bc-8787-4b8a-ad42-9696e484895c"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("a19598ba-4929-4c40-91df-36e1c1e80d12"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("ac6d38f4-4304-480b-9ee6-5963e2e8440c"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("c35129ae-4e30-4aff-afe6-1f8db1d8d0a5"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("ecce2c2a-2565-425c-9cf6-64d075fea674"));

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("bbd0d3c8-4c05-4cb9-98a9-603e553b7579"), "Professional" },
                    { new Guid("682bf690-21f0-4971-8e74-55552abb1c91"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("dea75c46-6892-4598-ac90-7aae1fb5c2c6"), "Beginner" },
                    { new Guid("74888db1-3b6f-470c-b606-6a6b33421543"), "Intermediate" },
                    { new Guid("87801702-7f68-4857-bee6-7bda1a84fb33"), "Expert" }
                });
        }
    }
}
