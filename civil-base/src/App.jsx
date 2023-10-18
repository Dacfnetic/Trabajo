import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav.jsx';
import Aside from './Aside.jsx';
import Canvas from './Canvas.jsx';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

class App extends Component{
  constructor(){
    super();
    this.state = {
      lienzo: null,
      renderer: null,
      searchField: "",
      profesions: [
        {
          name: "Carpenter",
          id: 1,
        },
        {
          name: "Operator",
          id: 2,
        },
        {
          name: "Earthworker",
          id: 3,
        },
        {
          name: "Planner",
          id: 4,
        },
        {
          name: "Geotechnist",
          id: 5,
        }, 
        {
          name: "Survey",
          id: 6,
        }, 
        {
          name: "Plumber",
          id: 7,
        },  
        {
          name: "Electricist",
          id: 8,
        },     
      ]
    };
  };
  
  componentDidMount(){
    
    const scene = new THREE.Scene();

    const cubeGeometry = new THREE.BoxGeometry(1,1,1);
    const cubeMaterial1 = new THREE.MeshBasicMaterial({color: "red"});
    const cubeMesh1 = new THREE.Mesh(
      cubeGeometry,
      cubeMaterial1
    );
    
    cubeMesh1.position.x = -2;
    scene.add(cubeMesh1);
    
    const camera = new THREE.PerspectiveCamera(35,0.6*window.innerWidth/window.innerHeight,0.1,200);
    camera.position.z = 10;
    scene.add(camera);

    /*
    const canvas = document.querySelector("canvas.scene");
    console.log(canvas);
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize(window.innerWidth/2,window.innerHeight);

    const controls = new OrbitControls(camera,canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    
    const renderLoop = () => {
      controls.update();
      renderer.render(scene,camera);
      window.requestAnimationFrame(renderLoop);
    };
    */
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    console.log(searchString);
    this.setState(() => {
      return {searchField: searchString}
    })
  }

  render () {

    const {searchField,profesions} = this.state;
    const {onSearchChange} = this;

    const filteredProfesions = profesions.filter((profesion) => {
      return profesion.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <>
        <Nav />
        <SearchBox onSearchChange={onSearchChange} />
        <CardList filteredProfesions={filteredProfesions}/>
      </>
    )
  }
}

export default App
