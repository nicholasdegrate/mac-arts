import React, {useState} from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';


// staff pictures
import zo from "./staff_images/zo.jpg"
import mike from "./staff_images/Mike.png"
import jasna from "./staff_images/jasna.jpg"
import igor from "./staff_images/IgorToshevski.png"
import arno from "./staff_images/Arno.jpg"
import blagoj from "./staff_images/blagoj.jpg"


const Staff = () => {
    const [isZoFlipped, setIsZoFlipped] = useState(false)
    const [isMikeFlipped, setIsMikeFlipped] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    const [isJaFlipped, setIsJaFlipped] = useState(false)
    const [isIgFlipped, setIsIgFlipped] = useState(false)
    const [isArFlipped, setIsArFlipped] = useState(false)
    const [bio, setBio] = useState(false)
   
    const handleJaFlip = () =>{
        setIsJaFlipped(!isJaFlipped)
        }
    const handleIgFlip = () =>{
        setIsIgFlipped(!isIgFlipped)
        }
    const handleArFlip = () =>{
        setIsArFlipped(!isArFlipped)
        }
    const handleZoFlip = () =>{
        setIsZoFlipped(!isZoFlipped)
        }
    const handleMikeFlip = () =>{
        setIsMikeFlipped(!isMikeFlipped)
        }
    const handleFlip = () =>{
        setIsFlipped(!isFlipped)
        }
   

    const bioHover = (e) => {
        setBio(!bio)
    }

    const bioLeave = (e) => {
        setBio(!bio)
    }

    return (

    <>
    <BordText>Board of Directors</BordText>
    <SRow>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isZoFlipped} flipDirection="vertical">
        <StyledImage url={zo} onClick={handleZoFlip}/>
        <StyledBack onClick={handleZoFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave} >
        <Backtext>
            <p>Zoran Martinovski</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
                Mr. Martinovski is a graduate of the Economics Institute in Boulder, Colorado, and for the past 17 years, he has worked as Country Manager at the International Finance Corporation, in charge of business development for Macedonia and Montenegro. Prior to his position with IFC, Mr. Martinovski worked for several prominent companies in Macedonia, Europe and the United States, among them, Philips Electronics, Lexmark International, CKRA Central Kentucky Research Associates, PEM Consulting, TLC Vienna and Tehnometal-Vardar.Mr. Martinovski has been affiliated with the Macedonian Arts Council since December 2017.
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
        </Col>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isJaFlipped} flipDirection="vertical">
        <StyledImage url={jasna} onClick={handleJaFlip}/>
        <StyledBack onClick={handleJaFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave} >
        <Backtext>
            <p>Jasna Bogdanovska</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
                Jasna Bogdanovska is a photographer, educator, avid traveler and explorer of different cultures. She holds a Master of Fine Arts degree in Fine Art Photography and a Bachelor of Fine Arts degree in Professional Photographic Illustration from Rochester Institute of Photography.As an educator, Jasna has given lectures at various conferences, workshops and universities in the US and in Europe. She is a tenured Assistant Professor of photography at Monroe Community College and is the EYP President at the George Eastman Museum in Rochester, New York.As Creative Director she has worked on advertising campaigns both in the US and Europe and her client list includes Dr. Scholl, T-Mobile and Dove. She is an active member of the International Society for Photographic Education and the American Advertising Federation.In her personal artwork Jasna explores issues of femininity, culture, migration, nostalgia and belonging using various mediums such as photography, installation and video. She exhibits her work internationally in solo as well as group exhibitions.Most recently, Jasna was Artist in Residence at the Gullkistan Center in Iceland. She is the recipient of the 2015 Silver ADDY (American Advertising award) and the 2018 Gold ADDY, and was also awarded the 2015-2016 SUNY Chancellor’s Grant for Innovative Study Abroad Programs.Jasna was the runner up to represent Republic of Macedonia at the 2017 Venice Biennale.She has been affiliated with the Macedonian Arts Council since July 2018.
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
        </Col>
        <Col size={3}>
    <ReactCardFlip isFlipped = {isMikeFlipped} flipDirection="vertical">
        <StyledImage url={mike} onClick={handleMikeFlip}/>
        <StyledBack onClick={handleMikeFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave}>
        <Backtext>
            <p>Mike Eldred</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
            Mike Eldred is the editor of the Deerfield Valley News, located in Stoyan Christowe's adopted hometown of Dover, Vermont.Through the American NGO PAE-REACT, Eldred also works and travels in Central Asia, Eastern Europe, and the Balkans as an election observer for the Organization for Security and Cooperation in Europe Office of Democratic Institutions and Human Rights (OSCE-ODIHR). The volunteer work has taken him as far afield as Kazakhstan's border with China, Moldova and, recently, to Ukraine.During election observation missions in 2013 and 2014, he worked in the Macedonian towns of Tetovo and Bitola and their nearby villages, as well as in the capital city of Skopje. Through his work and off-duty visits to study sites like Tetovo's Arabati Baba Teke, where he met with Bektashi leader Hajji Baba Mondi; ancient city of Heraclea in Bitola; and Skopje's many museums and sites, Eldred developed a deep admiration and interest in Macedonia, its people, and their diverse, vibrant culture and traditions.Mike has been affiliated with the Arts Council since 2007
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
        </Col>
    </SRow>
    <SRow>
    <Col size={3}>
    <ReactCardFlip isFlipped = {isIgFlipped} flipDirection="vertical">
        <StyledImage url={igor} onClick={handleIgFlip}/>
        <StyledBack onClick={handleIgFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave}>
        <Backtext>
            <p>Igor Toshevski</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
            Mr. Toshevski (1963, Skopje) is a visual artist, graphic designer and art director. He graduated printmaking at the Kuvataide Akatemia, Helsinki (1988) and gained his Masters degree in sculpture at the Faculty of Fine Arts, Skopje (2011). He is one of the founding members of several art collectives in Macedonia, including the group Zero (1985-1990) which had a significant role in the occurrence and growth of the alternative art scene in Macedonia. As an individual artist, in his installations and long-term projects, Toshevski explores the relations between conceptual art and its radical position within the social and political context of post-socialist societies. He was also one of the founding members of the Kooperacija initiative (2011-2014), a collaborative effort of several Macedonian artists whose objective was focused on institutional critique, exhibiting critical art outside the framework of the cultural institutions controlled by the authoritative government.As a production designer and art director, Toshevski has worked on several awarded domestic and foreign film productions such as Mirage (2004), Upside Down (2007), Blödsband (2007), Time of the Comet (2008) and others.He joined the board of the Macedonian Arts Council in May 2016.
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
    </Col>
    <Col size={3}>
    <ReactCardFlip isFlipped = {isArFlipped} flipDirection="vertical">
        <StyledImage url={arno} onClick={handleArFlip}/>
        <StyledBack onClick={handleArFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave}>
        <Backtext>
            <p>Blagoj Nacoski</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
            Blagoj Nacoski is a Macedonian tenor opera singer. He began his studies in his native Skopje and continued in Rome with Mirella Parutto, Antonio Boyer and Anna Vandi, and with Raul Gimenez in Barcelona.In February of 2003 he made his operatic debut as Arturo in Donizetti’s Lucia di Lammermoor at the Teatro dell'Opera di Roma with Maestro Daniel Oren. He has since performed as Ferrando in Mozart's Così fan tutte in several opera theatres, including Stuttgart, Zurich and Genova, as Don Ottavio (Don Giovanni) in Miskolc, Cagliari and Genova, as Ernesto (Don Pasquale) in Miskolc, as Almaviva (Il barbiere di Siviglia) in Genova, as Belmonte (Die Entführung aus dem Serail) in Brussels, as Tamino (Die Zauberflöte) in Frankfurt, as Alfredo (La traviata) in Tokyo and as the title role in Mozart's Il sogno di Scipione in Klagenfurt and at the Salzburg Festival, a performance that was produced on DVD by the Deutsche Grammophon label in 2006. In May of 2007 he made his debut in his native country on the stage of the Macedonian Opera and Ballet in Skopje, singing Lindoro in Rossini's Italiana in Algeri.He has received numerous awards, including first place at The International Competition of The Foundation “Boris Christoff,” in Rome, the Award “Pierluigi Damiani” of The Union of Artists of Italy, the Special Award at The Competition “Spiros Argiris” in Sarzana, Italy, and the Silver Medallion of “Accademia Filarmonica di Messina. He was the Winner at the "National Competitions in Opera, Lied and Oratorio Singing of Macedonia" in 1995 and 1997. He divides his time between his native Macedonia and Italy.Blagoj has been affiliated with the Macedonia Arts Council since May 2020.
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
    </Col>
    <Col size={3}>
    <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
        <StyledImage url={blagoj} onClick={handleFlip}/>
        <StyledBack onClick={handleFlip} onMouseEnter={bioHover} onMouseLeave ={bioLeave}> 
        <Backtext>
            <p>Arno Trültzsch</p>
            <Bio style={bio ? {display:"block"}: {display:"none"}} >
            Arno Trültzsch, born in 1985 in former East Germany, is a historian specializing in South Eastern and East Central Europe, with a research focus on both global contemporary history and the history of Real Socialism and its connection to the making of modern international law (with non-aligned Yugoslavia as example). In 2019, he completed his PhD at the Global and European Studies Institute at Leipzig University. He holds a B.A. in cultural studies (British and Southeast European Studies/ English and South Slavic languages) from Halle University and a M.A. in European Studies (focusing on East- and Southeast European contemporary history and EU integration processes). During his studies he also passed research and study semesters in Skopje (Macedonia) in 2009 and in Zagreb (Croatia) in 2011/12.He is an apt reader, commentator and freelance researcher on various topics concerning South-East Europe and the world we live in. Besides his native German, he is fluent in English, French, Serbian/Croatian/Bosnian and the Macedonian language.
            </Bio>
        </Backtext>
        </StyledBack>
    </ReactCardFlip>
    </Col>
    </SRow>
    <Row>
    <AddText>
        Advisory Board
    </AddText>
    </Row>
    <Row>
    <AddList>
    <ul>
        <li>
        Stephen K. Batalden, Arizona State University
        </li>
        <li>
        Risto Nikovski, Former Ambassador
        </li>
        <li>
        Duncan Perry, Ph. D., Dean of Research, Scranton University
        </li>
        <li>
        Andrew Rossos, Ph. D., History, Professor Emeritus, U. of Toronto
        </li>
    </ul>
    </AddList>
    </Row>
    </>
    
    )
  }


  const Backtext = styled.div`
  padding-top:50px;
  text-align: center;
  `
  const AddList = styled.div`
  justify-content:center;
  `
  const SRow = styled.div`
  display:flex;
  justify-content:center;
  margin-left: 20%;
  margin-bottom: 15px;
  `


 const Row = styled.div`
 display:flex;
 justify-content:center;
 `
 const Col = styled.div`
 flex: ${(props)=> props.size};
 
 `

 const BordText = styled.div`
 text-align: center;
 font-size: 4em;
 font-family: 'Roboto Condensed', sans-serif;
 margin-bottom: 2.5%
 `
 const AddText = styled.div`
 text-align: center;
 font-size: 3em;
 font-family: 'Roboto Condensed', sans-serif;
 margin-bottom: 2.5%;
 margin-top: 2.5%;
 `


  const StyledImage = styled.div`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const Bio = styled.p`
cursor: pointer;
width: 400px;
color: #9A3B3C;
`;


const StyledBack = styled.div`
border-radius: 50%;
height: 150px;
width: 150px;
color:white;
background-color: #9A3B3C;
cursor: pointer;
`;




  export default Staff;