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
  Highlight,
  Quote,
  List,
  Browser,
  Video
} from "@sambego/diorama";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-jsx.min.js";

import Alert from "./Alert";
import Rainbow from "./Rainbow";

import Fernando from "./img/fernando.jpg";
import Bored from "./img/bored.gif";
import Nice from "./img/imnice.gif";
import Trophy from "./img/trophy.gif";
import BootstrapOne from "./img/bootstrap-p1.gif"
import BootstrapTwo from "./img/bootstrap-p2.gif"

import Riley from "./img/riley.jpg";
import Husky from "./img/husky.jpg";
import Capi from "./img/cap.jpg";
import Orca from "./img/orca.jpg";
import PresenterNotes1 from "./img/presenter-1.png";
import PresenterNotes2 from "./img/presenter-2.png";

import Iceland from "./video/iceland.mp4";

class App extends Component {
  static footer = <Footer left="@fmc_sea &nbsp;&nbsp;&nbsp;#LibertyJS" right="&nbsp;"/>;

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
            <li>Coming up with an idea (Day 3)</li>
            <li>Building your project (Day 4-6)</li>
            <li>Showing off your project (Day 7)</li>
          </List>
        </Slide>
        {/* DAY ONE */}
        <Slide 
          style={{ backgroundColor: "#00ACB5" }}
          notes=""
        >
          <Title>Day 1 - Setting Up.</Title>
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
            <li><a href="">The demo went well!</a></li>
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
          <Subtitle>Create a Serverless Project</Subtitle>
          <Image src={BootstrapTwo} alt="A gif of the bootstrapping process"/>
        </Slide>
  
        <Slide>
          <Browser url="https://dashboard.serverless.com" />
        </Slide>
        
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
          <Title>Day 2 - Finding Examples</Title>
        </Slide>






        
        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
        </Slide>
        

        
        


        <Slide 
          style={{ backgroundColor: "#FD5750" }}
          notes=""
        >
        </Slide>
        <Slide>
          <Text>
            Code: <a href="https://github.com/fernando-mc/serverless-in-7-days/">
            https://github.com/fernando-mc/serverless-in-7-days/
            </a>
          </Text>
        </Slide>
        <Slide notes="Getting started with Diorama is easy, just install the npm package. Once installed you're all set to create that presentation!">
          <Subtitle>Getting started is easy!</Subtitle>
        </Slide>
        <Slide>
          <Code code={"npm install @sambego/diorama"} lang="bash" />
        </Slide>
        <Slide>
          <Subtitle>
            Now create a <Highlight>deck</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Code code={"<Deck>\n  ...\n</Deck>"} lang="jsx" />
        </Slide>
        <Slide>
          <Subtitle>
            Once you've got a deck, create some <Highlight>slides</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Code
            code={"<Deck>\n  <Slide>...</Slide\n  <Slide>...</Slide\n</Deck>"}
            lang="jsx"
          />
        </Slide>
        <Slide>
          <Text>
            The <Highlight>deck</Highlight> component accepts any valid React
            node. By using the <Highlight>Slide</Highlight> component, you make
            sure they display using all available space.
          </Text>
        </Slide>
        <Slide>
          <Subtitle>
            We've got a few frequently used component to use in your slides
          </Subtitle>
        </Slide>
        <Slide>
          <Title>A Title</Title>
        </Slide>
        <Slide>
          <Subtitle>A Subtitle, this is a bit smaller</Subtitle>
        </Slide>
        <Slide>
          {" "}
          st
          <Text>
            And some regular <Highlight>text</Highlight>. Use this if you have a
            bigger block of text you want to display. Using a big block of text
            on your slides might be overwhelming, but sometimes you don't have
            any choice.
          </Text>
        </Slide>
        <Slide notes="You can add pictures to your slides to illustrate your thoughts.">
          <Subtitle>
            A <Highlight>picture</Highlight> is worth a thousand words
          </Subtitle>
        </Slide>
        <Slide>
          <Image src={Riley} alt="A cat looking into the camera" />
        </Slide>
        <Slide>
          <Subtitle>
            Even better when <Highlight>full screen</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Image src={Riley} alt="A cat looking into the camera" full />
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight>Lists</Highlight>? We've got your back!
          </Subtitle>
        </Slide>
        <Slide>
          <List>
            <li>eeny</li>
            <li>meeny</li>
            <li>miny</li>
            <li>moe</li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>
            Why not <Highlight>order</Highlight> them?
          </Subtitle>
        </Slide>
        <Slide>
          <List ordered>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>
            Need more structure? <br />
            Try <Highlight>columns</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            Don't limit yourself to <br />
            <Highlight>just 2 columns</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Columns>
            <div>
              <Image src={Riley} alt="A picture of a cat" full color="#99c794" />
            </div>
            <div>
              <Image
                src={Husky}
                alt="A picture of a husky"
                full
                color="#ec5f67"
              />
            </div>
            <div>
              <Image
                src={Capi}
                alt="A picture of a capybara"
                full
                color="#fac863"
              />
            </div>
            <div>
              <Image
                src={Orca}
                alt="A picture of a killer whale"
                full
                color="#c594c5"
              />
            </div>
          </Columns>
        </Slide>
        <Slide>
          <Subtitle>Hey look, these are moving pictures!</Subtitle>
        </Slide>
        <Slide>
          <Video src={Iceland} mute loop autoplay />
        </Slide>
        <Slide>
          <Subtitle>
            Showing <Highlight>code</Highlight> is easy too!
          </Subtitle>
        </Slide>
        <Slide>
          <Code
            code={
              "const showDelayedAlert = () => {\n  window.setTimeout(() => {\n    alert('This is an alert!');\n  }, 1000);\n}"
            }
          />
        </Slide>
        <Slide>
          <Subtitle>
            You'll definitely will want to preview some {""}
            <Highlight>external links</Highlight> like this!
          </Subtitle>
        </Slide>
        <Slide>
          <Browser url="https://www.fernandomc.com" />
        </Slide>
        <Slide>
          <Subtitle>
            So <Highlight>why</Highlight> make a presentation in{" "}
            <Highlight>React</Highlight>?
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight>Instant shareability</Highlight>. Upload somwhere and
            share.
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight>Works on any device</Highlight>. Open a browser an rock
            it on stage!
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight>Live Demos!</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Alert />
        </Slide>
        <Slide>
          <Subtitle>
            Or even <Highlight>better</Highlight>!
          </Subtitle>
        </Slide>
        <Rainbow />
        <Slide>
          <Subtitle>
            There's <Highlight>no limit</Highlight> to what you can do!
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            You need some <Highlight>notes</Highlight> while presenting?
          </Subtitle>
        </Slide>
        <Slide>
          <Image
            src={PresenterNotes1}
            alt="A preview of the presenter notes window"
            contain
          />
        </Slide>
        <Slide>
          <Image
            src={PresenterNotes2}
            alt="A preview of the presenter notes window"
            contain
          />
        </Slide>
        <Slide>
          <Subtitle>
            Add the <Highlight>presenter</Highlight> property to the{" "}
            <Highlight>Deck</Highlight> component.
          </Subtitle>
        </Slide>
        <Slide>
          <Code code={"<Deck presenterNotes>\n  ...\n</Deck>"} lang="jsx" />
        </Slide>
        <Slide>
          <Text>
            To see the presenter notes in action click{" "}
            <a
              href="https://sambego.github.io/diorama-demo/"
              title="Open presentation with presenter notes"
            >
              here
            </a>
          </Text>
        </Slide>
        <Slide>
          <Subtitle>
            So get started, download the{" "}
            <Highlight>
              <a
                href="https://github.com/sambego/diorama"
                style={{ color: "black" }}
              >
                npm package
              </a>
            </Highlight>
            .
          </Subtitle>
        </Slide>
      </Deck>
    );
  }
}

export default App;
