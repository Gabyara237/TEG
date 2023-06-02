import { Avatar } from "@mui/material";
import React from "react";
import "./ViewEnginner.scss";
import { BasicRating } from "../../../../components/Engineers/ViewEngineer/Rating/Rating";
import { ModalReview } from "../../../../components/Engineers/ViewEngineer/ModalReview";
import { ListReview } from "../../../../components/Engineers/ViewEngineer/ListReview";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {
  CalendarTodayRounded,
  LocationOnRounded,
  MailRounded,
  PhoneAndroidRounded,
} from "@mui/icons-material";
import { ModalAssign } from "../../../../components/Engineers/ViewEngineer/ModalAssign";
import { EnginnerSkills } from "../../../../components/Engineers/ViewEngineer/EnginnerSkills";
import { Divider } from "antd";
import CircleIcon from "@mui/icons-material/Circle";
import { green } from "@mui/material/colors";
import StarsIcon from "@mui/icons-material/Stars";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { DocumentsEnginner } from "../../../../components/Engineers/ViewEngineer/DocumentsEnginner";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { TicketsList } from "../../../../components/Engineers/TicketsList/TicketsList";

export function ViewEnginner() {
  return (
    <div className="container">
      <div className="containerEngineerDetail">
        <div className="engineer">
          <div>
            <div className="enginnerInformation">
              <Avatar className="avatarViewEnginner" />
              <div className="userShowTopTitle">
                <span className="userShowUsername"> Enginner Name</span>
                <span className="userShowUserTitle"> Enginner </span>
                <div className="availability">
                  <CircleIcon
                    sx={{ color: green[500] }}
                    className="availabilityIcon"
                  />
                  Active
                </div>
              </div>
            </div>
            <div className="details">
              <div className="accountDetails">
                <div className="userShowTitle">Account Details</div>
                <div className="userShowInfo">
                  <PermIdentityIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">annabecj903</span>
                </div>

                <div className="userShowInfo">
                  <CalendarTodayRounded className="userShowIcon" />
                  <span className="userShowInfoTitle">10/20/1992</span>
                </div>
              </div>

              <div className="ContactDetails">
                <div className="userShowTitle">Contact Details</div>
                <div className="userShowInfo">
                  <PhoneAndroidRounded className="userShowIcon" />
                  <span className="userShowInfoTitle">+1 493 3838</span>
                </div>

                <div className="userShowInfo">
                  <MailRounded className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    annabecj903@gmail.com
                  </span>
                </div>

                <div className="userShowInfo">
                  <LocationOnRounded className="userShowIcon" />
                  <span className="userShowInfoTitle">Lima | Peru</span>
                </div>
              </div>

              <div className="StudiesDetails">
                <div className="userShowTitle">Studies/Specialization</div>
                <div className="userShowInfo">
                  <StarsIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    Specialized in: Technical Support
                  </span>
                </div>

                <div className="userShowInfo">
                  <RecordVoiceOverIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">English: Advanced</span>
                </div>
              </div>
            </div>
          </div>

          <div className="area">
            <span className="userShowTitle">Experience areas</span>
          </div>
          <div className="skill">
            <EnginnerSkills />
          </div>
          <Divider orientation="left"></Divider>
          <div className="rating">
            <BasicRating />
            <span className="numReviews">5 Reviews</span>
          </div>
          <div className="engineerReview">
            <ListReview />
            <ModalReview />
          </div>
        </div>
        <div className="ticketAssign">
          <div className="buttonticketAssign">
            <ModalAssign />
          </div>
        </div>
      </div>

      <div className="containerEngineersDocument">
        <div className="area">
          <span className="userShowUsername">
            <ArticleIcon className="areaIcon" />
            Enginner documents
          </span>
        </div>

        <DocumentsEnginner />
      </div>

      <div className="containerTicketTable">
        <div className="area">
          <span className="userShowUsername">
            <SettingsSuggestIcon className="areaIcon" />
            Support tickets
          </span>
        </div>
        <TicketsList />
      </div>
    </div>
  );
}
