using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class settingsUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<bool>(
                name: "HostedEvents",
                table: "Setting",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Organisation",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30);

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("66d66d97-d051-4dae-8017-98862eb2b7dc"), "Professional" },
                    { new Guid("5460aba4-c6e6-4a66-a760-78aafa3cb791"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("cec6362a-2843-404f-85d6-45eb843c27c5"), "Beginner" },
                    { new Guid("35f003b6-e955-4303-9a20-6556bd657332"), "Intermediate" },
                    { new Guid("a209ec14-b545-4659-b3d8-cc5d309afa7c"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("5b7595e0-13bb-4048-95e5-e6dcf05a8a01"), "Krakow", "Poland", "30-389" },
                    { new Guid("78b0f94c-62ed-4b61-b3be-ae92b5b96f97"), "Warszawa", "Poland", "30-389" },
                    { new Guid("4d0b8ad9-69d5-4264-8dba-f8f4ac151274"), "Gdansk", "Poland", "30-389" },
                    { new Guid("25ef9424-351c-4bd4-b024-ab3f479d711d"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("19dcc130-0f58-4d0e-bb41-82c258cfea98"), "Volleyball" },
                    { new Guid("8d99f84d-8797-4875-a823-efc735c597d2"), "Running" },
                    { new Guid("615d39e0-6753-43fe-a71b-be97e293b112"), "Fishing" },
                    { new Guid("d9299f08-c015-4d0c-8ab2-ecc1564d4679"), "Climbing" },
                    { new Guid("0b2d2ef0-d38b-4c49-bf3d-9922c810cd07"), "Baseball" },
                    { new Guid("b02729cd-7074-418b-beb0-200c2598113b"), "Cycling" },
                    { new Guid("5bc00ddd-6d66-4b58-ab5b-d27ab92b2642"), "Football" },
                    { new Guid("f348921c-f5b5-4382-8f52-44b22651c914"), "Basketball" },
                    { new Guid("0e574b6e-ec0a-4827-8f69-256c74a21440"), "HandBall" },
                    { new Guid("b779898f-a103-4fe7-afd8-e32aec6742c8"), "Nordic Walking" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("5460aba4-c6e6-4a66-a760-78aafa3cb791"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("66d66d97-d051-4dae-8017-98862eb2b7dc"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("35f003b6-e955-4303-9a20-6556bd657332"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("a209ec14-b545-4659-b3d8-cc5d309afa7c"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("cec6362a-2843-404f-85d6-45eb843c27c5"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("25ef9424-351c-4bd4-b024-ab3f479d711d"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("4d0b8ad9-69d5-4264-8dba-f8f4ac151274"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("5b7595e0-13bb-4048-95e5-e6dcf05a8a01"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("78b0f94c-62ed-4b61-b3be-ae92b5b96f97"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("0b2d2ef0-d38b-4c49-bf3d-9922c810cd07"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("0e574b6e-ec0a-4827-8f69-256c74a21440"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("19dcc130-0f58-4d0e-bb41-82c258cfea98"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("5bc00ddd-6d66-4b58-ab5b-d27ab92b2642"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("615d39e0-6753-43fe-a71b-be97e293b112"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("8d99f84d-8797-4875-a823-efc735c597d2"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("b02729cd-7074-418b-beb0-200c2598113b"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("b779898f-a103-4fe7-afd8-e32aec6742c8"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("d9299f08-c015-4d0c-8ab2-ecc1564d4679"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("f348921c-f5b5-4382-8f52-44b22651c914"));

            migrationBuilder.DropColumn(
                name: "HostedEvents",
                table: "Setting");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Organisation",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30,
                oldNullable: true);

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
    }
}
