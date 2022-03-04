using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class SportsSeed : Migration
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
                    { new Guid("3f540cf6-579a-4e58-9b10-d5c83bc7afd1"), "Professional" },
                    { new Guid("ce02ade0-fa60-47e3-9a47-8d9877681461"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("88153f80-725e-4938-b7c6-ad704b7166f1"), "Beginner" },
                    { new Guid("bff2e42c-463c-4e63-80e2-68c8078e0b76"), "Intermediate" },
                    { new Guid("3ed6cccf-f9ac-423d-943a-97af3bb7c799"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("9d403acc-5a27-4c9b-932c-88441749b568"), "Baseball" },
                    { new Guid("e3830280-55bb-4c35-a6a2-ba0427c9c994"), "Football" },
                    { new Guid("148e8d00-0b7d-4d63-a19d-288fdf4bdf3b"), "Cycling" },
                    { new Guid("ac6b6f92-183d-4c5a-ac2c-d259d8564285"), "HandBall" },
                    { new Guid("51e090c7-cb4b-4a21-9af7-f0babf8ca6d5"), "Climbing" },
                    { new Guid("a7fa6bfc-2b36-4301-9bf7-18fdf97cf3a9"), "Fishing" },
                    { new Guid("f8b61750-7800-4caa-9a17-419398f3181c"), "Running" },
                    { new Guid("00064eba-98d3-4542-9dd3-4268b96cb231"), "Volleyball" },
                    { new Guid("8da9fef3-741e-40ea-b3ff-800a82e69208"), "Basketball" },
                    { new Guid("85013ee8-6d7d-4ee1-8eca-63f7022ea53a"), "Nordic Walking" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("3f540cf6-579a-4e58-9b10-d5c83bc7afd1"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("ce02ade0-fa60-47e3-9a47-8d9877681461"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("3ed6cccf-f9ac-423d-943a-97af3bb7c799"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("88153f80-725e-4938-b7c6-ad704b7166f1"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("bff2e42c-463c-4e63-80e2-68c8078e0b76"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("00064eba-98d3-4542-9dd3-4268b96cb231"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("148e8d00-0b7d-4d63-a19d-288fdf4bdf3b"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("51e090c7-cb4b-4a21-9af7-f0babf8ca6d5"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("85013ee8-6d7d-4ee1-8eca-63f7022ea53a"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("8da9fef3-741e-40ea-b3ff-800a82e69208"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("9d403acc-5a27-4c9b-932c-88441749b568"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("a7fa6bfc-2b36-4301-9bf7-18fdf97cf3a9"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("ac6b6f92-183d-4c5a-ac2c-d259d8564285"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("e3830280-55bb-4c35-a6a2-ba0427c9c994"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("f8b61750-7800-4caa-9a17-419398f3181c"));

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
