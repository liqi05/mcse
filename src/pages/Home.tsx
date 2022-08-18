import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className="image:hover max-w-screen flex-1 overflow-y-hidden flex flex-col">
      <Helmet>
        <title>FYMCS Web组 - 首页</title>
      </Helmet>
      <div className="grid w-screen items-center flex-1">
        <div className="grid content-center">
          <div
            className="font-poppins tracking-tighter text-8xl text-white font-bold pl-8 mb-2"
            id="title"
          >
            <p>We are Web Group.</p>
          </div>
          <div className="pl-9" id="subtitle">
            <p className="font-misans text-white text-4xl font-normal">
              我们是电脑协会的web组。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
