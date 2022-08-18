/* eslint-disable max-len */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ImageHTML from '../../assets/html.jpg';
import ImageCSS from '../../assets/css.jpeg';
import ImageJS from '../../assets/js.jpg';
import ImageSL from '../../assets/selflearn.jpg';
import ImageKN from '../../assets/knowledge.jpg';

function Course() {
  return (
    <div className="grid grid-cols-5 grid-rows-8 p-10">
      <Helmet>
        <title>FYMCS Web组 - 课程</title>
      </Helmet>
      <div className="grid col-start-1 col-span-2 row-start-1">
        <div className="bg-white rounded-lg">
          <p className="font-misans text-6xl font-bold text-blue p-10 tracking-tighter">
            “
          </p>
          <p className="font-misans text-7xl font-bold text-blue p-10 tracking-tighter">
            Web组学什么的？
          </p>
          <p className="font-misans text-6xl font-bold text-blue p-10 text-right tracking-tighter">
            ”
          </p>
        </div>
      </div>
      <div className="grid col-start-3 col-span-3 row-start-1 ml-10 content-center">
        <p className="font-misans text-4xl font-regular text-white p-10 tracking-tighter">
          Web组主要学习网络开发与设计。组员将会学习如何使用HTML, CSS,
          JavaScript等等主流编程语言来建立，设计，以及维修网站。
        </p>
      </div>
      <div className="grid col-start-1 col-span-3 mt-20 mr-10 bg-white rounded-lg content-center">
        <p className="font-poppins text-6xl font-bold text-blue px-10 py-5 tracking-tighter">
          HTML
        </p>
        <p className="font-misans text-2xl font-regular text-blue px-10 tracking-tighter">
          HTML是建立网站最基础的编程语言。它负责把网站的内容显示出来，是为所有网站的基架。若您想要开始创立网站，一切将从html开始。HTML对完全没有编程知识的人可能显得有挑战性，但它其实并不难学。
        </p>
      </div>
      <div className="grid col-start-4 col-span-2 mt-20 overflow-hidden">
        <img
          className="rounded-lg w-full h-full object-cover transition duration-500 hover:scale-110 ease-out"
          src={ImageHTML}
          alt="html"
        />
      </div>
      <div className="grid col-start-1 col-span-2 mt-20 overflow-hidden">
        <img
          className="rounded-lg w-full h-full object-cover transition duration-500 hover:scale-110 ease-out"
          src={ImageCSS}
          alt="css"
        />
      </div>
      <div className="grid col-start-3 col-span-3 mt-20 ml-10 bg-white rounded-lg content-center">
        <p className="font-poppins text-6xl font-bold text-blue px-10 py-5 tracking-tighter">
          CSS
        </p>
        <p className="font-misans text-2xl font-regular text-blue px-10 tracking-tighter">
          CSS是用来设计网站的编程语言。一个网站差不多所有设计元素都是使用CSS做出来的。这个编程语言是续HTML后，第二最重要的编程语言。CSS跟HTML一样，并不是一个很复杂的编程语言。
        </p>
      </div>
      <div className="grid col-start-1 col-span-3 mt-20 mr-10 bg-white rounded-lg content-center">
        <p className="font-poppins text-6xl font-bold text-blue px-10 py-5 tracking-tighter">
          JavaScript
        </p>
        <p className="font-misans text-2xl font-regular text-blue px-10 tracking-tighter">
          JavaScript，或者俗称JS，是用来让网站更有互动性的编程语言。目前，JS是世界上最普遍的编程语言，不止用于网络开发，也用于各种软件中。JS本身是个比较复杂，具挑战性的编程语言。庆幸的时，对于初始者来说，JS并不是最关键需掌握的语言。
        </p>
      </div>
      <div className="grid col-start-4 col-span-2 mt-20 overflow-hidden">
        <img
          className="rounded-lg w-full h-full object-cover transition duration-500 hover:scale-110 ease-out"
          src={ImageJS}
          alt="html"
        />
      </div>
      <div className="grid col-start-1 col-span-5 mt-20">
        <p className="font-misans text-7xl font-bold text-white text-center pt-20 pb-40">
          “进Web组需要什么基本要求吗？”
        </p>
      </div>
      <div className="grid col-start-1 col-span-3 bg-[url('selflearn.jpg')] bg-cover rounded-lg">
        <p className="font-misans text-6xl font-bold text-white p-10 tracking-tighter ">
          ++
        </p>
        <p className="font-misans text-6xl font-bold text-white p-10 tracking-tighter ">
          自学能力
        </p>
        <p className="font-misans text-6xl font-bold text-white p-10 text-right tracking-tighter ">
          ++
        </p>
      </div>
      <div className="grid col-start-4 col-span-2 ml-10 content-center">
        <p className="font-misans text-4xl font-regular text-white p-10 tracking-tighter">
          Web组强烈要求组员具备“打破沙锅问到底”的自学精神。组员必须配备依靠Google或者任何网络资讯以及自己拥有的知识把难题解决。
        </p>
      </div>
      <div className="grid col-start-1 col-span-2 mr-20 content-center mt-20">
        <p className="font-misans text-4xl font-regular pl-10 text-right text-white tracking-tighter">
          除了自学精神，进入web组的人也需要基本的电脑常识。组员需要认识基本的电脑操作原理，才能够活用网络开发所学到的知识。
        </p>
      </div>
      <div className="grid col-start-3 col-span-3 bg-[url('knowledge.jpg')] bg-cover rounded-lg mt-20">
        <p className="font-misans text-6xl font-bold text-white p-10 tracking-tighter text-right">
          ++
        </p>
        <p className="font-misans text-6xl font-bold text-white p-10 tracking-tighter text-right">
          基本常识
        </p>
        <p className="font-misans text-6xl font-bold text-white p-10 tracking-tighter">
          ++
        </p>
      </div>
      <div className="grid col-start-1 col-span-3 bg-[url('selflearn.jpg')] bg-cover rounded-lg mt-20">
        <p className="font-misans text-6xl font-bold text-white p-10 tracking-tighter ">
          ++
        </p>
        <p className="font-misans text-6xl font-bold text-white p-10 tracking-tighter ">
          电脑设备
        </p>
        <p className="font-misans text-6xl font-bold text-white p-10 text-right tracking-tighter ">
          ++
        </p>
      </div>
      <div className="grid col-start-4 col-span-2 ml-10 content-center mt-20">
        <p className="font-misans text-4xl font-regular text-white p-10 tracking-tighter">
          Web组的组员需要自备一台电脑，也建议使用笔电型电脑，以方便联课时带来学校供进行学习课。
        </p>
      </div>
    </div>
  );
}

export default Course;
