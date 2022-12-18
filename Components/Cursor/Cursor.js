import dynamic from "next/dynamic";
import THEME from "../../styles/Theme";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={30}
      color="0, 192, 255"
      outerAlpha={0}
      innerScale={6}
      outerScale={0}
      innerStyle={{
        backgroundColor: "rgba(0, 192, 255,.4)",
      }}
      outerStyle={{
        border: `2px solid ${THEME.colors.extraColor}`,
        background: "transparent",
      }}
      cursor="auto"
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

export default Cursor;
