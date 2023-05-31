## Getting started

1. Install dependencies - this library requires material ui to be installed

   https://mui.com/material-ui/getting-started/installation/

   ```bash
   yarn add https://github.com/L2D2Grafana/mui-grafana-theme
   npm add https://github.com/L2D2Grafana/mui-grafana-theme
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
