## Getting started

1. Install Dependencies - This library requires material ui to be installed 👻

   ### MUI installation instructions:

   https://mui.com/material-ui/getting-started/installation/

   ### Install this library with npm or yarn

   ```bash
       npm add https://github.com/L2D2Grafana/mui-grafana-theme
   ```

   or

   ```bash
       yarn add https://github.com/L2D2Grafana/mui-grafana-theme
   ```

2. Usage

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
