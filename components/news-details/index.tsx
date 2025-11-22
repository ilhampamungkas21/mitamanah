import React from "react";
import MarqueeOne from "@/common/MarqueeOne";
import NewsDetailsArea from "./NewsDetailsArea";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import { Article } from "@/lib/types";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";

interface NewsDetailsProps{
	article : Article
}

export default function NewsDetails({article}:NewsDetailsProps){
	return (
		<>
			<HeaderThree />
			<BreadcrumbEvent title="Blog Details" subtitle="Blog Details" />
			<NewsDetailsArea article={article}/>
			<MarqueeOne style_2={true} />
			<FooterThree />
		</>
	);
};

