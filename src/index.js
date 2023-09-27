import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import JobsList from "./components/jobslist";

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages= {navigator.language.startsWith("es")?localeEsMessages:localeEnMessages}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);