import React from "react";
import { withRouter } from "react-router-dom";
import Event from "../components/Event";

const EventPage = () => {
  return (
    <div>
      <Event />
    </div>
  );
};

export default withRouter(EventPage);
