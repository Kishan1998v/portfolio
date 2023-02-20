import { Avatar ,Button,Card} from '@mui/material'
import React from 'react'
import MyTitle from './MyTitle'
import MyPhoto2 from '../Icons/MyPhoto2.jpg';
import './MainFace.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';

export default function MainFace() {
   
  return (
      <div className='MainFace-ui' style={{display:"grid" , gridTemplateColumns:" 1.5fr 2fr"}} >
          <article className='Inner-ui1' >
            <section >
                <article className='firstPart'>
                    <Avatar
                        className='Avtar-ui'
                        alt=""
                        src={MyPhoto2}
                        variant="round"
                        sx={{ width: 130, height: 130 }}
                      />
                      <div>
                          <h1>Kishan Vishwakarma</h1>
                          
                        <h3 id='First-Title'>°<MyTitle />°</h3>
                    </div>
                  </article>
                  <section className='SkillsTag'>
                      <h1>°Skills:</h1>
                      <ul >
                          <li>Python</li>
                          <li>Html</li>
                          <li>Css</li>
                          <li>Javascript</li>
                          <li>React.js</li>
                          <li>Mongodb</li>
                          <li>MySQL</li>
                      </ul>
                  </section>
                  <div style={{height:"2px",width:"100%",borderTop:"3px solid rgba(234, 230, 235, 0.173)"}} />
                  <section className='ContackTag' style={{ background:"rgba(20, 20, 20, 0.60)",paddingLeft:"20px",marginBlock:"20px" ,borderRadius:"9px"}}>
                      <Card style={{ height: "40px",width:"40%" ,padding:"20px", background:"rgba(20, 0, 0, 0)" ,color:'white' ,display:"flex", alignItems:"center"}}><h1>°Let's Work together:</h1></Card> 
                      <div style={{paddingBottom:"20px"}}>
                          <Button style={{ marginRight: "20px" }} className='ContactDetails' variant="" color='inherit' href="https://www.linkedin.com/in/kishan-vishwakarma-8191b521b/" ><LinkedInIcon /></Button>
                          <Button style={{marginRight:"20px"}} className='ContactDetails' variant=""  color='inherit' href="https://twitter.com/kishan_v143"><TwitterIcon/></Button>
                          <Button style={{marginRight:"20px"}} className='ContactDetails' variant=""  color='inherit' href="mailto:kishan.1998.v@gmail.com"><EmailIcon/></Button>
                          <Button style={{marginRight:"20px"}} className='ContactDetails' variant=""  color='inherit' href="https://www.instagram.com/kishan_v143/"><InstagramIcon/></Button>
                          <Button style={{marginRight:"20px"}} className='ContactDetails' variant=""  color='inherit' href="https://github.com/Kishan1998v"><GitHubIcon /></Button>
                          <Button style={{marginRight:"20px"}} className='ContactDetails' variant=""  color='inherit' href="tel:+91958-980-5504"><CallIcon /></Button>
                          
                      </div>
                  </section>
              </section>
             
        </article>
        <article className='Inner-ui2'>
            
        </article>
    </div>
  )
}
