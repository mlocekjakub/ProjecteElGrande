using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class LocationSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { new Guid("cfe5f866-6e87-4df1-b716-daed1903a189"), "Professional" },
                    { new Guid("0c0069f2-d539-49ed-839b-c6a57fd97763"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("a7c2a07f-dbfa-490c-b441-633ba9139b8c"), "Beginner" },
                    { new Guid("61ae8989-63c8-40c5-9bce-b1b47d47ea9d"), "Intermediate" },
                    { new Guid("481b9f4f-bd46-4abf-a3cb-5932f3e4865a"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("0fa5ab47-7d1d-4c70-9d65-e30ab58d612a"), "Krakow", "Poland", "30-389" },
                    { new Guid("4effc4c5-0956-4379-97de-1cb9c8e81e70"), "Warszawa", "Poland", "30-389" },
                    { new Guid("aba56b62-2138-47a9-9635-fc5f9474a298"), "Gdansk", "Poland", "30-389" },
                    { new Guid("8446e4d1-4d55-45e4-a772-6277225399d9"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("df47dd35-44fd-40fc-93d0-056741b7e4d2"), "Volleyball" },
                    { new Guid("bf8a063a-5d90-4486-a23e-962374ff1c8b"), "Running" },
                    { new Guid("ad9c1761-68ce-4bca-a261-ecd287794daf"), "Fishing" },
                    { new Guid("c2527ea2-2a0b-4ecb-b792-945ce3365199"), "Climbing" },
                    { new Guid("77d2ac77-5b06-4855-aecd-a857c8f57e03"), "Baseball" },
                    { new Guid("cad9df09-86b4-4be7-9086-4c2295227b6c"), "Cycling" },
                    { new Guid("9228ccf4-1b16-44e2-8efb-481a1220650d"), "Football" },
                    { new Guid("a26917aa-f406-42ba-9c66-93839e9c1e82"), "Basketball" },
                    { new Guid("b750c60d-2b76-4dc4-bcf5-8f728f94d229"), "Handball" },
                    { new Guid("4112f370-fe35-4e76-9b59-79e959f3f9ed"), "Nordic Walking" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("0c0069f2-d539-49ed-839b-c6a57fd97763"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("cfe5f866-6e87-4df1-b716-daed1903a189"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("481b9f4f-bd46-4abf-a3cb-5932f3e4865a"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("61ae8989-63c8-40c5-9bce-b1b47d47ea9d"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("a7c2a07f-dbfa-490c-b441-633ba9139b8c"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("0fa5ab47-7d1d-4c70-9d65-e30ab58d612a"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("4effc4c5-0956-4379-97de-1cb9c8e81e70"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("8446e4d1-4d55-45e4-a772-6277225399d9"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("aba56b62-2138-47a9-9635-fc5f9474a298"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("4112f370-fe35-4e76-9b59-79e959f3f9ed"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("77d2ac77-5b06-4855-aecd-a857c8f57e03"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("9228ccf4-1b16-44e2-8efb-481a1220650d"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("a26917aa-f406-42ba-9c66-93839e9c1e82"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("ad9c1761-68ce-4bca-a261-ecd287794daf"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("b750c60d-2b76-4dc4-bcf5-8f728f94d229"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("bf8a063a-5d90-4486-a23e-962374ff1c8b"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("c2527ea2-2a0b-4ecb-b792-945ce3365199"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("cad9df09-86b4-4be7-9086-4c2295227b6c"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("df47dd35-44fd-40fc-93d0-056741b7e4d2"));

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
    }
}
