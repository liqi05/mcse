import React from 'react';
import { Helmet } from 'react-helmet-async';
import Web1 from '../../assets/web1.jpg';
import Web2 from '../../assets/web2.jpg';

function About() {
  return (
    <div className="grid grid-cols-5 grid-rows-6 p-10">
      <Helmet>
        <title>FYMCS Web组 - 关于</title>
      </Helmet>
      <div className="grid order-0 col-span-3 row-start-1 col-start-1 row-span-3 bg-white rounded-lg p-10 mb-10 mr-10 content-center">
        <p className="font-misans text-6xl text-red font-bold pb-10">
          什么是web组？
        </p>
        <p className="font-misans text-2xl text-red font-regular pr-10">
          Web组是电脑协会的一个“学习组”。电脑学科广泛；电脑协会以“学习组”的形式，让会员可以选择自己喜爱的领域。Web组则是电脑协会里最大的学习组，提供会员学习网站开发这领域的机会。
          <br />
        </p>
      </div>
      <div className="grid order-1 col-span-2 row-start-1 col-start-4 row-span-3 overflow-hidden rounded-lg mb-10">
        <img
          src={Web1}
          alt="web1"
          id="pic1"
          className="w-full h-full object-cover transition duration-500 hover:scale-110 ease-out"
        />
      </div>
      <div className="grid order-2 col-span-2 row-start-4 col-start-1 row-span-3 overflow-hidden rounded-lg">
        <img
          src={Web2}
          alt="web2"
          id="pic2"
          className="w-full h-full object-cover transition duration-500 hover:scale-110 ease-out"
        />
      </div>
      <div className="grid order-3 col-span-3 row-start-4 col-start-3 row-span-3 bg-white rounded-lg ml-10 p-10 content-center">
        <p className="font-misans text-6xl text-red font-bold text-right pb-10">
          这网站是web组做的哦！
        </p>
        <p className="font-misans text-2xl text-red font-regular text-right pl-10">
          Web组是电脑协会的一个“学习组”。电脑学科广泛；电脑协会以“学习组”的形式，让会员可以选择自己喜爱的领域。Web组则是电脑协会里最大的学习组，提供会员学习网站开发这领域的机会。
          <br />
        </p>
      </div>

      <div />
    </div>
  );
}

export default About;
