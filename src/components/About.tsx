import Accordion from 'react-bootstrap/Accordion';
import Navbar from "./Navbar";
export default function About() {
  return (
    <>
    < Navbar />
    <div className='about'>
    <Accordion defaultActiveKey="0" className=' container'>
      <Accordion.Item eventKey="0">
        <Accordion.Header >About this game</Accordion.Header>
        <Accordion.Body className='bg-dark text-white'>
          This is a game I used to play with my friends during my high school days. I was first introduced to it by one of my cousins when I was in class six. Ever since then, I found it incredibly engaging and fun to play.<br/>

Interestingly, some of my friends were already familiar with the game. Once I started playing it at school, it quickly gained popularity and soon spread throughout the entire campus. We used to call it "Hand Cricket" back then. However, in this project, I’ve named it "Hand-Score" to give it a unique identity.


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to play ?</Accordion.Header>
       
<Accordion.Body className='bg-info'>
  <ol>
    <li>
      <strong>Toss First:</strong> The game starts with a coin toss. Choose <em>Head</em> or <em>Tail</em>. If you win, you can Bat first.
    </li>
    <li>
      <strong>Batting and Bowling:</strong> The batting player selects a Hand Gesture between <strong>1 and 6</strong>. The bowler (computer or user) also selects a number between <strong>1 and 6</strong>.
    </li>
    <li>
      <strong>Out Rule:</strong> If both numbers match, the batsman is <strong>Out</strong>.
    </li>
    <li>
      <strong>Scoring:</strong> If the numbers don’t match, the batsman's chosen number is added to their score.
    </li>
    <li>
      <strong>Second Inning:</strong> After the first player gets out, the second player bats and tries to beat the first player’s score.
    </li>
    <li>
      <strong>Winning:</strong> The player with the higher score wins. If scores are equal, it’s a <strong>Draw</strong>.
    </li>
  </ol>


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </>
  );
}

