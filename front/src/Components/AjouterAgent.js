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
import SideBarComponent from "./sidebar";
export default class AjouterAgent extends Component {
  constructor(props) {
    super(props);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeFonction = this.onChangeFonction.bind(this);
    this.onChangeFax = this.onChangeFax.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeSignature = this.onChangeSignature.bind(this);
    this.state = {
      prenom: "",
      nom: "",
      fonction: "",
      faxNumber: "",
      phoneNumber: "",
      signature: "",
    };
  }

  ////////////////////////
  /*-------functions-------- */
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
  /////////////////////////////
  onChangeFonction(e) {
    this.setState({
      fonction: e.target.value,
    });
  }
  /////////////////////////
  onChangeFax(e) {
    this.setState({
      faxNumber: e.target.value,
    });
  }
  //////////////////////////
  onChangePhone(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }
  ///////////////////////
  onChangeSignature(e) {
    this.setState({
      signature: e.target.files[0],
    });
  }
  ////////////////////////////
  ajouter = (e) => {
    e.preventDefault();
    if (
      this.state.prenom === "" ||
      this.state.nom === "" ||
      this.state.fonction === "" ||
      this.state.faxNumber === "" ||
      this.state.phoneNumber === "" ||
      this.state.signature === ""
    ) {
      alert("veuillez remplir tout les champs");
    } else {
      const formData = new FormData();
      formData.append("prenom", this.state.prenom);
      formData.append("nom", this.state.nom);
      formData.append("fonction", this.state.fonction);
      formData.append("faxNumber", this.state.faxNumber);
      formData.append("phoneNumber", this.state.phoneNumber);
      formData.append("signature", this.state.signature);

      axios
        .post("http://localhost:5000/agent/ajouter", formData)

        .then((response) => {
          console.log(response.data.message);
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  ///////////////////:

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
              <p style={prenom}>Prénom</p>
              <input
                type="text"
                placeholder="Prénom..."
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
                placeholder="Nom..."
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
                placeholder="Fonction au sein du service..."
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
                style={prenominput}
                type="tel"
                className="Number"
                placeholder="+33"
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
                placeholder="Numéro de Fax"
                onChange={this.onChangeFax}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Signature</p>
              <input
                style={siginput}
                //name="image"
                type="file"
                onChange={this.onChangeSignature}
              />
            </div>
            <button
              className="btnAdd"
              style={btnStyle}
              type="submit"
              onClick={this.ajouter}
              /* onClick={() =>
                this.props.history.push("/ListeAttente", {
                  service: this.props.location.state.service,
                })
              }*/
            >
              Ajouter
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
const siginput = {
  marginTop: "15px",
  marginLeft: "60px",
};
const pStyle = {
  margin: "30px",
  fontSize: "45px",
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
