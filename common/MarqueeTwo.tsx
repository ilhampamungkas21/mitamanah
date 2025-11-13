

import Image from 'next/image';
import React from 'react';

const MarqueeTwo = () => {
  return (
    <>
      <div className="marquee-section section-padding border-bottom">
            <div className="mycustom-marque style-3">
                <div className="scrolling-wrap">
                    <div className="comm">
                        <div className="cmn-textslide"><Image width={80} height={100} src="/assets/img/kab-sragen.webp" objectFit='cover' alt="Kabupaten Sragen" /> Kabupaten Sragen</div>
                        <div className="cmn-textslide"><Image width={80} height={100} src="/assets/img/kab-sragen.webp" objectFit='cover' alt="Kemenag Sragen" /> Dinas Pendidikan Sragen</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide"><Image width={80} height={100} src="/assets/img/kab-sragen.webp" objectFit='cover' alt="Kabupaten Sragen" /> Kabupaten Sragen</div>
                        <div className="cmn-textslide"><Image width={80} height={100} src="/assets/img/kab-sragen.webp" objectFit='cover' alt="Kemenag Sragen" /> Dinas Pendidikan Sragen</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide"><Image width={80} height={100} src="/assets/img/kab-sragen.webp" objectFit='cover' alt="Kabupaten Sragen" /> Kabupaten Sragen</div>
                        <div className="cmn-textslide"><Image width={80} height={100} src="/assets/img/kab-sragen.webp" objectFit='cover' alt="Kemenag Sragen" /> Dinas Pendidikan Sragen</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default MarqueeTwo;