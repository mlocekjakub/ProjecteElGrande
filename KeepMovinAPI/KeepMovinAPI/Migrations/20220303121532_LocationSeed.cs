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
                    { new Guid("5e2bce86-078f-4215-b7a6-787001268dbc"), "Professional" },
                    { new Guid("0789e786-5c4b-47a2-bbe5-7770e9068ef3"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("f473177e-0d05-4f55-84f5-4ab0af107d3f"), "Beginner" },
                    { new Guid("03016594-a25c-4c86-b0fe-d305ecc9d486"), "Intermediate" },
                    { new Guid("df87c66d-0939-429f-bf9a-b5d114d3e86c"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("4967c9d6-2abe-4205-99da-72a656bb84ea"), "Krakow", "Poland", "30-389" },
                    { new Guid("8573bc8b-9a99-463d-9daf-0dfffd035a14"), "Warszawa", "Poland", "30-389" },
                    { new Guid("79c9a1c0-d8da-4bc7-921d-abcd867586fa"), "Gdansk", "Poland", "30-389" },
                    { new Guid("8f8026df-d224-4001-b6b9-d7100206c348"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("677dfd3a-7c4b-42e7-b862-b28755fa4aff"), "Volleyball" },
                    { new Guid("430b2f65-8307-4d87-8a75-ac596bed1b62"), "Running" },
                    { new Guid("da23a2bf-13db-406f-bc3e-f8fd0f29ffaf"), "Fishing" },
                    { new Guid("8c672207-0255-436b-8194-20d71441d338"), "Climbing" },
                    { new Guid("c98bec46-c0e3-4a9e-a15a-b42522abe9d3"), "Baseball" },
                    { new Guid("babc7aa8-adbe-444f-b0f0-9fc3ba100903"), "Cycling" },
                    { new Guid("98caf32c-59c7-47c7-abc3-1346b31b38c4"), "Football" },
                    { new Guid("6811c78b-e33a-4f22-bb96-9698bc019441"), "Basketball" },
                    { new Guid("92d3318f-600f-4f01-ab7a-27f2a35c0390"), "HandBall" },
                    { new Guid("93a3cece-d427-4f65-ba08-f540f21d0f1b"), "Nordic Walking" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("0789e786-5c4b-47a2-bbe5-7770e9068ef3"));

            migrationBuilder.DeleteData(
                table: "EventType",
                keyColumn: "TypeId",
                keyValue: new Guid("5e2bce86-078f-4215-b7a6-787001268dbc"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("03016594-a25c-4c86-b0fe-d305ecc9d486"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("df87c66d-0939-429f-bf9a-b5d114d3e86c"));

            migrationBuilder.DeleteData(
                table: "ExperienceLevel",
                keyColumn: "ExperienceLevelId",
                keyValue: new Guid("f473177e-0d05-4f55-84f5-4ab0af107d3f"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("4967c9d6-2abe-4205-99da-72a656bb84ea"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("79c9a1c0-d8da-4bc7-921d-abcd867586fa"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("8573bc8b-9a99-463d-9daf-0dfffd035a14"));

            migrationBuilder.DeleteData(
                table: "Location",
                keyColumn: "LocationId",
                keyValue: new Guid("8f8026df-d224-4001-b6b9-d7100206c348"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("430b2f65-8307-4d87-8a75-ac596bed1b62"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("677dfd3a-7c4b-42e7-b862-b28755fa4aff"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("6811c78b-e33a-4f22-bb96-9698bc019441"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("8c672207-0255-436b-8194-20d71441d338"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("92d3318f-600f-4f01-ab7a-27f2a35c0390"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("93a3cece-d427-4f65-ba08-f540f21d0f1b"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("98caf32c-59c7-47c7-abc3-1346b31b38c4"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("babc7aa8-adbe-444f-b0f0-9fc3ba100903"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("c98bec46-c0e3-4a9e-a15a-b42522abe9d3"));

            migrationBuilder.DeleteData(
                table: "Sport",
                keyColumn: "SportId",
                keyValue: new Guid("da23a2bf-13db-406f-bc3e-f8fd0f29ffaf"));

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
    }
}
