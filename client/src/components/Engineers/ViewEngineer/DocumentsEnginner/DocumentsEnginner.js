import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Tooltip } from "@mui/material";
import { Card, Col, Row } from "antd";
import "./DocumentsEnginner.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function DocumentsEnginner() {
  return (
    <div>
      <Row justify="space-around">
        <Col className="documentsCard">
          <Card title="National ID">
            <div className="content">
              Card content
              <div className="docIcons">
                <Tooltip disableFocusListener title="Download">
                  <FileDownloadIcon className="documentsIcon" />
                </Tooltip>
                <Tooltip disableFocusListener title="Preview">
                  <VisibilityIcon className="documentsIcon" />
                </Tooltip>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="documentsCard">
          <Card title="Enginner CV">
            <div className="content">
              Card content
              <div className="docIcons">
                <Tooltip disableFocusListener title="Download">
                  <FileDownloadIcon className="documentsIcon" />
                </Tooltip>
                <Tooltip disableFocusListener title="Preview">
                  <VisibilityIcon className="documentsIcon" />
                </Tooltip>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="documentsCard">
          <Card title="Work authorization">
            <div className="content">
              Card content
              <div className="docIcons">
                <Tooltip disableFocusListener title="Download">
                  <FileDownloadIcon className="documentsIcon" />
                </Tooltip>
                <Tooltip disableFocusListener title="Preview">
                  <VisibilityIcon className="documentsIcon" />
                </Tooltip>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="documentsCard">
          <Card title="Insurance">
            <div className="content">
              Card content
              <div className="docIcons">
                <Tooltip disableFocusListener title="Download">
                  <FileDownloadIcon className="documentsIcon" />
                </Tooltip>
                <Tooltip disableFocusListener title="Preview">
                  <VisibilityIcon className="documentsIcon" />
                </Tooltip>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="documentsCard">
          <Card title="Certifications">
            <div className="content">
              Card content
              <div className="docIcons">
                <Tooltip disableFocusListener title="Download">
                  <FileDownloadIcon className="documentsIcon" />
                </Tooltip>
                <Tooltip disableFocusListener title="Preview">
                  <VisibilityIcon className="documentsIcon" />
                </Tooltip>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
