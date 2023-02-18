import React, { Component } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../index.css";
export default class AjouterDemandeSoutien extends Component {
  constructor(props) {
    super(props);
    this.onChangeAgentChargeDossier =
      this.onChangeAgentChargeDossier.bind(this);
    this.onChangeNumeroAgent = this.onChangeNumeroAgent.bind(this);
    this.onChangeFonctionAgent = this.onChangeFonctionAgent.bind(this);
    this.onChangeNomProjet = this.onChangeNomProjet.bind(this);
    this.onChangeAcoProjet = this.onChangeAcoProjet.bind(this);
    this.onChangeRefConvention = this.onChangeRefConvention.bind(this);
    this.onChangeAnneeGestion = this.onChangeAnneeGestion.bind(this);
    this.onChangeTypeSoutien = this.onChangeTypeSoutien.bind(this);
    this.onChangeProgramme = this.onChangeProgramme.bind(this);
    this.onChangeDomaine = this.onChangeDomaine.bind(this);
    this.onChangeNomEncloture = this.onChangeNomEncloture.bind(this);
    this.onChangeCodeActivite = this.onChangeCodeActivite.bind(this);
    this.onChangeServiceExe = this.onChangeServiceExe.bind(this);
    this.onChangeDomaineFonct = this.onChangeDomaineFonct.bind(this);
    this.onChangeNumEngagement = this.onChangeNumEngagement.bind(this);
    this.onChangeCout = this.onChangeCout.bind(this);
    this.onChangeddsTF = this.onChangeddsTF.bind(this);
    this.onChangeddsTC = this.onChangeddsTC.bind(this);
    this.onChangeDureeConvention = this.onChangeDureeConvention.bind(this);
    this.onChangeT0 = this.onChangeT0.bind(this);
    this.onChangeT2 = this.onChangeT2.bind(this);
    this.onChangeT1 = this.onChangeT1.bind(this);
    this.onChangeT3 = this.onChangeT3.bind(this);
    this.state = {
      agentChargeDossier: "",
      numAgent: "",
      fonctionAgent: "",
      nomProjet: "",
      acoProjet: "",
      refConvention: "",
      anneeGestion: "",
      typeSoutien: "",
      programme: "",
      domaine: "",
      nomEncloture: "",
      codeActivite: "",
      serviceExe: "",
      numEngagement: "",
      domaineFonct: "",
      cout: "",
      ddsTF: 0,
      ddsTC: 0,
      dureeConvention: "",
      agentList: [],
      T0: 0,
      T2: 0,
      T1: 0,
      T3: 0,
      finTF: "",
      finTC: "",
    };
  }

  ////////////////////////
  /*-------functions-------- */
  onChangeT3(e) {
    this.setState({
      T3: e.target.value,
    });
  }
  /////////////////////////
  onChangeT1(e) {
    this.setState({
      T1: e.target.value,
    });
  }
  /////////////////////////
  onChangeT2(e) {
    var date = new Date(e.target.value);
    console.log(date.getMonth());
    console.log(date.setMonth(date.getMonth() + this.state.ddsTC * 1.33));
    console.log(date);
    this.setState({
      finTC: format(date, "dd/MM/yyyy"),
    });
    this.setState({
      T2: e.target.value,
    });
  }
  /////////////////////////
  onChangeT0(e) {
    var date = new Date(e.target.value);
    console.log(date.getMonth());
    console.log(date.setMonth(date.getMonth() + this.state.ddsTF * 1.33));
    console.log(date);
    this.setState({
      finTF: format(date, "dd/MM/yyyy"),
    });
    this.setState({
      T0: e.target.value,
    });
  }
  /////////////////////////
  onChangeDureeConvention(e) {
    this.setState({
      dureeConvention: e.target.value,
    });
  }
  /////////////////////////
  onChangeddsTC(e) {
    if (this.state.T2 != "") {
      var date = new Date(this.state.T2);
      console.log(date.getMonth());
      console.log(date.setMonth(date.getMonth() + e.target.value * 1.33));
      console.log(date);
      this.setState({
        finTC: format(date, "dd/MM/yyyy"),
      });
    }
    this.setState({
      ddsTC: e.target.value,
    });
  }
  /////////////////////////
  onChangeddsTF(e) {
    if (this.state.T0 != "") {
      var date = new Date(this.state.T0);
      console.log(date.getMonth());
      console.log(date.setMonth(date.getMonth() + e.target.value * 1.33));
      console.log(date);
      this.setState({
        finTF: format(date, "dd/MM/yyyy"),
      });
    }
    this.setState({
      ddsTF: e.target.value,
    });
  }
  /////////////////////////
  onChangeAgentChargeDossier(e) {
    console.log(this.state.agentList[e.target.value]._id);
    this.setState({
      agentChargeDossier: this.state.agentList[e.target.value]._id,
      numAgent: this.state.agentList[e.target.value].phoneNumber,
      fonctionAgent: this.state.agentList[e.target.value].fonction,
    });
  }
  /////////////////////////
  onChangeNumeroAgent(e) {
    this.setState({
      numAgent: e.target.value,
    });
  }
  /////////////////////////////
  onChangeFonctionAgent(e) {
    this.setState({
      fonctionAgent: e.target.value,
    });
  }
  /////////////////////////
  onChangeNomProjet(e) {
    this.setState({
      nomProjet: e.target.value,
    });
  }
  //////////////////////////
  onChangeAcoProjet(e) {
    this.setState({
      acoProjet: e.target.value,
    });
  }
  ///////////////////////
  onChangeRefConvention(e) {
    this.setState({
      refConvention: e.target.value,
    });
  }
  ///////////////////////
  onChangeAnneeGestion(e) {
    this.setState({
      anneeGestion: e.target.value,
    });
  }
  ///////////////////////
  onChangeTypeSoutien(e) {
    this.setState({
      typeSoutien: e.target.value,
    });
  }
  ///////////////////////
  onChangeProgramme(e) {
    this.setState({
      programme: e.target.value,
    });
  }
  ///////////////////////
  onChangeDomaine(e) {
    this.setState({
      domaine: e.target.value,
    });
  }
  ///////////////////////
  onChangeNomEncloture(e) {
    this.setState({
      nomEncloture: e.target.value,
    });
  }
  ///////////////////////
  onChangeCodeActivite(e) {
    this.setState({
      codeActivite: e.target.value,
    });
  }
  ///////////////////////
  onChangeServiceExe(e) {
    this.setState({
      serviceExe: e.target.value,
    });
  }
  ///////////////////////
  onChangeNumEngagement(e) {
    this.setState({
      numEngagement: e.target.value,
    });
  }
  ///////////////////////
  onChangeDomaineFonct(e) {
    this.setState({
      domaineFonct: e.target.value,
    });
  }
  ///////////////////////
  onChangeCout(e) {
    this.setState({
      cout: e.target.value,
    });
  }
  ////////////////////////////
  continuer = (e) => {
    e.preventDefault();
    if (
      this.state.agentChargeDossier === "" ||
      this.state.numAgent === "" ||
      this.state.fonctionAgent === "" ||
      this.state.nomProjet === "" ||
      this.state.acoProjet === "" ||
      this.state.refConvention === "" ||
      this.state.anneeGestion === "" ||
      this.state.typeSoutien === "" ||
      this.state.programme === "" ||
      this.state.domaine === "" ||
      this.state.nomEncloture === "" ||
      this.state.codeActivite === "" ||
      this.state.serviceExe === "" ||
      this.state.numEngagement === "" ||
      this.state.domaineFonct === "" ||
      this.state.cout === "" ||
      this.state.ddsTF === 0 ||
      this.state.ddsTC === 0 ||
      this.state.dureeConvention === "" ||
      this.state.T0 === 0 ||
      this.state.T2 === 0 ||
      this.state.T1 === 0 ||
      this.state.T3 === 0 ||
      this.state.finTF === "" ||
      this.state.finTC === ""
    ) {
      alert("veuillez remplir tout les champs");
    } else {
      this.props.history.push("/ajouterDemandeSoutien2", {
        agentChargeDossier: this.state.agentChargeDossier,
        nomProjet: this.state.nomProjet,
        acoProjet: this.state.acoProjet,
        refConvention: this.state.refConvention,
        anneeGestion: this.state.anneeGestion,
        typeSoutien: this.state.typeSoutien,
        programme: this.state.programme,
        domaine: this.state.domaine,
        nomEncloture: this.state.nomEncloture,
        codeActivite: this.state.codeActivite,
        serviceExe: this.state.serviceExe,
        numEngagement: this.state.numEngagement,
        domaineFonct: this.state.domaineFonct,
        cout: this.state.cout,
        ddsTF: this.state.ddsTF,
        ddsTC: this.state.ddsTC,
        dureeConvention: this.state.dureeConvention,
        T0: this.state.T0,
        T1: this.state.T1,
        T2: this.state.T2,
        T3: this.state.T3,
        finTF: this.state.finTF,
        finTC: this.state.finTC,
      });
    }
  };
  ///////////////////:
  componentDidMount() {
    axios
      .get("http://localhost:5000/agent/getListAgent")

      .then((response) => {
        this.setState({
          agentList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  ////////////////////////////

  render() {
    return (
      <div className="ScreenContainer">
        <div className="sidebar">
          <ProSidebar className="prosidebar">
            <SidebarHeader className="sidebarHeader"></SidebarHeader>
            <SidebarContent className="sidebarConent">
              <Menu>
                <MenuItem
                  onClick={() => {
                    this.props.history.push("/", {
                      nom: this.state.nom,
                    });
                  }}
                >
                  {" "}
                  Gestion des agents{" "}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    this.props.history.push("/ajouterBeneficiaire", {
                      nom: this.state.nom,
                    });
                  }}
                >
                  {" "}
                  Gestion des bénéficiaires
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    this.props.history.push("/grilleSRA", {
                      nom: this.state.nom,
                    });
                  }}
                >
                  {" "}
                  Grille SRA{" "}
                </MenuItem>
                <div className="submenu">
                  <SubMenu title="Demande de soutien initiale">
                    <MenuItem
                      onClick={() => {
                        this.props.history.push("/ajouterDemandeSoutien", {
                          nom: this.state.nom,
                        });
                      }}
                    >
                      {" "}
                      Saisie d'une demande
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        this.props.history.push(
                          "/recevabiliteDemandeSoutien",
                          {}
                        );
                      }}
                    >
                      {" "}
                      Recevabilité d'une demande
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        this.props.history.push("/validationDevis", {});
                      }}
                    >
                      {" "}
                      Validation devis
                    </MenuItem>
                    <MenuItem>Plan d'acomptage </MenuItem>
                    <MenuItem>Génération des documents</MenuItem>
                  </SubMenu>
                </div>
                <div className="submenu">
                  <SubMenu title="Suivi d'une convention ">
                    <MenuItem> Certification des livrables</MenuItem>
                    <MenuItem>Amendement d'une convention </MenuItem>
                    <div className="submenu">
                      <SubMenu title="Affermissement TC">
                        <MenuItem> Saisie d'une demande </MenuItem>
                        <MenuItem> Recevabilité d'une demande </MenuItem>
                        <MenuItem> Validation devis</MenuItem>
                        <MenuItem>Plan d'acomptage </MenuItem>
                        <MenuItem>Génération des documents</MenuItem>
                      </SubMenu>
                    </div>
                  </SubMenu>
                </div>

                <MenuItem> Statistiques </MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
        <div className="ContentContainer">
          <p style={pStyle}>Gestion des demandes de soutien</p>

          <div>
            <div class="body-content">
              <div class="line">
                <div className="formSra1">
                  <div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <p style={prenom}>Agent chargé du dossier</p>
                      {/* <input
                        type="text"
                        placeholder="{this.state.agentList[0].id}"
                        style={textSinput}
                        onChange={this.onChangeAgentChargeDossier}
                      /> */}
                      <select
                        style={textSinput}
                        onChange={this.onChangeAgentChargeDossier}
                      >
                        {this.state.agentList.map((opt, index) => (
                          <option key={index} value={index}>
                            {opt.nom} {opt.prenom}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Numéro de téléphone</p>
                    <input
                      disabled={true}
                      type="text"
                      placeholder={
                        this.state.numAgent === ""
                          ? "téléphone..."
                          : this.state.numAgent
                      }
                      style={textSinput}
                      onChange={this.onChangeNumeroAgent}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Fonction</p>
                    <input
                      disabled={true}
                      type="text"
                      placeholder={
                        this.state.fonctionAgent === ""
                          ? "Fonction..."
                          : this.state.fonctionAgent
                      }
                      style={textSinput}
                      onChange={this.onChangeFonctionAgent}
                    />
                  </div>
                </div>
                <div className="formSra2">
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Nom du projet</p>
                    <input
                      type="text"
                      placeholder="Nom du projet..."
                      style={textSinput}
                      onChange={this.onChangeNomProjet}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Acronyme du projet</p>
                    <input
                      type="text"
                      placeholder="Acronyme du projet..."
                      style={textSinput}
                      onChange={this.onChangeAcoProjet}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Référence de la convention</p>
                    <input
                      type="text"
                      placeholder="Réf de la convention..."
                      style={textSinput}
                      onChange={this.onChangeRefConvention}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Année de gestion</p>
                    <input
                      type="text"
                      placeholder="année de gestion..."
                      style={textSinput}
                      onChange={this.onChangeAnneeGestion}
                    />
                  </div>
                </div>
              </div>

              <div class="line">
                <div className="formSra1">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p style={prenom}>Type de soutien</p>
                    <input
                      type="text"
                      placeholder="type de soutien..."
                      style={textSinput}
                      onChange={this.onChangeTypeSoutien}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Programme</p>
                    <input
                      type="text"
                      placeholder="programme..."
                      style={textSinput}
                      onChange={this.onChangeProgramme}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Domaine</p>
                    <input
                      type="text"
                      placeholder="Domaine..."
                      style={textSinput}
                      onChange={this.onChangeDomaine}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Nom enclature</p>
                    <input
                      type="text"
                      placeholder="Nom du projet..."
                      style={textSinput}
                      onChange={this.onChangeNomEncloture}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Code d'activité</p>
                    <input
                      type="text"
                      placeholder="Code d'activité..."
                      style={textSinput}
                      onChange={this.onChangeCodeActivite}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Service exécutant</p>
                    <input
                      type="text"
                      placeholder="Service..."
                      style={textSinput}
                      onChange={this.onChangeServiceExe}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Numéro d'engagement juridique</p>
                    <input
                      type="text"
                      placeholder="Numéro d'engagement juridique..."
                      style={textSinput}
                      onChange={this.onChangeNumEngagement}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Domaine fonctionnel</p>
                    <input
                      type="text"
                      placeholder="Domaine fonctionnel..."
                      style={textSinput}
                      onChange={this.onChangeDomaineFonct}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Centre de coûts</p>
                    <input
                      type="text"
                      placeholder="Centre de coûts..."
                      style={textSinput}
                      onChange={this.onChangeCout}
                    />
                  </div>
                </div>
                <div className="formSra2">
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Durée des travaux de la TF (DDS)</p>
                    <input
                      type="number"
                      placeholder="XXX mois..."
                      style={textSinput}
                      onChange={this.onChangeddsTF}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Durée des travaux de la TC (DDS)</p>
                    <input
                      type="number"
                      placeholder="XXX mois..."
                      style={textSinput}
                      onChange={this.onChangeddsTC}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Durée de la convention</p>
                    <input
                      type="number"
                      placeholder="XXX mois..."
                      style={textSinput}
                      onChange={this.onChangeDureeConvention}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>
                      Date de démarrage des travaux de la TF (T0)
                    </p>
                    <input
                      type="date"
                      placeholder="Date de démarrage des travaux de la TF (T0)..."
                      style={textSinput}
                      onChange={this.onChangeT0}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>
                      Date de démarrage des travaux de la TC (T2)
                    </p>
                    <input
                      type="date"
                      placeholder="Date de démarrage des travaux de la TC (T2)..."
                      style={textSinput}
                      onChange={this.onChangeT2}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>
                      Date d'entrée en vigueur de la convention (T1)
                    </p>
                    <input
                      type="date"
                      placeholder="Date d'entrée en vigueur de la convention (T1)..."
                      style={textSinput}
                      onChange={this.onChangeT1}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Date d'entrée en vigueur de la TC (T3)</p>
                    <input
                      type="date"
                      placeholder="DDate d'entrée en vigueur de la TC (T3)..."
                      style={textSinput}
                      onChange={this.onChangeT3}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Date de fin des travaux de la TF</p>
                    <input
                      disabled={true}
                      placeholder={this.state.finTF}
                      style={textSinput}
                    />
                  </div>
                  <div
                    className="mb-4 align-middle"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <p style={prenom}>Date de fin des travaux de la TC</p>
                    <input
                      disabled={true}
                      style={textSinput}
                      placeholder={this.state.finTC}
                    />
                  </div>
                </div>
                <button
                  className="btn"
                  style={btnStyle}
                  onClick={
                    this.continuer
                    // this.props.history.push("/ListeAttente", {
                    //   service: this.props.location.state.service,
                    // })
                  }
                >
                  Continuer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const pStyle = {
  margin: "30px",
  fontSize: "45px",
};

const textSinput = {
  height: "5vh",
  width: "35vh",
  marginTop: "10px",
  borderRadius: "5px",
  marginLeft: "50px",
  border: 0,
  fontSize: "15px",
};

const prenom = {
  marginTop: "15px",
  width: "200px",
  marginLeft: "8px",
};

const btnStyle = {
  background: "#424C9C",
  color: "white",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.15)",
  outline: "none",
  width: 120,
  height: 30,
  marginTop: "1.5%",
};
