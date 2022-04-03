using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class AddUserNotes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "UserNote",
                columns: table => new
                {
                    NoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Time = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Message = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: false),
                    EventId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserNote", x => x.NoteId);
                });

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("5e578e1f-80dd-42f8-8116-e85f05fc299f"), "Professional" },
                    { new Guid("be86443f-f10e-4d8a-b28e-c1e85001ec1b"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("f7649bc2-0320-457a-8c73-6d05b6d3accf"), "Beginner" },
                    { new Guid("673ce343-425c-4b5e-af5d-08bf0065b99d"), "Intermediate" },
                    { new Guid("e4d44c1d-c756-4d95-8173-4b64792e7cb0"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("a08b1cb5-d08f-4f47-bc8b-f278a2ad5007"), "Krakow", "Poland", "30-389" },
                    { new Guid("9efebba8-81ee-47c9-9b8f-566d13fbbe9a"), "Warszawa", "Poland", "30-389" },
                    { new Guid("e8075e36-a7d5-487d-a969-ff5b33595947"), "Gdansk", "Poland", "30-389" },
                    { new Guid("c82d1db6-f6b9-42f3-9d89-8a1125ff12ac"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("5e3ae1e7-0ce0-4171-bf1e-9add9b57a642"), "Volleyball" },
                    { new Guid("9418bc86-c0ba-4a18-91c1-6013192723a0"), "Running" },
                    { new Guid("b99a60fc-dfe0-42a6-83ec-219ddb81f2af"), "Fishing" },
                    { new Guid("d03ea17c-cdfb-484d-97e3-c874d95a6432"), "Climbing" },
                    { new Guid("8137548d-9b32-4d31-96bb-56848e8c913c"), "Baseball" },
                    { new Guid("e59d44da-535a-4258-9811-00fd2971c521"), "Cycling" },
                    { new Guid("93f5f8e5-4945-4666-b821-876f71ebc8ba"), "Football" },
                    { new Guid("1cfeba30-463b-4570-8c42-6ec58c8c59a6"), "Basketball" },
                    { new Guid("cad88b23-4d27-4d61-bfe9-0638a9fd2ccf"), "HandBall" },
                    { new Guid("7577345e-9700-45da-a428-478c7c45afc0"), "Nordic Walking" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserNote");

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("5e578e1f-80dd-42f8-8116-e85f05fc299f"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("be86443f-f10e-4d8a-b28e-c1e85001ec1b"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("673ce343-425c-4b5e-af5d-08bf0065b99d"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("e4d44c1d-c756-4d95-8173-4b64792e7cb0"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("f7649bc2-0320-457a-8c73-6d05b6d3accf"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("9efebba8-81ee-47c9-9b8f-566d13fbbe9a"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("a08b1cb5-d08f-4f47-bc8b-f278a2ad5007"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("c82d1db6-f6b9-42f3-9d89-8a1125ff12ac"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("e8075e36-a7d5-487d-a969-ff5b33595947"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("1cfeba30-463b-4570-8c42-6ec58c8c59a6"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("5e3ae1e7-0ce0-4171-bf1e-9add9b57a642"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("7577345e-9700-45da-a428-478c7c45afc0"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("8137548d-9b32-4d31-96bb-56848e8c913c"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("93f5f8e5-4945-4666-b821-876f71ebc8ba"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("9418bc86-c0ba-4a18-91c1-6013192723a0"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("b99a60fc-dfe0-42a6-83ec-219ddb81f2af"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("cad88b23-4d27-4d61-bfe9-0638a9fd2ccf"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("d03ea17c-cdfb-484d-97e3-c874d95a6432"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("e59d44da-535a-4258-9811-00fd2971c521"));

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
    }
}
