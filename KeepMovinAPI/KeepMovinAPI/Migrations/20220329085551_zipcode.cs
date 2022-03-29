using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class zipcode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "ZipCode",
                table: "Location",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10);

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("84d93e03-21b0-447b-aeeb-8e67ffdf7b40"), "Professional" },
                    { new Guid("b46bd9da-87f6-41cc-a96f-cac4682c1a0e"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("5415ebf2-c409-48a4-8012-1c658e16a625"), "Beginner" },
                    { new Guid("4f2a9d57-1df4-46f5-94e5-dd6f910d4289"), "Intermediate" },
                    { new Guid("59c32956-c86d-4d34-93de-fe2c49287d67"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("7058005f-937f-40c7-84f5-b1ec42e54dc2"), "Krakow", "Poland", "30-389" },
                    { new Guid("f0b7d5cb-2d2d-4f18-8524-ea32a7343bb2"), "Warszawa", "Poland", "30-389" },
                    { new Guid("ad2102c1-d90e-4a4b-b741-2821a895d2b5"), "Gdansk", "Poland", "30-389" },
                    { new Guid("859a9925-0174-4492-901d-cc2a33c25d87"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("be1fab94-936b-4a4e-99ad-e2f6318418cf"), "Volleyball" },
                    { new Guid("b7f94744-5e0b-401d-952b-1a1e31464763"), "Running" },
                    { new Guid("8cf34b6e-0948-463f-838d-bdfeca8898b9"), "Fishing" },
                    { new Guid("d78e9654-50cd-4422-b581-9ea7b50e2eb0"), "Climbing" },
                    { new Guid("221802c4-edc2-4ecc-bb64-8d2d617c9908"), "Baseball" },
                    { new Guid("fe5c7d28-741e-45c5-8fef-e2c662674607"), "Cycling" },
                    { new Guid("ed1c73a2-660d-4278-be0b-bb154bd39d86"), "Football" },
                    { new Guid("da0b6af1-5db8-4dcb-bd41-c56a5b3b7add"), "Basketball" },
                    { new Guid("f3e52cb7-b33b-4fd3-8512-4e422b49dec0"), "HandBall" },
                    { new Guid("3919586f-f75b-4a8b-8f63-ccd037d57b05"), "Nordic Walking" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("84d93e03-21b0-447b-aeeb-8e67ffdf7b40"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("b46bd9da-87f6-41cc-a96f-cac4682c1a0e"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("4f2a9d57-1df4-46f5-94e5-dd6f910d4289"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("5415ebf2-c409-48a4-8012-1c658e16a625"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("59c32956-c86d-4d34-93de-fe2c49287d67"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("7058005f-937f-40c7-84f5-b1ec42e54dc2"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("859a9925-0174-4492-901d-cc2a33c25d87"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("ad2102c1-d90e-4a4b-b741-2821a895d2b5"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("f0b7d5cb-2d2d-4f18-8524-ea32a7343bb2"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("221802c4-edc2-4ecc-bb64-8d2d617c9908"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("3919586f-f75b-4a8b-8f63-ccd037d57b05"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("8cf34b6e-0948-463f-838d-bdfeca8898b9"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("b7f94744-5e0b-401d-952b-1a1e31464763"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("be1fab94-936b-4a4e-99ad-e2f6318418cf"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("d78e9654-50cd-4422-b581-9ea7b50e2eb0"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("da0b6af1-5db8-4dcb-bd41-c56a5b3b7add"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("ed1c73a2-660d-4278-be0b-bb154bd39d86"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("f3e52cb7-b33b-4fd3-8512-4e422b49dec0"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("fe5c7d28-741e-45c5-8fef-e2c662674607"));

            migrationBuilder.AlterColumn<string>(
                name: "ZipCode",
                table: "Location",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(10)",
                oldMaxLength: 10,
                oldNullable: true);

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
    }
}
