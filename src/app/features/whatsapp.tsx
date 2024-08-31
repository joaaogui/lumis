import React from "react";

// Define the WhatsAppButton component
export const WhatsAppButton = ({
  phoneNumber,
  message,
  style,
}: {
  phoneNumber: string;
  message: string;
  style?: React.CSSProperties;
}) => {
  // URL encode the message to ensure it's properly formatted
  const encodedMessage = encodeURIComponent(message);
  // Construct the WhatsApp URL
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        ...style,
      }}
    >
      <img
        src="/icons/whatsapp.png"
        alt="WhatsApp"
        style={{
          width: "64px",
          height: "auto",
        }}
      />
    </a>
  );
};
