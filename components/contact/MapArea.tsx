
import React from 'react';

const MapArea = () => {
  return (
    <>
       <div className="map-area-section section-padding pt-0 fix">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="map-area">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6412592863076!2d111.0688953!3d-7.394033799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a025a55555555%3A0xf37691d1e67a6037!2sMIT%20amanah%20sragen!5e0!3m2!1sen!2sid!4v1764167683187!5m2!1sen!2sid" style={{border: "0px"}} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </>
  );
};

export default MapArea;