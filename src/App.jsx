import profilePic from './assets/myProfPic.jpeg';
import './App.css';

function App() {
	return (
		<div>
			<h1>Michael Kleemoff</h1>
			<div>
				<p className='intro'>
					I am a passionate full-stack software engineer at the Pursuit
					Fellowship program in Long Island City, NY, who is interested in
					AI/ML/VR/AR potential.
				</p>
			</div>

			<img src={profilePic} alt='profile picture' />

			<div>
				<h3>Here are some of my Skills!</h3>
				<ul>
					<h3>Languages</h3>
					<li>JavaScript</li>
					<li>SQL</li>
					<li>HTML5</li>
					<li>CSS3</li>
				</ul>

				<ol>
					<h3>Libraries</h3>
					<li>React</li>
					<li>PostgreSQL</li>
					<li>Node</li>
					<li>Bootstrap</li>
				</ol>
			</div>

			<div>
				<h3>Hardest Bug So Far</h3>
				<p>
					My hardest bug I ever came across was this infinite loop I
					couldn&#39;t escape.
				</p>
				<p>I came up with a totally sick solution though by doing ...</p>
			</div>

			<h2>Contact Me</h2>
			<div>
				Email me at:
				<a href='mailto:michaelkleemoff@pursuit.org' target='_top'>
					michaelkleemoff@pursuit.org
				</a>
			</div>

			<ul>
				<li>
					<a
						href='https://github.com/MichaelKleemoff'
						target='_blank'
						rel='noreferrer'
					>
						GitHub
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/michael-kleemoff-jr/'
						target='_blank'
						rel='noreferrer'
					>
						LinkedIn
					</a>
				</li>
				<li>
					<a
						href='https://twitter.com/m_kleemoff'
						target='_blank'
						rel='noreferrer'
					>
						Twitter
					</a>
				</li>
			</ul>
		</div>
	);
}

export default App;
