import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderAward(award) {
    return (
            <div className="col col-sm col-md" key={award.type}>
                <div className="media">
                <img className="d-flex mr-3 img-thumbnail" width="100px" height="100px" src={require('../images/'+award.type+'.jpg')} alt={award.type} />
                    <div className="media-body">
                        <h3 className="mt-0">Recompensa: {award.type},  Fecha:{award.date}</h3>
                        <p className="mt-0">{award.text}</p>
                        <p>{'-- ' + award.user["name"] + ', '+award.user["position"]+', '+award.user["area"]}</p>  
                    </div>
                </div>
            </div>
        
    );
}

function awards(awardsList) {
    
    return (
        awardsList.map((award) => {
                return (
                    RenderAward(award)
                );
            })
        
    )
}

function About(props) {

    const getAwards = () => {
        
       
           if (props.awards != undefined)  return awards(props.awards);
           return "";
            
    
            
    }
    
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Mi Cuenta</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Mi Cuenta</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Bienvenido {props.account.name}</h2>
                    <p>En esta sección usted podrá consultar las recompensas ligadas al correo {props.account.email}</p>
                    <p>Felicidades por desempeñar el puesto de {props.account.position}</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Mis Datos</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Cumpleaños</dt>
                                <dd className="col-6">{props.account.birthday}</dd>
                                <dt className="col-6">Aniversario</dt>
                                <dd className="col-6">{props.account.aniversary}</dd>
                                <dt className="col-6">Área</dt>
                                <dd className="col-6">{props.account.area}</dd>
                                <dt className="col-6">Puntos</dt>
                                <dd className="col-6">{props.account.points}</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Mis Recompensas</h2>
                </div>
                <div className="col-12">
                   
                      {getAwards()}
                   
                </div>
            </div>
        </div>
    );
}
export default About;    