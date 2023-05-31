## Getting started

Map grafana theme to material ui theme.

### Install Material UI Dependencies

https://mui.com/material-ui/getting-started/installation/

### Install this library with npm or yarn

```bash
    npm add https://github.com/L2D2Grafana/mui-grafana-theme
```

or

```bash
    yarn add https://github.com/L2D2Grafana/mui-grafana-theme
```

### Usage

```bash
 import { muiGrafanaTheme } from '@L2D2Grafana/mui-grafana-theme';
 import { ThemeProvider } from '@emotion/react';

 render() {
     return (
         <ThemeProvider theme={muiGrafanaTheme}>
             <App />
         </ThemeProvider>
     );
 }
```
