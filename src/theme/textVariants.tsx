import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontFamily } from "../LoadAssets";

export const textVariants = {
  header: {
    fontFamily: FontFamily.MonserratSemibold,
    fontWeight: "bold",
    fontSize: hp("3.5%"),
    lineHeight: hp("4.5%"),
    color: "gray.700",
    marginBottom: "m"
  },
  subheader: {
    fontFamily: FontFamily.MonserratSemibold,
    fontSize: hp("3%"),
    lineHeight: hp("3.5%"),
    color: "gray.700",
    marginBottom: "s"
  },
  body: {
    fontFamily: FontFamily.RalewayRegular,
    fontSize: hp("1.9%"),
    lineHeight: hp("2.5%"),
    color: "gray.700",
  },
  small: {
    fontFamily: FontFamily.RalewayRegular,
    fontSize: hp("1.6%"),
    lineHeight: hp("2.3%"),
    color: "gray.700",
  },
  smallest: {
    fontFamily: FontFamily.RalewayRegular,
    fontSize: hp("1.4%"),
    lineHeight: hp("2%"),
    color: "gray.700",
  },
};
