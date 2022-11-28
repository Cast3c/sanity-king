import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Wap = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+573132129686"
        accountName="Sanity King"
        chatMessage="Bienvenido a Sanity King como podemos ayudarte ? "
        statusMessage="Expertos en limpieza y mantenimiento"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
};

export default Wap;
