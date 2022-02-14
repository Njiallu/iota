import React from 'react';
import levelConfig from "./Activity/config/config"
import defaultBackgroundActivity from './IotaComponents/assets/Background/Fond_activite.svg';
import NavBar from './IotaComponents/Molecules/NavBar';
import NavBarStudentProfil from './IotaComponents/Molecules/NavBarStudentProfil';
import ActivityHeader from './IotaComponents/Molecules/ActivityHeader';
import PageActivity from './IotaComponents/Molecules/PageActivity';
import './IotaComponents/layout.css';
import './IotaComponents/iota-components.css';
import './IotaComponents/common.css';
import './IotaComponents/activity-views.css';
import Musee from "./IotaComponents/assets/Background/illustration_museum.png";

const App = () => {

  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <NavBar
        profile={
          <NavBarStudentProfil />
        }
      />
      <div
        id="StudentLayout"
        className="row m-0 p-0 background-cover"
        style={{
          height: 'calc(100vh - var(--navbar-height))',
        }}
      >
        <div className="layout-main-content">
      <PageActivity className="position-relative">
        <button className="activity-level-back-button">
          <i className="m-0 mr-4 my-auto fa fa-angle-left" aria-hidden="true" />
        </button>
        <div className="activity-level-header">
          <ActivityHeader
            image={Musee}
            level={1}
            title={"Rififi au musée"}
              instruction={'Retrouve le titre et l\'artiste des oeuvres d\'arts en utlisant la recherche inversée et mets-en une en fond d\'écran.'}
          />
        </div>
        <div
          className="activity-level-activity col-flex-centered background-cover"
          style={{
            borderRadius: `0 25px 0 0`,
            backgroundImage: `url("${defaultBackgroundActivity}")`,
          }}
        >
          <div className="activity-level-activity-content">
            {levelConfig.component({
              level: 1,
              data: levelConfig.data,
            })}
          </div>
        </div>
      </PageActivity>
      </div>
    </div>
    </>
  );
}

export default App;
