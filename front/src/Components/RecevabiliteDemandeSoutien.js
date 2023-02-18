import React, { Component } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
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
export default class RecevabiliteDemandeSoutien extends Component {
  constructor(props) {
    //les demandes de soutiens
    super(props);
    this.onChangeDemandeSoutien = this.onChangeDemandeSoutien.bind(this);
    // this.onChangeInputTable = this.onChangeInputTable.bind(this);

    this.state = {
      demandesPost: [],
      idDemandeSoutien: "",
      acroProjet: "",
      refConvention: "",
      anneeGestion: "",
      nomAgentDemande: "",
      telAgentDemande: "",
      fontionAgentDEmande: "",
      demandeList: [],
      agentList: [],
    };
  }

  ////////////////////////
  /*-------functions-------- */
  /////////////////////////
  onChangeDemandeSoutien(e) {
    console.log(
      this.state.demandeList[e.target.value].lignes[0].elementsFinancier
        .numPoste
    );
    const agent = this.state.agentList.filter((agent) => {
      return (
        agent._id === this.state.demandeList[e.target.value].agentChargeDossier
      );
      // Use the toLowerCase() method to make it case-insensitive
    });
    this.setState({
      idDemandeSoutien: this.state.demandeList[e.target.value]._id,
      acroProjet: this.state.demandeList[e.target.value].acoProjet,
      refConvention: this.state.demandeList[e.target.value].refConvention,
      anneeGestion: this.state.demandeList[e.target.value].anneeGestion,
      nomAgentDemande: agent[0].nom + " " + agent[0].prenom,
      fonctionAgent: agent[0].fonction,
      telAgentDemande: agent[0].phoneNumber,
      demandesPost: this.state.demandeList[e.target.value].lignes,
    });
  }

  //////////////////////////////////
  componentDidMount() {
    axios
      .get("http://localhost:5000/demandeSoutien/getDemandeSoutien")
      .then((response) => {
      this.setState({
          demandeList: response.data,
          idDemandeSoutien:response.data.length!=0 ? response.data[0]._id:"",
          acroProjet: response.data.length!=0 ?response.data[0].acoProjet:"",
          refConvention:response.data.length!=0 ? response.data[0].refConvention:"",
          anneeGestion:response.data.length!=0 ? response.data[0].anneeGestion:"",
          demandesPost: response.data.length!=0 ?response.data[0].lignes:[],
        });
      })
      .catch((error) => {
        console.log(error);
      });

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

      axios
      .get("http://localhost:5000/beneficiaire/getList")
      .then((response) => {
        this.setState({
          partenaireList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
   
     
  }
  /////////////////////////////
  ///////////////////////////////////////////////

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
                      this.props.history.push("/validationDevis", {
                        
                      });
                    }}> Validation devis</MenuItem>
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
          <p style={pStyle}>Gestion des demandes de recevabilité</p>
          <p style={pStyl2}>Veuillez sélectionner une demande de soutien</p>
          <div class="line">
            <div className="formSra2">
              <div
                className="mb-4 align-middle"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <p style={prenom}>Nom du projet</p>
                <select
                  style={textSinput}
                  onChange={this.onChangeDemandeSoutien}
                >
                  {this.state.demandeList.map((opt, index) => (
                    <option key={index} value={index}>
                      {opt.nomProjet}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className="mb-4 align-middle"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <p style={prenom}>Acronyme du projet</p>
                <p style={prenom}>{this.state.acroProjet}</p>
              </div>
              <div
                className="mb-4 align-middle"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <p style={prenom}>Référence de la convention</p>
                <p style={prenom}>{this.state.refConvention}</p>
              </div>
              <div
                className="mb-4 align-middle"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <p style={prenom}>Année de gestion</p>
                {this.state.anneeGestion}
              </div>
            </div>
            <div className="formSra1">
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p style={prenom}>Agent chargé du dossier</p>
                  <p style={prenom}>{this.state.nomAgentDemande}</p>
                </div>
              </div>
              <div
                className="mb-4 align-middle"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <p style={prenom}>Numéro de téléphone</p>
                <p style={prenom}> {this.state.telAgentDemande}</p>
              </div>
              <div
                className="mb-4 align-middle"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <p style={prenom}>Fonction</p>
                <p style={prenom}>{this.state.fonctionAgent}</p>
              </div>
            </div>
          </div>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th style={{ backgroundColor: "#0067A5" }}>N° de poste</th>
                  <th style={{ backgroundColor: "#0067A5" }}>TF/TC</th>
                  <th style={{ backgroundColor: "#0067A5" }}>Partenaire</th>
                  <th style={{ backgroundColor: "#0067A5" }}>Réf.</th>
                  <th style={{ backgroundColor: "#0067A5" }}>Date</th>
                  <th style={{ backgroundColor: "#0067A5" }}>Signataire</th>
                  <th style={{ backgroundColor: "#0067A5" }} colspan="2">
                    Courriers
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.demandesPost.map((obj, index) => (
                  <tr key={index}>
                    <td>
                      <p style={prenom2}>
                        {" "}
                        {
                          this.state.demandesPost[index].elementsFinancier
                            .numPoste
                        }
                      </p>
                    </td>
                    <td>
                      {" "}
                      <p style={prenom2}>
                        {" "}
                        {this.state.demandesPost[index].elementsFinancier.TFTC}
                      </p>
                    </td>
                    <td>
                      {" "}
                      <p style={prenom2}>
                        {" "}
                        {this.state.demandesPost[index].elementsFinancier.partenaire}
                      </p>
                    </td>
                    <td>
                    <p style={prenom2}>
                        {" "}
                        {this.state.demandesPost[index].demandeSoutien.ref}
                      </p>
                    </td>
                    <td>
                    <p style={prenom2}>
                        {" "}
                        {this.state.demandesPost[index].demandeSoutien.date}
                      </p>
                    </td>
                    <td>
                    <select
                        style={textSinput}
                        // onChange={this.onChangeAgentChargeDossier}
                      >
                        {this.state.agentList.map((opt, index) => (
                          <option key={index} value={index}>
                            {opt.nom} {opt.prenom}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <button className="btn" style={btnStyle} onClick={this.ajouter}>
              Continuer
            </button> */}
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

const pStyl2 = {
  margin: "10px",
  fontSize: "15px",
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

const textSinput = {
  width: "180px",
  borderRadius: "5px",
  border: "none",
  fontSize: "15px",
  marginTop: "10px",
};

const textSinputNbPostes = {
  width: "200px",
  borderRadius: "5px",
  border: "none",
  fontSize: "15px",
  margin: "10px",
};

const prenom = {
  marginTop: "15px",
  width: "200px",
  marginLeft: "8px",
};
const prenom2 = {
  marginTop: "15px",
  width: "100px",
  marginLeft: "8px",
};
