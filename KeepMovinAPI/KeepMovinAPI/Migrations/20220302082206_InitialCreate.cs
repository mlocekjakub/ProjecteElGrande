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
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ZipCode = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsVerify = table.Column<bool>(type: "bit", nullable: false)
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
                    AboutMe = table.Column<bool>(type: "bit", nullable: false),
                    Location = table.Column<bool>(type: "bit", nullable: false),
                    Photo = table.Column<bool>(type: "bit", nullable: false),
                    FollowersFollowing = table.Column<bool>(type: "bit", nullable: false),
                    Statistics = table.Column<bool>(type: "bit", nullable: false),
                    UpcomingEvents = table.Column<bool>(type: "bit", nullable: false),
                    PreviousEvents = table.Column<bool>(type: "bit", nullable: false)
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
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                    PicturePath = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
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
                    Userid = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    PictureId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Surname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: false),
                    PersonalInfo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrganisationId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LocationId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    SettingsId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                        name: "FK_UserProfile_User_Userid",
                        column: x => x.Userid,
                        principalTable: "User",
                        principalColumn: "Userid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    EventId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartEvent = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndEvent = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserProfileId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    SportsSportId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExperienceLevelId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    EventInfo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MaxParticipants = table.Column<int>(type: "int", nullable: true),
                    Link = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rating = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ProfilePicturePictureId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Currency = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                name: "IX_UserProfile_PictureId",
                table: "UserProfile",
                column: "PictureId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfile_SettingsId",
                table: "UserProfile",
                column: "SettingsId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfile_Userid",
                table: "UserProfile",
                column: "Userid");

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
