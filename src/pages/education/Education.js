/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import FilterBar from '../../components/navbar/FilterBar';
import Year from '../../components/project/Year';

const Education = () => (
  <>
    <div style={{position: "fixed", top: "4rem", width: "100%"}}>
      <FilterBar selected={"Education"} />
    </div>
    <div style={{height: "4rem"}} />
    <div style={{padding: "1em"}} />
    {/* <div 
      css={css`
        font-size: 24px;
        text-align: center;
        color: white;
        background: #880000;
        padding: 1rem;
        @media (min-width: 768px) {
          padding: 2rem;
          font-size: 36px;
        }
      `}
    >
      The Stoyan Christowe Endowment Fund   
    </div> */}

    <div 
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div>
        <Year width={"325px"} year={"The Stoyan Christowe Endowment Fund"} />

          <img 
            alt="scef"
            height="100%"
            width="100%"
            src="http://macedonianarts.org/images/universities.png" 
          />
        </div>
      </div>      
      <div
        css={css`
          background: #E6E5E1;
          padding: 1rem;
          margin-bottom: 1rem;
          color: #880000;
          max-width: calc(1024px - 2rem);
          margin-top: 1rem;
        `}
      >
        "Let us think of education as the means of developing our greatest abilities because in each of us there is a private hope and dream which fulfilled, can be translated into benefit for everyone"
        <span 
          css={css`
            float: right;
            padding: 1rem;
          `}
        >
          – John F. Kennedy
        </span>
      </div>
      <div 
        css={css`
          margin-top: -1rem;
          max-width: 1024px;
        `}
      >
        <p>To honor the extraordinary life of Stoyan Christowe, and to uphold and keep alive his literary work, in 2010 the Macedonian Arts Council established The <span style={{color:"#880000"}}><i>STOYAN CHRISTOWE SCHOLARSHIP FUND</i></span>.  The first three graduates granted a scholarship earned their BA degrees in classical studies and literature, in  May 2014.  The total contribution by the Arts Council was $12,000. To ensure ongoing, permanent support of students in need of financial aid, the Scholarship will morph into an Endowment Fund.</p>
        <p>The Macedonian Arts Council is in discussions with several institutions that played a major role in the shaping of  Stoyan Christowe’s  writing and political careers,  for the purpose of establishing a permanent endowment fund through which  each year one  economically disadvantaged  high school graduate in Macedonia will be selected to attend college at the <a href="http://www.ukim.edu.mk/" target="new"><b>Sts. Cyril and Methodius University</b></a> in the capitol, Skopje.  The field of studies will be limited to the two subjects that Stoyan Christowe was passionate about and excelled in:  Literature and/or political science. The endowment fund will support four students,  each in a different  academic year  and it will be managed, in perpetuity, by the US based education institution.</p>
      </div>
      <div css={css`
        background: #880000;
        height: 1rem;
        width: 100%;
        padding: 1rem;
        margin: 1rem;
      `} >
      </div>
      <div //b/w pic and yellow div
        css={css`
          display: flex;
          flex-wrap: wrap;
          max-width: 1024px;
          @media (min-width: 665px) {
            flex-wrap: nowrap;
          }
        `}
      >
        <div>
          <div
            css={css`
              display: flex;
              align-items: center;
              @media (min-width 768px) {
                padding: 5rem;

              }
            `}
          >
            <div>
              <img height="100%" width="100%" alt='stoyan' className="profile_pic" src="http://macedonianarts.org/images/stoyan.jpg"/>
            </div>
            <div
              css={css`
                display: flex;
                justify-content: center;
                width: 100%;
              `}
            >
              <div
                css={css`
                  padding: 1rem;
                  text-align: center;
                  font-weight: bold;
                  p { margin: 0.25rem}
                `}
              >
                <p>Stoyan Christowe</p><p>1897-1995</p><p>Statesman, Journalist, Author</p>  
              </div>
            </div>
          </div>
          <div
            css={css`
              padding: 1rem 1rem 1rem 0;
            `}
          >
            Born in Ottoman Macedonia in 1898, Stoyan Christowe immigrated to the United States in 1911, with a burning desire to be an American’s American. He came of age on the Great Plains and went on to be a well-known journalist, critic and lover of the English language. In all, he wrote six books, numerous short stories and articles. He ended his career as a Vermont State Representative and then a Senator. Stoyan Christowe remained passionate about his adopted country throughout his life and is remembered as a staunch defender of the democratic way. His is a quintessential American immigrant story that will be remembered through an endowment fund in support of students of literature and political science, in his native Macedonia.
          </div>
        </div>
        <div 
          css={css`
            background-color: #ffd00c;
            padding: 2rem;
            flex-basis: 4800px;
            font-family: 'Cardo', serif;
            font-size: .9em;
            line-height: 1.25em;
            font-weight: 400;
            color: #494949;
            text-align: justify;          
          `}
        >
          <div>From <i>The Eagle and the Stork</i></div>
          <i>My mind was astir like a beehive ready to swarm….…thoughts and ideas, bits of knowledge facts, rays of imagination hovered and darted in my mind…. If only I could absorb in my own mind, as much knowledge, knowledge of politika, of diplomatia, and the language, the English language…</i><br/><br/>        <i>With my growing knowledge of the language America itself grew before my vision, etched itself out more clearly, and captivated my soul more enduringly.</i><br/><br/>        <i>From the hallways of my memory haiduks and comitadjis stepped down to make room for  Paul Bunyan,  Buffalo Bill, Jesse James General Custer. The new was so much bigger than the old. America was bigger than what she displaced.  The vast plain, even, was not vast enough to contain my desires. There came, then, the hunger and the thirst for an America that I could not bind with a band of steel, or nail down with a spike.</i><br/><br/>        <i>There began to seep through my being, like a strong potion, a vitalizing American serum. My young body became possessed of a passionate yearning to be absorbed by America. I longed, like a youth in love, to lay my head on the breast of America.</i>
        </div>
      </div>
    </div>
  </>
  
  
)
export default Education