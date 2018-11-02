import {
  IMG_SIG_TANG_KIN_FEI,
  IMG_SIG_TI_BOON_WEE,
  Certificate
} from "../common";

const Template = Certificate({
  signatories: [
    {
      signature: IMG_SIG_TANG_KIN_FEI,
      name: "Tang Kin Fei",
      position: "Council Chairman",
      organisation: "Ngee Ann Polytechnic"
    },
    {
      signature: IMG_SIG_TI_BOON_WEE,
      name: "Ti Boon Wee",
      position: "Principal",
      organisation: "Ngee Ann Polytechnic"
    }
  ]
});

export default Template;
