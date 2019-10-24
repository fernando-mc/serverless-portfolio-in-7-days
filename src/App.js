import React, { Component } from "react";
import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Columns,
  Image,
  Text,
  Code,
  Footer,
  // Highlight,
  Quote,
  List,
  Browser,
  // Video
} from "@sambego/diorama";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-jsx.min.js";

import Fernando from "./img/fernando.jpg";
import Bored from "./img/bored.gif";
import Nice from "./img/imnice.gif";
import Trophy from "./img/trophy.gif";
import BootstrapOne from "./img/bootstrap-p1.gif"
import BootstrapTwo from "./img/bootstrap-p2.gif"
import BootstrapThree from "./img/bootstrap-p3.gif"
import BootstrapFour from "./img/bootstrap-p4.gif"
import BootstrapFive from "./img/bootstrap-p5.gif"
import RedeployOne from "./img/redeploy-p1.gif"
import RedeployTwo from "./img/redeploy-p2.gif"
import RedeployThree from "./img/redeploy-p3.gif"
import NoIdeaDog from "./img/noideadog.gif"
import ShowYourWork from "./img/showwork.gif"
import GoogleTyping from "./img/typing-googlesearch.png"
import RedshiftGoogle from "./img/redshift-google.png"
import RedshiftAnalytics from "./img/redshift-ga.png"
import ThankYou from "./img/thankyou.gif"

class App extends Component {
  static footer = <Footer left="@fmc_sea &nbsp;&nbsp;&nbsp;#LibertyJS2019" right="&nbsp;"/>;

  render() {
    return (
      <Deck
        footer={App.footer}
        navigation
        presenterNotes={window.location.search.includes("presenterNotes")}
      >
        <Slide
          notes="Are you in the right place?"
          style={{ backgroundColor: "#FD5750" }}
        >
          <Subtitle
            style={{ color: "black" }}
          >
            Making a Serverless Development Portfolio
          </Subtitle>
          <Subtitle style={{ color: "white" }}>
            In 7 Days or Less
          </Subtitle>
        </Slide>
        <Slide style={{ backgroundColor: "#FD5750" }}>
          <Title>
            Who am I?
          </Title>
        </Slide>
        <Slide style={{ backgroundColor: "#FD5750" }}>
          <Columns>
            <div>
              <Image src={Fernando} alt="A picture of me" full />
            </div>
            <div>
              <Subtitle>Fernando Medina Corey</Subtitle>
              <List>
                <li>Solutions Architect</li>
                <li>Serverless Inc.</li>
                <li>Python <span role="img" aria-label="A pink heart">💖</span>er | JavaScript Novice</li>
                <li>Pluralsight Author</li>
                <li>@fmc_sea</li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide style={{ backgroundColor: "#00ACB5" }}>
          <Title>
            Who are you?
          </Title>
        </Slide>
        <Slide style={{ backgroundColor: "#00ACB5" }}>
          <Subtitle>
            Right now:
          </Subtitle>
          <List>
            <li>Think of a fun fact about yourself</li>
            <li>Stand up (if you're able)</li>
            <li>Find someone(s) nearby</li>
          </List>
        </Slide>
        <Slide style={{ backgroundColor: "#00ACB5" }}>
          <Subtitle>
            Share your:
          </Subtitle>
          <List ordered>
            <li>Name</li>
            <li>Pronouns</li>
            <li>The fun fact</li>
          </List>
          <Subtitle>
            For example...
          </Subtitle>
        </Slide>
        <Slide style={{ backgroundColor: "#FD5750" }}>
          <Quote>
            Hi I'm Fernando! 
            My pronouns are He/Him. 
            I used to teach theatrical stage combat. 
            <span role="img" aria-label="theatrical masks emoji">🎭</span>
            <span role="img" aria-label="crossed swords emoji">⚔️</span>
          </Quote>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes="
            Slides are online | 
            People are not | 
            Mathematically I'm not as interesting as you | 
            Two volunteer introductions"
        >
          <Title>
            Who are we?
          </Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#F29B27" }}
          notes=""
        >
          <Title>Participation Prizes</Title>
          <Subtitle>(Bribes)</Subtitle>
          <List ordered>
            <li>Access to Free Courses on Serverless</li>
            <li>Stickers</li>
            <li>A custom guide on a serverless topic of your choice</li>
          </List>
          <Text><h5>4. <i>Maybe</i> I will teach you some stage combat</h5></Text>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Title>Why a Portfolio?</Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes="I had a customer support jobs but no one thought I could be a dev"
        >
          <Title>Jobs can get boring</Title>
          <Image src={Bored} alt="Neil Patrick Harris spinning in his chair"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes="Getting good interviews was hard with no projects to show for it"
        >
          <Title>Interviewing is hard.</Title>
          <Image src={Nice} alt="Andy from parks and rec saying that he is nice when asked what is great about him"/>
        </Slide>

        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes="Last several jobs were because of my portfolio"
        >
          <Title>Portfolios Help.</Title>
          <Image src={Trophy} alt="Celebrity holding a trophy and waving"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>
            Disclaimers
          </Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <List ordered>
            <li>I assume some development experience</li>
            <li>You can't build something BIG in 7 days </li>
            <li>You will need to learn new things!</li>
            <li>50 lines of Python were used in the making of this talk</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#8AB274" }}
          notes=""
        >
          <Title>What are we learning?</Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#8AB274" }}
          notes=""
        >
          <List ordered>
            <li>Setting up your dev environment (Day 1)</li>
            <li>Finding examples, templates (Day 2)</li>
            <li>Coming up with Your Idea (Day 3)</li>
            <li>Building your project (Day 4-6)</li>
            <li>Showing off your project (Day 7)</li>
          </List>
        </Slide>
        {/* DAY ONE */}
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>Day 1: <br></br> Setting Up</Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>Install Node & npm</Title>
          <Text>
            <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>
          </Text>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>Create an AWS Account</Title>
          <Text>
            <a 
              href="https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/"
            >
              Account Creation Process
            </a>
          </Text>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle>Install the <br></br>Serverless Framework</Subtitle>
          <br></br><br></br>
          <Code
            code={
              "npm install serverless -g"
            }
            lang="bash"
          />
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>Demo Time!</Title>
          <List ordered>
            <li><a href="/30Findi">The demo went well!</a></li>
            <li><a href="/22">The demo failed miserably!</a></li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle>Create a Serverless Project</Subtitle>
          <Image src={BootstrapOne} alt="A gif of the bootstrapping process"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>Setup a Serverless Dashboard Account:</Text>
          <Image src={BootstrapTwo} alt="A gif of the bootstrapping process"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>Deploy a Serverless service:</Text>
          <Image src={BootstrapThree} alt="A gif of deploying a simple service"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>Deploy a Serverless service:</Text>
          <Image src={BootstrapFour} alt="A gif of deploying a simple service"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>Deploy a Serverless service:</Text>
          <Image src={BootstrapFive} alt="A gif of deploying a simple service"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>Add a Public API Endpoint:</Text>
          <Image src={RedeployOne} alt="Editing code to add an endpoint"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Image src={RedeployTwo} alt="Editing code to add an endpoint"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>Test the Public API Endpoint:</Text>
          <Image src={RedeployThree} alt="Editing code to add an endpoint"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle>You've deployed an API!</Subtitle>
        </Slide>
        {/* DAY TWO */}
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Title>Day 2: <br></br> Finding Example Projects</Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <List ordered>
            <li>
              <a 
                href="https://serverless.com/examples/"
              >
                Serverless Examples
              </a>
            </li>
            <li>
              <a
                href="https://serverless.com/blog/"
              >
                Serverless Blog
              </a>
            </li>
            <li>Other Bloggers</li>
            <li>Medium</li>
            <li>Google</li>
            <li>Free Courses!</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Browser url="https://serverless.com/examples/"></Browser>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Browser url="https://serverless.com/blog/"></Browser>
        </Slide>
        
        {/* DAY THREE */}
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Title style={{ color: "white" }}>
            Day 3:
          </Title>
          <Subtitle style={{ color: "white" }}>
            Coming up with Your Idea
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Subtitle style={{ color: "white" }}>
            Sometimes it feels like this:
          </Subtitle>
          <Image src={NoIdeaDog} alt="A dog floating in a spaceship with the text: I have no idea what I'm doing" />
        </Slide>
        
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Subtitle style={{ color: "white" }}>
            To Start:
          </Subtitle>
          <List style={{ color: "white" }} ordered>
            <li>Pick something interesting</li>
            <li>Pick something small</li>
            <li>Use familiar tools (not 2-3 new frameworks!)</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Subtitle style={{ color: "white" }}>
            Jump Starting Ideas:
          </Subtitle>
          <List style={{ color: "white" }} ordered>
            <li>Get some real data</li>
            <li>Find a cool API</li>
            <li>Copy something cool (the idea, not the code)</li>
            <li>Sketch something out</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Subtitle style={{ color: "white" }}>
            Some Data Sources:
          </Subtitle>
          <List style={{ color: "white" }} ordered>
            <li>Data.gov</li>
            <li>Academia</li>
            <li>Generate it yourself!</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Subtitle style={{ color: "white" }}>API References:</Subtitle>
          <List style={{ color: "white" }} ordered>
            <li>
              <a 
                href="https://github.com/public-apis/public-apis"
              >Public APIs
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/chanonroy/cool-apis"
              >
                Fun APIs
              </a>
            </li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Title style={{ color: "white" }}>
            An Example:
          </Title>
          <Subtitle style={{ color: "white" }}>The Color Scheme API</Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <List style={{ color: "white" }} ordered>
            <li>Get some beautiful images</li>
            <li>Process them for dominant colors (using a library)</li>
            <li>Make an API to return different color schemes</li>
            <li>Make a website to help demonstrate the API</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes=""
        >
          <Browser url="https://serverlessfoo.com/projects/chameleon/index.html" />
        </Slide>
        <Slide 
          style={{ backgroundColor: "#6F2D52" }}
          notes="
          I love your ideas. SO... I think I heard you say: 
          Make a site to vote on different songs?
          Great!"
        >
          <Subtitle style={{ color: "white" }}>
            Let's brainstorm ideas
          </Subtitle>
        </Slide>
        
        {/* DAY FOUR */}
        <Slide 
          style={{ backgroundColor: "#8AB274" }}
          notes=""
        >
          <Title>
            Day 4-6:
          </Title>
          <Subtitle>
            Building a Real Project
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#8AB274" }}
          notes=""
        >
          <Subtitle>LibertyJS Jams</Subtitle>
          <List ordered>
            <li>Showcase some songs</li>
            <li>See vote totals on each song</li>
            <li>Sign into the site and vote</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#8AB274" }}
          notes=""
        >
          <Title>DEMO TIME!</Title>
          <List>
            <li>
              <span><a href="/49">The demo went great</a></span>
            </li>
            <li>
              <a href="/48">The demo went&nbsp;
                <span 
                  role="img" 
                  aria-label="A grimacing face emoji">
                     😬
                </span>
              </a>
            </li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#8AB274" }}
          notes=""
        >
          <Subtitle>Honestly? I don't have a backup for this one.</Subtitle>
        </Slide>

        {/* DAY SEVEN */}
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title style={{ color: "#2B2B2D" }}>
            Day 7:
          </Title>
          <Subtitle style={{ color: "#2B2B2D" }}>
            Showing off your project
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Where to show off your project?
          </Subtitle>
          <List style={{ color: "#2B2B2D" }} ordered>
            <li>Your own website with a custom domain <br></br>($15/year on AWS)</li>
            <li>GitHub (free hosting!)</li>
            <li>GitHub Pages (free hosting!)</li>
            <li>Netlify (free hosting!)</li>
          </List>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title style={{ color: "#2B2B2D" }}>
            Wooo! We're done right?
          </Title>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title style={{ color: "#2B2B2D" }}>
            Wrong!
          </Title>
          <Image src={ShowYourWork} alt="A gif of Bart Simpson saying 'and show your work'" />
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            You need to help folks know what you did!
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Here's why.
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Quote style={{ color: "#2B2B2D" }}>
            Hey, we're having errors in AWS Lambda after upgrading to Python 3.7 - Do you know what's going on?
          </Quote>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
        <Code code={
          `
          from typing import Optional, Union, List
          File "/var/task/typing.py", line 1356, in <module>
          class Callable(extra=collections_abc.Callable, 
            metaclass=CallableMeta):
          File "/var/task/typing.py", line 1004, in __new__
          self._abc_registry = extra._abc_registry
          AttributeError: type object 'Callable' has no 
            attribute '_abc_registry'
          `} lang="bash" 
        />
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Uhhhh...? (I don't)
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
           <Browser url="http://letmegooglethat.com/?q=typing+python+issue+upgrading+python+3.7"/>
        </Slide>
        


        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Well look at that.
          </Subtitle>
          <Image src={GoogleTyping} ></Image>
        </Slide>

        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Solve the same issue once.
          </Subtitle>
        </Slide>

        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            Be a reference for yourself.
          </Subtitle>
          <Subtitle style={{ color: "#2B2B2D" }}>
            Be a reference for others.
          </Subtitle>
        </Slide>

        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes="commited and reviewed literally tens of thousands of lines of SQL"
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            2016: I worked as a novice data engineer
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text style={{ color: "#2B2B2D" }}>
            I didn't know how to convert epoch to date in Redshift SQL 
            1496275200 --> 2017-06-01 00:00:00
          </Text>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>So I learned and wrote about it.</Text>
          <Browser url="https://www.fernandomc.com/posts/redshift-epochs-and-timestamps/"/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>It helps when I forget</Text>
          <Image src={RedshiftGoogle}/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Text>It remains one of my most popular posts</Text>
          <br></br>
          <Image src={RedshiftAnalytics}/>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Subtitle style={{ color: "#2B2B2D" }}>
            You are the best person to document what you are learning.
          </Subtitle>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title style={{ color: "#2B2B2D" }}>
            Keep Writing!
          </Title>
          <Subtitle style={{ color: "#2B2B2D" }}>
            For Yourself
          </Subtitle>
          <Text style={{ color: "#2B2B2D" }}>(You'll forget)</Text>
          <br></br>
          <Subtitle style={{ color: "#2B2B2D" }}>
            For Others<br/>
          </Subtitle>
          <Text style={{ color: "#2B2B2D" }}>(You'll help them learn)</Text>
        </Slide>
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>Thank you!</Title>
          <Image src={ThankYou}/>
        </Slide>
        
        <Slide
          notes=""
          style={{ backgroundColor: "#FD5750" }}
        >
          <Subtitle
            style={{ color: "black" }}
          >
            References:
          </Subtitle>
          <List style={{ color: "#2B2B2D" }} ordered>
            <li>This Talk - tiny.cc/liberty7days</li>
            <li>LibertyJS Jams Code - tiny.cc/libertyjams</li>
            <li>Get in touch - fernandomc.com/contact</li>
          </List>
        </Slide>
      </Deck>
    );
  }
}

export default App;
