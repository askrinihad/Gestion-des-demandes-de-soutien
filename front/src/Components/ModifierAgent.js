import React, { Component } from "react";
import axios from "axios";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useHistory } from "react-router-dom";
import "../index.css";
export default class ModifierAgent extends Component {
  constructor(props) {
    super(props);
    this.onChangeAgentChargeDossier =
      this.onChangeAgentChargeDossier.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeFonction = this.onChangeFonction.bind(this);
    this.onChangeFax = this.onChangeFax.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.state = {
      agentList: [],
      prenom: "",
      nom: "",
      fonction: "",
      faxNumber: "",
      phoneNumber: "",

      id: "",
    };
  }
  ////////////////////////
  /*-------functions-------- */
  //////////////////////////////////////////////
  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value,
    });
  }
  /////////////////////////
  onChangeNom(e) {
    this.setState({
      nom: e.target.value,
    });
  }

  ////////////////////////////
  onChangeFonction(e) {
    this.setState({
      fonction: e.target.value,
    });
  }
  /////////////////////////
  onChangeFax(e) {
    console.log(e.target.value);
    this.setState({
      faxNumber: e.target.value,
    });
  }
  //////////////////////////
  onChangeAgentChargeDossier(e) {
    console.log(this.state.agentList[e.target.value]._id);
    this.setState({
      nom: this.state.agentList[e.target.value].nom,
      prenom: this.state.agentList[e.target.value].prenom,
      fonction: this.state.agentList[e.target.value].fonction,
      faxNumber: this.state.agentList[e.target.value].faxNumber,
      phoneNumber: this.state.agentList[e.target.value].phoneNumber,
      id: this.state.agentList[e.target.value]._id,
    });
  }
  //////////////////////////////////////////
  onChangePhone(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
    this.state.listAgent.map((agent) => {
      if (agent.phoneNumber === e.target.value) {
        this.setState({});
      }
    });
  }

  ////////////////////////////
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
  modifier = (e) => {
    console.log(this.state.id);
    axios
      .put("http://localhost:5000/agent/modifierAgent/" + this.state.id, {
        prenom: this.state.prenom,
        nom: this.state.nom,
        fonction: this.state.fonction,
        faxNumber: this.state.faxNumber,
        phoneNumber: this.state.phoneNumber,
      })

      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //////////

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
                    <MenuItem
                      onClick={() => {
                        this.props.history.push("/comparaisonDevis", {});
                      }}
                    >
                      {" "}
                      Comparaison devis
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              height: "100px",
              width: "700px",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <button
              style={btnStyle}
              onClick={() => {
                this.props.history.push("/", {
                  nom: this.state.nom,
                });
              }}
            >
              Ajouter
            </button>
            <button
              style={btnStyle}
              onClick={() => {
                this.props.history.push("/modifierAgent", {
                  nom: this.state.nom,
                });
              }}
            >
              Modifier
            </button>
            <button
              style={btnStyle}
              onClick={() =>
                this.props.history.push("/supprimerAgent", {
                  nom: this.state.nom,
                })
              }
            >
              Supprimer
            </button>
          </div>

          <div className="formSra">
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Choisir l'agent</p>
              <select
                style={prenominput}
                onChange={this.onChangeAgentChargeDossier}
              >
                {this.state.agentList.map((opt, index) => (
                  <option key={index} value={index}>
                    {opt.nom} {opt.prenom}
                  </option>
                ))}
              </select>
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Prénom</p>
              <input
                type="text"
                placeholder={this.state.prenom}
                style={prenominput}
                onChange={this.onChangePrenom}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Nom</p>
              <input
                type="text"
                placeholder={this.state.nom}
                style={nominput}
                onChange={this.onChangeNom}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}> Fonction au sein du service</p>
              <input
                type="text"
                placeholder={this.state.fonction}
                style={prenominput}
                onChange={this.onChangeFonction}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Numéro de téléphone</p>
              <input
                type="text"
                placeholder={this.state.phoneNumber}
                style={prenominput}
                onChange={this.onChangePhone}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Numéro de Fax</p>
              <input
                style={prenominput}
                type="tel"
                className="Number"
                placeholder={this.state.faxNumber}
                onChange={this.onChangeFax}
              />
            </div>

            <button
              className="btnAdd"
              style={btnStyle}
              type="submit"
              onClick={this.modifier}
              /* onClick={() =>
                this.props.history.push("/ListeAttente", {
                  service: this.props.location.state.service,
                })
              }*/
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const prenom = {
  marginTop: "15px",
  width: "200px",
  marginLeft: "8px",
};

const prenominput = {
  height: "5vh",
  width: "35vh",
  marginTop: "10px",
  borderRadius: "5px",
  marginLeft: "50px",
  border: 0,
  fontSize: "15px",
};
const nominput = {
  height: "5vh",
  width: "35vh",
  marginTop: "10px",
  borderRadius: "5px",
  marginLeft: "50px",
  border: 0,
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
};

const pStyle = {
  margin: "30px",
  fontSize: "45px",
};
