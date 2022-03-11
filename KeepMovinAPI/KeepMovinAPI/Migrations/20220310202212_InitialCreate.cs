using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KeepMovinAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EventType",
                columns: table => new
                {
                    TypeId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventType", x => x.TypeId);
                });

            migrationBuilder.CreateTable(
                name: "ExperienceLevel",
                columns: table => new
                {
                    ExperienceLevelId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExperienceLevel", x => x.ExperienceLevelId);
                });

            migrationBuilder.CreateTable(
                name: "Location",
                columns: table => new
                {
                    LocationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    City = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Country = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    ZipCode = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Location", x => x.LocationId);
                });

            migrationBuilder.CreateTable(
                name: "Organisation",
                columns: table => new
                {
                    OrganisationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    IsVerify = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organisation", x => x.OrganisationId);
                });

            migrationBuilder.CreateTable(
                name: "Setting",
                columns: table => new
                {
                    SettingsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Location = table.Column<bool>(type: "bit", nullable: false),
                    FollowersFollowing = table.Column<bool>(type: "bit", nullable: false),
                    Statistics = table.Column<bool>(type: "bit", nullable: false),
                    AboutMe = table.Column<bool>(type: "bit", nullable: false),
                    UpcomingEvents = table.Column<bool>(type: "bit", nullable: false),
                    PreviousEvents = table.Column<bool>(type: "bit", nullable: false),
                    Photo = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Setting", x => x.SettingsId);
                });

            migrationBuilder.CreateTable(
                name: "Sport",
                columns: table => new
                {
                    SportId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sport", x => x.SportId);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Userid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Userid);
                });

            migrationBuilder.CreateTable(
                name: "UserUser",
                columns: table => new
                {
                    FollowedUserid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FollowersUserid = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserUser", x => new { x.FollowedUserid, x.FollowersUserid });
                    table.ForeignKey(
                        name: "FK_UserUser_User_FollowedUserid",
                        column: x => x.FollowedUserid,
                        principalTable: "User",
                        principalColumn: "Userid",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserUser_User_FollowersUserid",
                        column: x => x.FollowersUserid,
                        principalTable: "User",
                        principalColumn: "Userid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "EventUser",
                columns: table => new
                {
                    EventsEventId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UsersUserid = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventUser", x => new { x.EventsEventId, x.UsersUserid });
                    table.ForeignKey(
                        name: "FK_EventUser_User_UsersUserid",
                        column: x => x.UsersUserid,
                        principalTable: "User",
                        principalColumn: "Userid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Picture",
                columns: table => new
                {
                    PictureId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PicturePath = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    PictureInfo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EventId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Picture", x => x.PictureId);
                });

            migrationBuilder.CreateTable(
                name: "UserProfile",
                columns: table => new
                {
                    UserProfileId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    OrganiserUserid = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    PictureId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Surname = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PersonalInfo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrganisationId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LocationId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    SettingsId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfile", x => x.UserProfileId);
                    table.ForeignKey(
                        name: "FK_UserProfile_Location_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Location",
                        principalColumn: "LocationId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserProfile_Organisation_OrganisationId",
                        column: x => x.OrganisationId,
                        principalTable: "Organisation",
                        principalColumn: "OrganisationId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserProfile_Picture_PictureId",
                        column: x => x.PictureId,
                        principalTable: "Picture",
                        principalColumn: "PictureId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserProfile_Setting_SettingsId",
                        column: x => x.SettingsId,
                        principalTable: "Setting",
                        principalColumn: "SettingsId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserProfile_User_OrganiserUserid",
                        column: x => x.OrganiserUserid,
                        principalTable: "User",
                        principalColumn: "Userid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    EventId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    StartEvent = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndEvent = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserProfileId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    SportsSportId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExperienceLevelId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    EventInfo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MaxParticipants = table.Column<int>(type: "int", nullable: true),
                    Link = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rating = table.Column<decimal>(type: "decimal(3,2)", precision: 3, scale: 2, nullable: true),
                    Status = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    Price = table.Column<decimal>(type: "decimal(6,2)", precision: 6, scale: 2, nullable: false),
                    ProfilePicturePictureId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Currency = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: false),
                    TypeId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LocationId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.EventId);
                    table.ForeignKey(
                        name: "FK_Event_EventType_TypeId",
                        column: x => x.TypeId,
                        principalTable: "EventType",
                        principalColumn: "TypeId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Event_ExperienceLevel_ExperienceLevelId",
                        column: x => x.ExperienceLevelId,
                        principalTable: "ExperienceLevel",
                        principalColumn: "ExperienceLevelId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Event_Location_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Location",
                        principalColumn: "LocationId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Event_Picture_ProfilePicturePictureId",
                        column: x => x.ProfilePicturePictureId,
                        principalTable: "Picture",
                        principalColumn: "PictureId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Event_Sport_SportsSportId",
                        column: x => x.SportsSportId,
                        principalTable: "Sport",
                        principalColumn: "SportId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Event_UserProfile_UserProfileId",
                        column: x => x.UserProfileId,
                        principalTable: "UserProfile",
                        principalColumn: "UserProfileId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "EventType",
                columns: new[] { "TypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("69f04b15-491c-445d-aefa-1fe3fd6807e1"), "Professional" },
                    { new Guid("9d027442-74c1-4667-aa6f-aa37909aaff9"), "Recreational" }
                });

            migrationBuilder.InsertData(
                table: "ExperienceLevel",
                columns: new[] { "ExperienceLevelId", "Name" },
                values: new object[,]
                {
                    { new Guid("dc750e09-9bf4-4706-b244-1e7e0b7b8a91"), "Beginner" },
                    { new Guid("43ae5130-e24b-4717-94da-43a219a9291b"), "Intermediate" },
                    { new Guid("45892b26-587b-4020-b971-96dbf17eadd6"), "Expert" }
                });

            migrationBuilder.InsertData(
                table: "Location",
                columns: new[] { "LocationId", "City", "Country", "ZipCode" },
                values: new object[,]
                {
                    { new Guid("2ca8c5a7-0518-4aca-8765-d63c96accb8f"), "Krakow", "Poland", "30-389" },
                    { new Guid("8d4e3197-9aea-441b-9971-4f8cfb52cf30"), "Warszawa", "Poland", "30-389" },
                    { new Guid("3d0ed395-1579-4e6d-9377-209c1a92faf6"), "Gdansk", "Poland", "30-389" },
                    { new Guid("4bf6c8f3-8b1c-459b-9516-eccbe188f386"), "Opole", "Poland", "30-389" }
                });

            migrationBuilder.InsertData(
                table: "Sport",
                columns: new[] { "SportId", "Name" },
                values: new object[,]
                {
                    { new Guid("08623cd6-f90a-4bc2-9a4f-fda9a975f77d"), "Volleyball" },
                    { new Guid("dee8d71a-d525-4d1e-9d8b-72774adc0e83"), "Running" },
                    { new Guid("9cf3da12-caeb-430a-b669-0a126f4babd5"), "Fishing" },
                    { new Guid("a23da8e7-750f-4f14-91d1-906da1a509da"), "Climbing" },
                    { new Guid("07ca4a94-86ea-40e6-a90d-cf8a382bb07c"), "Baseball" },
                    { new Guid("2119d905-1d96-42cc-81f9-0ab5b2f0184f"), "Cycling" },
                    { new Guid("c47b697b-5d22-4825-ae33-dba2fe88d9f5"), "Football" },
                    { new Guid("1b4a6fa9-61a8-439b-adf2-a42c2cfb31c1"), "Basketball" },
                    { new Guid("2ace9493-b1cd-40f2-8faa-dec6c547a4c3"), "HandBall" },
                    { new Guid("bf6ba2f9-d8bf-48bb-97bf-515c666c06ba"), "Nordic Walking" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Event_ExperienceLevelId",
                table: "Event",
                column: "ExperienceLevelId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_LocationId",
                table: "Event",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_ProfilePicturePictureId",
                table: "Event",
                column: "ProfilePicturePictureId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_SportsSportId",
                table: "Event",
                column: "SportsSportId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_TypeId",
                table: "Event",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Event_UserProfileId",
                table: "Event",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_EventUser_UsersUserid",
                table: "EventUser",
                column: "UsersUserid");

            migrationBuilder.CreateIndex(
                name: "IX_Picture_EventId",
                table: "Picture",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfile_LocationId",
                table: "UserProfile",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfile_OrganisationId",
                table: "UserProfile",
                column: "OrganisationId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfile_OrganiserUserid",
                table: "UserProfile",
                column: "OrganiserUserid");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfile_PictureId",
                table: "UserProfile",
                column: "PictureId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfile_SettingsId",
                table: "UserProfile",
                column: "SettingsId");

            migrationBuilder.CreateIndex(
                name: "IX_UserUser_FollowersUserid",
                table: "UserUser",
                column: "FollowersUserid");

            migrationBuilder.AddForeignKey(
                name: "FK_EventUser_Event_EventsEventId",
                table: "EventUser",
                column: "EventsEventId",
                principalTable: "Event",
                principalColumn: "EventId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Picture_Event_EventId",
                table: "Picture",
                column: "EventId",
                principalTable: "Event",
                principalColumn: "EventId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Event_EventType_TypeId",
                table: "Event");

            migrationBuilder.DropForeignKey(
                name: "FK_Event_ExperienceLevel_ExperienceLevelId",
                table: "Event");

            migrationBuilder.DropForeignKey(
                name: "FK_Event_Location_LocationId",
                table: "Event");

            migrationBuilder.DropForeignKey(
                name: "FK_UserProfile_Location_LocationId",
                table: "UserProfile");

            migrationBuilder.DropForeignKey(
                name: "FK_Event_Picture_ProfilePicturePictureId",
                table: "Event");

            migrationBuilder.DropForeignKey(
                name: "FK_UserProfile_Picture_PictureId",
                table: "UserProfile");

            migrationBuilder.DropTable(
                name: "EventUser");

            migrationBuilder.DropTable(
                name: "UserUser");

            migrationBuilder.DropTable(
                name: "EventType");

            migrationBuilder.DropTable(
                name: "ExperienceLevel");

            migrationBuilder.DropTable(
                name: "Location");

            migrationBuilder.DropTable(
                name: "Picture");

            migrationBuilder.DropTable(
                name: "Event");

            migrationBuilder.DropTable(
                name: "Sport");

            migrationBuilder.DropTable(
                name: "UserProfile");

            migrationBuilder.DropTable(
                name: "Organisation");

            migrationBuilder.DropTable(
                name: "Setting");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
