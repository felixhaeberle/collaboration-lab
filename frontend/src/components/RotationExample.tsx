import * as React from "react";

import { Cursor, midpointType } from "../types";

import Mouse from "./Mouse";
import { Socket } from "socket.io-client";

interface RotationExampleProps {
  cursors: Cursor[];
  midpointCoordinate: midpointType;
  socket: Socket;
}

const RotationExample: React.FC<RotationExampleProps> = ({
  cursors,
  midpointCoordinate,
  socket,
}) => {
  return (
    <>
      {cursors.map((c: Cursor, index) => {
        if (socket.id && c.socket === socket.id) return null;
        return <Mouse {...{ c, index, midpointCoordinate }} />;
      })}
    </>
  );
};

export default RotationExample;
