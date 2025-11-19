import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import FooterThree from "@/layouts/footers/FooterOne";
import React from "react";
import NewsArea from "./NewsArea";
import HeaderThree from "@/layouts/headers/HeaderThree";

const News = () => {
	return (
		<>
			<HeaderThree />
			<BreadcrumbEvent title="Berita" subtitle="Berita" />
			<NewsArea />       
			<MarqueeOne style_2={true} />
			<FooterThree />
		</>
	);
};

export default News;
