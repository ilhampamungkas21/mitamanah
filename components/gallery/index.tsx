import React from "react";
import GalleryArea from "./GalleryArea";
import MarqueeOne from "@/common/MarqueeOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";

const Gallery = () => {
	return (
		<>
			<HeaderThree />
			<BreadcrumbEvent title="Potret Kegiatan" subtitle="Gallery" />
			<GalleryArea />
			<MarqueeOne style_2={true} />
			<FooterThree />
		</>
	);
};

export default Gallery;
