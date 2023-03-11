import React, { Component } from "react";
import ModifierAgent from "./Components/ModifierAgent";
import AjouterBeneficiaire from "./Components/AjouterBeneficiaire";
import ModifierBeneficiaire from "./Components/ModifierBeneficiaire";
import GrilleSRA from "./Components/GrilleSRA";
import SupprimerAgent from "./Components/SupprimerAgent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AjouterDemandeSoutien from "./Components/AjouterDemandeSoutienEtape1";
import AjouterDemandeSoutien2 from "./Components/AjouterDemandeSoutienEtape2";
import AjouterAgent from "./Components/AjouterAgent";
import RecevabiliteDemandeSoutien from "./Components/RecevabiliteDemandeSoutien";
import ValidationDevis from "./Components/validationDevis";
import SupprimerBeneficiaire from "./Components/SupprimerBeneficiaire";
import ComparaisonDevis from "./Components/comparaisonDevis";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AjouterAgent} />
          <Route
            exact
            path="/supprimerBeneficiaire"
            component={SupprimerBeneficiaire}
          />
          <Route exact path="/modifierAgent" component={ModifierAgent} />
          <Route exact path="/grilleSRA" component={GrilleSRA} />
          <Route exact path="/supprimerAgent" component={SupprimerAgent} />
          <Route
            exact
            path="/modifierBeneficiaire"
            component={ModifierBeneficiaire}
          />
          <Route
            exact
            path="/ajouterBeneficiaire"
            component={AjouterBeneficiaire}
          />
          <Route
            exact
            path="/ajouterDemandeSoutien"
            component={AjouterDemandeSoutien}
          />
          <Route
            exact
            path="/ajouterDemandeSoutien2"
            component={AjouterDemandeSoutien2}
          />
          <Route
            exact
            path="/recevabiliteDemandeSoutien"
            component={RecevabiliteDemandeSoutien}
          />
          <Route exact path="/validationDevis" component={ValidationDevis} />
          <Route exact path="/comparaisonDevis" component={ComparaisonDevis} />
        </Switch>
      </Router>
    );
  }
}
