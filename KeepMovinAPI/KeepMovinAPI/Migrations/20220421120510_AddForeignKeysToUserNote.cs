using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class AddForeignKeysToUserNote : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    { new Guid("41328b23-743a-4c59-a967-f2159d206fab"), "Professional" },
                    { new Guid("846a8754-d659-48ee-ae37-eec61e83dc28"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("78201cc6-7255-4a05-b204-7201f89462c0"), "Beginner" },
                    { new Guid("e0607c3d-74ff-4c8e-9fce-fca16f3d8d60"), "Intermediate" },
                    { new Guid("2db55bb1-c12f-437f-810c-aa89f2bd5c8f"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("1c4abe5e-f8a0-4030-b569-f9f42716647d"), "Krakow", "Poland", "30-389" },
                    { new Guid("e47bd8cb-29b7-48ea-acef-74b9381f863b"), "Warszawa", "Poland", "30-389" },
                    { new Guid("ce0cceee-61e4-4982-81e7-cae7e7bc5fa3"), "Gdansk", "Poland", "30-389" },
                    { new Guid("ad995263-81fc-4418-b0c7-155f400016e5"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("e9fcd2e3-9105-4f05-9797-fe3086fc39db"), "Volleyball" },
                    { new Guid("c8927ff9-112e-44be-ba0c-1dc77f81254e"), "Running" },
                    { new Guid("281880e9-33be-411c-b7a2-b450b809517c"), "Fishing" },
                    { new Guid("2de48855-6b60-459a-9e8c-626ed9b5660e"), "Climbing" },
                    { new Guid("5e207cc4-8282-440c-a1ed-05ce23f12d91"), "Baseball" },
                    { new Guid("cddd3e71-70be-40a9-b31e-1bcebfc67e79"), "Cycling" },
                    { new Guid("686382f4-fd68-4737-8226-6083c4af78c6"), "Football" },
                    { new Guid("ace6a446-0b20-46a1-bdc9-d450a076136e"), "Basketball" },
                    { new Guid("a60986ef-174a-4bd6-84c2-f20913ead588"), "HandBall" },
                    { new Guid("e1408726-59a0-4e97-9a6e-fe99896478aa"), "Nordic Walking" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserNote_EventId",
                table: "UserNote",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_UserNote_UserId",
                table: "UserNote",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserNote_Event_EventId",
                table: "UserNote",
                column: "EventId",
                principalTable: "Event",
                principalColumn: "EventId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserNote_User_UserId",
                table: "UserNote",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Userid",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserNote_Event_EventId",
                table: "UserNote");

            migrationBuilder.DropForeignKey(
                name: "FK_UserNote_User_UserId",
                table: "UserNote");

            migrationBuilder.DropIndex(
                name: "IX_UserNote_EventId",
                table: "UserNote");

            migrationBuilder.DropIndex(
                name: "IX_UserNote_UserId",
                table: "UserNote");

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("41328b23-743a-4c59-a967-f2159d206fab"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("846a8754-d659-48ee-ae37-eec61e83dc28"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("2db55bb1-c12f-437f-810c-aa89f2bd5c8f"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("78201cc6-7255-4a05-b204-7201f89462c0"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("e0607c3d-74ff-4c8e-9fce-fca16f3d8d60"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("1c4abe5e-f8a0-4030-b569-f9f42716647d"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("ad995263-81fc-4418-b0c7-155f400016e5"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("ce0cceee-61e4-4982-81e7-cae7e7bc5fa3"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("e47bd8cb-29b7-48ea-acef-74b9381f863b"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("281880e9-33be-411c-b7a2-b450b809517c"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("2de48855-6b60-459a-9e8c-626ed9b5660e"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("5e207cc4-8282-440c-a1ed-05ce23f12d91"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("686382f4-fd68-4737-8226-6083c4af78c6"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("a60986ef-174a-4bd6-84c2-f20913ead588"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("ace6a446-0b20-46a1-bdc9-d450a076136e"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("c8927ff9-112e-44be-ba0c-1dc77f81254e"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("cddd3e71-70be-40a9-b31e-1bcebfc67e79"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("e1408726-59a0-4e97-9a6e-fe99896478aa"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("e9fcd2e3-9105-4f05-9797-fe3086fc39db"));

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
    }
}
