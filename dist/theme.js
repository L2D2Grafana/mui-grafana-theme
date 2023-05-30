var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { config } from "@grafana/runtime";
import { createTheme } from "@mui/material/styles";
var themeOptions = function () {
    var mode = config.theme2.isLight ? "light" : "dark";
    return {
        spacing: [
            config.theme2.spacing(0),
            config.theme2.spacing(4),
            config.theme2.spacing(8),
            config.theme2.spacing(16),
            config.theme2.spacing(32),
            config.theme2.spacing(64),
        ],
        typography: {
            fontFamily: config.theme2.typography.fontFamily,
            fontSize: config.theme2.typography.fontSize,
            fontWeightLight: config.theme2.typography.fontWeightLight,
            fontWeightMedium: config.theme2.typography.fontWeightMedium,
            fontWeightBold: config.theme2.typography.fontWeightBold,
            htmlFontSize: config.theme2.typography.htmlFontSize,
            h1: {
                fontSize: config.theme2.typography.h1.fontSize,
                fontWeight: config.theme2.typography.h1.fontWeight,
                lineHeight: config.theme2.typography.h1.lineHeight,
            },
            h2: {
                fontSize: config.theme2.typography.h2.fontSize,
                fontWeight: config.theme2.typography.h2.fontWeight,
                lineHeight: config.theme2.typography.h2.lineHeight,
            },
            h3: {
                fontSize: config.theme2.typography.h3.fontSize,
                fontWeight: config.theme2.typography.h3.fontWeight,
                lineHeight: config.theme2.typography.h3.lineHeight,
            },
            h4: {
                fontSize: config.theme2.typography.h4.fontSize,
                fontWeight: config.theme2.typography.h4.fontWeight,
                lineHeight: config.theme2.typography.h4.lineHeight,
            },
            h5: {
                fontSize: config.theme2.typography.h5.fontSize,
                fontWeight: config.theme2.typography.h5.fontWeight,
                lineHeight: config.theme2.typography.h5.lineHeight,
            },
            h6: {
                fontSize: config.theme2.typography.h6.fontSize,
                fontWeight: config.theme2.typography.h6.fontWeight,
                lineHeight: config.theme2.typography.h6.lineHeight,
            },
        },
        breakpoints: {
            values: {
                xs: config.theme2.breakpoints.values.xs,
                sm: config.theme2.breakpoints.values.sm,
                md: config.theme2.breakpoints.values.md,
                lg: config.theme2.breakpoints.values.lg,
                xl: config.theme2.breakpoints.values.xl,
            },
        },
        palette: __assign({ mode: mode }, (mode === "light"
            ? {
                // palette values for light mode
                primary: { main: config.theme2.colors.primary.main },
                secondary: { main: config.theme2.colors.secondary.main },
                error: { main: config.theme2.colors.error.main },
                warning: { main: config.theme2.colors.warning.main },
                info: { main: config.theme2.colors.info.main },
                success: { main: config.theme2.colors.success.main },
                background: {
                    default: config.theme2.colors.background.primary,
                    secondary: config.theme2.colors.background.secondary,
                },
                text: {
                    primary: config.theme2.colors.text.primary,
                    secondary: config.theme2.colors.text.secondary,
                },
            }
            : {
                // palette values for dark mode
                primary: { main: config.theme2.colors.primary.main },
                secondary: { main: config.theme2.colors.secondary.main },
                error: { main: config.theme2.colors.error.main },
                warning: { main: config.theme2.colors.warning.main },
                info: { main: config.theme2.colors.info.main },
                success: { main: config.theme2.colors.success.main },
                background: {
                    default: config.theme2.colors.background.primary,
                    secondary: config.theme2.colors.background.secondary,
                },
                text: {
                    primary: config.theme2.colors.text.primary,
                    secondary: config.theme2.colors.text.secondary,
                },
            })),
    };
};
export var muiGrafanaTheme = createTheme(themeOptions());
