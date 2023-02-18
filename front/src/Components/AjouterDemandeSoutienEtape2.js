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
export default class AjouterDemandeSoutien2 extends Component {
  constructor(props) {
    super(props);
    this.onChangeNbPostes = this.onChangeNbPostes.bind(this);
    this.onChangeInputTable = this.onChangeInputTable.bind(this);

    this.state = {
      NbPostes: 0,
      lines: [],
      partenaireList:[]
    };
  }

  ////////////////////////
  /*-------functions-------- */

  /////////////////////////
  onChangeNbPostes(e) {
    var row = [];
    for (let i = 0; i < e.target.value; i++) {
      row = [
        ...row,
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
      ];
    }
    this.setState({
      NbPostes: e.target.value,
      lines: row,
    });

    console.log(e.target.value);
    console.log(Array(e.target.value));
  }

  ///////////////////////////
  onChangeInputTable(e, lineNumber, columnNumber) {
    var line;
    var allTable = this.state.lines;
    line = allTable[lineNumber];
    line[columnNumber] = e.target.value;
    allTable[lineNumber] = line;
    console.log(allTable);
    this.setState({
      lines: allTable,
    });
  }
  //////////////////////////////////
  componentDidMount() {
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
  ajouter = (e) => {
    console.log("hhhrrrrrrrrrrrrrrrrrrrrrrrrr");
    e.preventDefault();
    if (this.state.NbPostes === 0) {
      alert("Le tableau ne peut pas etre vide");
    } else {
      console.log("hhhrrrrrrrrrrrrrrrrrrrrrrrrr");
      axios
        .post("http://localhost:5000/demandeSoutien/ajouter", {
          agentChargeDossier: this.props.location.state.agentChargeDossier,
          nomProjet: this.props.location.state.nomProjet,
          acoProjet: this.props.location.state.acoProjet,
          refConvention: this.props.location.state.refConvention,
          anneeGestion: this.props.location.state.anneeGestion,
          typeSoutien: this.props.location.state.typeSoutien,
          programme: this.props.location.state.programme,
          domaine: this.props.location.state.domaine,
          nomEncloture: this.props.location.state.nomEncloture,
          codeActivite: this.props.location.state.codeActivite,
          serviceExe: this.props.location.state.serviceExe,
          numEngagement: this.props.location.state.numEngagement,
          domaineFonct: this.props.location.state.domaineFonct,
          cout: this.props.location.state.cout,
          ddsTF: this.props.location.state.ddsTF,
          ddsTC: this.props.location.state.ddsTC,
          dureeConvention: this.props.location.state.dureeConvention,
          T0: this.props.location.state.T0,
          T1: this.props.location.state.T1,
          T2: this.props.location.state.T2,
          T3: this.props.location.state.T3,
          finTF: this.props.location.state.finTF,
          finTC: this.props.location.state.finTC,
          lines: this.state.lines,
        })

        .then((response) => {
          console.log(response.data.message);
          alert(response.data.message);
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
                      this.props.history.push("/recevabiliteDemandeSoutien", {
                        
                      });
                    }}> Recevabilité d'une demande</MenuItem>
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
          <p style={pStyle}>Gestion des demandes de soutien</p>

          <div class="table-container">
            <div
              className="mb-4 align-middle"
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "50px",
                alignContent: "center",
              }}
            >
              <div style={{ margin: "10px" }}>
                <p>Nombre de postes:</p>
              </div>
              <input
                type="number"
                placeholder="Ecrire ici..."
                style={textSinputNbPostes}
                onChange={this.onChangeNbPostes}
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th style={{ backgroundColor: "#0067A5" }} colspan="4">
                    Demande de soutien
                  </th>
                  <th style={{ backgroundColor: "#4666FF" }} colspan="10">
                    Eléments financiers
                  </th>
                  <th style={{ backgroundColor: "#007FFF" }} colspan="3">
                    Instruction
                  </th>
                  <th style={{ backgroundColor: "#00FFEF" }} colspan="3">
                    Complétude du dossier
                  </th>
                </tr>

                <tr>
                  <th style={{ backgroundColor: "#0067A5" }}>Réf.</th>
                  <th style={{ backgroundColor: "#0067A5" }}>Date</th>
                  <th style={{ backgroundColor: "#0067A5" }}>Date A/R</th>
                  <th style={{ backgroundColor: "#0067A5" }}>Point focal</th>
                  <th style={{ backgroundColor: "#4666FF" }}>
                    Numéro de poste
                  </th>
                  <th style={{ backgroundColor: "#4666FF" }}>TF/TC</th>
                  <th style={{ backgroundColor: "#4666FF" }}>Partenaire</th>
                  <th style={{ backgroundColor: "#4666FF" }}>
                    Activ. Initiale{" "}
                  </th>
                  <th style={{ backgroundColor: "#4666FF" }}>Activ. Retenue</th>
                  <th style={{ backgroundColor: "#4666FF" }}>Evolution</th>
                  <th style={{ backgroundColor: "#4666FF" }}>Taux</th>
                  <th style={{ backgroundColor: "#4666FF" }}>Soutien</th>
                  <th style={{ backgroundColor: "#4666FF" }}>Délais</th>
                  <th style={{ backgroundColor: "#4666FF" }}>Avance</th>
                  <th style={{ backgroundColor: "#007FFF" }}>Réf.</th>
                  <th style={{ backgroundColor: "#007FFF" }}>Livraison DT</th>
                  <th style={{ backgroundColor: "#007FFF" }}>Date audit</th>
                  <th style={{ backgroundColor: "#00FFEF" }}>Statut</th>
                  <th style={{ backgroundColor: "#00FFEF" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.lines.map((obj, index) => (
                  <tr key={index}>
                    <td>
                      {" "}
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 0)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 1)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 2)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 3)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 4)}
                      />
                    </td>
                    <td>
                      <select
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 5)}
                      >
                        <option key={1} value="TF">
                          TF
                        </option>
                        <option key={2} value="TC">
                          TC
                        </option>
                      </select>
                    </td>
                    <td>
                    <select
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 6)}
                      >
                        {this.state.partenaireList.map((opt, index) => (
                          <option key={index} value={opt.nomSociete}>
                            {opt.nomSociete}
                          </option>
                        ))}
                      </select>
                      
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 7)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 8)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 9)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 10)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 11)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 12)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 13)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 14)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 15)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 16)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 17)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        style={textSinput}
                        onChange={(e) => this.onChangeInputTable(e, index, 18)}
                      />
                    </td>{" "}
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn" style={btnStyle} onClick={this.ajouter}>
              Continuer
            </button>
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
  width: "80px",
  borderRadius: "5px",
  border: "none",
  fontSize: "15px",
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
