import { Avatar } from "@mui/material";
import React from "react";
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

export function EditEngineer() {
  return (
    <div>
      <Pasos />
      <div className="enginnerContainer">
        <div className="enginnerShow">
          <div className="userShowTop">
            <Avatar />
            <div className="userShowTopTitle">
              <span className="userShowUsername"> Enginner Name</span>
              <span className="userShowUserTitle"> Enginner </span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowTitle">Account Details</div>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annabecj903</span>
            </div>

            <div className="userShowInfo">
              <CalendarTodayRounded className="userShowIcon" />
              <span className="userShowInfoTitle">10/20/1992</span>
            </div>

            <div className="userShowTitle">Contact Details</div>
            <div className="userShowInfo">
              <PhoneAndroidRounded className="userShowIcon" />
              <span className="userShowInfoTitle">+1 493 3838</span>
            </div>

            <div className="userShowInfo">
              <MailRounded className="userShowIcon" />
              <span className="userShowInfoTitle">annabecj903@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationOnRounded className="userShowIcon" />
              <span className="userShowInfoTitle">Lima | Peru</span>
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
          <FormEditEnginner className="updateForm" />
        </div>
      </div>
    </div>
  );
}
