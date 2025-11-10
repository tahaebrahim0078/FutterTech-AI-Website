import "./mainProducts.css";
import MainProductsReusable from "./mainProductsReusable/mainProductsReusable";

export default function mainProducts() {
  const ProductData = [
    {
      productIcons: "productIcon1",
      TitleProductLeft: "AI Revolution",
      CardLeftTitle: "Host",
      CardLeftSubtilte: "Dr. Sarah Mitchell",
      productImgs: "productImg1",
      TitleRightProduct: "Delves into the transformative impact of AI",
      SubTitleRightProduct:
        "Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.",
      CardProductRightTitle1: "Total Episodes",
      CardProductRightTitle2: "Average Episode Length",
      CardProductRightTitle3: "Release Frequency",
      CardProductRight_SUP_Title1: "50",
      CardProductRight_SUP_Title2: "30 min",
      CardProductRight_SUP_Title3: "Weekly",
      borderProduct: true,
    },
    {
      productIcons: "productIcon2",
      TitleProductLeft: "AI Conversations",
      CardLeftTitle: "Host",
      CardLeftSubtilte: "Mark Anderson",
      productImgs: "productImg2",
      TitleRightProduct:
        "Engage in thought-provoking conversations with leading experts.",
      SubTitleRightProduct:
        "Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts.",
      CardProductRightTitle1: "Total Episodes",
      CardProductRightTitle2: "Average Episode Length",
      CardProductRightTitle3: "Release Frequency",
      CardProductRight_SUP_Title1: "40",
      CardProductRight_SUP_Title2: "40 min",
      CardProductRight_SUP_Title3: "Monthly",
      borderProduct: false,
    },
  ];
  return (
    <div>
      {ProductData.map((chat, index) => {
        return <MainProductsReusable key={index} {...chat} />;
      })}
    </div>
  );
}
