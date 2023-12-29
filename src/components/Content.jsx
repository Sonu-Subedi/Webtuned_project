import {
  bannerimg1,
  bannerimg2,
  bannerimg3,
  bannerimg4,
} from "../helpers/common";

const Content = () => {
  return (
    <>
      <div className="content-container">
        <div className="banner-left-images">
          <div className="image1">
            <img src={bannerimg1} alt="bannerimage" />
          </div>
          <div className="bannertext">
            <span className="bannertext1">New Style Design</span>
            <span className="bannertext2">Trendy Fashion</span>
            <span className="bannertext3">30% off</span>
          </div>
        </div>
        <div className="banner-right-images">
          <div className="banner-rowimages">
            <div className="image2">
              <img src={bannerimg2} alt="bannerimage" />
            </div>
            <div className="image3">
              <img src={bannerimg3} alt="bannerimage" />
            </div>
          </div>
          <div className="image4">
            <img src={bannerimg4} alt="bannerimage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
