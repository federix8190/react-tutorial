import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

function SideBar() {

    /*constructor(props) {
        super(props);
        this.openNav = this.openNav.bind(this);
        this.columnas = props.cols;
        //this.columnas = [{'name':'nombre'}, {'name':'apellido'}, {'name':'cedula'}];
        this.state = {rows: []};
    }*/

    function openNav() {
        console.log('open nav');
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("root").style.marginLeft = "250px";
    }
      
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("root").style.marginLeft = "0";
    }

    //render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <a href="#/page1"><i className="fa fa-fw fa-home"></i>About</a>
                    <a href="#/page1"><i className="fa fa-fw fa-wrench"></i> Services</a>
                    <a href="#/page1"><i className="fa fa-fw fa-user"></i> Clients</a>
                    <a href="#/page1"><i className="fa fa-fw fa-envelope"></i> Contact</a>
                </div>
                <span onClick={openNav}>open</span>
            </div>
        );
    //}

}

export default SideBar;