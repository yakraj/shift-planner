import React from "react";
import Styled, { useTheme } from "styled-components/native";
import { TouchableNativeFeedback } from "react-native";

const getVariant = (
  border,
  jus,
  ali,
  padL,
  padR,
  padT,
  padB,
  marL,
  marR,
  marT,
  marB,
  borR,
  ofl,
  fdr,
  padd,
  marr,
  bcC,
  width,
  height,
  fwr,
  position,
  opacity,
  zindex,
  elev,
  aliS,
  jusS,
  Left,
  Right,
  Top,
  Bottom,
  MxHeight,
  display,
  transform,
  theme
) => {
  return ` ${fdr && `flex-direction: ${fdr}`};
${border && `border: ${border}`};
${jus && `justify-content: ${jus}`};
${ali && `align-items: ${ali}`};
${padd && `padding: ${padd}px`};
${marL && `margin-left: ${marL}px`};
${marR && `margin-right: ${marR}px`};
${marT && `margin-top: ${marT}px`};
${marB && `margin-bottom: ${marB}px`};
${padL && `padding-left: ${padL}px`};
${padR && `padding-right: ${padR}px`};
${padT && `padding-top: ${padT}px`};
${padB && `padding-bottom: ${padB}px;`};
${marr && `margin: ${marr}px`};
${borR && `border-radius: ${borR}px`};
${ofl && ` overflow: ${ofl}`};
${bcC && `background-color: ${bcC}`};
${width && `width: ${width}`};
${height && `height: ${height}`};
${fwr && `flex-wrap: ${fwr}`};
${position && `position: ${position}`};
${zindex && `z-index: ${zindex}`};
${opacity && `opacity : ${opacity}`};
${Left && `left : ${Left}px`};
${Right && `right : ${Right}px`};
${Top && `top : ${Top}px`};
${Bottom && `bottom : ${Bottom}px`};
${elev && `elevation : ${elev}`};
${aliS && `align-self : ${aliS}`};
${jusS && `justify-self : ${jusS}`};
${MxHeight && `max-height : ${MxHeight}`};
${display && `display : ${display}`};
${transform && `transform : ${transform}`};

`;
};

const CusView = Styled.View`
  ${({ variant }) => variant}
`;

export const View = ({
  border,
  jus,
  ali,
  padL,
  padR,
  padT,
  padB,
  marL,
  marR,
  marT,
  marB,
  borR,
  ofl,
  fdr,
  padd,
  marr,
  bcC,
  width,
  height,
  fwr,
  position,
  opacity,
  zindex,
  elev,
  aliS,
  jusS,
  Left,
  Right,
  Top,
  Bottom,
  MxHeight,
  display,
  transform,
  onpress,
  touchable,
  tofl,
  tblC,
  children,
}) => {
  const theme = useTheme(theme);
  const variant = getVariant(
    border,
    jus,
    ali,
    padL,
    padR,
    padT,
    padB,
    marL,
    marR,
    marT,
    marB,
    borR,
    ofl,
    fdr,
    padd,
    marr,
    bcC,
    width,
    height,
    fwr,
    position,
    opacity,
    zindex,
    elev,
    aliS,
    jusS,
    Left,
    Right,
    Top,
    Bottom,
    MxHeight,
    display,
    transform,
    theme
  );
  return touchable ? (
    <TouchableNativeFeedback
      onPress={onpress}
      background={TouchableNativeFeedback.Ripple(tblC, tofl ? true : false)}
    >
      <CusView variant={variant}>{children}</CusView>
    </TouchableNativeFeedback>
  ) : (
    <CusView variant={variant}>{children}</CusView>
  );
};

View.defaultProps = {
  jus: "flex-start",
  ali: "center",
  tblC: "grey",
};
