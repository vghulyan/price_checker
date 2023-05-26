import React, { useEffect, useState, useRef } from "react";
import DateObject from "../components/DateObject";

const LatestPrice = () => {
  const webSocketRef = useRef(false);
  const [latestPrice, setLatestPrice] = useState("");
  const [latestTimestamp, setLatestTimestamp] = useState("");

  useEffect(() => {
    const initialiseWS = () => {
      const webSocket = new WebSocket(
        "ws://stream.tradingeconomics.com/?client=guest:guest"
      );
      return webSocket;
    };

    if (webSocketRef.current === false) {
      const webSocket = initialiseWS();

      webSocket.onopen = () => {
        webSocket.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');
      };
      webSocket.onmessage = (event) => {
        const { dt, price } = JSON.parse(event.data);
        if (price) {
          setLatestPrice(price);
          setLatestTimestamp(dt);
        }
      };

      webSocketRef.current = true;
    }
    return () => (webSocketRef.current = false);
  }, []);

  return (
    <div className="latest-price-container">
      <div className="latest-price-row">
        <p className="latest-price-label">Latest Price:</p>
        <p className="latest-price-value">{latestPrice}</p>
      </div>
      <div className="latest-price-row">
        <p className="latest-timestamp-label">Latest Timestamp:</p>
        <p className="latest-timestamp-value">
          <DateObject dt={latestTimestamp} />
        </p>
      </div>
    </div>
  );
};

export default LatestPrice;
