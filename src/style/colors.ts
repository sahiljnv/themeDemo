// colors file for app, please add colors in this file according to functionality/

import {MD3Theme} from 'react-native-paper';

const white = '#FFFFFF';
const black = '#1f1f1f';

// Light theme colors

const LT_GRADIENT = ['#3345C888', '#1D005E05'];
const LT_PRIMARY = '#3345C8';
const LT_SHADOW_BG = '#A8AEC014';
const LT_LOADER_BG = '#A8AEC050';
const LT_DARK = '#000718';
const LT_LIGHT_BG = '#F0F2F4';
const LT_WHITE_BG = '#FFFFFF';
const LT_GREY_1 = '#9FA6AB';
const LT_BORDER_DEFAULT = '#9FA6AB70';
const LT_WHITE_TRANSPARENT = '#00000099';
const LT_GREY_2 = '#C6C8C9';
const LT_GREY_3 = '#EBEDFA';
const LT_ALERT = '#DA3232';
const LT_ALERT_BG = '#FDECEC';
export const LT_GRADIENT_BUTTON = ['#233184', '#011033'];
const LT_WARNING = '#F79621';
const LT_WARNING_BG = '#F796211A';
const LT_ONRAMPER_BG = '#FFFFFF';
const LT_SUCCESS = '#47C59F'; //  new success colors
const LT_BG_SELECTED = '#C9CEFF';

// Dark theme colors
const DT_GRADIENT = ['#984FF500', '#492E85'];
const DT_PRIMARY = '#5282FF'; // according to figma it is same as light, but we use Dark-Primary-03
const DT_SHADOW_BG = '#97A0B814';
const DT_LOADER_BG = '#97A0B850';
const DT_WHITE = '#FFFFFF';
const DT_DARK_BG = '#0D121E';
const DT_CONTRAST_BG = '#1D1F36';
const DT_GREY_1 = '#7D899A';
const DT_BORDER_DEFAULT = '#7D899A70';
const DT_CONTRAST_TRANSPARENT = '#ffffff40';
const DT_GREY_2 = '#3345C8'; //3345C8
const DT_GREY_3 = '#313B52';
const DT_ICON_BG = '#151D30';
const DT_ALERT = '#DA3232';
const DT_ALERT_BG = '#FDECEC';
const DT_ICON_COLOR = '#FFFFFF';
const DT_WARNING = '#F79621';
const DT_WARNING_BG = '#F796211A';
const DT_ONRAMPER_BG = '#363636';
const DT_SUCCESS = '#47C59F'; //  new success colors
const DT_BG_SELECTED = '#C9CEFF';

// Text color for any text component, whether its only text or
// inside another component like Button
export enum TextColor {
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  PRIMARY = '#3345C8',
  PRIMARY_DARK = '#011033',
  SECONDARY_LIGHT = '#9FA6AB',
  INVISIBLE = '#00000000',
  WARNING = '#DA3232',
  SUCCESS = '#47C59F',
}

export const PRIMARY_LIGHT = '#d6ecfe';
export const WHITE = white;
export const BLACK = black;
export const ALPHA_BLACK = 'rgba(0,0,0,0.5)';

// GRAYSCALE
export const GRAY = '#E1E1E1';
export const GRAY_LIGHT = '#E9EAEF';
export const GRAY_PURPLE_LIGHT = '#3C22F30D';
export const GRAY_MEDIUM = '#9E9E9E';
export const GRAY_DARK = '#8a8a8a';
export const GRAY_ICONS = '#A8AEC0';

// new ui colors
export const C_PRIMARY = LT_PRIMARY;
export const C_PRIMARY_DARK = '#101E41';
export const DARK_BLUE = '#151A6C';
export const LIGHT_BLUE = LT_GREY_3;

// Transaction colors( icon color and background color) appeared on dashboard
export const RED = LT_ALERT;
export const GREEN = '#47C59F';
export const GREEN_LIGHT = '#47C59F1A';
export const BOTTOM_SHEET_BACKGROUND = '#1F234780';
export const LOADER_BACKGROUND = '#00000000';
export const SUCCESS_BACKGROUND = '#EDF9F5';

interface CustomColors {
  primary: string;
  accent: string;
  background: string;
  shadowBackground: string;
  alertBackground: string;
  surface: string;
  warning: string;
  warningBackground: string;
  // gradientButton: string[];
  // middleButtonBackground: string[];
  gradientButton: string;
  middleButtonBackground: string;
  middleButtonGradient: string[];
  iconColor: string;
  onRamperView: string;
  textColor: {
    default: string;
    label: string;
    selectedLabel: string;
    alert: string;
    white: string;
    success: string;
  };
  loaderColor: {
    background: string;
  };
  buttonColor: {
    iconButtonBG1: string;
    iconButtonBG2: string;
    iconButtonBGSelected: string;
    iconButtonChild1: string;
    iconButtonChild2: string;
    middleButtonActions: string;
  };
  borderColor: {
    default: string;
    selected: string;
    shadow: string;
  };
  switch: {
    trackColor: {false: string; true: string};
  };
}
export interface MyMD3Theme extends MD3Theme {
  colors: MD3Theme['colors'] & CustomColors;
}

export const lightColors = {
  primary: LT_PRIMARY,
  accent: LT_GREY_2,
  background: LT_LIGHT_BG, // Color of SafeArea
  shadowBackground: LT_SHADOW_BG,
  surface: LT_WHITE_BG,
  alertBackground: LT_ALERT_BG,
  // gradientButton: LT_GRADIENT_BUTTON,
  gradientButton: LT_PRIMARY,
  // middleButtonBackground: [LT_WHITE_TRANSPARENT, LT_WHITE_BG],
  middleButtonBackground: LT_WHITE_TRANSPARENT,
  middleButtonGradient: LT_GRADIENT,
  iconColor: LT_DARK,
  warning: LT_WARNING,
  warningBackground: LT_WARNING_BG,
  onRamperView: LT_ONRAMPER_BG,
  textColor: {
    default: LT_DARK,
    label: LT_GREY_1,
    selectedLabel: LT_PRIMARY,
    alert: LT_ALERT,
    white: WHITE,
    success: LT_SUCCESS,
  },
  loaderColor: {
    background: LT_LOADER_BG,
  },
  buttonColor: {
    iconButtonBG1: LT_GREY_3,
    iconButtonBG2: LT_GREY_3,
    iconButtonBGSelected: LT_BG_SELECTED,
    iconButtonChild1: LT_DARK,
    iconButtonChild2: LT_GREY_1,
    middleButtonActions: WHITE,
  },
  borderColor: {
    default: LT_BORDER_DEFAULT,
    selected: LT_PRIMARY,
    shadow: LT_GREY_3,
  },
  switch: {
    trackColor: {true: LT_PRIMARY, false: LT_GREY_1},
  },
};

export const darkColors = {
  primary: DT_PRIMARY,
  accent: DT_GREY_2,
  background: DT_DARK_BG, // Color of SafeArea
  shadowBackground: DT_SHADOW_BG,
  surface: DT_CONTRAST_BG,
  alertBackground: DT_ALERT_BG,
  // gradientButton: DT_GRADIENT_BUTTON,
  gradientButton: DT_PRIMARY,
  // middleButtonBackground: [DT_CONTRAST_TRANSPARENT, DT_CONTRAST_BG],
  middleButtonBackground: DT_CONTRAST_TRANSPARENT,
  middleButtonGradient: DT_GRADIENT,
  iconColor: DT_ICON_COLOR,
  warning: DT_WARNING,
  warningBackground: DT_WARNING_BG,
  onRamperView: DT_ONRAMPER_BG,
  textColor: {
    default: DT_WHITE,
    label: DT_GREY_1,
    selectedLabel: DT_PRIMARY,
    alert: DT_ALERT,
    white: WHITE,
    success: DT_SUCCESS,
  },
  loaderColor: {
    background: DT_LOADER_BG,
  },
  buttonColor: {
    iconButtonBG1: DT_ICON_BG,
    iconButtonBG2: DT_GREY_3,
    iconButtonBGSelected: DT_BG_SELECTED,
    iconButtonChild1: DT_WHITE,
    iconButtonChild2: DT_GREY_1,
    middleButtonActions: DT_ICON_BG,
  },
  borderColor: {
    default: DT_BORDER_DEFAULT,
    selected: DT_PRIMARY,
    shadow: DT_GREY_3,
  },
  switch: {
    trackColor: {true: DT_PRIMARY, false: DT_ICON_BG},
  },
};

//new UI colors
export const BACKGROUND_COLOR = '#3C22F308';
export const CLOSE_BUTTON_COLOR = '#A8AEC026';
export const LIGHT_COLOR = '#FFFFFF16';
export const FAB_ACTIVE_COLOR = '#d3e0d6';
export const SELECT_TOKEN_COLOR = '#ccc';
export const TOKEN_TEXT_COLOR = '#000';
export const MANGE_SELECT_COLOR = '#F0F0F0';
export const LIGHT_GREEN = '#EDF9F5';
export const LIGHT_RED = '#FDECEC';
export const PERCENTAGE_COLOR = '#15E85032';

export const SLICE_ONE_COLOR = '#8F5AE8';
export const SLICE_TWO_COLOR = '#26A17B';
export const CURRENCY_CONTAINER_COLOR = LT_PRIMARY;
export const SLICE_THREE_COLOR = '#627EEA';

export const BALANCE_GRADIENT_ONE = '#011033';
export const NOTIFICATION_GRADIENT = '#5282FF';
