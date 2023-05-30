"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.muiGrafanaTheme = void 0;
var runtime_1 = require("@grafana/runtime");
var styles_1 = require("@mui/material/styles");
var themeOptions = function () {
    var mode = runtime_1.config.theme2.isLight ? "light" : "dark";
    return {
        spacing: [
            runtime_1.config.theme2.spacing(0),
            runtime_1.config.theme2.spacing(4),
            runtime_1.config.theme2.spacing(8),
            runtime_1.config.theme2.spacing(16),
            runtime_1.config.theme2.spacing(32),
            runtime_1.config.theme2.spacing(64),
        ],
        typography: {
            fontFamily: runtime_1.config.theme2.typography.fontFamily,
            fontSize: runtime_1.config.theme2.typography.fontSize,
            fontWeightLight: runtime_1.config.theme2.typography.fontWeightLight,
            fontWeightMedium: runtime_1.config.theme2.typography.fontWeightMedium,
            fontWeightBold: runtime_1.config.theme2.typography.fontWeightBold,
            htmlFontSize: runtime_1.config.theme2.typography.htmlFontSize,
            h1: {
                fontSize: runtime_1.config.theme2.typography.h1.fontSize,
                fontWeight: runtime_1.config.theme2.typography.h1.fontWeight,
                lineHeight: runtime_1.config.theme2.typography.h1.lineHeight,
            },
            h2: {
                fontSize: runtime_1.config.theme2.typography.h2.fontSize,
                fontWeight: runtime_1.config.theme2.typography.h2.fontWeight,
                lineHeight: runtime_1.config.theme2.typography.h2.lineHeight,
            },
            h3: {
                fontSize: runtime_1.config.theme2.typography.h3.fontSize,
                fontWeight: runtime_1.config.theme2.typography.h3.fontWeight,
                lineHeight: runtime_1.config.theme2.typography.h3.lineHeight,
            },
            h4: {
                fontSize: runtime_1.config.theme2.typography.h4.fontSize,
                fontWeight: runtime_1.config.theme2.typography.h4.fontWeight,
                lineHeight: runtime_1.config.theme2.typography.h4.lineHeight,
            },
            h5: {
                fontSize: runtime_1.config.theme2.typography.h5.fontSize,
                fontWeight: runtime_1.config.theme2.typography.h5.fontWeight,
                lineHeight: runtime_1.config.theme2.typography.h5.lineHeight,
            },
            h6: {
                fontSize: runtime_1.config.theme2.typography.h6.fontSize,
                fontWeight: runtime_1.config.theme2.typography.h6.fontWeight,
                lineHeight: runtime_1.config.theme2.typography.h6.lineHeight,
            },
        },
        breakpoints: {
            values: {
                xs: runtime_1.config.theme2.breakpoints.values.xs,
                sm: runtime_1.config.theme2.breakpoints.values.sm,
                md: runtime_1.config.theme2.breakpoints.values.md,
                lg: runtime_1.config.theme2.breakpoints.values.lg,
                xl: runtime_1.config.theme2.breakpoints.values.xl,
            },
        },
        palette: __assign({ mode: mode }, (mode === "light"
            ? {
                // palette values for light mode
                primary: { main: runtime_1.config.theme2.colors.primary.main },
                secondary: { main: runtime_1.config.theme2.colors.secondary.main },
                error: { main: runtime_1.config.theme2.colors.error.main },
                warning: { main: runtime_1.config.theme2.colors.warning.main },
                info: { main: runtime_1.config.theme2.colors.info.main },
                success: { main: runtime_1.config.theme2.colors.success.main },
                background: {
                    default: runtime_1.config.theme2.colors.background.primary,
                    secondary: runtime_1.config.theme2.colors.background.secondary,
                },
                text: {
                    primary: runtime_1.config.theme2.colors.text.primary,
                    secondary: runtime_1.config.theme2.colors.text.secondary,
                },
            }
            : {
                // palette values for dark mode
                primary: { main: runtime_1.config.theme2.colors.primary.main },
                secondary: { main: runtime_1.config.theme2.colors.secondary.main },
                error: { main: runtime_1.config.theme2.colors.error.main },
                warning: { main: runtime_1.config.theme2.colors.warning.main },
                info: { main: runtime_1.config.theme2.colors.info.main },
                success: { main: runtime_1.config.theme2.colors.success.main },
                background: {
                    default: runtime_1.config.theme2.colors.background.primary,
                    secondary: runtime_1.config.theme2.colors.background.secondary,
                },
                text: {
                    primary: runtime_1.config.theme2.colors.text.primary,
                    secondary: runtime_1.config.theme2.colors.text.secondary,
                },
            })),
    };
};
exports.muiGrafanaTheme = (0, styles_1.createTheme)(themeOptions());
