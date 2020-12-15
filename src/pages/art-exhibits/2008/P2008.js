/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const P2008 = () => (


<div css={css`display: flex; justify-content: center;`}>
  <div css={css`max-width: 780px;`}>
    <div className="right_column_content">
      <div className="event">
        <div className="content_box3">
          <div className="name"><b>CULTURAL CONNECTIONS - Santa Fe</b></div>
          <p>Following in the footsteps of great painters like Bert G. Phillips, Ernest Leonard Blumenschein, Peter Hurd 
            and New Mexico's best-known artist Georgia O'Keeffe, two Macedonian artists were chosen to participate in 
            a month-long artist colony in Santa Fe, New Mexico. Stirred by the lights and shadows of one of the most sought-after places for artists, they could also draw inspiration from the local visual settings that are eerily similar to 
            the visuals of one Macedonian city in particular, the city of Prilep.</p><br />
          <p>To connect culturally is to understand that art is never exclusive, only a part of a world tapestry of cultures that are to connect peoples from the world over. The artists’ paintings will be exhibited in a Santa Fe gallery, as part of larger scale events planned for 2010.
          </p>
        </div>
        <div className="content_box1" style={{textAlign: 'center'}}>               
          <p><img src="http://macedonianarts.org/images/2008_1.jpg" />
            <br /><br /><img src="http://macedonianarts.org/images/2008_3.jpg" />
            <br /><br /><img src="http://macedonianarts.org/images/2008_5.jpg" />
            <br /><br /><img src="http://macedonianarts.org/images/2008_7.jpg" />
            <br /><br /><br /></p>
          <div className="name">
            <b>TRIO INTERART</b><br />June 28, 2008</div>
          <p>The 1794 Meetinghouse, New Salem, Massachusetts
            Emilija Ristevska Stefanovska, flute<br /> 
            Aleksandar Stefanovski, flute<br />
            Tatjana Bozinovska, piano
            <br /><br />
            Produced and funded by<br />
            The North Quabbin Center for the Performing Arts
            <br /><br />
            Silent auction sponsored by<br /> 
            The Macedonian Arts Council
          </p>
        </div>
        <div className="content_box2" style={{textAlign: 'center'}}>
          <p><img src="http://macedonianarts.org/images/2008_2.jpg" />
            <br /><br /><img src="http://macedonianarts.org/images/2008_4.jpg" />
            <br /><br /><img src="http://macedonianarts.org/images/2008_6.jpg" />
            <br /><br /><img src="http://macedonianarts.org/images/2008_8.jpg" />
            <br /><br />
            <video width={380} height={285} controls>
              <source src="http://macedonianarts.org/images/2008Trio.mp4" type="video/mp4" />
              <object data width={320} height={240}>
                <embed width={320} height={240} src="http://macedonianarts.org/images/2008Trio.mp4" />
              </object>
            </video>
          </p></div>
      </div>
    </div>
  </div>
  <div w3-include-html="footer.shtml" /> 
</div>

)

export default P2008