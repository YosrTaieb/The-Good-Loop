import '../styles/about.css';

const About = () => {
  return (
    <div className="about_container">
      <div className="about_title text-center ">
        <h2>à propos de nous</h2>
        <div className="z-0" id="about_circle"></div>
        <div className="z-5" id="about_transparent"></div>
      </div>
      <br />
      <h3 className="about_title2 text-center text-sm pb-10">
        The Good Loop est une plateforme qui ressence les marque qui oeuvrent{' '}
        <br />
        pour une mode plus éthique et responsable
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia vitae
        ipsa soluta! Ipsam qui saepe ratione iusto accusamus earum, optio at
        sapiente, commodi velit facere. Non sequi beatae nihil! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Soluta, eaque. Assumenda
        perferendis laborum ut hic sit at unde molestiae inventore consequatur
        facere, asperiores officiis maxime? Provident eveniet tenetur repellat
        nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        quasi qui totam aperiam! Perspiciatis delectus iusto tempore vitae, unde
        accusamus voluptates maxime dignissimos libero! Laudantium placeat
        repellendus maiores odio incidunt!
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius a
        excepturi ad rerum dolores reiciendis. Illum eius dolorum magnam eum,
        beatae earum asperiores fuga qui fugiat officiis. Debitis, veniam hic!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore id
        autem itaque repudiandae modi laborum fugit veniam nemo sed! Fugit atque
        ipsum molestiae unde iure hic odio quo error consectetur?
      </p>
      <br />
      <h2 className="about_title text-center">Nos critères</h2>
      <br />
      <h3 className="about_title2 text-center text-sm pb-10">
        Toutes les marques présentées sur The Good Loop sont triées et évaluées
        sur trois critères, sur une échelle de 1 à 5 points :
      </h3>
      <br />
      <table className="table table-auto">
        <tbody>
          <tr>
            <td className="criteria_table">
              <span className="aboutcircle yellow"></span>ENVIRONNEMENT
            </td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur ipsa, nobis vero et nostrum earum ex saepe ipsum
              exercitationem hic consequatur temporibus. Quasi quisquam aliquam
              sed repellat minima id quibusdam.
            </td>
          </tr>
          <tr>
            <td className="criteria_table">
              <span className="aboutcircle green"></span>ANIMAUX
            </td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur ipsa, nobis vero et nostrum earum ex saepe ipsum
              exercitationem hic consequatur temporibus. Quasi quisquam aliquam
              sed repellat minima id quibusdam.
            </td>
          </tr>
          <tr>
            <td className="criteria_table">
              <span className="aboutcircle blue"></span>HUMAINS
            </td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur ipsa, nobis vero et nostrum earum ex saepe ipsum
              exercitationem hic consequatur temporibus. Quasi quisquam aliquam
              sed repellat minima id quibusdam.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
