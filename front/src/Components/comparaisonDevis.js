import React, { Component } from "react";
import axios from "axios";
import { read, utils } from "xlsx";
import { Document, Paragraph, HeadingLevel, Packer } from "docx";
import { useHistory } from "react-router-dom";
import { Audio, Circles } from "react-loader-spinner";
import DocViewer from "react-doc-viewer";
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
export default class AjouterAgent extends Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.comparer = this.comparer.bind(this);
    this.state = {
      devisInitial: "",
      devisRetenu: "",
      result: "",
      isLoading: false,
      display: false,
      beneficiare:"",
      resultat:""
     
    };
  }

  ////////////////////////
  /*-------functions-------- */
  handleFileUpload = (event, initial) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = read(data, { type: "array" });
      var worksheet0 = workbook.Sheets[workbook.SheetNames[0]];
      var worksheet1 = workbook.Sheets[workbook.SheetNames[1]];
      var worksheet2 = workbook.Sheets[workbook.SheetNames[2]];
      var worksheet3 = workbook.Sheets[workbook.SheetNames[3]];
      const jsonData0 = utils.sheet_to_json(worksheet0, {
        range: "C12:Z50",
        header: 1,
      });
      const beneficiare1 = utils.sheet_to_json(worksheet0, {
        range: "E3:E3",
        header: 1,
      })[0][0];
      const jsonData1 = utils.sheet_to_json(worksheet1, {
        range: "B2:Z50",
        header: 1,
      });
      const jsonData2 = utils.sheet_to_json(worksheet2);
      const jsonData3 = utils.sheet_to_json(worksheet3, {
        range: "A2:Z50",
        header: 1,
      });
      if (initial) {
        this.setState({
          devisInitial: {
            syntheseCout: jsonData0,
            sousTraitance: jsonData1,
            achat: jsonData2,
            deplacement: jsonData3,
            
          },
          beneficiare:beneficiare1
        });
      } else {
        this.setState({
          devisRetenu: {
            syntheseCout: jsonData0,
            sousTraitance: jsonData1,
            achat: jsonData2,
            deplacement: jsonData3,
          },
          beneficiare:beneficiare1
        });
      }
      //  sendToBackend(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  /////////////////////////////
  comparer = (e) => {
    e.preventDefault();
    if (this.state.devisInitial === "" || this.state.devisRetenu === "") {
      alert("Il faut donner les deux fichiers");
    } else {
      this.setState({
        isLoading: true,
      });
      axios
        .post("http://localhost:5000/validationDevis/comparerDevis", {
          devisInitial: this.state.devisInitial,
          devisRetenu: this.state.devisRetenu,
          beneficiare:this.state.beneficiare
        })

        .then((response) => {
          console.log(response.data);
          // this.generateWord(e);
          //alert(response.data.message);
          this.setState({
            isLoading: false,
            display: true,
            resultat:response.data.mssg
          });
        })
        .catch((error) => {
          alert("error");
        });
    }
  };

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
          <p style={pStyle}>Comparaison des devis</p>

          <div className="formSra">
            <div
              className="mb-4 align-middle"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <p style={prenom}>Devis initial</p>

              <input
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                type="file"
                onChange={(e) => {
                  this.handleFileUpload(e, true);
                }}
                placeholder="charger le devis..."
                style={prenominput}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Devis retenu</p>
              <input
                type="file"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={(e) => {
                  this.handleFileUpload(e, false);
                }}
                placeholder="charger le devis..."
                style={prenominput}
              />
            </div>

            <button
              className="btnAdd"
              style={btnStyle}
              type="submit"
              onClick={this.comparer}
            >
              Ajouter
            </button>
          </div>
          <div style={{ height: "50px" }}></div>
          <div className="formSra">
            <div
              className="mb-4 align-middle"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "30px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={prenom}>
                {!this.state.isLoading ? "" : "Traitement en cours..."}
              </p>

              {!this.state.display ? (
                <p style={prenom2}> "Le résultat sera affiché ici"</p>
              ) : (
                <p>{this.state.resultat}</p>
              )}

              <div>
                {this.state.isLoading ? (
                  <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="blue"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
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
const prenom2 = {
  width: "300px",
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
