using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class UpdateCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("9f2b7cfe-7038-4fd2-9900-619d191b3521"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("a3799d03-25ed-4043-a8fe-53ae63e97640"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("1047db71-5a8c-4eae-a1fb-e7a11781fbec"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("3c7cdb36-9dfc-4817-b183-d604bb224445"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("c5337d44-3f20-472a-930d-79e621d6d270"));

            migrationBuilder.AlterColumn<decimal>(
                name: "Rating",
                table: "Event",
                type: "decimal(3,2)",
                precision: 3,
                scale: 2,
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "Event",
                type: "decimal(6,2)",
                precision: 6,
                scale: 2,
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<decimal>(
                name: "Rating",
                table: "Event",
                type: "decimal(18,2)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(3,2)",
                oldPrecision: 3,
                oldScale: 2,
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "Event",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(6,2)",
                oldPrecision: 6,
                oldScale: 2);

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("a3799d03-25ed-4043-a8fe-53ae63e97640"), "Professional" },
                    { new Guid("9f2b7cfe-7038-4fd2-9900-619d191b3521"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("1047db71-5a8c-4eae-a1fb-e7a11781fbec"), "Beginner" },
                    { new Guid("3c7cdb36-9dfc-4817-b183-d604bb224445"), "Intermediate" },
                    { new Guid("c5337d44-3f20-472a-930d-79e621d6d270"), "Expert" }
                });
        }
    }
}
