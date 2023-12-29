import {
  bannerimg1,
  bannerimg2,
  bannerimg3,
  bannerimg4,
} from "../helpers/common";

const Content = () => {
  return (
    <div className="content-container">
      <div className="iamge1">
        <img src={bannerimg1} alt="bannerimage" />
      </div>
      <div className="banner-right-images">
        <div className="banner-rowimages">
          <div className="iamge1">
            <img src={bannerimg2} alt="bannerimage" />
          </div>
          <div className="iamge1">
            <img src={bannerimg3} alt="bannerimage" />
          </div>
        </div>
        <div className="iamge1">
          <img src={bannerimg4} alt="bannerimage" />
        </div>
      </div>
    </div>
  );
};

export default Content;
