import React from 'react';
import Helmet from 'react-helmet';

export default class DespreNoi extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <Helmet
          title="Despre noi - Monitorizare Vot"
          meta={[
            { name: 'description', content: 'Despre noi' },
          ]}
        />
        <div className="page-hero">
          <h1>Află mai multe despre noi</h1>
        </div>
        <h4>Episode 5, Lotus Eaters[edit]</h4>
        <p>Bloom makes his way to Westland Row post office where he receives a love letter from one Martha Clifford addressed to his pseudonym, Henry Flower. He meets an acquaintance, and while they chat, Bloom attempts to ogle a woman wearing stockings, but is prevented by a passing tram. Next, he reads the letter and tears up the envelope in an alley. He wanders into a Catholic church service and muses on theology. The priest has the letters I.N.R.I. or I.H.S. on his back; Molly had told Bloom that they meant I have sinned or I have suffered, and Iron nails ran in.[18] He goes to a chemist where he buys a bar of lemon soap. He then meets another acquaintance, Bantam Lyons, who mistakenly takes him to be offering a racing tip for the horse Throwaway. Finally, Bloom heads towards the baths.</p>
        <h4>Episode 6, Hades[edit</h4>
        <p>The episode begins with Bloom entering a funeral carriage with three others, including Stephens father. They drive to Paddy Dignams funeral, making small talk on the way. The carriage passes both Stephen and Blazes Boylan. There is discussion of various forms of death and burial, and Bloom is preoccupied by thoughts of his dead son, Rudy, and the suicide of his own father. They enter the chapel into the service and subsequently leave with the coffin cart. Bloom sees a mysterious man wearing a mackintosh during the burial. Bloom continues to reflect upon death, but at the end of the episode rejects morbid thoughts to embrace warm fullblooded life.</p>

        <h4>Episode 7, Aeolus[edit]</h4>
        <p>At the office of the Freemans Journal, Bloom attempts to place an ad. Although initially encouraged by the editor, he is unsuccessful. Stephen arrives bringing Deasys letter about foot and mouth disease, but Stephen and Bloom do not meet. Stephen leads the editor and others to a pub,</p>
      </div>
    );
  }
}
