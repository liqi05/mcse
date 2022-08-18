import React from 'react';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div className="w-full text-white font-poppins flex justify-center mb-4">
      <p className="text-sm flex items-center gap-1">
        This website is powered by ReactJS
        <Icon
          icon="simple-icons:react"
          className="stroke-[0.5px] stroke-white"
        />
      </p>
    </div>
  );
}

export default Footer;
