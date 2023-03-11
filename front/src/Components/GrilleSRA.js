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
export default class GrilleSRA extends Component {
  constructor(props) {
    super(props);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeObjectifs = this.onChangeObjectifs.bind(this);
    this.onChangeConcept = this.onChangeConcept.bind(this);
    this.onChangeCapacite = this.onChangeCapacite.bind(this);
    this.onChangeFacilitateur = this.onChangeFacilitateur.bind(this);
    this.state = {
      code: 1234,
      objectifs: "",
      concept: "",
      capacite: "",
      facilitateur: "",
    };
  }
  ////////////////////////
  /*-------functions-------- */
  onChangeCode(e) {
    this.setState({
      code: e.target.value,
    });
  }
  /////////////////////////
  onChangeObjectifs(e) {
    this.setState({
      objectifs: e.target.value,
    });
  }
  /////////////////////////////
  onChangeConcept(e) {
    this.setState({
      concept: e.target.value,
    });
  }
  /////////////////////////
  onChangeCapacite(e) {
    this.setState({
      capacite: e.target.value,
    });
  }
  //////////////////////////
  onChangeFacilitateur(e) {
    this.setState({
      facilitateur: e.target.value,
    });
  }
  ///////////////////////

  ////////////////////////////
  ajouter = (e) => {
    e.preventDefault();
    if (
      this.state.code === "" ||
      this.state.objectifs === "" ||
      this.state.concept === "" ||
      this.state.capacite === "" ||
      this.state.facilitateur === ""
    ) {
      alert("veuillez remplir tout les champs");
    } else {
      axios
        .post("http://localhost:5000/sra/ajouter", {
          code: this.state.code,
          objectifs: this.state.objectifs,
          concept: this.state.concept,
          capacite: this.state.capacite,
          facilitateur: this.state.facilitateur,
        })

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
                    <MenuItem  onClick={() => {
                      this.props.history.push("/recevabiliteDemandeSoutien", {
                        
                      });
                    }}> Recevabilité d'une demande</MenuItem>
                    <MenuItem
                    onClick={() => {
                      this.props.history.push("/validationDevis", {
                        
                      });
                    }}> Validation devis</MenuItem>
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
        
        <div className="formSra">
          <div
            className="mb-4 align-middle"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <p style={prenom}>Code</p>
            <input
              type="text"
              placeholder="Code..."
              style={prenominput}
              onChange={this.onChangeCode}
            />
          </div>
          <div
            className="mb-4 align-middle"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <p style={prenom}>Objectifs</p>
            <input
              type="text"
              placeholder="Objectifs..."
              style={nominput}
              onChange={this.onChangeObjectifs}
            />
          </div>
          <div
            className="mb-4 align-middle"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <p style={prenom}> Concepts clés</p>
            <input
              type="text"
              placeholder="Concepts clés..."
              style={prenominput}
              onChange={this.onChangeConcept}
            />
          </div>
          <div
            className="mb-4 align-middle"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <p style={prenom}>Capacités</p>
            <input
              type="text"
              placeholder="Capacités..."
              style={prenominput}
              onChange={this.onChangeCapacite}
            />
          </div>
          <div
            className="mb-4 align-middle"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <p style={prenom}>Facilitateurs technologiques</p>
            <input
              type="text"
              placeholder="Facilitateurs technologiques..."
              style={prenominput}
              onChange={this.onChangeFacilitateur}
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
