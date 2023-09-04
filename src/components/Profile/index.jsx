/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import Xiaoxin from "../../assets/xiaoxin.jpeg";
import { Modal } from "antd";
import weixin from "../../assets/weixin.jpg";
import qq from "../../assets/qq.jpg";
import {
  GithubFilled,
  WechatFilled,
  QqCircleFilled,
  MailFilled,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import sy from "./Profile.module.scss";
export default function index() {
  const profileBOX = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [codeImage, setCodeImage] = useState(weixin);
  const deleteBox = () => {
    console.log();
    profileBOX.current.style.transform = "scale(1.2)";
    setTimeout(() => {
      profileBOX.current.style.display = "none";
    }, 600);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const codeImageStyle = {
    width: "100%",
  };
  return (
    <div className={sy.profile} ref={profileBOX}>
      <CloseCircleTwoTone
        twoToneColor="#f19797"
        className={sy.delete}
        onClick={deleteBox}
      />
      <div className={sy.avatar}>
        <img src={Xiaoxin} alt="" />
      </div>
      <div className={sy.contact}>
        <GithubFilled
          className={sy.icons}
          onClick={() => {
            window.open("https://github.com/xiaoMENG1122?tab=repositories");
          }}
        />
        <WechatFilled
          className={sy.icons}
          onClick={() => {
            setCodeImage(weixin);
            showModal();
          }}
        />
        <QqCircleFilled
          className={sy.icons}
          onClick={() => {
            setCodeImage(qq);
            showModal();
          }}
        />
        <MailFilled
          className={sy.icons}
          onClick={() => {
            setCodeImage(false);
            showModal();
          }}
        />
      </div>
      <div className={sy.introduce}>
        <h5>XiaoMeng</h5>
        <div>
          小张 专注于潜水、摸鱼、搬砖。兴趣使然的一个野生(FE)程序猿 精通
          Ai、Fw、Fl、Br、Ae、Pr、Id、Ps 等软件的安装与卸载，精通
          CSS、JavaScript、PHP、ASP、C、C++、C#、Java、Ruby、Perl、Lisp、Python、Objective-C、ActionScript、Pascal等单词的拼写，熟悉
          Windows、Linux、OS X、Android、iOS、WP8 等系统的开关机。
        </div>
      </div>
      <Modal
        title="联系方式"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {codeImage && <img src={codeImage} alt="" style={codeImageStyle} />}
        {!codeImage && <h3>zinxin84849@gmnail.com</h3>}
      </Modal>
    </div>
  );
}
