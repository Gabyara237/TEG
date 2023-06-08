import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./EditEngineer.scss";
import {
  CalendarTodayRounded,
  LocationOnRounded,
  MailRounded,
  PhoneAndroidRounded,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FormEditEnginner from "../../../../components/Engineers/EditEngineer/FormEditEnginner/FormEditEnginner";
import { Pasos } from "../../../../components/Engineers/EditEngineer/Breadcrumbs/pasos";
import { User } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { Loader } from "semantic-ui-react";

const userController = new User();
export function EditEngineer() {
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
  return (
    <div>
      <Pasos />
      <div className="enginnerContainer">
        <div className="enginnerShow">
          <div className="userShowTop">
            <Avatar />
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {user.firstname} {user.lastname}
              </span>
              <span className="userShowUserTitle"> Enginner </span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowTitle">Account Details</div>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>

            <div className="userShowInfo">
              <CalendarTodayRounded className="userShowIcon" />
              <span className="userShowInfoTitle">{user.datebirth}</span>
            </div>

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
                {user.city} | {user.country}
              </span>
            </div>

            <div className="userShowTitle">Documents uploaded</div>

            <div className="userShowInfo">
              <FileCopyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">CV Anna</span>
              <FileDownloadIcon className="downloadIcon" />
            </div>

            <div className="userShowInfo">
              <FileCopyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Work authorization</span>
              <FileDownloadIcon className="downloadIcon" />
            </div>

            <div className="userShowInfo">
              <FileCopyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">National ID</span>
              <FileDownloadIcon className="downloadIcon" />
            </div>

            <div className="userShowInfo">
              <FileCopyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Certifications</span>
              <FileDownloadIcon className="downloadIcon" />
            </div>
            <div className="userShowInfo">
              <FileCopyIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Insurance</span>
              <FileDownloadIcon className="downloadIcon" />
            </div>
          </div>
        </div>
        <div className="enginnerUpdate">
          <span className="userShowUsername">
            <EditIcon className="userShowIcon" />
            Edit
          </span>
          <FormEditEnginner className="updateForm" user={user} />
        </div>
      </div>
    </div>
  );
}
