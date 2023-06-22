import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
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
import { green, red } from "@mui/material/colors";
import StarsIcon from "@mui/icons-material/Stars";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { DocumentsEnginner } from "../../../../components/Engineers/ViewEngineer/DocumentsEnginner";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { TicketsList } from "../../../../components/Engineers/TicketsList/TicketsList";
import { User } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { Loader } from "semantic-ui-react";

const userController = new User();
export function ViewEnginner() {
  const [user, setUser] = useState(null);
  const { accessToken } = useAuth();
  const url = window.location.pathname;
  const idUser = url.substring(22);

  useEffect(() => {
    (async () => {
      try {
        const response = await userController.getUser(accessToken, idUser);
        setUser(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  if (!user) return <Loader active inline="centered" />;
  let Active = " ";
  let color = " ";
  if (user.active) {
    Active = "Active";
    color = green[500];
  } else {
    Active = "Not active";
    color = red[500];
  }

  return (
    <div className="container">
      <div className="containerEngineerDetail">
        <div className="engineer">
          <div>
            <div className="enginnerInformation">
              <Avatar className="avatarViewEnginner" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {" "}
                  {user.firstname} {user.lastname}{" "}
                </span>
                <span className="userShowUserTitle"> {user.role} </span>
                <div className="availability">
                  <CircleIcon
                    sx={{ color: { color } }}
                    className="availabilityIcon"
                  />

                  {Active}
                </div>
              </div>
            </div>
            <div className="details">
              <div className="accountDetails">
                <div className="userShowTitle">Account Details</div>
                <div className="userShowInfo">
                  <PermIdentityIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.username}</span>
                </div>

                <div className="userShowInfo">
                  <CalendarTodayRounded className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.datebirth}</span>
                </div>
              </div>

              <div className="ContactDetails">
                <div className="userShowTitle">Contact Details</div>
                <div className="userShowInfo">
                  <PhoneAndroidRounded className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.phonenumber}</span>
                </div>

                <div className="userShowInfo">
                  <MailRounded className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.email}</span>
                </div>

                <div className="userShowInfo">
                  <LocationOnRounded className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user.city}| {user.country}
                  </span>
                </div>
              </div>

              <div className="StudiesDetails">
                <div className="userShowTitle">Studies/Specialization</div>
                <div className="userShowInfo">
                  <StarsIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    Specialized in: {user.specialized}
                  </span>
                </div>

                <div className="userShowInfo">
                  <RecordVoiceOverIcon className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    English: {user.englishlevel}
                  </span>
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
