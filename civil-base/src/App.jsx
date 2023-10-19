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
      estado: 1,
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
        {
          name: "Structural Engineer",
          id: 9,
        },      
      ],
      ubications: [
        {
          ubications_id: 0,
          ubication_name: "Remote",
        },   
        {
          ubications_id: 1,
          ubication_name: "Guatemala City",
        },   
      ],
      profesionists: [
        {
          profesionist_id: 1,
          name: "Ing. Gilberto Guerra",
          profesion_id: 9,
          workable_ubications: [0,1],
          phone_numbers: ['+502 5476 6023'],
          offers: "Cálculo tus estructuras para que no se caigan",  
        },   
      ],
      
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
  prueba = (array1,array2) =>{
    if(this.state.estado === 3){
      return <CardList filteredProfesions={array2}/>
    }else{
      return <CardList filteredProfesions={array1}/>
    }
  }

  render () {

    const {searchField,profesions, profesionists} = this.state;
    const {onSearchChange, prueba} = this;
    const next = this.state.estado + 1;
    const filteredProfesions = profesions.filter((profesion) => {
      return profesion.name.toLocaleLowerCase().includes(searchField);
    });
    const filteredProfesionists = profesionists.filter((profesionist) => {
      return profesionist.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
      <>
        <Nav />
        <div id='seccion'>
          <div id='aside' onClick={()=>this.setState({
            estado: next,
            searchField: ""
          })}>
            <SearchBox onSearchChange={onSearchChange} />
            {prueba(filteredProfesions,filteredProfesionists)}
          </div>
          <div id='otherside'>
            
          </div>
        </div>
        
      </>
    )
  }
}

export default App
