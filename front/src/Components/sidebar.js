import React, { Component } from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
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
class SideBarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <ProSidebar className="prosidebar">
          <SidebarHeader className="sidebarHeader"></SidebarHeader>
          <SidebarContent className="sidebarConent">
            <Menu>
              <MenuItem
                onClick={() => {
                  this.props.history.push("/", {
                    nom: "this.state.nom",
                  });
                }}
              >
                {" "}
                Gestion des agents{" "}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  this.props.history.push("/ajouterBeneficiaire", {
                    nom: "this.state.nom,"
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
                  <MenuItem> Recevabilité d'une demande</MenuItem>
                  <MenuItem> Validation devis</MenuItem>
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
    );
  }
}

export default withRouter(SideBarComponent);
